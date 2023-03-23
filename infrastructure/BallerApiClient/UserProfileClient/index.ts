import { GetUserQuery, GetUserQueryVariables,ListUserProfilesQueryVariables } from "../API";
// import {GraphQLResult} from "@aws-amplify/api-graphql"
import {API, Amplify} from "aws-amplify"
import {GraphQLQuery, GraphQLResult} from "@aws-amplify/api"
import { awsmobile, awsmobileAPIMock } from "../aws-exports";
import * as mutations from "./mutations"
import * as queries from "./queries"

import { GetUserProfileQueryVariables} from "../API";
import { IUserProfileClient } from "./interface";
import { CreateUserProfileMutation, CreateUserProfileMutationVariables } from "./mutations";


export default class UserProfileClient implements IUserProfileClient {
    
    constructor(config: any = awsmobile){
        Amplify.configure(config)
    }
    
    async getUserProfile(input: GetUserProfileQueryVariables): Promise<queries.GetUserProfileQuery | undefined> {
        const response = await API.graphql<GraphQLQuery<queries.GetUserProfileQuery>>(
            {
                query: queries.getUserProfile,
                variables: input,
                authMode: "API_KEY"
            }
        )

        return this.handleResponse(response)
    }

    async listUserProfiles(input: ListUserProfilesQueryVariables): Promise<queries.ListUserProfilesQuery | undefined> {
        const response = await API.graphql<GraphQLQuery<queries.ListUserProfilesQuery>>(
            {
                query: queries.listUserProfiles,
                variables: input,
                authMode: "API_KEY"
            }
        )

        return this.handleResponse<queries.ListUserProfilesQuery>(response)

    }


    async createUserProfile(input: CreateUserProfileMutationVariables): Promise<CreateUserProfileMutation | undefined> {
        const response = await API.graphql<GraphQLQuery<mutations.CreateUserProfileMutation>>(
            {
                query: mutations.createUserProfile,
                variables: input,
                authMode: "API_KEY"
            }
        )

        return this.handleResponse<mutations.CreateUserProfileMutation>(response)

    }


    async requestFriendship(input: mutations.CreateFriendshipRequestMutationVariables): Promise<mutations.CreateFriendshipRequestMutation | undefined>{
        const response = await API.graphql<GraphQLQuery<mutations.CreateFriendshipRequestMutation>>(
            {
                query: mutations.createFriendshipRequest,
                variables: input,
                authMode: "API_KEY"
            }
        )

        return this.handleResponse<mutations.CreateFriendshipRequestMutation>(response)
    }


    async acceptFriendship(input: mutations.UpdateFriendshipRequestMutationVariables): Promise<mutations.UpdateFriendshipRequestMutation | undefined> {
        const response = await API.graphql<GraphQLQuery<mutations.UpdateFriendshipRequestMutation>>(
            {
                query: mutations.updateFriendshipRequest,
                variables: input,
                authMode: "API_KEY"
            }
        )

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
        super(awsmobileAPIMock)
    }
}