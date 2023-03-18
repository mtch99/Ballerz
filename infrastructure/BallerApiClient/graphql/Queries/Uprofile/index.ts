import {QueryBodyInterface, Query} from '../index'

export type UprofileQueryFields = {
    id? : boolean;
    username? : boolean;
    name? : boolean;
    attendings? : boolean;
    friends?: UprofileQueryFields
}

const getUprofileQueryHeader = `query GetUprofile($id: ID!) {
    getUprofile(id: $id) { `;

export class GetUprofileQuery extends Query {

    _header: string = getUprofileQueryHeader
    _str: string = this._header;


    constructor(body: GetUprofileQueryBody){
        super(body);
        this.__initStr();
    }

}




export abstract class UprofileQueryBody implements QueryBodyInterface {

    protected _fields: UprofileQueryFields
    protected _str = ``;
    
    constructor(fields: UprofileQueryFields){
        this._fields = fields;
    }

    protected __addFields(): void {
        if(this._fields.id){
            this._str += `id `
        }
        if(this._fields.username){
            this._str += `username `;
        }

        if(this._fields.name){
            this._str += `name `
        }

        if(this._fields.friends){
            this._str += `friends { `
            const listUprofilesQueryBody = new ListUprofilesQueryBody(this._fields.friends).get();
            this._str += `${listUprofilesQueryBody}`;
            this._str += `} `;
        }
    }


    get(): string {
        return this._str;
    }
}


export class GetUprofileQueryBody extends UprofileQueryBody {

    protected _str = ``;

    constructor(fields: UprofileQueryFields){
        super(fields);
        this.__initStr();
    }

    __initStr(): void {
        this.__addFields();
    }
}

export class ListUprofilesQueryBody extends UprofileQueryBody {

    protected _str = `items { `
    constructor(fields: UprofileQueryFields){
        super(fields);
        this.__initStr();
    }

    __initStr(): void {
        this.__addFields();
        this.__closeBrackets();
    }

    __closeBrackets(): void {
        this._str += `} `;
    }

}

