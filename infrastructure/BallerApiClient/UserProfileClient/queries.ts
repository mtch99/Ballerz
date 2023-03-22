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
        groupChatUserProfileConnectionList {
          items {
            groupChatID
            userProfileID
            userProfile {
                id
                username
            }
            groupChat {
                id
                name
            }
          }
        }
        createdAt
        updatedAt
    }
  }
`;

export type GetUserProfileQuery = {
    getUserProfile:  {
      __typename: "UserProfile",
      id: string,
      email: string,
      username: string,
      friends:  {
        __typename: "ModelFriendshipConnection",
        items: Array<Friendship | null>
        nextToken?: string | null,
      } 
      groupChatUserProfileConnectionList: GroupChatUserProfileConnectionConnection | null,
    //   createdGroupChatList?:  {
    //     __typename: "ModelGroupChatConnection",
    //     items: Array<GroupChatData | null>
    //     nextToken?: string | null,
    //   } | null,
      createdAt: string,
      updatedAt: string,
    } | null
};


export type ListUserProfilesQuery = {
  listUserProfiles:  {
    __typename: "ModelUserProfileConnection",
    items:  Array< UserProfileData | null >,
    nextToken?: string | null,
  } | null,
};

export const listUserProfiles = /* GraphQL */ `
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




