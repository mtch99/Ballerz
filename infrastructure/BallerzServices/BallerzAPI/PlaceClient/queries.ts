import { ModelFriendshipFilterInput, presenceType } from "../API";
import { Game } from "../types";

export const getPlace_gql = /* GraphQL */ `
  query GetPlace(
    $id: ID!
    $frendshipFilter: ModelFriendshipFilterInput
    ) {
    getPlace(id: $id) {
      id
      name
      address
      gameList {
        items{
            id
            presenceList{
                items{
                    id
                    type
                    userProfileID
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
                    createdAt
                    updatedAt
                }
            }
            placeID
            startingDateTime
            endingDateTime
            place{
                id
                name
                address
            }
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


export const listPlaces_gql = /* GraphQL */ `
  query ListPlaces(
    $filter: ModelPlaceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlaces(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        address
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;


export type ListPlacesQuery = {
    listPlaces?:  {
      __typename: "ModelPlaceConnection",
      items:  Array< {
        __typename: "Place",
        id: string,
        name: string,
        address: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
};

export type GetPlaceQueryVariables = {
    id: string,
    frendshipFilter?: ModelFriendshipFilterInput,
}


export type GetPlaceQuery = {
    getPlace:  {
      __typename: "Place",
      id: string,
      name: string,
      address: string,
      gameList:  {
        __typename: "ModelGameConnection",
        items: Array< Game | null>
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
};