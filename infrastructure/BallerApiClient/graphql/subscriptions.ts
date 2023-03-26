/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onNewMyAttendance = /* GraphQL */ `
  subscription OnNewMyAttendance($profileID: ID!) {
    onNewMyAttendance(profileID: $profileID) {
      id
      profileID
      placeID
      arrivingTime
      departureTime
      placeTimeSoltUserPlaceConnection {
        id
        name
        address
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      uProfile {
        id
        username
        name
        userDocID
        currentPlaceID
        expoPushToken
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
    }
  }
`;
export const onUpdateMyProfile = /* GraphQL */ `
  subscription OnUpdateMyProfile($id: ID!) {
    onUpdateMyProfile(id: $id) {
      id
      username
      name
      userDocID
      currentPlaceID
      expoPushToken
      createdAt
      updatedAt
      userDoc {
        id
        profileID
        email
        deviceToken
        phoneNumber
        createdAt
        updatedAt
      }
      attendings {
        nextToken
      }
      placeTimeSlots {
        nextToken
      }
      currentPlace {
        id
        name
        address
        createdAt
        updatedAt
      }
      friends {
        nextToken
      }
      sentNotifications {
        nextToken
      }
      notifications {
        nextToken
      }
    }
  }
`;
export const onNewMyNotification = /* GraphQL */ `
  subscription OnNewMyNotification($receiverProfileID: ID!) {
    onNewMyNotification(receiverProfileID: $receiverProfileID) {
      id
      placeID
      placeName
      arrivingTime
      departureTime
      senderProfileID
      message
      receiverProfileID
      photo
      createdAt
      type
      status
      placeTimeSlotID
      updatedAt
      userProfile {
        id
        username
        name
        userDocID
        currentPlaceID
        expoPushToken
        createdAt
        updatedAt
      }
      senderProfile {
        id
        username
        name
        userDocID
        currentPlaceID
        expoPushToken
        createdAt
        updatedAt
      }
      placeTimeSlot {
        id
        numAttendings
        dateTime
        placeID
        startingHour
        endingHour
        createdAt
        updatedAt
      }
    }
  }
`;
export const onCreateBlog = /* GraphQL */ `
  subscription OnCreateBlog {
    onCreateBlog {
      id
      name
      posts {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateBlog = /* GraphQL */ `
  subscription OnUpdateBlog {
    onUpdateBlog {
      id
      name
      posts {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteBlog = /* GraphQL */ `
  subscription OnDeleteBlog {
    onDeleteBlog {
      id
      name
      posts {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
      id
      title
      blogID
      blog {
        id
        name
        createdAt
        updatedAt
      }
      comments {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
      id
      title
      blogID
      blog {
        id
        name
        createdAt
        updatedAt
      }
      comments {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
      id
      title
      blogID
      blog {
        id
        name
        createdAt
        updatedAt
      }
      comments {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
      id
      postID
      post {
        id
        title
        blogID
        createdAt
        updatedAt
      }
      content
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
      id
      postID
      post {
        id
        title
        blogID
        createdAt
        updatedAt
      }
      content
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
      id
      postID
      post {
        id
        title
        blogID
        createdAt
        updatedAt
      }
      content
      createdAt
      updatedAt
    }
  }
`;
export const onCreateUserDoc = /* GraphQL */ `
  subscription OnCreateUserDoc {
    onCreateUserDoc {
      id
      profileID
      email
      deviceToken
      phoneNumber
      createdAt
      updatedAt
      uProfile {
        id
        username
        name
        userDocID
        currentPlaceID
        expoPushToken
        createdAt
        updatedAt
      }
    }
  }
`;
export const onUpdateUserDoc = /* GraphQL */ `
  subscription OnUpdateUserDoc {
    onUpdateUserDoc {
      id
      profileID
      email
      deviceToken
      phoneNumber
      createdAt
      updatedAt
      uProfile {
        id
        username
        name
        userDocID
        currentPlaceID
        expoPushToken
        createdAt
        updatedAt
      }
    }
  }
`;
export const onDeleteUserDoc = /* GraphQL */ `
  subscription OnDeleteUserDoc {
    onDeleteUserDoc {
      id
      profileID
      email
      deviceToken
      phoneNumber
      createdAt
      updatedAt
      uProfile {
        id
        username
        name
        userDocID
        currentPlaceID
        expoPushToken
        createdAt
        updatedAt
      }
    }
  }
`;
export const onCreateUprofile = /* GraphQL */ `
  subscription OnCreateUprofile {
    onCreateUprofile {
      id
      username
      name
      userDocID
      currentPlaceID
      expoPushToken
      createdAt
      updatedAt
      userDoc {
        id
        profileID
        email
        deviceToken
        phoneNumber
        createdAt
        updatedAt
      }
      attendings {
        nextToken
      }
      placeTimeSlots {
        nextToken
      }
      currentPlace {
        id
        name
        address
        createdAt
        updatedAt
      }
      friends {
        nextToken
      }
      sentNotifications {
        nextToken
      }
      notifications {
        nextToken
      }
    }
  }
`;
export const onUpdateUprofile = /* GraphQL */ `
  subscription OnUpdateUprofile {
    onUpdateUprofile {
      id
      username
      name
      userDocID
      currentPlaceID
      expoPushToken
      createdAt
      updatedAt
      userDoc {
        id
        profileID
        email
        deviceToken
        phoneNumber
        createdAt
        updatedAt
      }
      attendings {
        nextToken
      }
      placeTimeSlots {
        nextToken
      }
      currentPlace {
        id
        name
        address
        createdAt
        updatedAt
      }
      friends {
        nextToken
      }
      sentNotifications {
        nextToken
      }
      notifications {
        nextToken
      }
    }
  }
`;
export const onDeleteUprofile = /* GraphQL */ `
  subscription OnDeleteUprofile {
    onDeleteUprofile {
      id
      username
      name
      userDocID
      currentPlaceID
      expoPushToken
      createdAt
      updatedAt
      userDoc {
        id
        profileID
        email
        deviceToken
        phoneNumber
        createdAt
        updatedAt
      }
      attendings {
        nextToken
      }
      placeTimeSlots {
        nextToken
      }
      currentPlace {
        id
        name
        address
        createdAt
        updatedAt
      }
      friends {
        nextToken
      }
      sentNotifications {
        nextToken
      }
      notifications {
        nextToken
      }
    }
  }
`;
export const onCreateUserPlaceConnection = /* GraphQL */ `
  subscription OnCreateUserPlaceConnection {
    onCreateUserPlaceConnection {
      id
      profileID
      placeID
      arrivingTime
      departureTime
      placeTimeSoltUserPlaceConnection {
        id
        name
        address
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      uProfile {
        id
        username
        name
        userDocID
        currentPlaceID
        expoPushToken
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
    }
  }
`;
export const onUpdateUserPlaceConnection = /* GraphQL */ `
  subscription OnUpdateUserPlaceConnection {
    onUpdateUserPlaceConnection {
      id
      profileID
      placeID
      arrivingTime
      departureTime
      placeTimeSoltUserPlaceConnection {
        id
        name
        address
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      uProfile {
        id
        username
        name
        userDocID
        currentPlaceID
        expoPushToken
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
    }
  }
`;
export const onDeleteUserPlaceConnection = /* GraphQL */ `
  subscription OnDeleteUserPlaceConnection {
    onDeleteUserPlaceConnection {
      id
      profileID
      placeID
      arrivingTime
      departureTime
      placeTimeSoltUserPlaceConnection {
        id
        name
        address
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      uProfile {
        id
        username
        name
        userDocID
        currentPlaceID
        expoPushToken
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
    }
  }
`;
export const onCreatePlaceTimeSlot = /* GraphQL */ `
  subscription OnCreatePlaceTimeSlot {
    onCreatePlaceTimeSlot {
      id
      numAttendings
      myDate {
        weekDay
        monthDay
        month
        year
      }
      dateTime
      placeID
      startingHour
      endingHour
      createdAt
      updatedAt
      attendings {
        nextToken
      }
      place {
        id
        name
        address
        createdAt
        updatedAt
      }
    }
  }
`;
export const onUpdatePlaceTimeSlot = /* GraphQL */ `
  subscription OnUpdatePlaceTimeSlot {
    onUpdatePlaceTimeSlot {
      id
      numAttendings
      myDate {
        weekDay
        monthDay
        month
        year
      }
      dateTime
      placeID
      startingHour
      endingHour
      createdAt
      updatedAt
      attendings {
        nextToken
      }
      place {
        id
        name
        address
        createdAt
        updatedAt
      }
    }
  }
`;
export const onDeletePlaceTimeSlot = /* GraphQL */ `
  subscription OnDeletePlaceTimeSlot {
    onDeletePlaceTimeSlot {
      id
      numAttendings
      myDate {
        weekDay
        monthDay
        month
        year
      }
      dateTime
      placeID
      startingHour
      endingHour
      createdAt
      updatedAt
      attendings {
        nextToken
      }
      place {
        id
        name
        address
        createdAt
        updatedAt
      }
    }
  }
`;
export const onCreatePlaceTimeSlotUserPlaceConnection = /* GraphQL */ `
  subscription OnCreatePlaceTimeSlotUserPlaceConnection {
    onCreatePlaceTimeSlotUserPlaceConnection {
      id
      attendingID
      profileID
      placeTimeSlotID
      createdAt
      updatedAt
      uProfile {
        id
        username
        name
        userDocID
        currentPlaceID
        expoPushToken
        createdAt
        updatedAt
      }
      attending {
        id
        profileID
        placeID
        arrivingTime
        departureTime
        createdAt
        updatedAt
      }
      timeSlot {
        id
        numAttendings
        dateTime
        placeID
        startingHour
        endingHour
        createdAt
        updatedAt
      }
    }
  }
`;
export const onUpdatePlaceTimeSlotUserPlaceConnection = /* GraphQL */ `
  subscription OnUpdatePlaceTimeSlotUserPlaceConnection {
    onUpdatePlaceTimeSlotUserPlaceConnection {
      id
      attendingID
      profileID
      placeTimeSlotID
      createdAt
      updatedAt
      uProfile {
        id
        username
        name
        userDocID
        currentPlaceID
        expoPushToken
        createdAt
        updatedAt
      }
      attending {
        id
        profileID
        placeID
        arrivingTime
        departureTime
        createdAt
        updatedAt
      }
      timeSlot {
        id
        numAttendings
        dateTime
        placeID
        startingHour
        endingHour
        createdAt
        updatedAt
      }
    }
  }
`;
export const onDeletePlaceTimeSlotUserPlaceConnection = /* GraphQL */ `
  subscription OnDeletePlaceTimeSlotUserPlaceConnection {
    onDeletePlaceTimeSlotUserPlaceConnection {
      id
      attendingID
      profileID
      placeTimeSlotID
      createdAt
      updatedAt
      uProfile {
        id
        username
        name
        userDocID
        currentPlaceID
        expoPushToken
        createdAt
        updatedAt
      }
      attending {
        id
        profileID
        placeID
        arrivingTime
        departureTime
        createdAt
        updatedAt
      }
      timeSlot {
        id
        numAttendings
        dateTime
        placeID
        startingHour
        endingHour
        createdAt
        updatedAt
      }
    }
  }
`;
export const onCreatePlace = /* GraphQL */ `
  subscription OnCreatePlace {
    onCreatePlace {
      id
      name
      address
      coords {
        lon
        lat
      }
      createdAt
      updatedAt
      currentPlayers {
        nextToken
      }
      timeSlots {
        nextToken
      }
    }
  }
`;
export const onUpdatePlace = /* GraphQL */ `
  subscription OnUpdatePlace {
    onUpdatePlace {
      id
      name
      address
      coords {
        lon
        lat
      }
      createdAt
      updatedAt
      currentPlayers {
        nextToken
      }
      timeSlots {
        nextToken
      }
    }
  }
`;
export const onDeletePlace = /* GraphQL */ `
  subscription OnDeletePlace {
    onDeletePlace {
      id
      name
      address
      coords {
        lon
        lat
      }
      createdAt
      updatedAt
      currentPlayers {
        nextToken
      }
      timeSlots {
        nextToken
      }
    }
  }
`;
export const onCreateFriendConnection = /* GraphQL */ `
  subscription OnCreateFriendConnection {
    onCreateFriendConnection {
      id
      userProfileID
      friendProfileID
      createdAt
      updatedAt
      friendProfile {
        id
        username
        name
        userDocID
        currentPlaceID
        expoPushToken
        createdAt
        updatedAt
      }
    }
  }
`;
export const onUpdateFriendConnection = /* GraphQL */ `
  subscription OnUpdateFriendConnection {
    onUpdateFriendConnection {
      id
      userProfileID
      friendProfileID
      createdAt
      updatedAt
      friendProfile {
        id
        username
        name
        userDocID
        currentPlaceID
        expoPushToken
        createdAt
        updatedAt
      }
    }
  }
`;
export const onDeleteFriendConnection = /* GraphQL */ `
  subscription OnDeleteFriendConnection {
    onDeleteFriendConnection {
      id
      userProfileID
      friendProfileID
      createdAt
      updatedAt
      friendProfile {
        id
        username
        name
        userDocID
        currentPlaceID
        expoPushToken
        createdAt
        updatedAt
      }
    }
  }
`;
export const onCreateNotification = /* GraphQL */ `
  subscription OnCreateNotification {
    onCreateNotification {
      id
      placeID
      placeName
      arrivingTime
      departureTime
      senderProfileID
      message
      receiverProfileID
      photo
      createdAt
      type
      status
      placeTimeSlotID
      updatedAt
      userProfile {
        id
        username
        name
        userDocID
        currentPlaceID
        expoPushToken
        createdAt
        updatedAt
      }
      senderProfile {
        id
        username
        name
        userDocID
        currentPlaceID
        expoPushToken
        createdAt
        updatedAt
      }
      placeTimeSlot {
        id
        numAttendings
        dateTime
        placeID
        startingHour
        endingHour
        createdAt
        updatedAt
      }
    }
  }
`;
export const onUpdateNotification = /* GraphQL */ `
  subscription OnUpdateNotification {
    onUpdateNotification {
      id
      placeID
      placeName
      arrivingTime
      departureTime
      senderProfileID
      message
      receiverProfileID
      photo
      createdAt
      type
      status
      placeTimeSlotID
      updatedAt
      userProfile {
        id
        username
        name
        userDocID
        currentPlaceID
        expoPushToken
        createdAt
        updatedAt
      }
      senderProfile {
        id
        username
        name
        userDocID
        currentPlaceID
        expoPushToken
        createdAt
        updatedAt
      }
      placeTimeSlot {
        id
        numAttendings
        dateTime
        placeID
        startingHour
        endingHour
        createdAt
        updatedAt
      }
    }
  }
`;
export const onDeleteNotification = /* GraphQL */ `
  subscription OnDeleteNotification {
    onDeleteNotification {
      id
      placeID
      placeName
      arrivingTime
      departureTime
      senderProfileID
      message
      receiverProfileID
      photo
      createdAt
      type
      status
      placeTimeSlotID
      updatedAt
      userProfile {
        id
        username
        name
        userDocID
        currentPlaceID
        expoPushToken
        createdAt
        updatedAt
      }
      senderProfile {
        id
        username
        name
        userDocID
        currentPlaceID
        expoPushToken
        createdAt
        updatedAt
      }
      placeTimeSlot {
        id
        numAttendings
        dateTime
        placeID
        startingHour
        endingHour
        createdAt
        updatedAt
      }
    }
  }
`;
export const onCreatePushNotificationsBatch = /* GraphQL */ `
  subscription OnCreatePushNotificationsBatch {
    onCreatePushNotificationsBatch {
      id
      payloadsList
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePushNotificationsBatch = /* GraphQL */ `
  subscription OnUpdatePushNotificationsBatch {
    onUpdatePushNotificationsBatch {
      id
      payloadsList
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePushNotificationsBatch = /* GraphQL */ `
  subscription OnDeletePushNotificationsBatch {
    onDeletePushNotificationsBatch {
      id
      payloadsList
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePushNotifications = /* GraphQL */ `
  subscription OnCreatePushNotifications {
    onCreatePushNotifications {
      id
      body
      userTokens
      data
      type
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePushNotifications = /* GraphQL */ `
  subscription OnUpdatePushNotifications {
    onUpdatePushNotifications {
      id
      body
      userTokens
      data
      type
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePushNotifications = /* GraphQL */ `
  subscription OnDeletePushNotifications {
    onDeletePushNotifications {
      id
      body
      userTokens
      data
      type
      createdAt
      updatedAt
    }
  }
`;
