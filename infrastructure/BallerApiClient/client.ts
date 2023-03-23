// import API, {GraphQLResult, graphqlOperation} 
//   from '@aws-amplify/api';

// import * as APItypes from './API'

// import {listUserDocs, getUserDoc} from './graphql/queries'




// export interface GraphqlClientInterface{

//     request(query: unknown, variables: unknown): Promise<GraphQLResult>;
//     subscribe(query: unknown, variables: unknown): Promise<Observable<unknown>>;
// }


// export class BallerApiClient implements GraphqlClientInterface {

//     async request(query: string, variables?: object): Promise<GraphQLResult> {
//         const result = await API.graphql(graphqlOperation(query, variables)) as GraphQLResult;
//         return result;
//     }

//     async subscribe(query: string, variables?: object): Promise<Observable<unknown>>{
//         const result = await API.graphql(graphqlOperation(query, variables)) as Observable<unknown>;
//         return result;
//     }

// }


// // Static Class that generates query to UserDoc table 
// export class UserDocQueryFactory {

//     static listUserDocsQueryHeader =  `
//         query ListUserDocs(
//           $filter: ModelUserDocFilterInput
//           $limit: Int
//           $nextToken: String
//         ) {
//           listUserDocs(filter: $filter, limit: $limit, nextToken: $nextToken){
//     `;



//     // static genListUserDocsQueryString(returnedFields: UserDocQueryReturnedFieldsInterface): string{
//     //     const queryBody = '';
//     //     return queryBody
//     // }

//     // static genGetUserDocQueryString(returnedFields: UserDocQueryReturnedFieldsInterface): string{
//     //     return ''
//     // }
// }



// export interface RequestFieldsInterface {
//     get(): string
// }

// export class GetUserReturnedFields implements RequestFieldsInterface {

//     // constructor(fields: GetUserReturnedFieldsInterface){
//     //     this.
//     // }
    
//     get(): string {
//         return '';
//     }
    
// }

// export interface QueryBodyInterface{
//     get(): string

// }





// export class GetUserDocQueryBody implements QueryBodyInterface {

//     private _fields: GetUserDocQueryFields
//     private _str = ``;


//     constructor(fields: GetUserDocQueryFields){
//         this._fields = fields
//         this.__initStr();
//     }

//     private __initStr(): void {
//         if(this._fields.id){
//             this._str += `id `
//         }
//         if(this._fields.email){
//             this._str += `email `;
//         }
//         if(this._fields.uProfile){
//             this._str += `uProfile { `
//             const getUprofileBody = new GetUprofileQueryBody(this._fields.uProfile).get();
//             this._str += `${getUprofileBody} `;
//             this._str += `} `;
//         }
//     }

//     get(): string {
//         return this._str;
//     }
// }




// // export interface ListUserDocsReturnedFieldsInterface {
// //     items: GetUserDocReturnedFieldsInterface
// // }




