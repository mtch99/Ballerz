/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      email
      phoneNumber
      profileID
      profile {
        id
        email
        username
        user {
          id
          email
          phoneNumber
          profileID
          profile {
            id
            email
            username
            cityID
            createdAt
            updatedAt
            userProfileUserId
          }
          createdAt
          updatedAt
        }
        friends {
          items {
            id
            userProfileID
            friendProfileID
            createdAt
            updatedAt
          }
          nextToken
        }
        presenceList {
          items {
            id
            type
            placeID
            userProfileID
            gameID
            startingDateTime
            endingDateTime
            createdAt
            updatedAt
          }
          nextToken
        }
        cityID
        city {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        userProfileUserId
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      email
      phoneNumber
      profileID
      profile {
        id
        email
        username
        user {
          id
          email
          phoneNumber
          profileID
          profile {
            id
            email
            username
            cityID
            createdAt
            updatedAt
            userProfileUserId
          }
          createdAt
          updatedAt
        }
        friends {
          items {
            id
            userProfileID
            friendProfileID
            createdAt
            updatedAt
          }
          nextToken
        }
        presenceList {
          items {
            id
            type
            placeID
            userProfileID
            gameID
            startingDateTime
            endingDateTime
            createdAt
            updatedAt
          }
          nextToken
        }
        cityID
        city {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        userProfileUserId
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      email
      phoneNumber
      profileID
      profile {
        id
        email
        username
        user {
          id
          email
          phoneNumber
          profileID
          profile {
            id
            email
            username
            cityID
            createdAt
            updatedAt
            userProfileUserId
          }
          createdAt
          updatedAt
        }
        friends {
          items {
            id
            userProfileID
            friendProfileID
            createdAt
            updatedAt
          }
          nextToken
        }
        presenceList {
          items {
            id
            type
            placeID
            userProfileID
            gameID
            startingDateTime
            endingDateTime
            createdAt
            updatedAt
          }
          nextToken
        }
        cityID
        city {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        userProfileUserId
      }
      createdAt
      updatedAt
    }
  }
`;
export const createUserProfile = /* GraphQL */ `
  mutation CreateUserProfile(
    $input: CreateUserProfileInput!
    $condition: ModelUserProfileConditionInput
  ) {
    createUserProfile(input: $input, condition: $condition) {
      id
      email
      username
      user {
        id
        email
        phoneNumber
        profileID
        profile {
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
          cityID
          city {
            id
            name
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          userProfileUserId
        }
        createdAt
        updatedAt
      }
      friends {
        items {
          id
          userProfileID
          friendProfileID
          friendProfile {
            id
            email
            username
            cityID
            createdAt
            updatedAt
            userProfileUserId
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      presenceList {
        items {
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
            cityID
            createdAt
            updatedAt
          }
          place {
            id
            name
            address
            cityID
            createdAt
            updatedAt
          }
          userProfile {
            id
            email
            username
            cityID
            createdAt
            updatedAt
            userProfileUserId
          }
          startingDateTime
          endingDateTime
          createdAt
          updatedAt
        }
        nextToken
      }
      cityID
      city {
        id
        name
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      userProfileUserId
    }
  }
`;
export const updateUserProfile = /* GraphQL */ `
  mutation UpdateUserProfile(
    $input: UpdateUserProfileInput!
    $condition: ModelUserProfileConditionInput
  ) {
    updateUserProfile(input: $input, condition: $condition) {
      id
      email
      username
      user {
        id
        email
        phoneNumber
        profileID
        profile {
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
          cityID
          city {
            id
            name
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          userProfileUserId
        }
        createdAt
        updatedAt
      }
      friends {
        items {
          id
          userProfileID
          friendProfileID
          friendProfile {
            id
            email
            username
            cityID
            createdAt
            updatedAt
            userProfileUserId
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      presenceList {
        items {
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
            cityID
            createdAt
            updatedAt
          }
          place {
            id
            name
            address
            cityID
            createdAt
            updatedAt
          }
          userProfile {
            id
            email
            username
            cityID
            createdAt
            updatedAt
            userProfileUserId
          }
          startingDateTime
          endingDateTime
          createdAt
          updatedAt
        }
        nextToken
      }
      cityID
      city {
        id
        name
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      userProfileUserId
    }
  }
`;
export const deleteUserProfile = /* GraphQL */ `
  mutation DeleteUserProfile(
    $input: DeleteUserProfileInput!
    $condition: ModelUserProfileConditionInput
  ) {
    deleteUserProfile(input: $input, condition: $condition) {
      id
      email
      username
      user {
        id
        email
        phoneNumber
        profileID
        profile {
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
          cityID
          city {
            id
            name
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          userProfileUserId
        }
        createdAt
        updatedAt
      }
      friends {
        items {
          id
          userProfileID
          friendProfileID
          friendProfile {
            id
            email
            username
            cityID
            createdAt
            updatedAt
            userProfileUserId
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      presenceList {
        items {
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
            cityID
            createdAt
            updatedAt
          }
          place {
            id
            name
            address
            cityID
            createdAt
            updatedAt
          }
          userProfile {
            id
            email
            username
            cityID
            createdAt
            updatedAt
            userProfileUserId
          }
          startingDateTime
          endingDateTime
          createdAt
          updatedAt
        }
        nextToken
      }
      cityID
      city {
        id
        name
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      userProfileUserId
    }
  }
`;
export const createFriendship = /* GraphQL */ `
  mutation CreateFriendship(
    $input: CreateFriendshipInput!
    $condition: ModelFriendshipConditionInput
  ) {
    createFriendship(input: $input, condition: $condition) {
      id
      userProfileID
      friendProfileID
      friendProfile {
        id
        email
        username
        user {
          id
          email
          phoneNumber
          profileID
          profile {
            id
            email
            username
            cityID
            createdAt
            updatedAt
            userProfileUserId
          }
          createdAt
          updatedAt
        }
        friends {
          items {
            id
            userProfileID
            friendProfileID
            createdAt
            updatedAt
          }
          nextToken
        }
        presenceList {
          items {
            id
            type
            placeID
            userProfileID
            gameID
            startingDateTime
            endingDateTime
            createdAt
            updatedAt
          }
          nextToken
        }
        cityID
        city {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        userProfileUserId
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateFriendship = /* GraphQL */ `
  mutation UpdateFriendship(
    $input: UpdateFriendshipInput!
    $condition: ModelFriendshipConditionInput
  ) {
    updateFriendship(input: $input, condition: $condition) {
      id
      userProfileID
      friendProfileID
      friendProfile {
        id
        email
        username
        user {
          id
          email
          phoneNumber
          profileID
          profile {
            id
            email
            username
            cityID
            createdAt
            updatedAt
            userProfileUserId
          }
          createdAt
          updatedAt
        }
        friends {
          items {
            id
            userProfileID
            friendProfileID
            createdAt
            updatedAt
          }
          nextToken
        }
        presenceList {
          items {
            id
            type
            placeID
            userProfileID
            gameID
            startingDateTime
            endingDateTime
            createdAt
            updatedAt
          }
          nextToken
        }
        cityID
        city {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        userProfileUserId
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteFriendship = /* GraphQL */ `
  mutation DeleteFriendship(
    $input: DeleteFriendshipInput!
    $condition: ModelFriendshipConditionInput
  ) {
    deleteFriendship(input: $input, condition: $condition) {
      id
      userProfileID
      friendProfileID
      friendProfile {
        id
        email
        username
        user {
          id
          email
          phoneNumber
          profileID
          profile {
            id
            email
            username
            cityID
            createdAt
            updatedAt
            userProfileUserId
          }
          createdAt
          updatedAt
        }
        friends {
          items {
            id
            userProfileID
            friendProfileID
            createdAt
            updatedAt
          }
          nextToken
        }
        presenceList {
          items {
            id
            type
            placeID
            userProfileID
            gameID
            startingDateTime
            endingDateTime
            createdAt
            updatedAt
          }
          nextToken
        }
        cityID
        city {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        userProfileUserId
      }
      createdAt
      updatedAt
    }
  }
`;
export const createFriendshipRequest = /* GraphQL */ `
  mutation CreateFriendshipRequest(
    $input: CreateFriendshipRequestInput!
    $condition: ModelFriendshipRequestConditionInput
  ) {
    createFriendshipRequest(input: $input, condition: $condition) {
      id
      status
      senderProfileID
      receiverProfileID
      senderProfile {
        id
        email
        username
        user {
          id
          email
          phoneNumber
          profileID
          profile {
            id
            email
            username
            cityID
            createdAt
            updatedAt
            userProfileUserId
          }
          createdAt
          updatedAt
        }
        friends {
          items {
            id
            userProfileID
            friendProfileID
            createdAt
            updatedAt
          }
          nextToken
        }
        presenceList {
          items {
            id
            type
            placeID
            userProfileID
            gameID
            startingDateTime
            endingDateTime
            createdAt
            updatedAt
          }
          nextToken
        }
        cityID
        city {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        userProfileUserId
      }
      receiverProfile {
        id
        email
        username
        user {
          id
          email
          phoneNumber
          profileID
          profile {
            id
            email
            username
            cityID
            createdAt
            updatedAt
            userProfileUserId
          }
          createdAt
          updatedAt
        }
        friends {
          items {
            id
            userProfileID
            friendProfileID
            createdAt
            updatedAt
          }
          nextToken
        }
        presenceList {
          items {
            id
            type
            placeID
            userProfileID
            gameID
            startingDateTime
            endingDateTime
            createdAt
            updatedAt
          }
          nextToken
        }
        cityID
        city {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        userProfileUserId
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateFriendshipRequest = /* GraphQL */ `
  mutation UpdateFriendshipRequest(
    $input: UpdateFriendshipRequestInput!
    $condition: ModelFriendshipRequestConditionInput
  ) {
    updateFriendshipRequest(input: $input, condition: $condition) {
      id
      status
      senderProfileID
      receiverProfileID
      senderProfile {
        id
        email
        username
        user {
          id
          email
          phoneNumber
          profileID
          profile {
            id
            email
            username
            cityID
            createdAt
            updatedAt
            userProfileUserId
          }
          createdAt
          updatedAt
        }
        friends {
          items {
            id
            userProfileID
            friendProfileID
            createdAt
            updatedAt
          }
          nextToken
        }
        presenceList {
          items {
            id
            type
            placeID
            userProfileID
            gameID
            startingDateTime
            endingDateTime
            createdAt
            updatedAt
          }
          nextToken
        }
        cityID
        city {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        userProfileUserId
      }
      receiverProfile {
        id
        email
        username
        user {
          id
          email
          phoneNumber
          profileID
          profile {
            id
            email
            username
            cityID
            createdAt
            updatedAt
            userProfileUserId
          }
          createdAt
          updatedAt
        }
        friends {
          items {
            id
            userProfileID
            friendProfileID
            createdAt
            updatedAt
          }
          nextToken
        }
        presenceList {
          items {
            id
            type
            placeID
            userProfileID
            gameID
            startingDateTime
            endingDateTime
            createdAt
            updatedAt
          }
          nextToken
        }
        cityID
        city {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        userProfileUserId
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteFriendshipRequest = /* GraphQL */ `
  mutation DeleteFriendshipRequest(
    $input: DeleteFriendshipRequestInput!
    $condition: ModelFriendshipRequestConditionInput
  ) {
    deleteFriendshipRequest(input: $input, condition: $condition) {
      id
      status
      senderProfileID
      receiverProfileID
      senderProfile {
        id
        email
        username
        user {
          id
          email
          phoneNumber
          profileID
          profile {
            id
            email
            username
            cityID
            createdAt
            updatedAt
            userProfileUserId
          }
          createdAt
          updatedAt
        }
        friends {
          items {
            id
            userProfileID
            friendProfileID
            createdAt
            updatedAt
          }
          nextToken
        }
        presenceList {
          items {
            id
            type
            placeID
            userProfileID
            gameID
            startingDateTime
            endingDateTime
            createdAt
            updatedAt
          }
          nextToken
        }
        cityID
        city {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        userProfileUserId
      }
      receiverProfile {
        id
        email
        username
        user {
          id
          email
          phoneNumber
          profileID
          profile {
            id
            email
            username
            cityID
            createdAt
            updatedAt
            userProfileUserId
          }
          createdAt
          updatedAt
        }
        friends {
          items {
            id
            userProfileID
            friendProfileID
            createdAt
            updatedAt
          }
          nextToken
        }
        presenceList {
          items {
            id
            type
            placeID
            userProfileID
            gameID
            startingDateTime
            endingDateTime
            createdAt
            updatedAt
          }
          nextToken
        }
        cityID
        city {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        userProfileUserId
      }
      createdAt
      updatedAt
    }
  }
`;
export const createCity = /* GraphQL */ `
  mutation CreateCity(
    $input: CreateCityInput!
    $condition: ModelCityConditionInput
  ) {
    createCity(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const updateCity = /* GraphQL */ `
  mutation UpdateCity(
    $input: UpdateCityInput!
    $condition: ModelCityConditionInput
  ) {
    updateCity(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const deleteCity = /* GraphQL */ `
  mutation DeleteCity(
    $input: DeleteCityInput!
    $condition: ModelCityConditionInput
  ) {
    deleteCity(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
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
      gameList {
        items {
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
            cityID
            createdAt
            updatedAt
          }
          cityID
          city {
            id
            name
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      cityID
      city {
        id
        name
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
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
      gameList {
        items {
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
            cityID
            createdAt
            updatedAt
          }
          cityID
          city {
            id
            name
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      cityID
      city {
        id
        name
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
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
      gameList {
        items {
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
            cityID
            createdAt
            updatedAt
          }
          cityID
          city {
            id
            name
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      cityID
      city {
        id
        name
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createGame = /* GraphQL */ `
  mutation CreateGame(
    $input: CreateGameInput!
    $condition: ModelGameConditionInput
  ) {
    createGame(input: $input, condition: $condition) {
      id
      presenceList {
        items {
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
            cityID
            createdAt
            updatedAt
          }
          place {
            id
            name
            address
            cityID
            createdAt
            updatedAt
          }
          userProfile {
            id
            email
            username
            cityID
            createdAt
            updatedAt
            userProfileUserId
          }
          startingDateTime
          endingDateTime
          createdAt
          updatedAt
        }
        nextToken
      }
      placeID
      startingDateTime
      endingDateTime
      place {
        id
        name
        address
        gameList {
          items {
            id
            placeID
            startingDateTime
            endingDateTime
            cityID
            createdAt
            updatedAt
          }
          nextToken
        }
        cityID
        city {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      cityID
      city {
        id
        name
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateGame = /* GraphQL */ `
  mutation UpdateGame(
    $input: UpdateGameInput!
    $condition: ModelGameConditionInput
  ) {
    updateGame(input: $input, condition: $condition) {
      id
      presenceList {
        items {
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
            cityID
            createdAt
            updatedAt
          }
          place {
            id
            name
            address
            cityID
            createdAt
            updatedAt
          }
          userProfile {
            id
            email
            username
            cityID
            createdAt
            updatedAt
            userProfileUserId
          }
          startingDateTime
          endingDateTime
          createdAt
          updatedAt
        }
        nextToken
      }
      placeID
      startingDateTime
      endingDateTime
      place {
        id
        name
        address
        gameList {
          items {
            id
            placeID
            startingDateTime
            endingDateTime
            cityID
            createdAt
            updatedAt
          }
          nextToken
        }
        cityID
        city {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      cityID
      city {
        id
        name
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteGame = /* GraphQL */ `
  mutation DeleteGame(
    $input: DeleteGameInput!
    $condition: ModelGameConditionInput
  ) {
    deleteGame(input: $input, condition: $condition) {
      id
      presenceList {
        items {
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
            cityID
            createdAt
            updatedAt
          }
          place {
            id
            name
            address
            cityID
            createdAt
            updatedAt
          }
          userProfile {
            id
            email
            username
            cityID
            createdAt
            updatedAt
            userProfileUserId
          }
          startingDateTime
          endingDateTime
          createdAt
          updatedAt
        }
        nextToken
      }
      placeID
      startingDateTime
      endingDateTime
      place {
        id
        name
        address
        gameList {
          items {
            id
            placeID
            startingDateTime
            endingDateTime
            cityID
            createdAt
            updatedAt
          }
          nextToken
        }
        cityID
        city {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      cityID
      city {
        id
        name
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createPresence = /* GraphQL */ `
  mutation CreatePresence(
    $input: CreatePresenceInput!
    $condition: ModelPresenceConditionInput
  ) {
    createPresence(input: $input, condition: $condition) {
      id
      type
      placeID
      userProfileID
      gameID
      game {
        id
        presenceList {
          items {
            id
            type
            placeID
            userProfileID
            gameID
            startingDateTime
            endingDateTime
            createdAt
            updatedAt
          }
          nextToken
        }
        placeID
        startingDateTime
        endingDateTime
        place {
          id
          name
          address
          gameList {
            nextToken
          }
          cityID
          city {
            id
            name
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        cityID
        city {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      place {
        id
        name
        address
        gameList {
          items {
            id
            placeID
            startingDateTime
            endingDateTime
            cityID
            createdAt
            updatedAt
          }
          nextToken
        }
        cityID
        city {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      userProfile {
        id
        email
        username
        user {
          id
          email
          phoneNumber
          profileID
          profile {
            id
            email
            username
            cityID
            createdAt
            updatedAt
            userProfileUserId
          }
          createdAt
          updatedAt
        }
        friends {
          items {
            id
            userProfileID
            friendProfileID
            createdAt
            updatedAt
          }
          nextToken
        }
        presenceList {
          items {
            id
            type
            placeID
            userProfileID
            gameID
            startingDateTime
            endingDateTime
            createdAt
            updatedAt
          }
          nextToken
        }
        cityID
        city {
          id
          name
          createdAt
          updatedAt
        }
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
export const updatePresence = /* GraphQL */ `
  mutation UpdatePresence(
    $input: UpdatePresenceInput!
    $condition: ModelPresenceConditionInput
  ) {
    updatePresence(input: $input, condition: $condition) {
      id
      type
      placeID
      userProfileID
      gameID
      game {
        id
        presenceList {
          items {
            id
            type
            placeID
            userProfileID
            gameID
            startingDateTime
            endingDateTime
            createdAt
            updatedAt
          }
          nextToken
        }
        placeID
        startingDateTime
        endingDateTime
        place {
          id
          name
          address
          gameList {
            nextToken
          }
          cityID
          city {
            id
            name
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        cityID
        city {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      place {
        id
        name
        address
        gameList {
          items {
            id
            placeID
            startingDateTime
            endingDateTime
            cityID
            createdAt
            updatedAt
          }
          nextToken
        }
        cityID
        city {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      userProfile {
        id
        email
        username
        user {
          id
          email
          phoneNumber
          profileID
          profile {
            id
            email
            username
            cityID
            createdAt
            updatedAt
            userProfileUserId
          }
          createdAt
          updatedAt
        }
        friends {
          items {
            id
            userProfileID
            friendProfileID
            createdAt
            updatedAt
          }
          nextToken
        }
        presenceList {
          items {
            id
            type
            placeID
            userProfileID
            gameID
            startingDateTime
            endingDateTime
            createdAt
            updatedAt
          }
          nextToken
        }
        cityID
        city {
          id
          name
          createdAt
          updatedAt
        }
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
export const deletePresence = /* GraphQL */ `
  mutation DeletePresence(
    $input: DeletePresenceInput!
    $condition: ModelPresenceConditionInput
  ) {
    deletePresence(input: $input, condition: $condition) {
      id
      type
      placeID
      userProfileID
      gameID
      game {
        id
        presenceList {
          items {
            id
            type
            placeID
            userProfileID
            gameID
            startingDateTime
            endingDateTime
            createdAt
            updatedAt
          }
          nextToken
        }
        placeID
        startingDateTime
        endingDateTime
        place {
          id
          name
          address
          gameList {
            nextToken
          }
          cityID
          city {
            id
            name
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        cityID
        city {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      place {
        id
        name
        address
        gameList {
          items {
            id
            placeID
            startingDateTime
            endingDateTime
            cityID
            createdAt
            updatedAt
          }
          nextToken
        }
        cityID
        city {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      userProfile {
        id
        email
        username
        user {
          id
          email
          phoneNumber
          profileID
          profile {
            id
            email
            username
            cityID
            createdAt
            updatedAt
            userProfileUserId
          }
          createdAt
          updatedAt
        }
        friends {
          items {
            id
            userProfileID
            friendProfileID
            createdAt
            updatedAt
          }
          nextToken
        }
        presenceList {
          items {
            id
            type
            placeID
            userProfileID
            gameID
            startingDateTime
            endingDateTime
            createdAt
            updatedAt
          }
          nextToken
        }
        cityID
        city {
          id
          name
          createdAt
          updatedAt
        }
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
export const createNotification = /* GraphQL */ `
  mutation CreateNotification(
    $input: CreateNotificationInput!
    $condition: ModelNotificationConditionInput
  ) {
    createNotification(input: $input, condition: $condition) {
      id
      type
      receiverProfileID
      friendshipRequestID
      friendshipRequest {
        id
        status
        senderProfileID
        receiverProfileID
        senderProfile {
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
          cityID
          city {
            id
            name
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          userProfileUserId
        }
        receiverProfile {
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
          cityID
          city {
            id
            name
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          userProfileUserId
        }
        createdAt
        updatedAt
      }
      presenceID
      senderProfileID
      presence {
        id
        type
        placeID
        userProfileID
        gameID
        game {
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
            cityID
            createdAt
            updatedAt
          }
          cityID
          city {
            id
            name
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        place {
          id
          name
          address
          gameList {
            nextToken
          }
          cityID
          city {
            id
            name
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        userProfile {
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
          cityID
          city {
            id
            name
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          userProfileUserId
        }
        startingDateTime
        endingDateTime
        createdAt
        updatedAt
      }
      gameID
      game {
        id
        presenceList {
          items {
            id
            type
            placeID
            userProfileID
            gameID
            startingDateTime
            endingDateTime
            createdAt
            updatedAt
          }
          nextToken
        }
        placeID
        startingDateTime
        endingDateTime
        place {
          id
          name
          address
          gameList {
            nextToken
          }
          cityID
          city {
            id
            name
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        cityID
        city {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      senderProfile {
        id
        email
        username
        user {
          id
          email
          phoneNumber
          profileID
          profile {
            id
            email
            username
            cityID
            createdAt
            updatedAt
            userProfileUserId
          }
          createdAt
          updatedAt
        }
        friends {
          items {
            id
            userProfileID
            friendProfileID
            createdAt
            updatedAt
          }
          nextToken
        }
        presenceList {
          items {
            id
            type
            placeID
            userProfileID
            gameID
            startingDateTime
            endingDateTime
            createdAt
            updatedAt
          }
          nextToken
        }
        cityID
        city {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        userProfileUserId
      }
      receiverProfile {
        id
        email
        username
        user {
          id
          email
          phoneNumber
          profileID
          profile {
            id
            email
            username
            cityID
            createdAt
            updatedAt
            userProfileUserId
          }
          createdAt
          updatedAt
        }
        friends {
          items {
            id
            userProfileID
            friendProfileID
            createdAt
            updatedAt
          }
          nextToken
        }
        presenceList {
          items {
            id
            type
            placeID
            userProfileID
            gameID
            startingDateTime
            endingDateTime
            createdAt
            updatedAt
          }
          nextToken
        }
        cityID
        city {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        userProfileUserId
      }
      createdAt
      updatedAt
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
      type
      receiverProfileID
      friendshipRequestID
      friendshipRequest {
        id
        status
        senderProfileID
        receiverProfileID
        senderProfile {
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
          cityID
          city {
            id
            name
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          userProfileUserId
        }
        receiverProfile {
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
          cityID
          city {
            id
            name
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          userProfileUserId
        }
        createdAt
        updatedAt
      }
      presenceID
      senderProfileID
      presence {
        id
        type
        placeID
        userProfileID
        gameID
        game {
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
            cityID
            createdAt
            updatedAt
          }
          cityID
          city {
            id
            name
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        place {
          id
          name
          address
          gameList {
            nextToken
          }
          cityID
          city {
            id
            name
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        userProfile {
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
          cityID
          city {
            id
            name
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          userProfileUserId
        }
        startingDateTime
        endingDateTime
        createdAt
        updatedAt
      }
      gameID
      game {
        id
        presenceList {
          items {
            id
            type
            placeID
            userProfileID
            gameID
            startingDateTime
            endingDateTime
            createdAt
            updatedAt
          }
          nextToken
        }
        placeID
        startingDateTime
        endingDateTime
        place {
          id
          name
          address
          gameList {
            nextToken
          }
          cityID
          city {
            id
            name
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        cityID
        city {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      senderProfile {
        id
        email
        username
        user {
          id
          email
          phoneNumber
          profileID
          profile {
            id
            email
            username
            cityID
            createdAt
            updatedAt
            userProfileUserId
          }
          createdAt
          updatedAt
        }
        friends {
          items {
            id
            userProfileID
            friendProfileID
            createdAt
            updatedAt
          }
          nextToken
        }
        presenceList {
          items {
            id
            type
            placeID
            userProfileID
            gameID
            startingDateTime
            endingDateTime
            createdAt
            updatedAt
          }
          nextToken
        }
        cityID
        city {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        userProfileUserId
      }
      receiverProfile {
        id
        email
        username
        user {
          id
          email
          phoneNumber
          profileID
          profile {
            id
            email
            username
            cityID
            createdAt
            updatedAt
            userProfileUserId
          }
          createdAt
          updatedAt
        }
        friends {
          items {
            id
            userProfileID
            friendProfileID
            createdAt
            updatedAt
          }
          nextToken
        }
        presenceList {
          items {
            id
            type
            placeID
            userProfileID
            gameID
            startingDateTime
            endingDateTime
            createdAt
            updatedAt
          }
          nextToken
        }
        cityID
        city {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        userProfileUserId
      }
      createdAt
      updatedAt
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
      type
      receiverProfileID
      friendshipRequestID
      friendshipRequest {
        id
        status
        senderProfileID
        receiverProfileID
        senderProfile {
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
          cityID
          city {
            id
            name
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          userProfileUserId
        }
        receiverProfile {
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
          cityID
          city {
            id
            name
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          userProfileUserId
        }
        createdAt
        updatedAt
      }
      presenceID
      senderProfileID
      presence {
        id
        type
        placeID
        userProfileID
        gameID
        game {
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
            cityID
            createdAt
            updatedAt
          }
          cityID
          city {
            id
            name
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        place {
          id
          name
          address
          gameList {
            nextToken
          }
          cityID
          city {
            id
            name
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        userProfile {
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
          cityID
          city {
            id
            name
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          userProfileUserId
        }
        startingDateTime
        endingDateTime
        createdAt
        updatedAt
      }
      gameID
      game {
        id
        presenceList {
          items {
            id
            type
            placeID
            userProfileID
            gameID
            startingDateTime
            endingDateTime
            createdAt
            updatedAt
          }
          nextToken
        }
        placeID
        startingDateTime
        endingDateTime
        place {
          id
          name
          address
          gameList {
            nextToken
          }
          cityID
          city {
            id
            name
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        cityID
        city {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      senderProfile {
        id
        email
        username
        user {
          id
          email
          phoneNumber
          profileID
          profile {
            id
            email
            username
            cityID
            createdAt
            updatedAt
            userProfileUserId
          }
          createdAt
          updatedAt
        }
        friends {
          items {
            id
            userProfileID
            friendProfileID
            createdAt
            updatedAt
          }
          nextToken
        }
        presenceList {
          items {
            id
            type
            placeID
            userProfileID
            gameID
            startingDateTime
            endingDateTime
            createdAt
            updatedAt
          }
          nextToken
        }
        cityID
        city {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        userProfileUserId
      }
      receiverProfile {
        id
        email
        username
        user {
          id
          email
          phoneNumber
          profileID
          profile {
            id
            email
            username
            cityID
            createdAt
            updatedAt
            userProfileUserId
          }
          createdAt
          updatedAt
        }
        friends {
          items {
            id
            userProfileID
            friendProfileID
            createdAt
            updatedAt
          }
          nextToken
        }
        presenceList {
          items {
            id
            type
            placeID
            userProfileID
            gameID
            startingDateTime
            endingDateTime
            createdAt
            updatedAt
          }
          nextToken
        }
        cityID
        city {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        userProfileUserId
      }
      createdAt
      updatedAt
    }
  }
`;
export const createJoinMeInvitation = /* GraphQL */ `
  mutation CreateJoinMeInvitation(
    $input: CreateJoinMeInvitationInput!
    $condition: ModelJoinMeInvitationConditionInput
  ) {
    createJoinMeInvitation(input: $input, condition: $condition) {
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
        user {
          id
          email
          phoneNumber
          profileID
          profile {
            id
            email
            username
            cityID
            createdAt
            updatedAt
            userProfileUserId
          }
          createdAt
          updatedAt
        }
        friends {
          items {
            id
            userProfileID
            friendProfileID
            createdAt
            updatedAt
          }
          nextToken
        }
        presenceList {
          items {
            id
            type
            placeID
            userProfileID
            gameID
            startingDateTime
            endingDateTime
            createdAt
            updatedAt
          }
          nextToken
        }
        cityID
        city {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        userProfileUserId
      }
      senderProfile {
        id
        email
        username
        user {
          id
          email
          phoneNumber
          profileID
          profile {
            id
            email
            username
            cityID
            createdAt
            updatedAt
            userProfileUserId
          }
          createdAt
          updatedAt
        }
        friends {
          items {
            id
            userProfileID
            friendProfileID
            createdAt
            updatedAt
          }
          nextToken
        }
        presenceList {
          items {
            id
            type
            placeID
            userProfileID
            gameID
            startingDateTime
            endingDateTime
            createdAt
            updatedAt
          }
          nextToken
        }
        cityID
        city {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        userProfileUserId
      }
      game {
        id
        presenceList {
          items {
            id
            type
            placeID
            userProfileID
            gameID
            startingDateTime
            endingDateTime
            createdAt
            updatedAt
          }
          nextToken
        }
        placeID
        startingDateTime
        endingDateTime
        place {
          id
          name
          address
          gameList {
            nextToken
          }
          cityID
          city {
            id
            name
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        cityID
        city {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateJoinMeInvitation = /* GraphQL */ `
  mutation UpdateJoinMeInvitation(
    $input: UpdateJoinMeInvitationInput!
    $condition: ModelJoinMeInvitationConditionInput
  ) {
    updateJoinMeInvitation(input: $input, condition: $condition) {
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
        user {
          id
          email
          phoneNumber
          profileID
          profile {
            id
            email
            username
            cityID
            createdAt
            updatedAt
            userProfileUserId
          }
          createdAt
          updatedAt
        }
        friends {
          items {
            id
            userProfileID
            friendProfileID
            createdAt
            updatedAt
          }
          nextToken
        }
        presenceList {
          items {
            id
            type
            placeID
            userProfileID
            gameID
            startingDateTime
            endingDateTime
            createdAt
            updatedAt
          }
          nextToken
        }
        cityID
        city {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        userProfileUserId
      }
      senderProfile {
        id
        email
        username
        user {
          id
          email
          phoneNumber
          profileID
          profile {
            id
            email
            username
            cityID
            createdAt
            updatedAt
            userProfileUserId
          }
          createdAt
          updatedAt
        }
        friends {
          items {
            id
            userProfileID
            friendProfileID
            createdAt
            updatedAt
          }
          nextToken
        }
        presenceList {
          items {
            id
            type
            placeID
            userProfileID
            gameID
            startingDateTime
            endingDateTime
            createdAt
            updatedAt
          }
          nextToken
        }
        cityID
        city {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        userProfileUserId
      }
      game {
        id
        presenceList {
          items {
            id
            type
            placeID
            userProfileID
            gameID
            startingDateTime
            endingDateTime
            createdAt
            updatedAt
          }
          nextToken
        }
        placeID
        startingDateTime
        endingDateTime
        place {
          id
          name
          address
          gameList {
            nextToken
          }
          cityID
          city {
            id
            name
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        cityID
        city {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteJoinMeInvitation = /* GraphQL */ `
  mutation DeleteJoinMeInvitation(
    $input: DeleteJoinMeInvitationInput!
    $condition: ModelJoinMeInvitationConditionInput
  ) {
    deleteJoinMeInvitation(input: $input, condition: $condition) {
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
        user {
          id
          email
          phoneNumber
          profileID
          profile {
            id
            email
            username
            cityID
            createdAt
            updatedAt
            userProfileUserId
          }
          createdAt
          updatedAt
        }
        friends {
          items {
            id
            userProfileID
            friendProfileID
            createdAt
            updatedAt
          }
          nextToken
        }
        presenceList {
          items {
            id
            type
            placeID
            userProfileID
            gameID
            startingDateTime
            endingDateTime
            createdAt
            updatedAt
          }
          nextToken
        }
        cityID
        city {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        userProfileUserId
      }
      senderProfile {
        id
        email
        username
        user {
          id
          email
          phoneNumber
          profileID
          profile {
            id
            email
            username
            cityID
            createdAt
            updatedAt
            userProfileUserId
          }
          createdAt
          updatedAt
        }
        friends {
          items {
            id
            userProfileID
            friendProfileID
            createdAt
            updatedAt
          }
          nextToken
        }
        presenceList {
          items {
            id
            type
            placeID
            userProfileID
            gameID
            startingDateTime
            endingDateTime
            createdAt
            updatedAt
          }
          nextToken
        }
        cityID
        city {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        userProfileUserId
      }
      game {
        id
        presenceList {
          items {
            id
            type
            placeID
            userProfileID
            gameID
            startingDateTime
            endingDateTime
            createdAt
            updatedAt
          }
          nextToken
        }
        placeID
        startingDateTime
        endingDateTime
        place {
          id
          name
          address
          gameList {
            nextToken
          }
          cityID
          city {
            id
            name
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        cityID
        city {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const playMutation = /* GraphQL */ `
  mutation PlayMutation($input: PlayMutationInput) {
    playMutation(input: $input) {
      id
      presenceList {
        items {
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
            cityID
            createdAt
            updatedAt
          }
          place {
            id
            name
            address
            cityID
            createdAt
            updatedAt
          }
          userProfile {
            id
            email
            username
            cityID
            createdAt
            updatedAt
            userProfileUserId
          }
          startingDateTime
          endingDateTime
          createdAt
          updatedAt
        }
        nextToken
      }
      placeID
      startingDateTime
      endingDateTime
      place {
        id
        name
        address
        gameList {
          items {
            id
            placeID
            startingDateTime
            endingDateTime
            cityID
            createdAt
            updatedAt
          }
          nextToken
        }
        cityID
        city {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      cityID
      city {
        id
        name
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
