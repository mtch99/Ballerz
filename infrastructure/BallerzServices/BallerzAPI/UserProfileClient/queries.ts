import { ModelFriendshipFilterInput, ModelUserProfileFilterInput } from "../API";
import { ModelFriendshipConnection, UserProfile } from "../types";
import { Presence, Friendship, GroupChatDataWithMembers, GroupChatUserProfileConnectionConnection, GroupChatData, UserProfileData } from "../types";

export const getUserProfile = /* GraphQL */ `
  query GetUserProfile(
    $id: ID!
  ) {
    getUserProfile(id: $id) {
        id
        email
        username
        friends {
          items {
              id
              friendProfile {
                  id
                  username
              }
          }
        }
        createdAt
        updatedAt
    }
  }
`;


export type GetUserProfileQuery = {
  getUserProfile:  UserProfile | null
};

export type ListUserProfileDataQueryVariables = {
  filter?: ModelUserProfileFilterInput | null,
  frendshipFilter: ModelFriendshipFilterInput | null
  limit?: number | null,
  nextToken?: string | null,
}

export type ListUserProfileDataQuery = {
  listUserProfiles:  {
    __typename: "ModelUserProfileConnection",
    items:  Array< ListUserProfileDataQueryItem | null >,
    nextToken: string | null,
  } | null,
};

export type ListUserProfileQuery = {
  listUserProfiles:  {
    __typename: "ModelUserProfileConnection",
    items:  Array< ListUserProfileDataQueryItem | null >,
    nextToken: string | null,
  } | null,
}

export type ListUserProfileDataQueryItem = {
    __typename: "UserProfile",
    id: string,
    username: string
    email: string
    friends: {
      items: Array<{id: string, frinedProfileID: string}| null>,
    }
}

export const listUserProfileData = /* GraphQL */ `
  query ListUserProfiles(
    $filter: ModelUserProfileFilterInput
    $frendshipFilter: ModelFriendshipFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        email
        friends(filter: $frendshipFilter) {
          items {
            id
            friendProfileID
          }
        }
      }
      nextToken
    }
  }
`;


export const listUserProfiles = /* GraphQL */ `
  query ListUserProfiles(
    $filter: ModelUserProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        email
        username
        friends {
          items {
              id
              friendProfile {
                  id
                  username
              }
          }
        }
        # groupChatUserProfileConnectionList {
        #   items {
        #     groupChatID
        #     userProfileID
        #     userProfile {
        #         id
        #         username
        #     }
        #     groupChat {
        #         id
        #         name
        #     }
        #   }
        # }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;




