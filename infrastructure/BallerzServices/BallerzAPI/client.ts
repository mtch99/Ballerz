import { GraphQLOptions, GRAPHQL_AUTH_MODE } from "@aws-amplify/api-graphql";
import { GraphQLResult, GraphQLQuery } from "@aws-amplify/api";
import { Amplify, API } from "aws-amplify";
import awsmobile from "../aws-exports";


export default class BallerzApiClient {
    
    authMode?: GRAPHQL_AUTH_MODE;
    constructor(config: any = awsmobile, authMode: GRAPHQL_AUTH_MODE = GRAPHQL_AUTH_MODE.API_KEY) {
        this.authMode = authMode;
        Amplify.configure(config)
    }

    /**
     * TODO: Refactor this method to private
     * @param query 
     * @param variables 
     * @param authMode 
     * @returns 
     */
    genGqlOptions(query: string, variables: any, authMode?:GRAPHQL_AUTH_MODE): GraphQLOptions{
        let options: GraphQLOptions = {
            query,
            variables,
            authMode: authMode || this.authMode
        }
        return options
    }


    /**
     * 
     * @param query 
     * @param variables 
     * @param authMode 
     * @returns 
     */
    async query<T>(query: string, variables: any, authMode?:GRAPHQL_AUTH_MODE): Promise<T | undefined>{
        const gqlOptions = this.genGqlOptions(query, variables, authMode)
        const response = await API.graphql<GraphQLQuery<T>>(gqlOptions) as GraphQLResult<T>
        const result = this._handleResponse<T>(response)
        return result
    }
    
    /**
     * TODO: Refactor this method to private
     * @param response 
     * @returns 
     * @throws string error in query
     */
    _handleResponse<T>(response: GraphQLResult<T>): T | undefined{
        try{
            this.throwResponseError(response)
        } catch (error){
            const errorLog = `Error in graphql request: \n ${error}`
            console.error(errorLog)
        }
        return response.data
    }


    /**
     * 
     * @param response 
     * @throws string error if query returns an error
     */
    private throwResponseError(response: GraphQLResult<any>): void {
        if(response.errors){
            if(response.data){
                throw new Error(`errors: ${JSON.stringify(response.errors)} \n returned data: ${JSON.stringify(response.data)}`)
            } else {
                throw new Error(JSON.stringify(response.errors))
            }
        }
    }

}