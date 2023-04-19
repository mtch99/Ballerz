import { GraphQLResult } from "@aws-amplify/api";
import { GetUserProfileQueryVariables, ListUserProfilesQueryVariables } from "../API";
import { CreateFriendshipRequestMutation, CreateFriendshipRequestMutationVariables, CreateUserProfileMutation, CreateUserProfileMutationVariables, UpdateFriendshipRequestMutation, UpdateFriendshipRequestMutationVariables } from "./mutations";
import { GetUserProfileQuery, ListUserProfileDataQuery } from "./queries";
export interface IUserProfileClient {
    getUserProfile(input: GetUserProfileQueryVariables): Promise<GetUserProfileQuery | undefined>
    listUserProfileData(input: ListUserProfilesQueryVariables): Promise<ListUserProfileDataQuery | undefined>
    createUserProfile(input: CreateUserProfileMutationVariables): Promise<CreateUserProfileMutation | undefined>
    requestFriendship(input: CreateFriendshipRequestMutationVariables): Promise<CreateFriendshipRequestMutation | undefined>
    acceptFriendship(friendshipRequestID: string): Promise<UpdateFriendshipRequestMutation | undefined>
}

