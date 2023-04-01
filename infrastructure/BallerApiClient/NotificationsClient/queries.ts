import { ModelIDInput } from "./../API";
import { NotificationType } from "../API";




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
        receiverProfileID: string,
        receiverProfile: IUserProfileData | null
        friendshipRequestID: string | null,
        friendshipRequest: {
            __typename: "FriendshipRequest",
            id: string,
            senderProfileID: string,
            receiverProfileID: string
            receiverProfile: IUserProfileData | null
            senderProfile: IUserProfileData | null

        } | null,
        senderProfileID: string | null,
        senderProfile: IUserProfileData | null
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken: string | null,
    } | null,
};


export interface IUserProfileData {
    __typename: "UserProfile",
    id: string;
    name: string
}


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
        receiverProfile
        friendshipRequestID
        friendshipRequest{
            __typename
            id
            senderProfileID
            receiverProfileID
            receiverProfile
            senderProfile

        } | null,
        senderProfileID
        senderProfile
        createdAt
        updatedAt
      }
      nextToken
      }
    }
`;