export interface QueryBodyInterface{
    get(): string
}

export abstract class Query {
    
    protected header = ``;
    protected _body: QueryBodyInterface
    protected _str = ``;

    constructor(body: QueryBodyInterface){
        this._body = body;
    }

    get(): string {
        return this._str
    }

    protected __initStr(): void {
        this._str += this._body.get();
        this.__closeBrackets();
        this.__closeBrackets();
    }

    protected __openBracket(){
        this._str += `{ `;
    }

    protected __closeBrackets(){
        this._str += ` }`;
    }

}