/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getUserProfile = /* GraphQL */ `
  query GetUserProfile($id: ID!) {
    getUserProfile(id: $id) {
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
export const listUserProfiles = /* GraphQL */ `
  query ListUserProfiles(
    $filter: ModelUserProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const userProfilesByCityID = /* GraphQL */ `
  query UserProfilesByCityID(
    $cityID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userProfilesByCityID(
      cityID: $cityID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getFriendship = /* GraphQL */ `
  query GetFriendship($id: ID!) {
    getFriendship(id: $id) {
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
export const listFriendships = /* GraphQL */ `
  query ListFriendships(
    $filter: ModelFriendshipFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFriendships(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const friendshipsByUserProfileID = /* GraphQL */ `
  query FriendshipsByUserProfileID(
    $userProfileID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelFriendshipFilterInput
    $limit: Int
    $nextToken: String
  ) {
    friendshipsByUserProfileID(
      userProfileID: $userProfileID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getFriendshipRequest = /* GraphQL */ `
  query GetFriendshipRequest($id: ID!) {
    getFriendshipRequest(id: $id) {
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
export const listFriendshipRequests = /* GraphQL */ `
  query ListFriendshipRequests(
    $filter: ModelFriendshipRequestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFriendshipRequests(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getCity = /* GraphQL */ `
  query GetCity($id: ID!) {
    getCity(id: $id) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const listCities = /* GraphQL */ `
  query ListCities(
    $filter: ModelCityFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCities(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
export const getPlace = /* GraphQL */ `
  query GetPlace($id: ID!) {
    getPlace(id: $id) {
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
      nextToken
    }
  }
`;
export const placesByCityID = /* GraphQL */ `
  query PlacesByCityID(
    $cityID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPlaceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    placesByCityID(
      cityID: $cityID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getGame = /* GraphQL */ `
  query GetGame($id: ID!) {
    getGame(id: $id) {
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
export const listGames = /* GraphQL */ `
  query ListGames(
    $filter: ModelGameFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGames(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const gamesByPlaceIDAndStartingDateTimeAndEndingDateTime = /* GraphQL */ `
  query GamesByPlaceIDAndStartingDateTimeAndEndingDateTime(
    $placeID: ID!
    $startingDateTimeEndingDateTime: ModelGameByPlaceCompositeKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelGameFilterInput
    $limit: Int
    $nextToken: String
  ) {
    gamesByPlaceIDAndStartingDateTimeAndEndingDateTime(
      placeID: $placeID
      startingDateTimeEndingDateTime: $startingDateTimeEndingDateTime
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const gamesByCityIDAndStartingDateTimeAndEndingDateTime = /* GraphQL */ `
  query GamesByCityIDAndStartingDateTimeAndEndingDateTime(
    $cityID: ID!
    $startingDateTimeEndingDateTime: ModelGameByCityCompositeKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelGameFilterInput
    $limit: Int
    $nextToken: String
  ) {
    gamesByCityIDAndStartingDateTimeAndEndingDateTime(
      cityID: $cityID
      startingDateTimeEndingDateTime: $startingDateTimeEndingDateTime
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getPresence = /* GraphQL */ `
  query GetPresence($id: ID!) {
    getPresence(id: $id) {
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
export const listPresences = /* GraphQL */ `
  query ListPresences(
    $filter: ModelPresenceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPresences(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const presencesByPlaceIDAndStartingDateTimeAndEndingDateTime = /* GraphQL */ `
  query PresencesByPlaceIDAndStartingDateTimeAndEndingDateTime(
    $placeID: ID!
    $startingDateTimeEndingDateTime: ModelPresenceByPlaceCompositeKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPresenceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    presencesByPlaceIDAndStartingDateTimeAndEndingDateTime(
      placeID: $placeID
      startingDateTimeEndingDateTime: $startingDateTimeEndingDateTime
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const presencesByUserProfileIDAndStartingDateTimeAndEndingDateTime = /* GraphQL */ `
  query PresencesByUserProfileIDAndStartingDateTimeAndEndingDateTime(
    $userProfileID: ID!
    $startingDateTimeEndingDateTime: ModelPresenceByUserProfileCompositeKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPresenceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    presencesByUserProfileIDAndStartingDateTimeAndEndingDateTime(
      userProfileID: $userProfileID
      startingDateTimeEndingDateTime: $startingDateTimeEndingDateTime
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const presencesByGameIDAndStartingDateTimeAndEndingDateTime = /* GraphQL */ `
  query PresencesByGameIDAndStartingDateTimeAndEndingDateTime(
    $gameID: ID!
    $startingDateTimeEndingDateTime: ModelPresenceByGameCompositeKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPresenceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    presencesByGameIDAndStartingDateTimeAndEndingDateTime(
      gameID: $gameID
      startingDateTimeEndingDateTime: $startingDateTimeEndingDateTime
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getNotification = /* GraphQL */ `
  query GetNotification($id: ID!) {
    getNotification(id: $id) {
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
export const listNotifications = /* GraphQL */ `
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
        friendshipRequest {
          id
          status
          senderProfileID
          receiverProfileID
          senderProfile {
            id
            email
            username
            cityID
            createdAt
            updatedAt
            userProfileUserId
          }
          receiverProfile {
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
      nextToken
    }
  }
`;
export const notificationsByReceiverProfileIDAndCreatedAt = /* GraphQL */ `
  query NotificationsByReceiverProfileIDAndCreatedAt(
    $receiverProfileID: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelNotificationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    notificationsByReceiverProfileIDAndCreatedAt(
      receiverProfileID: $receiverProfileID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
            cityID
            createdAt
            updatedAt
            userProfileUserId
          }
          receiverProfile {
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
      nextToken
    }
  }
`;
export const getJoinMeInvitation = /* GraphQL */ `
  query GetJoinMeInvitation($id: ID!) {
    getJoinMeInvitation(id: $id) {
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
export const listJoinMeInvitations = /* GraphQL */ `
  query ListJoinMeInvitations(
    $filter: ModelJoinMeInvitationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listJoinMeInvitations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
