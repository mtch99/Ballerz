import {Notification} from "./types";


export type MyNotificationsSubscriptionVariables = {
  filter: {
    receiverProfileID: {
      eq: string
    }
  }
};


export type MyNotificationsSubscription = {
  onCreateNotification?: Notification | null,
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
  subscription OnCreateNotification($receiverProfileID: ID!) {
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


export const onCreateNotification_gql = /* GraphQL */ `
  subscription OnCreateNotification(
    $filter: ModelSubscriptionNotificationFilterInput
  ) {
    onCreateNotification(filter: $filter) {
      id
      type
      senderProfileID
      senderProfile{
        id
        username
      }
      receiverProfileID
      receiverProfile{
        id
        username
      }
      friendshipRequestID
      friendshipRequest{
        id
        status
        senderProfileID
        receiverProfileID
        senderProfile{
          id
          username
        }
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






export function genNotificationFilterByReceiverVariables(receiverProfileID: string): MyNotificationsSubscriptionVariables{
  return {
    filter: {
      receiverProfileID: {
        eq: receiverProfileID
      }
    }
  };
}