import { ModelFriendshipConnection, UserProfile } from "../types";
import { Presence, Friendship, GroupChatDataWithMembers, GroupChatUserProfileConnectionConnection, GroupChatData, UserProfileData } from "../types";

export const getUserProfile = /* GraphQL */ `
  query GetUserProfile($id: ID!) {
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
  }
`;

export type GetUserProfileQuery = {
  getUserProfile:  UserProfile | null
};


export type ListUserProfileDataQuery = {
  listUserProfiles:  {
    __typename: "ModelUserProfileConnection",
    items:  Array< UserProfileData | null >,
    nextToken: string | null,
  } | null,
};

export type ListUserProfileQuery = {
  listUserProfiles:  {
    __typename: "ModelUserProfileConnection",
    items:  Array< UserProfileData | null >,
    nextToken: string | null,
  } | null,
}

export const listUserProfileData = /* GraphQL */ `
  query ListUserProfiles(
    $filter: ModelUserProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
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




