import { PresenceWithGame } from "./../types";
import { isDevice } from "expo-device";
import { Game, PlaceData } from "../types";
import { ModelFriendshipFilterInput, ModelGameFilterInput, ModelPresenceFilterInput, presenceType } from "./../API";

const gameGqlString = /* Graphql */ `
    id
    presenceList (filter: $presenceFilter){
      items {
        id
        placeID
        userProfileID
        userProfile{
          id
          username
        }
        place{
          id
          name
          address
          city{
            id
            name
          }
        }
        startingDateTime
        endingDateTime
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
      city {
        id
        name
      }
    }
    createdAt
    updatedAt
`


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
        city {
          id
          name
        }
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
              city{
                id
                name
              }
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
      ${gameGqlString}
    }
  }
`;

export type GetGameQueryVariables = {
	id: string,
  presenceFilter: ModelPresenceFilterInput
}

export type GetGameQuery = {
	getGame:  Game | null
};

export type GetAllGamesQuery = {
    listGames?:  {
      __typename: "ModelGameConnection",
      items:  Array<Game | null>,
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
    items:  Array< PresenceWithGame | null >,
    nextToken?: string | null,
  } | null,
}


export const listPresences_gql = /* GraphQL */ `
  query ListPresences(
    $filter: ModelPresenceFilterInput
    $limit: Int
    $nextToken: String
    $presenceFilter: ModelPresenceFilterInput
  ) {
    listPresences(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        type
        placeID
        place{
          id
          name
          address
          city{
            id
            name
          }
        }
        userProfileID
        userProfile{
          id
          username
        }
        gameID
        game {
          ${gameGqlString}
        }
        startingDateTime
        endingDateTime
      }
      nextToken
    }
  }
`;

export type GetMyPresencesQueryVariables = {
	filter: ModelPresenceFilterInput
};




