/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
  subscription OnCreateUserProfile(
    $filter: ModelSubscriptionUserProfileFilterInput
  ) {
    onCreateUserProfile(filter: $filter) {
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
  subscription OnUpdateUserProfile(
    $filter: ModelSubscriptionUserProfileFilterInput
  ) {
    onUpdateUserProfile(filter: $filter) {
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
  subscription OnDeleteUserProfile(
    $filter: ModelSubscriptionUserProfileFilterInput
  ) {
    onDeleteUserProfile(filter: $filter) {
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
  subscription OnCreateFriendship(
    $filter: ModelSubscriptionFriendshipFilterInput
  ) {
    onCreateFriendship(filter: $filter) {
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
  subscription OnUpdateFriendship(
    $filter: ModelSubscriptionFriendshipFilterInput
  ) {
    onUpdateFriendship(filter: $filter) {
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
  subscription OnDeleteFriendship(
    $filter: ModelSubscriptionFriendshipFilterInput
  ) {
    onDeleteFriendship(filter: $filter) {
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
  subscription OnCreateFriendshipRequest(
    $filter: ModelSubscriptionFriendshipRequestFilterInput
  ) {
    onCreateFriendshipRequest(filter: $filter) {
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
  subscription OnUpdateFriendshipRequest(
    $filter: ModelSubscriptionFriendshipRequestFilterInput
  ) {
    onUpdateFriendshipRequest(filter: $filter) {
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
  subscription OnDeleteFriendshipRequest(
    $filter: ModelSubscriptionFriendshipRequestFilterInput
  ) {
    onDeleteFriendshipRequest(filter: $filter) {
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
  subscription OnCreatePlace($filter: ModelSubscriptionPlaceFilterInput) {
    onCreatePlace(filter: $filter) {
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
  subscription OnUpdatePlace($filter: ModelSubscriptionPlaceFilterInput) {
    onUpdatePlace(filter: $filter) {
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
  subscription OnDeletePlace($filter: ModelSubscriptionPlaceFilterInput) {
    onDeletePlace(filter: $filter) {
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
  subscription OnCreateGame($filter: ModelSubscriptionGameFilterInput) {
    onCreateGame(filter: $filter) {
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
  subscription OnUpdateGame($filter: ModelSubscriptionGameFilterInput) {
    onUpdateGame(filter: $filter) {
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
  subscription OnDeleteGame($filter: ModelSubscriptionGameFilterInput) {
    onDeleteGame(filter: $filter) {
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
  subscription OnCreatePresence($filter: ModelSubscriptionPresenceFilterInput) {
    onCreatePresence(filter: $filter) {
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
  subscription OnUpdatePresence($filter: ModelSubscriptionPresenceFilterInput) {
    onUpdatePresence(filter: $filter) {
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
  subscription OnDeletePresence($filter: ModelSubscriptionPresenceFilterInput) {
    onDeletePresence(filter: $filter) {
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
  subscription OnCreateNotification(
    $filter: ModelSubscriptionNotificationFilterInput
  ) {
    onCreateNotification(filter: $filter) {
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
  subscription OnUpdateNotification(
    $filter: ModelSubscriptionNotificationFilterInput
  ) {
    onUpdateNotification(filter: $filter) {
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
  subscription OnDeleteNotification(
    $filter: ModelSubscriptionNotificationFilterInput
  ) {
    onDeleteNotification(filter: $filter) {
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
  subscription OnCreateJoinMeInvitation(
    $filter: ModelSubscriptionJoinMeInvitationFilterInput
  ) {
    onCreateJoinMeInvitation(filter: $filter) {
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
  subscription OnUpdateJoinMeInvitation(
    $filter: ModelSubscriptionJoinMeInvitationFilterInput
  ) {
    onUpdateJoinMeInvitation(filter: $filter) {
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
  subscription OnDeleteJoinMeInvitation(
    $filter: ModelSubscriptionJoinMeInvitationFilterInput
  ) {
    onDeleteJoinMeInvitation(filter: $filter) {
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
