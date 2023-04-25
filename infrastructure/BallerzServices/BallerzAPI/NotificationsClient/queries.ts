import { ModelIDInput, FriendshipRequestStatus } from "../API";
import { NotificationType } from "../API";
import { PlaceData, UserProfileData } from "../types";
import {Notification} from "./types"




export type ModelNotificationFilterByReceiverUserProfileInput = {
    receiverProfileID: ModelIDInput
}

export type FilterNotificationsByUserQueryVariables = {
    filter: ModelNotificationFilterByReceiverUserProfileInput
}

export type ListNotificationsQuery = {
    listNotifications?:  {
      __typename: "ModelNotificationConnection",
      items:  Array<Notification>,
      nextToken: string | null,
    } | null,
};


export const listNotifications_gql = /* GraphQL */ `
  query ListNotifications(
    $filter: ModelNotificationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotifications(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
          game{
            id
            placeID
        	  place{
            	id
              name
              address
        	  }
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


