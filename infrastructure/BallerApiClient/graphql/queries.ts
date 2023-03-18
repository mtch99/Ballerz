/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBlog = /* GraphQL */ `
  query GetBlog($id: ID!) {
    getBlog(id: $id) {
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
export const listBlogs = /* GraphQL */ `
  query ListBlogs(
    $filter: ModelBlogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBlogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
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
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        blogID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
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
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        postID
        content
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUserDoc = /* GraphQL */ `
  query GetUserDoc($id: ID!) {
    getUserDoc(id: $id) {
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
export const listUserDocs = /* GraphQL */ `
  query ListUserDocs(
    $filter: ModelUserDocFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserDocs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        profileID
        email
        deviceToken
        phoneNumber
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUprofile = /* GraphQL */ `
  query GetUprofile($id: ID!) {
    getUprofile(id: $id) {
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
export const listUprofiles = /* GraphQL */ `
  query ListUprofiles(
    $filter: ModelUprofileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUprofiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        name
        userDocID
        currentPlaceID
        expoPushToken
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUserPlaceConnection = /* GraphQL */ `
  query GetUserPlaceConnection($id: ID!) {
    getUserPlaceConnection(id: $id) {
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
export const listUserPlaceConnections = /* GraphQL */ `
  query ListUserPlaceConnections(
    $filter: ModelUserPlaceConnectionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserPlaceConnections(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        profileID
        placeID
        arrivingTime
        departureTime
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPlaceTimeSlot = /* GraphQL */ `
  query GetPlaceTimeSlot($id: ID!) {
    getPlaceTimeSlot(id: $id) {
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
export const listPlaceTimeSlots = /* GraphQL */ `
  query ListPlaceTimeSlots(
    $filter: ModelPlaceTimeSlotFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlaceTimeSlots(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        numAttendings
        dateTime
        placeID
        startingHour
        endingHour
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPlaceTimeSlotUserPlaceConnection = /* GraphQL */ `
  query GetPlaceTimeSlotUserPlaceConnection($id: ID!) {
    getPlaceTimeSlotUserPlaceConnection(id: $id) {
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
export const listPlaceTimeSlotUserPlaceConnections = /* GraphQL */ `
  query ListPlaceTimeSlotUserPlaceConnections(
    $filter: ModelPlaceTimeSlotUserPlaceConnectionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlaceTimeSlotUserPlaceConnections(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        attendingID
        profileID
        placeTimeSlotID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPlace = /* GraphQL */ `
  query GetPlace($id: ID!) {
    getPlace(id: $id) {
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
export const listPlaces = /* GraphQL */ `
  query ListPlaces(
    $filter: ModelPlaceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlaces(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        address
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getFriendConnection = /* GraphQL */ `
  query GetFriendConnection($id: ID!) {
    getFriendConnection(id: $id) {
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
export const listFriendConnections = /* GraphQL */ `
  query ListFriendConnections(
    $filter: ModelFriendConnectionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFriendConnections(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userProfileID
        friendProfileID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getNotification = /* GraphQL */ `
  query GetNotification($id: ID!) {
    getNotification(id: $id) {
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
export const listNotifications = /* GraphQL */ `
  query ListNotifications(
    $filter: ModelNotificationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotifications(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      }
      nextToken
    }
  }
`;
export const getPushNotificationsBatch = /* GraphQL */ `
  query GetPushNotificationsBatch($id: ID!) {
    getPushNotificationsBatch(id: $id) {
      id
      payloadsList
      createdAt
      updatedAt
    }
  }
`;
export const listPushNotificationsBatches = /* GraphQL */ `
  query ListPushNotificationsBatches(
    $filter: ModelPushNotificationsBatchFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPushNotificationsBatches(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        payloadsList
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPushNotifications = /* GraphQL */ `
  query GetPushNotifications($id: ID!) {
    getPushNotifications(id: $id) {
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
export const listPushNotifications = /* GraphQL */ `
  query ListPushNotifications(
    $filter: ModelPushNotificationsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPushNotifications(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        body
        userTokens
        data
        type
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
