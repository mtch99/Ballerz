import { ModelFriendshipFilterInput, PlayMutationInput } from "./../API";
import { presenceType } from "../API";
import { Game } from "../types";

export type DeletePresenceMutation = {
    deletePresence?:  {
        __typename: "Presence",
        id: string,
    } | null,
}


export type PlayMutationVariables = {
  input: PlayMutationInput,
}

export type PlayMutation = {
  playMutation:  Array< Game | null > | null,
};


export const deletePresence_gql = /* GraphQL */ `
  mutation DeletePresence(
    $input: DeletePresenceInput!
    $condition: ModelPresenceConditionInput
  ) {
    deletePresence(input: $input, condition: $condition) {
      id
    }
  }
`;

export const playMutation_gql = /* GraphQL */ `
  mutation PlayMutation($input: PlayMutationInput) {
    playMutation(input: $input) {
      id
      presenceList {
        nextToken
        items{
          id
          userProfile {
            id
            username
            email
            friends{
              items{
                id
                friendProfileID
              }
            }
          }
        }
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