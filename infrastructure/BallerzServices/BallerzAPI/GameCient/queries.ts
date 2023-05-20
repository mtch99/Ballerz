import { Game } from "../types";
import { ModelFriendshipFilterInput, ModelGameFilterInput, ModelPresenceFilterInput, presenceType } from "./../API";
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
      startingDateTime
      endingDateTime
      placeID
      place{
        id
        name
        address
      }
      presenceList{
        items{
            id
            placeID
            userProfileID
            place{
              id
              name
              address
            }
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
      items:  Array<Game>,
      nextToken?: string | null,
    } | null,
};


export type GetAllGamesQueryVariables = {
    filter?: ModelGameFilterInput | null,
    limit?: number | null,
    nextToken?: string | null,
    frendshipFilter: ModelFriendshipFilterInput
}


export type GetMyPresencesQuery = {
  listPresences?:  {
    __typename: "ModelPresenceConnection",
    items:  Array< {
      __typename: "Presence",
      id: string,
      type: presenceType,
      placeID: string,
      userProfileID: string,
      gameID: string,
      startingDateTime: string,
      endingDateTime: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
}


export const listPresences_gql = /* GraphQL */ `
  query ListPresences(
    $filter: ModelPresenceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPresences(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        type
        placeID
        userProfileID
        gameID
        startingDateTime
        endingDateTime
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;

export type GetMyPresencesQueryVariables = {
	filter: ModelPresenceFilterInput
};

