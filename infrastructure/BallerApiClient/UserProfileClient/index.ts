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
import { ListUserProfileQuery } from "./queries";


export default class UserProfileClient implements IUserProfileClient {
    
    constructor(config: any = awsmobile){
        Amplify.configure(config)
    }
    
    async getUserProfile(input: GetUserProfileQueryVariables): Promise<queries.GetUserProfileQuery | undefined> {
        const response = await API.graphql<GraphQLQuery<queries.GetUserProfileQuery>>(
            {
                query: queries.getUserProfile,
                variables: input,
            }
        )

        return this.handleResponse(response)
    }

    async listUserProfileData(input: ListUserProfilesQueryVariables): Promise<queries.ListUserProfileDataQuery | undefined> {
        const response = await API.graphql<GraphQLQuery<queries.ListUserProfileDataQuery>>(
            {
                query: queries.listUserProfileData,
                variables: input,
            }
        )

        return this.handleResponse<queries.ListUserProfileDataQuery>(response)

    }

    async listUserProfiles(input: ListUserProfilesQueryVariables): Promise<queries.ListUserProfileQuery | undefined> {
        const response = await API.graphql<GraphQLQuery<queries.ListUserProfileQuery>>(
            {
                query: queries.listUserProfiles,
                variables: input,
            }
        )

        return this.handleResponse<queries.ListUserProfileQuery>(response)
    }


    async createUserProfile(input: CreateUserProfileMutationVariables): Promise<CreateUserProfileMutation | undefined> {
        const response = await API.graphql<GraphQLQuery<mutations.CreateUserProfileMutation>>(
            {
                query: mutations.createUserProfile,
                variables: input,
            }
        )

        return this.handleResponse<mutations.CreateUserProfileMutation>(response)

    }


    async requestFriendship(input: mutations.CreateFriendshipRequestMutationVariables): Promise<mutations.CreateFriendshipRequestMutation | undefined>{
        const response = await API.graphql<GraphQLQuery<mutations.CreateFriendshipRequestMutation>>(
            {
                query: mutations.createFriendshipRequest,
                variables: input,
            }
        )

        return this.handleResponse<mutations.CreateFriendshipRequestMutation>(response)
    }


    async acceptFriendship(input: mutations.UpdateFriendshipRequestMutationVariables): Promise<mutations.UpdateFriendshipRequestMutation | undefined> {
        const response = await API.graphql<GraphQLQuery<mutations.UpdateFriendshipRequestMutation>>(
            {
                query: mutations.updateFriendshipRequest,
                variables: input,
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