import { FriendshipRequest } from "./../API";
// import {GraphQLResult} from "@aws-amplify/api-graphql"
import {API, Amplify} from "aws-amplify"
import {GraphQLQuery, GraphQLResult} from "@aws-amplify/api"
import * as mutations from "./mutations"
import * as queries from "./queries"
import {GraphQLOptions} from "@aws-amplify/api-graphql"
import { GetUserProfileQueryVariables} from "../API";
import { IUserProfileClient } from "./interface";
import { CreateUserProfileMutation, CreateUserProfileMutationVariables } from "./mutations";
import { ListUserProfileDataQueryVariables, ListUserProfileQuery } from "./queries";
import BallerzApiClient from "../client";
import { awsmobileAPIMock } from "../../aws-exports";


export default class UserProfileClient extends BallerzApiClient implements IUserProfileClient {

    
    async getUserProfile(input: GetUserProfileQueryVariables): Promise<queries.GetUserProfileQuery | undefined> {
        const payload = this.genRequestPayload(queries.getUserProfile, input)
        const response = await API.graphql<GraphQLQuery<queries.GetUserProfileQuery>>(payload)

        return this._handleResponse(response)
    }

    async listUserProfileData(input: ListUserProfileDataQueryVariables): Promise<queries.ListUserProfileDataQuery | undefined> {
        const payload = this.genRequestPayload(queries.listUserProfileData, input)
        const response = await API.graphql<GraphQLQuery<queries.ListUserProfileDataQuery>>(payload)

        return this._handleResponse<queries.ListUserProfileDataQuery>(response)

    }

    async listUserProfiles(input: ListUserProfileDataQueryVariables): Promise<queries.ListUserProfileQuery | undefined> {
        const payload = this.genRequestPayload(queries.listUserProfiles, input)
        const response = await API.graphql<GraphQLQuery<queries.ListUserProfileQuery>>(payload)

        return this._handleResponse<queries.ListUserProfileQuery>(response)
    }


    async createUserProfile(input: CreateUserProfileMutationVariables): Promise<CreateUserProfileMutation | undefined> {
        const payload = this.genRequestPayload(mutations.createUserProfile, input)

        const response = await API.graphql<GraphQLQuery<mutations.CreateUserProfileMutation>>(payload)

        return this._handleResponse<mutations.CreateUserProfileMutation>(response)

    }


    async requestFriendship(input: mutations.CreateFriendshipRequestMutationVariables): Promise<mutations.CreateFriendshipRequestMutation | undefined>{
        const payload = this.genRequestPayload(mutations.createFriendshipRequest, input)
        const response = await API.graphql<GraphQLQuery<mutations.CreateFriendshipRequestMutation>>(payload)

        return this._handleResponse<mutations.CreateFriendshipRequestMutation>(response)
    }


    async acceptFriendship(friendshipRequestID: string): Promise<mutations.UpdateFriendshipRequestMutation | undefined> {
        const variables: mutations.UpdateFriendshipRequestMutationVariables = {
            input: {
                id: friendshipRequestID,
                status: mutations.FriendshipRequestStatus.accepted
            }
        }
        const payload = this.genRequestPayload(mutations.updateFriendshipRequest, variables)
        const response = await API.graphql<GraphQLQuery<mutations.UpdateFriendshipRequestMutation>>(payload)

        return this._handleResponse<mutations.UpdateFriendshipRequestMutation>(response)
    }


}


export class UserProfileClientMock extends UserProfileClient {
    constructor(){
        super(awsmobileAPIMock, "API_KEY")
    }
}