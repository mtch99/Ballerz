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
        createdAt
        updatedAt
      }
      nextToken
      }
    }
`;