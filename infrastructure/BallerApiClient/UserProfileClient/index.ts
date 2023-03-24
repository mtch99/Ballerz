import { GetUserQuery, GetUserQueryVariables,ListUserProfilesQueryVariables } from "../API";
// import {GraphQLResult} from "@aws-amplify/api-graphql"
import {API, Amplify} from "aws-amplify"
import {GraphQLQuery, GraphQLResult} from "@aws-amplify/api"
import { awsmobile, awsmobileAPIMock } from "../aws-exports";
import * as mutations from "./mutations"
import * as queries from "./queries"
import {GraphQLOptions} from "@aws-amplify/api-graphql"
import { GetUserProfileQueryVariables} from "../API";
import { IUserProfileClient } from "./interface";
import { CreateUserProfileMutation, CreateUserProfileMutationVariables } from "./mutations";
import { ListUserProfileQuery } from "./queries";


export default class UserProfileClient implements IUserProfileClient {
    
    apiKeyAuthentication: boolean = false;
    constructor(config: any = awsmobile, authMode?: "API_KEY") {
        if(authMode){
            this.apiKeyAuthentication = true;
        }
        Amplify.configure(config)
    }


    private genRequestPayload(query: string, variables: any): GraphQLOptions{
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
    
    async getUserProfile(input: GetUserProfileQueryVariables): Promise<queries.GetUserProfileQuery | undefined> {
        const payload = this.genRequestPayload(queries.getUserProfile, input)
        const response = await API.graphql<GraphQLQuery<queries.GetUserProfileQuery>>(payload)

        return this.handleResponse(response)
    }

    async listUserProfileData(input: ListUserProfilesQueryVariables): Promise<queries.ListUserProfileDataQuery | undefined> {
        const payload = this.genRequestPayload(queries.listUserProfileData, input)
        const response = await API.graphql<GraphQLQuery<queries.ListUserProfileDataQuery>>(payload)

        return this.handleResponse<queries.ListUserProfileDataQuery>(response)

    }

    async listUserProfiles(input: ListUserProfilesQueryVariables): Promise<queries.ListUserProfileQuery | undefined> {
        const payload = this.genRequestPayload(queries.listUserProfiles, input)
        const response = await API.graphql<GraphQLQuery<queries.ListUserProfileQuery>>(payload)

        return this.handleResponse<queries.ListUserProfileQuery>(response)
    }


    async createUserProfile(input: CreateUserProfileMutationVariables): Promise<CreateUserProfileMutation | undefined> {
        const payload = this.genRequestPayload(mutations.createUserProfile, input)

        const response = await API.graphql<GraphQLQuery<mutations.CreateUserProfileMutation>>(payload)

        return this.handleResponse<mutations.CreateUserProfileMutation>(response)

    }


    async requestFriendship(input: mutations.CreateFriendshipRequestMutationVariables): Promise<mutations.CreateFriendshipRequestMutation | undefined>{
        const payload = this.genRequestPayload(mutations.createFriendshipRequest, input)
        const response = await API.graphql<GraphQLQuery<mutations.CreateFriendshipRequestMutation>>(payload)

        return this.handleResponse<mutations.CreateFriendshipRequestMutation>(response)
    }


    async acceptFriendship(input: mutations.UpdateFriendshipRequestMutationVariables): Promise<mutations.UpdateFriendshipRequestMutation | undefined> {
        const payload = this.genRequestPayload(mutations.updateFriendshipRequest, input)
        const response = await API.graphql<GraphQLQuery<mutations.UpdateFriendshipRequestMutation>>(payload)

        return this.handleResponse<mutations.UpdateFriendshipRequestMutation>(response)

    }


    private handleResponse<T>(response: GraphQLResult<T>): T | undefined{
        this.handleResponseError(response)
        if(response.data){
            return response.data
        }
        return response.data
    }


    private handleResponseError(response: any): void {
        if(response.errors){
            if(response.data){
                throw new Error(`errors: ${JSON.stringify(response.errors)} \n data: ${JSON.stringify(response.data)}`)
            } else {
                throw new Error(JSON.stringify(response.errors))
            }
        }
    }
}


export class UserProfileClientMock extends UserProfileClient {
    constructor(){
        super(awsmobileAPIMock, "API_KEY")
    }
}