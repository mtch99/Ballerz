import { ListGamesQueryVariables, ModelFriendshipFilterInput, ModelGameFilterInput } from "./../API";
import { UserProfileData } from "../types";
import { ListUserProfileDataQueryItem } from "../UserProfileClient/queries";



export const getAllGames_gql = /* GraphQL */ `
query ListGames(
  $frendshipFilter: ModelFriendshipFilterInput
  $filter: ModelGameFilterInput
  $limit: Int
  $nextToken: String
) {
  listGames(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      placeID
      place{
        id
        name
        address
      }
      presenceList{
        items{
            userProfile{
                friends(filter: $frendshipFilter){
                    items {
                      id
                      friendProfileID
                    }
                }
            }
            startingDateTime
            endingDateTime
        }
      }
      startingDateTime
      endingDateTime
      createdAt
      updatedAt
    }
    nextToken
  }
}
`;

export type GetAllGamesQuery = {
    listGames?:  {
      __typename: "ModelGameConnection",
      items:  Array<GameDoc>,
      nextToken?: string | null,
    } | null,
};

export type PresenceDoc = {
    userProfile: ListUserProfileDataQueryItem
} | null



export type GameDoc = {
    __typename: "Game",
    id: string,
    placeID: string,
    place: {
        id: string,
        name: string,
        address: string
    } | null,
    presenceList: {
        items: Array<PresenceDoc>
    }
    startingDateTime: string,
    endingDateTime: string,
    createdAt: string,
    updatedAt: string,
} | null

export type GetAllGamesQueryVariables = {
    filter?: ModelGameFilterInput | null,
    limit?: number | null,
    nextToken?: string | null,
    frendshipFilter: ModelFriendshipFilterInput
}
