import { QueryBodyInterface } from '..'
import {UprofileQueryFields, GetUprofileQueryBody} from '../Uprofile'

export type UserDocQueryFields = {
    id?: boolean,
    email?: boolean,
    uProfile?: UprofileQueryFields,
    phoneNumber?: string
}





export abstract class UserDocQueryBody implements QueryBodyInterface {
    
    protected _fields: UserDocQueryFields;
    protected _str = ``;

    constructor(fields: UserDocQueryFields){
        this._fields = fields;
    }

    protected __addFields(): void {
        if(this._fields.id){
            this._str += `id `;
        }
        if(this._fields.email){
            this._str += `email `;
        }

        if(this._fields.phoneNumber){
            this._str += `phoneNumber `;
        }
        if(this._fields.uProfile){
            const getUProfileQueryBody: GetUprofileQueryBody = new GetUprofileQueryBody(this._fields.uProfile);
            this._str += getUProfileQueryBody.get();
        }
    }

    get(): string {
        return this._str
    }
}


export class GetUserDocQueryBody extends UserDocQueryBody {

    constructor(fields: UprofileQueryFields){
        super(fields);
        this.__initStr();
    }

    __initStr(): void {
        this.__addFields();
    }

}

export class ListUserDocsQueryBody extends UserDocQueryBody {

    constructor(fields: UprofileQueryFields){
        super(fields);
        this.__initStr();
    }

    __initStr(): void {
        this.__addFields();
    }

    __closeBrackets(): void {
        this._str += `} `
    }
}