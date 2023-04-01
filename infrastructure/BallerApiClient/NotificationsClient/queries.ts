import { ModelIDInput, FriendshipRequestStatus } from "./../API";
import { NotificationType } from "../API";
import { UserProfileData } from "../types";




export type ModelNotificationFilterByReceiverUserProfileInput = {
    receiverProfileID: ModelIDInput
}

export type FilterNotificationsByUserQueryVariables = {
    filter: ModelNotificationFilterByReceiverUserProfileInput
}

export type ListNotificationsQuery = {
    listNotifications?:  {
      __typename: "ModelNotificationConnection",
      items:  Array< {
        __typename: "Notification",
        id: string,
        type: NotificationType,
        friendshipRequestID: string | null,
        friendshipRequest: {
            __typename: "FriendshipRequest",
            id: string,
            senderProfileID: string,
            receiverProfileID: string
            receiverProfile: UserProfileData | null
            senderProfile: UserProfileData | null
            status: FriendshipRequestStatus

        } | null,
        receiverProfileID: string 
        senderProfileID: string,
        senderProfile: UserProfileData | null
        createdAt: string,
        updatedAt: string,
      } >,
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
        createdAt
        updatedAt
      }
      nextToken
      }
    }
`;