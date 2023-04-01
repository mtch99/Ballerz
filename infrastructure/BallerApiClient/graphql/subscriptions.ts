/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      email
      phoneNumber
      profileID
      profile {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      email
      phoneNumber
      profileID
      profile {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      email
      phoneNumber
      profileID
      profile {
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
export const onCreateUserProfile = /* GraphQL */ `
  subscription OnCreateUserProfile {
    onCreateUserProfile {
      id
      email
      username
      user {
        id
        email
        phoneNumber
        profileID
        createdAt
        updatedAt
      }
      friends {
        nextToken
      }
      presenceList {
        nextToken
      }
      createdAt
      updatedAt
      userProfileUserId
    }
  }
`;
export const onUpdateUserProfile = /* GraphQL */ `
  subscription OnUpdateUserProfile {
    onUpdateUserProfile {
      id
      email
      username
      user {
        id
        email
        phoneNumber
        profileID
        createdAt
        updatedAt
      }
      friends {
        nextToken
      }
      presenceList {
        nextToken
      }
      createdAt
      updatedAt
      userProfileUserId
    }
  }
`;
export const onDeleteUserProfile = /* GraphQL */ `
  subscription OnDeleteUserProfile {
    onDeleteUserProfile {
      id
      email
      username
      user {
        id
        email
        phoneNumber
        profileID
        createdAt
        updatedAt
      }
      friends {
        nextToken
      }
      presenceList {
        nextToken
      }
      createdAt
      updatedAt
      userProfileUserId
    }
  }
`;
export const onCreateFriendship = /* GraphQL */ `
  subscription OnCreateFriendship {
    onCreateFriendship {
      id
      userProfileID
      friendProfileID
      friendProfile {
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
export const onUpdateFriendship = /* GraphQL */ `
  subscription OnUpdateFriendship {
    onUpdateFriendship {
      id
      userProfileID
      friendProfileID
      friendProfile {
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
export const onDeleteFriendship = /* GraphQL */ `
  subscription OnDeleteFriendship {
    onDeleteFriendship {
      id
      userProfileID
      friendProfileID
      friendProfile {
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
export const onCreateFriendshipRequest = /* GraphQL */ `
  subscription OnCreateFriendshipRequest {
    onCreateFriendshipRequest {
      id
      status
      senderProfileID
      receiverProfileID
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
export const onUpdateFriendshipRequest = /* GraphQL */ `
  subscription OnUpdateFriendshipRequest {
    onUpdateFriendshipRequest {
      id
      status
      senderProfileID
      receiverProfileID
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
export const onDeleteFriendshipRequest = /* GraphQL */ `
  subscription OnDeleteFriendshipRequest {
    onDeleteFriendshipRequest {
      id
      status
      senderProfileID
      receiverProfileID
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
export const onCreatePlace = /* GraphQL */ `
  subscription OnCreatePlace {
    onCreatePlace {
      id
      name
      address
      gameList {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePlace = /* GraphQL */ `
  subscription OnUpdatePlace {
    onUpdatePlace {
      id
      name
      address
      gameList {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePlace = /* GraphQL */ `
  subscription OnDeletePlace {
    onDeletePlace {
      id
      name
      address
      gameList {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateGame = /* GraphQL */ `
  subscription OnCreateGame {
    onCreateGame {
      id
      presenceList {
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
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateGame = /* GraphQL */ `
  subscription OnUpdateGame {
    onUpdateGame {
      id
      presenceList {
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
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteGame = /* GraphQL */ `
  subscription OnDeleteGame {
    onDeleteGame {
      id
      presenceList {
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
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePresence = /* GraphQL */ `
  subscription OnCreatePresence {
    onCreatePresence {
      id
      type
      placeID
      userProfileID
      gameID
      game {
        id
        placeID
        startingDateTime
        endingDateTime
        createdAt
        updatedAt
      }
      place {
        id
        name
        address
        createdAt
        updatedAt
      }
      userProfile {
        id
        email
        username
        createdAt
        updatedAt
        userProfileUserId
      }
      startingDateTime
      endingDateTime
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePresence = /* GraphQL */ `
  subscription OnUpdatePresence {
    onUpdatePresence {
      id
      type
      placeID
      userProfileID
      gameID
      game {
        id
        placeID
        startingDateTime
        endingDateTime
        createdAt
        updatedAt
      }
      place {
        id
        name
        address
        createdAt
        updatedAt
      }
      userProfile {
        id
        email
        username
        createdAt
        updatedAt
        userProfileUserId
      }
      startingDateTime
      endingDateTime
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePresence = /* GraphQL */ `
  subscription OnDeletePresence {
    onDeletePresence {
      id
      type
      placeID
      userProfileID
      gameID
      game {
        id
        placeID
        startingDateTime
        endingDateTime
        createdAt
        updatedAt
      }
      place {
        id
        name
        address
        createdAt
        updatedAt
      }
      userProfile {
        id
        email
        username
        createdAt
        updatedAt
        userProfileUserId
      }
      startingDateTime
      endingDateTime
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
export const onUpdateNotification = /* GraphQL */ `
  subscription OnUpdateNotification {
    onUpdateNotification {
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
export const onDeleteNotification = /* GraphQL */ `
  subscription OnDeleteNotification {
    onDeleteNotification {
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
export const onCreateJoinMeInvitation = /* GraphQL */ `
  subscription OnCreateJoinMeInvitation {
    onCreateJoinMeInvitation {
      id
      type
      status
      receiverProfileID
      senderProfileID
      gameID
      receiverProfile {
        id
        email
        username
        createdAt
        updatedAt
        userProfileUserId
      }
      senderProfile {
        id
        email
        username
        createdAt
        updatedAt
        userProfileUserId
      }
      game {
        id
        placeID
        startingDateTime
        endingDateTime
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateJoinMeInvitation = /* GraphQL */ `
  subscription OnUpdateJoinMeInvitation {
    onUpdateJoinMeInvitation {
      id
      type
      status
      receiverProfileID
      senderProfileID
      gameID
      receiverProfile {
        id
        email
        username
        createdAt
        updatedAt
        userProfileUserId
      }
      senderProfile {
        id
        email
        username
        createdAt
        updatedAt
        userProfileUserId
      }
      game {
        id
        placeID
        startingDateTime
        endingDateTime
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteJoinMeInvitation = /* GraphQL */ `
  subscription OnDeleteJoinMeInvitation {
    onDeleteJoinMeInvitation {
      id
      type
      status
      receiverProfileID
      senderProfileID
      gameID
      receiverProfile {
        id
        email
        username
        createdAt
        updatedAt
        userProfileUserId
      }
      senderProfile {
        id
        email
        username
        createdAt
        updatedAt
        userProfileUserId
      }
      game {
        id
        placeID
        startingDateTime
        endingDateTime
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateNotificationByReceiver = /* GraphQL */ `
  subscription OnCreateNotificationByReceiver($receiverProfileID: ID!) {
    onCreateNotificationByReceiver(receiverProfileID: $receiverProfileID) {
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
