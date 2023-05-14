import { ModelIDInput, FriendshipRequestStatus, NotificationsByReceiverProfileIDAndCreatedAtQueryVariables, ModelFriendshipFilterInput } from "../API";
import { NotificationType } from "../API";
import { PlaceData, UserProfileData } from "../types";
import {Notification} from "./types"




export type ModelNotificationFilterByReceiverUserProfileInput = {
    receiverProfileID: ModelIDInput
}

export type NotificationsByReceiverQueryVariables = NotificationsByReceiverProfileIDAndCreatedAtQueryVariables & {frendshipFilter: ModelFriendshipFilterInput}


export type FilterNotificationsByUserQueryVariables = {
  filter: ModelNotificationFilterByReceiverUserProfileInput
}

export type listNotificationsByReceiverQuery = {
  notificationsByReceiverProfileIDAndCreatedAt?:  {
      __typename: "ModelNotificationConnection",
      items:  Array<Notification>,
      nextToken: string | null,
    } | null,
};


export const listNotificationsByReceiver_gql = /* GraphQL */ `
  query NotificationsByReceiverProfileIDAndCreatedAt(
    $receiverProfileID: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelNotificationFilterInput
    $frendshipFilter: ModelFriendshipFilterInput
    $limit: Int
    $nextToken: String
  ) {
    notificationsByReceiverProfileIDAndCreatedAt(
      receiverProfileID: $receiverProfileID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        type
        receiverProfileID
        friendshipRequestID
        friendshipRequest{
            __typename
            id
            senderProfileID
            receiverProfileID
            receiverProfile{
                id
                username
            }
            senderProfile{
                id
                username
            }
            status
        },
        senderProfileID
        senderProfile{
            id
            username
        }
        presenceID
        presence{
          __typename
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
        	place{
          	id
            name
            address
        	}
          game{
            id
            placeID
            startingDateTime
            endingDateTime
          }
          startingDateTime
          endingDateTime
        }
        createdAt
        updatedAt
      }
      nextToken
      }
    }
`;


