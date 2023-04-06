import { GraphQLOptions } from "@aws-amplify/api-graphql";
import { GraphQLResult } from "@aws-amplify/api";
import { Amplify } from "aws-amplify";
import awsmobile, {awsmobileAPIMock } from "./aws-exports";

export default class BallerzApiClient {
    
    apiKeyAuthentication: boolean = false;
    constructor(config: any = awsmobile, authMode?: "API_KEY") {
        if(authMode){
            this.apiKeyAuthentication = true;
        }
        Amplify.configure(config)
    }

    genRequestPayload(query: string, variables: any): GraphQLOptions{
        let options: GraphQLOptions = {
            query,
            variables
        }
        if(this.apiKeyAuthentication){
            options = {
                ...options,
                authMode: "API_KEY"
            }
        }
        return options
    }
    
    _handleResponse<T>(response: GraphQLResult<T>): T | undefined{
        this._handleResponseError(response)
        if(response.data){
            return response.data
        }
        return response.data
    }


    _handleResponseError(response: any): void {
        if(response.errors){
            if(response.data){
                throw new Error(`errors: ${JSON.stringify(response.errors)} \n data: ${JSON.stringify(response.data)}`)
            } else {
                throw new Error(JSON.stringify(response.errors))
            }
        }
    }


}