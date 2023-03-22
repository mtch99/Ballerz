import { GraphQLResult } from "@aws-amplify/api";
import { GetUserProfileQueryVariables, ListUserProfilesQueryVariables } from "../API";
import { CreateFriendshipRequestMutation, CreateFriendshipRequestMutationVariables, CreateUserProfileMutation, CreateUserProfileMutationVariables, UpdateFriendshipRequestMutation, UpdateFriendshipRequestMutationVariables } from "./mutations";
import { GetUserProfileQuery, ListUserProfilesQuery } from "./queries";
export interface IUserProfileClient {

    getUserProfile(input: GetUserProfileQueryVariables): Promise<GetUserProfileQuery | undefined>
    listUserProfiles(input: ListUserProfilesQueryVariables): Promise<ListUserProfilesQuery | undefined>
    createUserProfile(input: CreateUserProfileMutationVariables): Promise<CreateUserProfileMutation | undefined>
    requestFriendship(input: CreateFriendshipRequestMutationVariables): Promise<CreateFriendshipRequestMutation | undefined>
    acceptFriendship(input: UpdateFriendshipRequestMutationVariables): Promise<UpdateFriendshipRequestMutation | undefined>
}

