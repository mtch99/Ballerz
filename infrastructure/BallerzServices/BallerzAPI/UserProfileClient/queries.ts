import { ModelFriendshipFilterInput, ModelUserProfileFilterInput } from "../API";
import { ModelFriendshipConnection, UserProfile } from "../types";
import { PresenceWithoutGame, Friendship, GroupChatDataWithMembers, GroupChatUserProfileConnectionConnection, GroupChatData, UserProfileData } from "../types";

export const getUserProfile_gql = /* GraphQL */ `
  query GetUserProfile(
    $id: ID!
    $frendshipFilter: ModelFriendshipFilterInput
  ) {
    getUserProfile(id: $id) {
        id
        email
        cityID
        city{
          id
          name
        }
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
        presenceList {
          items {
            id
            type
            placeID
            place{
              id
              name
              address
            }
            userProfileID
            gameID
            game {
              id
              startingDateTime
              endingDateTime
              presenceList{
                items{
                  userProfileID
                  userProfile{
                    id
                    username
                    email
                    friends(filter: $frendshipFilter) {
                      items {
                        id
                        friendProfileID
                      }
                      nextToken
                    }
                  }
                  startingDateTime
                  endingDateTime
                }
              }
            }
            startingDateTime
            endingDateTime
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
    }
  }
`;

export type GetUserProfileQueryVariables = {
  id: string,
  frendshipFilter: ModelFriendshipFilterInput
};

export type ListUserProfilesQueryVariables = {
  filter: ModelUserProfileFilterInput,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserProfileByEmailQuery = {
  listUserProfiles: {    
    items:  Array< UserProfile | null >,
    nextToken: string | null,
  }
}

export type GetUserProfileQuery = {
  getUserProfile:  UserProfile | null
};


export type ListUserProfileDataQueryVariables = {
  filter?: ModelUserProfileFilterInput | null,
  frendshipFilter?: ModelFriendshipFilterInput
  limit?: number | null,
  nextToken?: string | null,
}


export type ListUserProfileDataQuery = {
  listUserProfiles:  {
    __typename: "ModelUserProfileConnection",
    items:  Array< UserProfileData | null >,
    nextToken: string | null,
  } | null,
}



export const listUserProfilesByEmail_gql = /* GraphQL */ `
  query ListUserProfiles(
    $filter: ModelUserProfileFilterInput
    $limit: Int
    $nextToken: String
    $frendshipFilter: ModelFriendshipFilterInput
  ) {
    listUserProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        email
        username
        cityID
        city{
          id
          name
        }
        friends {
          items {
            id
            userProfileID
            friendProfileID
            friendProfile{
              id
              username
              email
              cityID
              city{
                id
                name
              }
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        presenceList {
          items {
            id
            type
            placeID
            place{
              id
              name
              address
            }
            userProfileID
            gameID
            game {
              id
              startingDateTime
              endingDateTime
              presenceList{
                items{
                  userProfileID
                  userProfile{
                    id
                    username
                    email
                    friends(filter: $frendshipFilter) {
                      items {
                        id
                        friendProfileID
                      }
                      nextToken
                    }
                  }
                  startingDateTime
                  endingDateTime
                }
              }
            }
            startingDateTime
            endingDateTime
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;



export const listUserProfileData_gql = /* GraphQL */ `
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
        cityID
        city{
          id
          name
        }
        friends(filter: $frendshipFilter) {
          items {
            id
            friendProfileID
          }
          nextToken
        }
      }
      nextToken
    }
  }
`;