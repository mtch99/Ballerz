import { UserProfileData } from "../types";
import { FriendshipRequestStatus, NotificationType } from "../API";

export type MyNotificationsSubscription = {
    onCreateNotificationByReceiver?:  {
      __typename: "Notification",
      id: string,
      type: NotificationType,
    } | null,
};


export type MyNotificationsSubscriptionVariables = {
  filter: {
    receiverProfileID: {
      eq: string
    }
  }
};


export const myNotificationsSubscription_gql = /* GraphQL */ `
  subscription OnCreateNotificationByReceiver($receiverProfileID: ID!) {
    onCreateNotificationByReceiver(receiverProfileID: $receiverProfileID) {
      id
      type
    }
  }
`;

export const onCreateNotificationByReceiver = /* GraphQL */ `
  subscription OnCreateNotificationByReceiver($receiverProfileID: ID!) {
    onCreateNotification(receiverProfileID: $receiverProfileID) {
      id
      type
      senderProfileID
      senderProfile {
        id
        username
      }      
      receiverProfileID
      receiverProfile {
        id
        username
      }
      friendshipRequestID
      friendshipRequest {
        id
        status
        senderProfileID
        senderProfile {
          id
          username
        }
        receiverProfileID
        receiverProfile{
          id
          username
        }
      }
      createdAt
      updatedAt
    }
  }
`;


export const onCreateNotification = /* GraphQL */ `
  subscription OnCreateNotification {
    onCreateNotification {
      id
      type
      receiverProfileID
      friendshipRequestID
      friendshipRequest {
        id
        status
        senderProfileID
        receiverProfileID
        createdAt
        updatedAt
      }
      presenceID
      senderProfileID
      senderProfile {
        id
        email
        username
        createdAt
        updatedAt
        userProfileUserId
      }
      receiverProfile {
        id
        email
        username
        createdAt
        updatedAt
        userProfileUserId
      }
      createdAt
      updatedAt
    }
  }
`;