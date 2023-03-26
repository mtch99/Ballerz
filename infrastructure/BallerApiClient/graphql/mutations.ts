/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const deleteAttendance = /* GraphQL */ `
  mutation DeleteAttendance($id: ID!) {
    deleteAttendance(id: $id)
  }
`;
export const createBlog = /* GraphQL */ `
  mutation CreateBlog(
    $input: CreateBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    createBlog(input: $input, condition: $condition) {
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
export const updateBlog = /* GraphQL */ `
  mutation UpdateBlog(
    $input: UpdateBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    updateBlog(input: $input, condition: $condition) {
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
export const deleteBlog = /* GraphQL */ `
  mutation DeleteBlog(
    $input: DeleteBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    deleteBlog(input: $input, condition: $condition) {
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
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
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
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
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
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
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
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
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
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
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
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
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
export const createUserDoc = /* GraphQL */ `
  mutation CreateUserDoc(
    $input: CreateUserDocInput!
    $condition: ModelUserDocConditionInput
  ) {
    createUserDoc(input: $input, condition: $condition) {
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
export const updateUserDoc = /* GraphQL */ `
  mutation UpdateUserDoc(
    $input: UpdateUserDocInput!
    $condition: ModelUserDocConditionInput
  ) {
    updateUserDoc(input: $input, condition: $condition) {
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
export const deleteUserDoc = /* GraphQL */ `
  mutation DeleteUserDoc(
    $input: DeleteUserDocInput!
    $condition: ModelUserDocConditionInput
  ) {
    deleteUserDoc(input: $input, condition: $condition) {
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
export const createUprofile = /* GraphQL */ `
  mutation CreateUprofile(
    $input: CreateUprofileInput!
    $condition: ModelUprofileConditionInput
  ) {
    createUprofile(input: $input, condition: $condition) {
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
export const updateUprofile = /* GraphQL */ `
  mutation UpdateUprofile(
    $input: UpdateUprofileInput!
    $condition: ModelUprofileConditionInput
  ) {
    updateUprofile(input: $input, condition: $condition) {
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
export const deleteUprofile = /* GraphQL */ `
  mutation DeleteUprofile(
    $input: DeleteUprofileInput!
    $condition: ModelUprofileConditionInput
  ) {
    deleteUprofile(input: $input, condition: $condition) {
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
export const createUserPlaceConnection = /* GraphQL */ `
  mutation CreateUserPlaceConnection(
    $input: CreateUserPlaceConnectionInput!
    $condition: ModelUserPlaceConnectionConditionInput
  ) {
    createUserPlaceConnection(input: $input, condition: $condition) {
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
export const updateUserPlaceConnection = /* GraphQL */ `
  mutation UpdateUserPlaceConnection(
    $input: UpdateUserPlaceConnectionInput!
    $condition: ModelUserPlaceConnectionConditionInput
  ) {
    updateUserPlaceConnection(input: $input, condition: $condition) {
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
export const deleteUserPlaceConnection = /* GraphQL */ `
  mutation DeleteUserPlaceConnection(
    $input: DeleteUserPlaceConnectionInput!
    $condition: ModelUserPlaceConnectionConditionInput
  ) {
    deleteUserPlaceConnection(input: $input, condition: $condition) {
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
export const createPlaceTimeSlot = /* GraphQL */ `
  mutation CreatePlaceTimeSlot(
    $input: CreatePlaceTimeSlotInput!
    $condition: ModelPlaceTimeSlotConditionInput
  ) {
    createPlaceTimeSlot(input: $input, condition: $condition) {
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
export const updatePlaceTimeSlot = /* GraphQL */ `
  mutation UpdatePlaceTimeSlot(
    $input: UpdatePlaceTimeSlotInput!
    $condition: ModelPlaceTimeSlotConditionInput
  ) {
    updatePlaceTimeSlot(input: $input, condition: $condition) {
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
export const deletePlaceTimeSlot = /* GraphQL */ `
  mutation DeletePlaceTimeSlot(
    $input: DeletePlaceTimeSlotInput!
    $condition: ModelPlaceTimeSlotConditionInput
  ) {
    deletePlaceTimeSlot(input: $input, condition: $condition) {
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
export const createPlaceTimeSlotUserPlaceConnection = /* GraphQL */ `
  mutation CreatePlaceTimeSlotUserPlaceConnection(
    $input: CreatePlaceTimeSlotUserPlaceConnectionInput!
    $condition: ModelPlaceTimeSlotUserPlaceConnectionConditionInput
  ) {
    createPlaceTimeSlotUserPlaceConnection(
      input: $input
      condition: $condition
    ) {
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
export const updatePlaceTimeSlotUserPlaceConnection = /* GraphQL */ `
  mutation UpdatePlaceTimeSlotUserPlaceConnection(
    $input: UpdatePlaceTimeSlotUserPlaceConnectionInput!
    $condition: ModelPlaceTimeSlotUserPlaceConnectionConditionInput
  ) {
    updatePlaceTimeSlotUserPlaceConnection(
      input: $input
      condition: $condition
    ) {
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
export const deletePlaceTimeSlotUserPlaceConnection = /* GraphQL */ `
  mutation DeletePlaceTimeSlotUserPlaceConnection(
    $input: DeletePlaceTimeSlotUserPlaceConnectionInput!
    $condition: ModelPlaceTimeSlotUserPlaceConnectionConditionInput
  ) {
    deletePlaceTimeSlotUserPlaceConnection(
      input: $input
      condition: $condition
    ) {
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
export const createPlace = /* GraphQL */ `
  mutation CreatePlace(
    $input: CreatePlaceInput!
    $condition: ModelPlaceConditionInput
  ) {
    createPlace(input: $input, condition: $condition) {
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
export const updatePlace = /* GraphQL */ `
  mutation UpdatePlace(
    $input: UpdatePlaceInput!
    $condition: ModelPlaceConditionInput
  ) {
    updatePlace(input: $input, condition: $condition) {
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
export const deletePlace = /* GraphQL */ `
  mutation DeletePlace(
    $input: DeletePlaceInput!
    $condition: ModelPlaceConditionInput
  ) {
    deletePlace(input: $input, condition: $condition) {
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
export const createFriendConnection = /* GraphQL */ `
  mutation CreateFriendConnection(
    $input: CreateFriendConnectionInput!
    $condition: ModelFriendConnectionConditionInput
  ) {
    createFriendConnection(input: $input, condition: $condition) {
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
export const updateFriendConnection = /* GraphQL */ `
  mutation UpdateFriendConnection(
    $input: UpdateFriendConnectionInput!
    $condition: ModelFriendConnectionConditionInput
  ) {
    updateFriendConnection(input: $input, condition: $condition) {
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
export const deleteFriendConnection = /* GraphQL */ `
  mutation DeleteFriendConnection(
    $input: DeleteFriendConnectionInput!
    $condition: ModelFriendConnectionConditionInput
  ) {
    deleteFriendConnection(input: $input, condition: $condition) {
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
export const createNotification = /* GraphQL */ `
  mutation CreateNotification(
    $input: CreateNotificationInput!
    $condition: ModelNotificationConditionInput
  ) {
    createNotification(input: $input, condition: $condition) {
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
export const updateNotification = /* GraphQL */ `
  mutation UpdateNotification(
    $input: UpdateNotificationInput!
    $condition: ModelNotificationConditionInput
  ) {
    updateNotification(input: $input, condition: $condition) {
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
export const deleteNotification = /* GraphQL */ `
  mutation DeleteNotification(
    $input: DeleteNotificationInput!
    $condition: ModelNotificationConditionInput
  ) {
    deleteNotification(input: $input, condition: $condition) {
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
export const createPushNotificationsBatch = /* GraphQL */ `
  mutation CreatePushNotificationsBatch(
    $input: CreatePushNotificationsBatchInput!
    $condition: ModelPushNotificationsBatchConditionInput
  ) {
    createPushNotificationsBatch(input: $input, condition: $condition) {
      id
      payloadsList
      createdAt
      updatedAt
    }
  }
`;
export const updatePushNotificationsBatch = /* GraphQL */ `
  mutation UpdatePushNotificationsBatch(
    $input: UpdatePushNotificationsBatchInput!
    $condition: ModelPushNotificationsBatchConditionInput
  ) {
    updatePushNotificationsBatch(input: $input, condition: $condition) {
      id
      payloadsList
      createdAt
      updatedAt
    }
  }
`;
export const deletePushNotificationsBatch = /* GraphQL */ `
  mutation DeletePushNotificationsBatch(
    $input: DeletePushNotificationsBatchInput!
    $condition: ModelPushNotificationsBatchConditionInput
  ) {
    deletePushNotificationsBatch(input: $input, condition: $condition) {
      id
      payloadsList
      createdAt
      updatedAt
    }
  }
`;
export const createAttendance = /* GraphQL */ `
  mutation CreateAttendance(
    $arrivingTime: AWSDateTime!
    $departureTime: AWSDateTime
    $placeID: String!
    $profileID: String!
  ) {
    createAttendance(
      arrivingTime: $arrivingTime
      departureTime: $departureTime
      placeID: $placeID
      profileID: $profileID
    ) {
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
export const createPushNotifications = /* GraphQL */ `
  mutation CreatePushNotifications(
    $input: CreatePushNotificationsInput!
    $condition: ModelPushNotificationsConditionInput
  ) {
    createPushNotifications(input: $input, condition: $condition) {
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
export const updatePushNotifications = /* GraphQL */ `
  mutation UpdatePushNotifications(
    $input: UpdatePushNotificationsInput!
    $condition: ModelPushNotificationsConditionInput
  ) {
    updatePushNotifications(input: $input, condition: $condition) {
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
export const deletePushNotifications = /* GraphQL */ `
  mutation DeletePushNotifications(
    $input: DeletePushNotificationsInput!
    $condition: ModelPushNotificationsConditionInput
  ) {
    deletePushNotifications(input: $input, condition: $condition) {
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
