import { ListGamesQueryVariables, ModelFriendshipFilterInput, ModelGameFilterInput, ModelPresenceFilterInput } from "./../API";
import { UserProfileData } from "../types";
import { ListUserProfileDataQueryItem } from "../UserProfileClient/queries";
import { GameDoc } from "./types";


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
            id
            userProfile{
              id
              username
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

export const getGame_gql = /* GraphQL */ `
  query GetGame($id: ID!, $presenceFilter: ModelPresenceFilterInput) {
    getGame(id: $id) {
      id
      presenceList (filter: $presenceFilter){
		items {
			id
		}
        nextToken
      }
      placeID
      startingDateTime
      endingDateTime
      place {
        id
        name
        address
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;

export type GetGameQueryVariables = {
	id: string,
    presenceFilter: ModelPresenceFilterInput
}

export type GetGameQuery = {
	getGame:  {
	  __typename: "Game",
	  id: string,
	  presenceList:  {
		__typename: "ModelPresenceConnection",
		items: Array<{id: string}>
		nextToken?: string | null,
	  } | null,
	  placeID: string,
	  startingDateTime: string,
	  endingDateTime: string,
	  place?:  {
		__typename: "Place",
		id: string,
		name: string,
		address: string,
		createdAt: string,
		updatedAt: string,
	  } | null,
	  createdAt: string,
	  updatedAt: string,
	} | null,
  };





export type GetAllGamesQuery = {
    listGames?:  {
      __typename: "ModelGameConnection",
      items:  Array<GameDoc>,
      nextToken?: string | null,
    } | null,
};




export type GetAllGamesQueryVariables = {
    filter?: ModelGameFilterInput | null,
    limit?: number | null,
    nextToken?: string | null,
    frendshipFilter: ModelFriendshipFilterInput
}
