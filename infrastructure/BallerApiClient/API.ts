/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  email: string,
  phoneNumber?: string | null,
  profileID?: string | null,
};

export type ModelUserConditionInput = {
  email?: ModelStringInput | null,
  phoneNumber?: ModelStringInput | null,
  profileID?: ModelIDInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type User = {
  __typename: "User",
  id: string,
  email: string,
  phoneNumber?: string | null,
  profileID?: string | null,
  profile?: UserProfile | null,
  createdAt: string,
  updatedAt: string,
};

export type UserProfile = {
  __typename: "UserProfile",
  id: string,
  email: string,
  username: string,
  user?: User | null,
  friends?: ModelFriendshipConnection | null,
  presenceList?: ModelPresenceConnection | null,
  createdAt: string,
  updatedAt: string,
  userProfileUserId?: string | null,
};

export type ModelFriendshipConnection = {
  __typename: "ModelFriendshipConnection",
  items:  Array<Friendship | null >,
  nextToken?: string | null,
};

export type Friendship = {
  __typename: "Friendship",
  id: string,
  userProfileID: string,
  friendProfileID: string,
  friendProfile?: UserProfile | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelPresenceConnection = {
  __typename: "ModelPresenceConnection",
  items:  Array<Presence | null >,
  nextToken?: string | null,
};

export type Presence = {
  __typename: "Presence",
  id: string,
  type: presenceType,
  placeID: string,
  userProfileID: string,
  gameID: string,
  game?: Game | null,
  place?: Place | null,
  userProfile?: UserProfile | null,
  startingDateTime: string,
  endingDateTime: string,
  createdAt: string,
  updatedAt: string,
};

export enum presenceType {
  spontaneous = "spontaneous",
  joiningFriend = "joiningFriend",
  joiningGroupChatInvitation = "joiningGroupChatInvitation",
  joiningHotCourt = "joiningHotCourt",
  invitingGroupChat = "invitingGroupChat",
}


export type Game = {
  __typename: "Game",
  id: string,
  presenceList?: ModelPresenceConnection | null,
  placeID: string,
  startingDateTime: string,
  endingDateTime: string,
  place?: Place | null,
  createdAt: string,
  updatedAt: string,
};

export type Place = {
  __typename: "Place",
  id: string,
  name: string,
  address: string,
  gameList?: ModelGameConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelGameConnection = {
  __typename: "ModelGameConnection",
  items:  Array<Game | null >,
  nextToken?: string | null,
};

export type UpdateUserInput = {
  id: string,
  email?: string | null,
  phoneNumber?: string | null,
  profileID?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateUserProfileInput = {
  id?: string | null,
  email: string,
  username: string,
  userProfileUserId?: string | null,
};

export type ModelUserProfileConditionInput = {
  email?: ModelStringInput | null,
  username?: ModelStringInput | null,
  and?: Array< ModelUserProfileConditionInput | null > | null,
  or?: Array< ModelUserProfileConditionInput | null > | null,
  not?: ModelUserProfileConditionInput | null,
  userProfileUserId?: ModelIDInput | null,
};

export type UpdateUserProfileInput = {
  id: string,
  email?: string | null,
  username?: string | null,
  userProfileUserId?: string | null,
};

export type DeleteUserProfileInput = {
  id: string,
};

export type CreateFriendshipInput = {
  id?: string | null,
  userProfileID: string,
  friendProfileID: string,
};

export type ModelFriendshipConditionInput = {
  userProfileID?: ModelIDInput | null,
  friendProfileID?: ModelIDInput | null,
  and?: Array< ModelFriendshipConditionInput | null > | null,
  or?: Array< ModelFriendshipConditionInput | null > | null,
  not?: ModelFriendshipConditionInput | null,
};

export type UpdateFriendshipInput = {
  id: string,
  userProfileID?: string | null,
  friendProfileID?: string | null,
};

export type DeleteFriendshipInput = {
  id: string,
};

export type CreateFriendshipRequestInput = {
  id?: string | null,
  status: FriendshipRequestStatus,
  senderProfileID: string,
  receiverProfileID: string,
};

export enum FriendshipRequestStatus {
  pending = "pending",
  accepted = "accepted",
  rejected = "rejected",
}


export type ModelFriendshipRequestConditionInput = {
  status?: ModelFriendshipRequestStatusInput | null,
  senderProfileID?: ModelIDInput | null,
  receiverProfileID?: ModelIDInput | null,
  and?: Array< ModelFriendshipRequestConditionInput | null > | null,
  or?: Array< ModelFriendshipRequestConditionInput | null > | null,
  not?: ModelFriendshipRequestConditionInput | null,
};

export type ModelFriendshipRequestStatusInput = {
  eq?: FriendshipRequestStatus | null,
  ne?: FriendshipRequestStatus | null,
};

export type FriendshipRequest = {
  __typename: "FriendshipRequest",
  id: string,
  status: FriendshipRequestStatus,
  senderProfileID: string,
  receiverProfileID: string,
  senderProfile?: UserProfile | null,
  receiverProfile?: UserProfile | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateFriendshipRequestInput = {
  id: string,
  status?: FriendshipRequestStatus | null,
  senderProfileID?: string | null,
  receiverProfileID?: string | null,
};

export type DeleteFriendshipRequestInput = {
  id: string,
};

export type CreatePlaceInput = {
  id?: string | null,
  name: string,
  address: string,
};

export type ModelPlaceConditionInput = {
  name?: ModelStringInput | null,
  address?: ModelStringInput | null,
  and?: Array< ModelPlaceConditionInput | null > | null,
  or?: Array< ModelPlaceConditionInput | null > | null,
  not?: ModelPlaceConditionInput | null,
};

export type UpdatePlaceInput = {
  id: string,
  name?: string | null,
  address?: string | null,
};

export type DeletePlaceInput = {
  id: string,
};

export type CreateGameInput = {
  id?: string | null,
  placeID: string,
  startingDateTime: string,
  endingDateTime: string,
};

export type ModelGameConditionInput = {
  placeID?: ModelIDInput | null,
  startingDateTime?: ModelStringInput | null,
  endingDateTime?: ModelStringInput | null,
  and?: Array< ModelGameConditionInput | null > | null,
  or?: Array< ModelGameConditionInput | null > | null,
  not?: ModelGameConditionInput | null,
};

export type UpdateGameInput = {
  id: string,
  placeID?: string | null,
  startingDateTime?: string | null,
  endingDateTime?: string | null,
};

export type DeleteGameInput = {
  id: string,
};

export type CreatePresenceInput = {
  id?: string | null,
  type: presenceType,
  placeID: string,
  userProfileID: string,
  gameID: string,
  startingDateTime: string,
  endingDateTime: string,
};

export type ModelPresenceConditionInput = {
  type?: ModelpresenceTypeInput | null,
  placeID?: ModelIDInput | null,
  userProfileID?: ModelIDInput | null,
  gameID?: ModelIDInput | null,
  startingDateTime?: ModelStringInput | null,
  endingDateTime?: ModelStringInput | null,
  and?: Array< ModelPresenceConditionInput | null > | null,
  or?: Array< ModelPresenceConditionInput | null > | null,
  not?: ModelPresenceConditionInput | null,
};

export type ModelpresenceTypeInput = {
  eq?: presenceType | null,
  ne?: presenceType | null,
};

export type UpdatePresenceInput = {
  id: string,
  type?: presenceType | null,
  placeID?: string | null,
  userProfileID?: string | null,
  gameID?: string | null,
  startingDateTime?: string | null,
  endingDateTime?: string | null,
};

export type DeletePresenceInput = {
  id: string,
};

export type CreateNotificationInput = {
  id?: string | null,
  type: NotificationType,
  receiverProfileID: string,
  friendshipRequestID?: string | null,
  presenceID?: string | null,
  senderProfileID?: string | null,
};

export enum NotificationType {
  friendshipRequest = "friendshipRequest",
  newFriend = "newFriend",
  friendPlaying = "friendPlaying",
  joinGroupChat = "joinGroupChat",
  newGroupChatMember = "newGroupChatMember",
}


export type ModelNotificationConditionInput = {
  type?: ModelNotificationTypeInput | null,
  receiverProfileID?: ModelIDInput | null,
  friendshipRequestID?: ModelIDInput | null,
  presenceID?: ModelIDInput | null,
  senderProfileID?: ModelIDInput | null,
  and?: Array< ModelNotificationConditionInput | null > | null,
  or?: Array< ModelNotificationConditionInput | null > | null,
  not?: ModelNotificationConditionInput | null,
};

export type ModelNotificationTypeInput = {
  eq?: NotificationType | null,
  ne?: NotificationType | null,
};

export type Notification = {
  __typename: "Notification",
  id: string,
  type: NotificationType,
  receiverProfileID: string,
  friendshipRequestID?: string | null,
  friendshipRequest?: FriendshipRequest | null,
  presenceID?: string | null,
  senderProfileID?: string | null,
  senderProfile?: UserProfile | null,
  receiverProfile?: UserProfile | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateNotificationInput = {
  id: string,
  type?: NotificationType | null,
  receiverProfileID?: string | null,
  friendshipRequestID?: string | null,
  presenceID?: string | null,
  senderProfileID?: string | null,
};

export type DeleteNotificationInput = {
  id: string,
};

export type CreateJoinMeInvitationInput = {
  id?: string | null,
  type: joinMeInvitationType,
  status: joinMeInvitationStatus,
  receiverProfileID: string,
  senderProfileID: string,
  gameID: string,
};

export enum joinMeInvitationType {
  groupChat = "groupChat",
  singleUser = "singleUser",
}


export enum joinMeInvitationStatus {
  pending = "pending",
  accepted = "accepted",
  rejected = "rejected",
}


export type ModelJoinMeInvitationConditionInput = {
  type?: ModeljoinMeInvitationTypeInput | null,
  status?: ModeljoinMeInvitationStatusInput | null,
  receiverProfileID?: ModelIDInput | null,
  senderProfileID?: ModelIDInput | null,
  gameID?: ModelIDInput | null,
  and?: Array< ModelJoinMeInvitationConditionInput | null > | null,
  or?: Array< ModelJoinMeInvitationConditionInput | null > | null,
  not?: ModelJoinMeInvitationConditionInput | null,
};

export type ModeljoinMeInvitationTypeInput = {
  eq?: joinMeInvitationType | null,
  ne?: joinMeInvitationType | null,
};

export type ModeljoinMeInvitationStatusInput = {
  eq?: joinMeInvitationStatus | null,
  ne?: joinMeInvitationStatus | null,
};

export type JoinMeInvitation = {
  __typename: "JoinMeInvitation",
  id: string,
  type: joinMeInvitationType,
  status: joinMeInvitationStatus,
  receiverProfileID: string,
  senderProfileID: string,
  gameID: string,
  receiverProfile?: UserProfile | null,
  senderProfile?: UserProfile | null,
  game?: Game | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateJoinMeInvitationInput = {
  id: string,
  type?: joinMeInvitationType | null,
  status?: joinMeInvitationStatus | null,
  receiverProfileID?: string | null,
  senderProfileID?: string | null,
  gameID?: string | null,
};

export type DeleteJoinMeInvitationInput = {
  id: string,
};

export type PlayMutationInput = {
  placeID: string,
  startingDateTime: string,
  endingDateTime: string,
  userProfileID: string,
  presenceType: presenceType,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  email?: ModelStringInput | null,
  phoneNumber?: ModelStringInput | null,
  profileID?: ModelIDInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelUserProfileFilterInput = {
  id?: ModelIDInput | null,
  email?: ModelStringInput | null,
  username?: ModelStringInput | null,
  and?: Array< ModelUserProfileFilterInput | null > | null,
  or?: Array< ModelUserProfileFilterInput | null > | null,
  not?: ModelUserProfileFilterInput | null,
  userProfileUserId?: ModelIDInput | null,
};

export type ModelUserProfileConnection = {
  __typename: "ModelUserProfileConnection",
  items:  Array<UserProfile | null >,
  nextToken?: string | null,
};

export type ModelFriendshipFilterInput = {
  id?: ModelIDInput | null,
  userProfileID?: ModelIDInput | null,
  friendProfileID?: ModelIDInput | null,
  and?: Array< ModelFriendshipFilterInput | null > | null,
  or?: Array< ModelFriendshipFilterInput | null > | null,
  not?: ModelFriendshipFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelFriendshipRequestFilterInput = {
  id?: ModelIDInput | null,
  status?: ModelFriendshipRequestStatusInput | null,
  senderProfileID?: ModelIDInput | null,
  receiverProfileID?: ModelIDInput | null,
  and?: Array< ModelFriendshipRequestFilterInput | null > | null,
  or?: Array< ModelFriendshipRequestFilterInput | null > | null,
  not?: ModelFriendshipRequestFilterInput | null,
};

export type ModelFriendshipRequestConnection = {
  __typename: "ModelFriendshipRequestConnection",
  items:  Array<FriendshipRequest | null >,
  nextToken?: string | null,
};

export type ModelPlaceFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  address?: ModelStringInput | null,
  and?: Array< ModelPlaceFilterInput | null > | null,
  or?: Array< ModelPlaceFilterInput | null > | null,
  not?: ModelPlaceFilterInput | null,
};

export type ModelPlaceConnection = {
  __typename: "ModelPlaceConnection",
  items:  Array<Place | null >,
  nextToken?: string | null,
};

export type ModelGameFilterInput = {
  id?: ModelIDInput | null,
  placeID?: ModelIDInput | null,
  startingDateTime?: ModelStringInput | null,
  endingDateTime?: ModelStringInput | null,
  and?: Array< ModelGameFilterInput | null > | null,
  or?: Array< ModelGameFilterInput | null > | null,
  not?: ModelGameFilterInput | null,
};

export type ModelGameByPlaceCompositeKeyConditionInput = {
  eq?: ModelGameByPlaceCompositeKeyInput | null,
  le?: ModelGameByPlaceCompositeKeyInput | null,
  lt?: ModelGameByPlaceCompositeKeyInput | null,
  ge?: ModelGameByPlaceCompositeKeyInput | null,
  gt?: ModelGameByPlaceCompositeKeyInput | null,
  between?: Array< ModelGameByPlaceCompositeKeyInput | null > | null,
  beginsWith?: ModelGameByPlaceCompositeKeyInput | null,
};

export type ModelGameByPlaceCompositeKeyInput = {
  startingDateTime?: string | null,
  endingDateTime?: string | null,
};

export type ModelPresenceFilterInput = {
  id?: ModelIDInput | null,
  type?: ModelpresenceTypeInput | null,
  placeID?: ModelIDInput | null,
  userProfileID?: ModelIDInput | null,
  gameID?: ModelIDInput | null,
  startingDateTime?: ModelStringInput | null,
  endingDateTime?: ModelStringInput | null,
  and?: Array< ModelPresenceFilterInput | null > | null,
  or?: Array< ModelPresenceFilterInput | null > | null,
  not?: ModelPresenceFilterInput | null,
};

export type ModelPresenceByPlaceCompositeKeyConditionInput = {
  eq?: ModelPresenceByPlaceCompositeKeyInput | null,
  le?: ModelPresenceByPlaceCompositeKeyInput | null,
  lt?: ModelPresenceByPlaceCompositeKeyInput | null,
  ge?: ModelPresenceByPlaceCompositeKeyInput | null,
  gt?: ModelPresenceByPlaceCompositeKeyInput | null,
  between?: Array< ModelPresenceByPlaceCompositeKeyInput | null > | null,
  beginsWith?: ModelPresenceByPlaceCompositeKeyInput | null,
};

export type ModelPresenceByPlaceCompositeKeyInput = {
  startingDateTime?: string | null,
  endingDateTime?: string | null,
};

export type ModelPresenceByUserProfileCompositeKeyConditionInput = {
  eq?: ModelPresenceByUserProfileCompositeKeyInput | null,
  le?: ModelPresenceByUserProfileCompositeKeyInput | null,
  lt?: ModelPresenceByUserProfileCompositeKeyInput | null,
  ge?: ModelPresenceByUserProfileCompositeKeyInput | null,
  gt?: ModelPresenceByUserProfileCompositeKeyInput | null,
  between?: Array< ModelPresenceByUserProfileCompositeKeyInput | null > | null,
  beginsWith?: ModelPresenceByUserProfileCompositeKeyInput | null,
};

export type ModelPresenceByUserProfileCompositeKeyInput = {
  startingDateTime?: string | null,
  endingDateTime?: string | null,
};

export type ModelPresenceByGameCompositeKeyConditionInput = {
  eq?: ModelPresenceByGameCompositeKeyInput | null,
  le?: ModelPresenceByGameCompositeKeyInput | null,
  lt?: ModelPresenceByGameCompositeKeyInput | null,
  ge?: ModelPresenceByGameCompositeKeyInput | null,
  gt?: ModelPresenceByGameCompositeKeyInput | null,
  between?: Array< ModelPresenceByGameCompositeKeyInput | null > | null,
  beginsWith?: ModelPresenceByGameCompositeKeyInput | null,
};

export type ModelPresenceByGameCompositeKeyInput = {
  startingDateTime?: string | null,
  endingDateTime?: string | null,
};

export type ModelNotificationFilterInput = {
  id?: ModelIDInput | null,
  type?: ModelNotificationTypeInput | null,
  receiverProfileID?: ModelIDInput | null,
  friendshipRequestID?: ModelIDInput | null,
  presenceID?: ModelIDInput | null,
  senderProfileID?: ModelIDInput | null,
  and?: Array< ModelNotificationFilterInput | null > | null,
  or?: Array< ModelNotificationFilterInput | null > | null,
  not?: ModelNotificationFilterInput | null,
};

export type ModelNotificationConnection = {
  __typename: "ModelNotificationConnection",
  items:  Array<Notification | null >,
  nextToken?: string | null,
};

export type ModelJoinMeInvitationFilterInput = {
  id?: ModelIDInput | null,
  type?: ModeljoinMeInvitationTypeInput | null,
  status?: ModeljoinMeInvitationStatusInput | null,
  receiverProfileID?: ModelIDInput | null,
  senderProfileID?: ModelIDInput | null,
  gameID?: ModelIDInput | null,
  and?: Array< ModelJoinMeInvitationFilterInput | null > | null,
  or?: Array< ModelJoinMeInvitationFilterInput | null > | null,
  not?: ModelJoinMeInvitationFilterInput | null,
};

export type ModelJoinMeInvitationConnection = {
  __typename: "ModelJoinMeInvitationConnection",
  items:  Array<JoinMeInvitation | null >,
  nextToken?: string | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    email: string,
    phoneNumber?: string | null,
    profileID?: string | null,
    profile?:  {
      __typename: "UserProfile",
      id: string,
      email: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      userProfileUserId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    email: string,
    phoneNumber?: string | null,
    profileID?: string | null,
    profile?:  {
      __typename: "UserProfile",
      id: string,
      email: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      userProfileUserId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    email: string,
    phoneNumber?: string | null,
    profileID?: string | null,
    profile?:  {
      __typename: "UserProfile",
      id: string,
      email: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      userProfileUserId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateUserProfileMutationVariables = {
  input: CreateUserProfileInput,
  condition?: ModelUserProfileConditionInput | null,
};

export type CreateUserProfileMutation = {
  createUserProfile?:  {
    __typename: "UserProfile",
    id: string,
    email: string,
    username: string,
    user?:  {
      __typename: "User",
      id: string,
      email: string,
      phoneNumber?: string | null,
      profileID?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    friends?:  {
      __typename: "ModelFriendshipConnection",
      nextToken?: string | null,
    } | null,
    presenceList?:  {
      __typename: "ModelPresenceConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userProfileUserId?: string | null,
  } | null,
};

export type UpdateUserProfileMutationVariables = {
  input: UpdateUserProfileInput,
  condition?: ModelUserProfileConditionInput | null,
};

export type UpdateUserProfileMutation = {
  updateUserProfile?:  {
    __typename: "UserProfile",
    id: string,
    email: string,
    username: string,
    user?:  {
      __typename: "User",
      id: string,
      email: string,
      phoneNumber?: string | null,
      profileID?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    friends?:  {
      __typename: "ModelFriendshipConnection",
      nextToken?: string | null,
    } | null,
    presenceList?:  {
      __typename: "ModelPresenceConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userProfileUserId?: string | null,
  } | null,
};

export type DeleteUserProfileMutationVariables = {
  input: DeleteUserProfileInput,
  condition?: ModelUserProfileConditionInput | null,
};

export type DeleteUserProfileMutation = {
  deleteUserProfile?:  {
    __typename: "UserProfile",
    id: string,
    email: string,
    username: string,
    user?:  {
      __typename: "User",
      id: string,
      email: string,
      phoneNumber?: string | null,
      profileID?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    friends?:  {
      __typename: "ModelFriendshipConnection",
      nextToken?: string | null,
    } | null,
    presenceList?:  {
      __typename: "ModelPresenceConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userProfileUserId?: string | null,
  } | null,
};

export type CreateFriendshipMutationVariables = {
  input: CreateFriendshipInput,
  condition?: ModelFriendshipConditionInput | null,
};

export type CreateFriendshipMutation = {
  createFriendship?:  {
    __typename: "Friendship",
    id: string,
    userProfileID: string,
    friendProfileID: string,
    friendProfile?:  {
      __typename: "UserProfile",
      id: string,
      email: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      userProfileUserId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateFriendshipMutationVariables = {
  input: UpdateFriendshipInput,
  condition?: ModelFriendshipConditionInput | null,
};

export type UpdateFriendshipMutation = {
  updateFriendship?:  {
    __typename: "Friendship",
    id: string,
    userProfileID: string,
    friendProfileID: string,
    friendProfile?:  {
      __typename: "UserProfile",
      id: string,
      email: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      userProfileUserId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteFriendshipMutationVariables = {
  input: DeleteFriendshipInput,
  condition?: ModelFriendshipConditionInput | null,
};

export type DeleteFriendshipMutation = {
  deleteFriendship?:  {
    __typename: "Friendship",
    id: string,
    userProfileID: string,
    friendProfileID: string,
    friendProfile?:  {
      __typename: "UserProfile",
      id: string,
      email: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      userProfileUserId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateFriendshipRequestMutationVariables = {
  input: CreateFriendshipRequestInput,
  condition?: ModelFriendshipRequestConditionInput | null,
};

export type CreateFriendshipRequestMutation = {
  createFriendshipRequest?:  {
    __typename: "FriendshipRequest",
    id: string,
    status: FriendshipRequestStatus,
    senderProfileID: string,
    receiverProfileID: string,
    senderProfile?:  {
      __typename: "UserProfile",
      id: string,
      email: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      userProfileUserId?: string | null,
    } | null,
    receiverProfile?:  {
      __typename: "UserProfile",
      id: string,
      email: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      userProfileUserId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateFriendshipRequestMutationVariables = {
  input: UpdateFriendshipRequestInput,
  condition?: ModelFriendshipRequestConditionInput | null,
};

export type UpdateFriendshipRequestMutation = {
  updateFriendshipRequest?:  {
    __typename: "FriendshipRequest",
    id: string,
    status: FriendshipRequestStatus,
    senderProfileID: string,
    receiverProfileID: string,
    senderProfile?:  {
      __typename: "UserProfile",
      id: string,
      email: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      userProfileUserId?: string | null,
    } | null,
    receiverProfile?:  {
      __typename: "UserProfile",
      id: string,
      email: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      userProfileUserId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteFriendshipRequestMutationVariables = {
  input: DeleteFriendshipRequestInput,
  condition?: ModelFriendshipRequestConditionInput | null,
};

export type DeleteFriendshipRequestMutation = {
  deleteFriendshipRequest?:  {
    __typename: "FriendshipRequest",
    id: string,
    status: FriendshipRequestStatus,
    senderProfileID: string,
    receiverProfileID: string,
    senderProfile?:  {
      __typename: "UserProfile",
      id: string,
      email: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      userProfileUserId?: string | null,
    } | null,
    receiverProfile?:  {
      __typename: "UserProfile",
      id: string,
      email: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      userProfileUserId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePlaceMutationVariables = {
  input: CreatePlaceInput,
  condition?: ModelPlaceConditionInput | null,
};

export type CreatePlaceMutation = {
  createPlace?:  {
    __typename: "Place",
    id: string,
    name: string,
    address: string,
    gameList?:  {
      __typename: "ModelGameConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePlaceMutationVariables = {
  input: UpdatePlaceInput,
  condition?: ModelPlaceConditionInput | null,
};

export type UpdatePlaceMutation = {
  updatePlace?:  {
    __typename: "Place",
    id: string,
    name: string,
    address: string,
    gameList?:  {
      __typename: "ModelGameConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePlaceMutationVariables = {
  input: DeletePlaceInput,
  condition?: ModelPlaceConditionInput | null,
};

export type DeletePlaceMutation = {
  deletePlace?:  {
    __typename: "Place",
    id: string,
    name: string,
    address: string,
    gameList?:  {
      __typename: "ModelGameConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateGameMutationVariables = {
  input: CreateGameInput,
  condition?: ModelGameConditionInput | null,
};

export type CreateGameMutation = {
  createGame?:  {
    __typename: "Game",
    id: string,
    presenceList?:  {
      __typename: "ModelPresenceConnection",
      nextToken?: string | null,
    } | null,
    placeID: string,
    startingDateTime: string,
    endingDateTime: string,
    place?:  {
      __typename: "Place",
      id: string,
      name: string,
      address: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateGameMutationVariables = {
  input: UpdateGameInput,
  condition?: ModelGameConditionInput | null,
};

export type UpdateGameMutation = {
  updateGame?:  {
    __typename: "Game",
    id: string,
    presenceList?:  {
      __typename: "ModelPresenceConnection",
      nextToken?: string | null,
    } | null,
    placeID: string,
    startingDateTime: string,
    endingDateTime: string,
    place?:  {
      __typename: "Place",
      id: string,
      name: string,
      address: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteGameMutationVariables = {
  input: DeleteGameInput,
  condition?: ModelGameConditionInput | null,
};

export type DeleteGameMutation = {
  deleteGame?:  {
    __typename: "Game",
    id: string,
    presenceList?:  {
      __typename: "ModelPresenceConnection",
      nextToken?: string | null,
    } | null,
    placeID: string,
    startingDateTime: string,
    endingDateTime: string,
    place?:  {
      __typename: "Place",
      id: string,
      name: string,
      address: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePresenceMutationVariables = {
  input: CreatePresenceInput,
  condition?: ModelPresenceConditionInput | null,
};

export type CreatePresenceMutation = {
  createPresence?:  {
    __typename: "Presence",
    id: string,
    type: presenceType,
    placeID: string,
    userProfileID: string,
    gameID: string,
    game?:  {
      __typename: "Game",
      id: string,
      placeID: string,
      startingDateTime: string,
      endingDateTime: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    place?:  {
      __typename: "Place",
      id: string,
      name: string,
      address: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    userProfile?:  {
      __typename: "UserProfile",
      id: string,
      email: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      userProfileUserId?: string | null,
    } | null,
    startingDateTime: string,
    endingDateTime: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePresenceMutationVariables = {
  input: UpdatePresenceInput,
  condition?: ModelPresenceConditionInput | null,
};

export type UpdatePresenceMutation = {
  updatePresence?:  {
    __typename: "Presence",
    id: string,
    type: presenceType,
    placeID: string,
    userProfileID: string,
    gameID: string,
    game?:  {
      __typename: "Game",
      id: string,
      placeID: string,
      startingDateTime: string,
      endingDateTime: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    place?:  {
      __typename: "Place",
      id: string,
      name: string,
      address: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    userProfile?:  {
      __typename: "UserProfile",
      id: string,
      email: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      userProfileUserId?: string | null,
    } | null,
    startingDateTime: string,
    endingDateTime: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePresenceMutationVariables = {
  input: DeletePresenceInput,
  condition?: ModelPresenceConditionInput | null,
};

export type DeletePresenceMutation = {
  deletePresence?:  {
    __typename: "Presence",
    id: string,
    type: presenceType,
    placeID: string,
    userProfileID: string,
    gameID: string,
    game?:  {
      __typename: "Game",
      id: string,
      placeID: string,
      startingDateTime: string,
      endingDateTime: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    place?:  {
      __typename: "Place",
      id: string,
      name: string,
      address: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    userProfile?:  {
      __typename: "UserProfile",
      id: string,
      email: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      userProfileUserId?: string | null,
    } | null,
    startingDateTime: string,
    endingDateTime: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateNotificationMutationVariables = {
  input: CreateNotificationInput,
  condition?: ModelNotificationConditionInput | null,
};

export type CreateNotificationMutation = {
  createNotification?:  {
    __typename: "Notification",
    id: string,
    type: NotificationType,
    receiverProfileID: string,
    friendshipRequestID?: string | null,
    friendshipRequest?:  {
      __typename: "FriendshipRequest",
      id: string,
      status: FriendshipRequestStatus,
      senderProfileID: string,
      receiverProfileID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    presenceID?: string | null,
    senderProfileID?: string | null,
    senderProfile?:  {
      __typename: "UserProfile",
      id: string,
      email: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      userProfileUserId?: string | null,
    } | null,
    receiverProfile?:  {
      __typename: "UserProfile",
      id: string,
      email: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      userProfileUserId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateNotificationMutationVariables = {
  input: UpdateNotificationInput,
  condition?: ModelNotificationConditionInput | null,
};

export type UpdateNotificationMutation = {
  updateNotification?:  {
    __typename: "Notification",
    id: string,
    type: NotificationType,
    receiverProfileID: string,
    friendshipRequestID?: string | null,
    friendshipRequest?:  {
      __typename: "FriendshipRequest",
      id: string,
      status: FriendshipRequestStatus,
      senderProfileID: string,
      receiverProfileID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    presenceID?: string | null,
    senderProfileID?: string | null,
    senderProfile?:  {
      __typename: "UserProfile",
      id: string,
      email: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      userProfileUserId?: string | null,
    } | null,
    receiverProfile?:  {
      __typename: "UserProfile",
      id: string,
      email: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      userProfileUserId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteNotificationMutationVariables = {
  input: DeleteNotificationInput,
  condition?: ModelNotificationConditionInput | null,
};

export type DeleteNotificationMutation = {
  deleteNotification?:  {
    __typename: "Notification",
    id: string,
    type: NotificationType,
    receiverProfileID: string,
    friendshipRequestID?: string | null,
    friendshipRequest?:  {
      __typename: "FriendshipRequest",
      id: string,
      status: FriendshipRequestStatus,
      senderProfileID: string,
      receiverProfileID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    presenceID?: string | null,
    senderProfileID?: string | null,
    senderProfile?:  {
      __typename: "UserProfile",
      id: string,
      email: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      userProfileUserId?: string | null,
    } | null,
    receiverProfile?:  {
      __typename: "UserProfile",
      id: string,
      email: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      userProfileUserId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateJoinMeInvitationMutationVariables = {
  input: CreateJoinMeInvitationInput,
  condition?: ModelJoinMeInvitationConditionInput | null,
};

export type CreateJoinMeInvitationMutation = {
  createJoinMeInvitation?:  {
    __typename: "JoinMeInvitation",
    id: string,
    type: joinMeInvitationType,
    status: joinMeInvitationStatus,
    receiverProfileID: string,
    senderProfileID: string,
    gameID: string,
    receiverProfile?:  {
      __typename: "UserProfile",
      id: string,
      email: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      userProfileUserId?: string | null,
    } | null,
    senderProfile?:  {
      __typename: "UserProfile",
      id: string,
      email: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      userProfileUserId?: string | null,
    } | null,
    game?:  {
      __typename: "Game",
      id: string,
      placeID: string,
      startingDateTime: string,
      endingDateTime: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateJoinMeInvitationMutationVariables = {
  input: UpdateJoinMeInvitationInput,
  condition?: ModelJoinMeInvitationConditionInput | null,
};

export type UpdateJoinMeInvitationMutation = {
  updateJoinMeInvitation?:  {
    __typename: "JoinMeInvitation",
    id: string,
    type: joinMeInvitationType,
    status: joinMeInvitationStatus,
    receiverProfileID: string,
    senderProfileID: string,
    gameID: string,
    receiverProfile?:  {
      __typename: "UserProfile",
      id: string,
      email: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      userProfileUserId?: string | null,
    } | null,
    senderProfile?:  {
      __typename: "UserProfile",
      id: string,
      email: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      userProfileUserId?: string | null,
    } | null,
    game?:  {
      __typename: "Game",
      id: string,
      placeID: string,
      startingDateTime: string,
      endingDateTime: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteJoinMeInvitationMutationVariables = {
  input: DeleteJoinMeInvitationInput,
  condition?: ModelJoinMeInvitationConditionInput | null,
};

export type DeleteJoinMeInvitationMutation = {
  deleteJoinMeInvitation?:  {
    __typename: "JoinMeInvitation",
    id: string,
    type: joinMeInvitationType,
    status: joinMeInvitationStatus,
    receiverProfileID: string,
    senderProfileID: string,
    gameID: string,
    receiverProfile?:  {
      __typename: "UserProfile",
      id: string,
      email: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      userProfileUserId?: string | null,
    } | null,
    senderProfile?:  {
      __typename: "UserProfile",
      id: string,
      email: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      userProfileUserId?: string | null,
    } | null,
    game?:  {
      __typename: "Game",
      id: string,
      placeID: string,
      startingDateTime: string,
      endingDateTime: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type PlayMutationMutationVariables = {
  input?: PlayMutationInput | null,
};

export type PlayMutationMutation = {
  playMutation?:  Array< {
    __typename: "Game",
    id: string,
    presenceList?:  {
      __typename: "ModelPresenceConnection",
      nextToken?: string | null,
    } | null,
    placeID: string,
    startingDateTime: string,
    endingDateTime: string,
    place?:  {
      __typename: "Place",
      id: string,
      name: string,
      address: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null > | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    email: string,
    phoneNumber?: string | null,
    profileID?: string | null,
    profile?:  {
      __typename: "UserProfile",
      id: string,
      email: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      userProfileUserId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      email: string,
      phoneNumber?: string | null,
      profileID?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserProfileQueryVariables = {
  id: string,
};

export type GetUserProfileQuery = {
  getUserProfile?:  {
    __typename: "UserProfile",
    id: string,
    email: string,
    username: string,
    user?:  {
      __typename: "User",
      id: string,
      email: string,
      phoneNumber?: string | null,
      profileID?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    friends?:  {
      __typename: "ModelFriendshipConnection",
      nextToken?: string | null,
    } | null,
    presenceList?:  {
      __typename: "ModelPresenceConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userProfileUserId?: string | null,
  } | null,
};

export type ListUserProfilesQueryVariables = {
  filter?: ModelUserProfileFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserProfilesQuery = {
  listUserProfiles?:  {
    __typename: "ModelUserProfileConnection",
    items:  Array< {
      __typename: "UserProfile",
      id: string,
      email: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      userProfileUserId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetFriendshipQueryVariables = {
  id: string,
};

export type GetFriendshipQuery = {
  getFriendship?:  {
    __typename: "Friendship",
    id: string,
    userProfileID: string,
    friendProfileID: string,
    friendProfile?:  {
      __typename: "UserProfile",
      id: string,
      email: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      userProfileUserId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListFriendshipsQueryVariables = {
  filter?: ModelFriendshipFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFriendshipsQuery = {
  listFriendships?:  {
    __typename: "ModelFriendshipConnection",
    items:  Array< {
      __typename: "Friendship",
      id: string,
      userProfileID: string,
      friendProfileID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type FriendshipsByUserProfileIDQueryVariables = {
  userProfileID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelFriendshipFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type FriendshipsByUserProfileIDQuery = {
  friendshipsByUserProfileID?:  {
    __typename: "ModelFriendshipConnection",
    items:  Array< {
      __typename: "Friendship",
      id: string,
      userProfileID: string,
      friendProfileID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetFriendshipRequestQueryVariables = {
  id: string,
};

export type GetFriendshipRequestQuery = {
  getFriendshipRequest?:  {
    __typename: "FriendshipRequest",
    id: string,
    status: FriendshipRequestStatus,
    senderProfileID: string,
    receiverProfileID: string,
    senderProfile?:  {
      __typename: "UserProfile",
      id: string,
      email: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      userProfileUserId?: string | null,
    } | null,
    receiverProfile?:  {
      __typename: "UserProfile",
      id: string,
      email: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      userProfileUserId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListFriendshipRequestsQueryVariables = {
  filter?: ModelFriendshipRequestFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFriendshipRequestsQuery = {
  listFriendshipRequests?:  {
    __typename: "ModelFriendshipRequestConnection",
    items:  Array< {
      __typename: "FriendshipRequest",
      id: string,
      status: FriendshipRequestStatus,
      senderProfileID: string,
      receiverProfileID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPlaceQueryVariables = {
  id: string,
};

export type GetPlaceQuery = {
  getPlace?:  {
    __typename: "Place",
    id: string,
    name: string,
    address: string,
    gameList?:  {
      __typename: "ModelGameConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPlacesQueryVariables = {
  filter?: ModelPlaceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPlacesQuery = {
  listPlaces?:  {
    __typename: "ModelPlaceConnection",
    items:  Array< {
      __typename: "Place",
      id: string,
      name: string,
      address: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetGameQueryVariables = {
  id: string,
};

export type GetGameQuery = {
  getGame?:  {
    __typename: "Game",
    id: string,
    presenceList?:  {
      __typename: "ModelPresenceConnection",
      nextToken?: string | null,
    } | null,
    placeID: string,
    startingDateTime: string,
    endingDateTime: string,
    place?:  {
      __typename: "Place",
      id: string,
      name: string,
      address: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListGamesQueryVariables = {
  filter?: ModelGameFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGamesQuery = {
  listGames?:  {
    __typename: "ModelGameConnection",
    items:  Array< {
      __typename: "Game",
      id: string,
      placeID: string,
      startingDateTime: string,
      endingDateTime: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GamesByPlaceIDAndStartingDateTimeAndEndingDateTimeQueryVariables = {
  placeID: string,
  startingDateTimeEndingDateTime?: ModelGameByPlaceCompositeKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelGameFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GamesByPlaceIDAndStartingDateTimeAndEndingDateTimeQuery = {
  gamesByPlaceIDAndStartingDateTimeAndEndingDateTime?:  {
    __typename: "ModelGameConnection",
    items:  Array< {
      __typename: "Game",
      id: string,
      placeID: string,
      startingDateTime: string,
      endingDateTime: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPresenceQueryVariables = {
  id: string,
};

export type GetPresenceQuery = {
  getPresence?:  {
    __typename: "Presence",
    id: string,
    type: presenceType,
    placeID: string,
    userProfileID: string,
    gameID: string,
    game?:  {
      __typename: "Game",
      id: string,
      placeID: string,
      startingDateTime: string,
      endingDateTime: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    place?:  {
      __typename: "Place",
      id: string,
      name: string,
      address: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    userProfile?:  {
      __typename: "UserProfile",
      id: string,
      email: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      userProfileUserId?: string | null,
    } | null,
    startingDateTime: string,
    endingDateTime: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPresencesQueryVariables = {
  filter?: ModelPresenceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPresencesQuery = {
  listPresences?:  {
    __typename: "ModelPresenceConnection",
    items:  Array< {
      __typename: "Presence",
      id: string,
      type: presenceType,
      placeID: string,
      userProfileID: string,
      gameID: string,
      startingDateTime: string,
      endingDateTime: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type PresencesByPlaceIDAndStartingDateTimeAndEndingDateTimeQueryVariables = {
  placeID: string,
  startingDateTimeEndingDateTime?: ModelPresenceByPlaceCompositeKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPresenceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PresencesByPlaceIDAndStartingDateTimeAndEndingDateTimeQuery = {
  presencesByPlaceIDAndStartingDateTimeAndEndingDateTime?:  {
    __typename: "ModelPresenceConnection",
    items:  Array< {
      __typename: "Presence",
      id: string,
      type: presenceType,
      placeID: string,
      userProfileID: string,
      gameID: string,
      startingDateTime: string,
      endingDateTime: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type PresencesByUserProfileIDAndStartingDateTimeAndEndingDateTimeQueryVariables = {
  userProfileID: string,
  startingDateTimeEndingDateTime?: ModelPresenceByUserProfileCompositeKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPresenceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PresencesByUserProfileIDAndStartingDateTimeAndEndingDateTimeQuery = {
  presencesByUserProfileIDAndStartingDateTimeAndEndingDateTime?:  {
    __typename: "ModelPresenceConnection",
    items:  Array< {
      __typename: "Presence",
      id: string,
      type: presenceType,
      placeID: string,
      userProfileID: string,
      gameID: string,
      startingDateTime: string,
      endingDateTime: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type PresencesByGameIDAndStartingDateTimeAndEndingDateTimeQueryVariables = {
  gameID: string,
  startingDateTimeEndingDateTime?: ModelPresenceByGameCompositeKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPresenceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PresencesByGameIDAndStartingDateTimeAndEndingDateTimeQuery = {
  presencesByGameIDAndStartingDateTimeAndEndingDateTime?:  {
    __typename: "ModelPresenceConnection",
    items:  Array< {
      __typename: "Presence",
      id: string,
      type: presenceType,
      placeID: string,
      userProfileID: string,
      gameID: string,
      startingDateTime: string,
      endingDateTime: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetNotificationQueryVariables = {
  id: string,
};

export type GetNotificationQuery = {
  getNotification?:  {
    __typename: "Notification",
    id: string,
    type: NotificationType,
    receiverProfileID: string,
    friendshipRequestID?: string | null,
    friendshipRequest?:  {
      __typename: "FriendshipRequest",
      id: string,
      status: FriendshipRequestStatus,
      senderProfileID: string,
      receiverProfileID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    presenceID?: string | null,
    senderProfileID?: string | null,
    senderProfile?:  {
      __typename: "UserProfile",
      id: string,
      email: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      userProfileUserId?: string | null,
    } | null,
    receiverProfile?:  {
      __typename: "UserProfile",
      id: string,
      email: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      userProfileUserId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListNotificationsQueryVariables = {
  filter?: ModelNotificationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListNotificationsQuery = {
  listNotifications?:  {
    __typename: "ModelNotificationConnection",
    items:  Array< {
      __typename: "Notification",
      id: string,
      type: NotificationType,
      receiverProfileID: string,
      friendshipRequestID?: string | null,
      presenceID?: string | null,
      senderProfileID?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetJoinMeInvitationQueryVariables = {
  id: string,
};

export type GetJoinMeInvitationQuery = {
  getJoinMeInvitation?:  {
    __typename: "JoinMeInvitation",
    id: string,
    type: joinMeInvitationType,
    status: joinMeInvitationStatus,
    receiverProfileID: string,
    senderProfileID: string,
    gameID: string,
    receiverProfile?:  {
      __typename: "UserProfile",
      id: string,
      email: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      userProfileUserId?: string | null,
    } | null,
    senderProfile?:  {
      __typename: "UserProfile",
      id: string,
      email: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      userProfileUserId?: string | null,
    } | null,
    game?:  {
      __typename: "Game",
      id: string,
      placeID: string,
      startingDateTime: string,
      endingDateTime: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListJoinMeInvitationsQueryVariables = {
  filter?: ModelJoinMeInvitationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListJoinMeInvitationsQuery = {
  listJoinMeInvitations?:  {
    __typename: "ModelJoinMeInvitationConnection",
    items:  Array< {
      __typename: "JoinMeInvitation",
      id: string,
      type: joinMeInvitationType,
      status: joinMeInvitationStatus,
      receiverProfileID: string,
      senderProfileID: string,
      gameID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    email: string,
    phoneNumber?: string | null,
    profileID?: string | null,
    profile?:  {
      __typename: "UserProfile",
      id: string,
      email: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      userProfileUserId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    email: string,
    phoneNumber?: string | null,
    profileID?: string | null,
    profile?:  {
      __typename: "UserProfile",
      id: string,
      email: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      userProfileUserId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    email: string,
    phoneNumber?: string | null,
    profileID?: string | null,
    profile?:  {
      __typename: "UserProfile",
      id: string,
      email: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      userProfileUserId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUserProfileSubscription = {
  onCreateUserProfile?:  {
    __typename: "UserProfile",
    id: string,
    email: string,
    username: string,
    user?:  {
      __typename: "User",
      id: string,
      email: string,
      phoneNumber?: string | null,
      profileID?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    friends?:  {
      __typename: "ModelFriendshipConnection",
      nextToken?: string | null,
    } | null,
    presenceList?:  {
      __typename: "ModelPresenceConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userProfileUserId?: string | null,
  } | null,
};

export type OnUpdateUserProfileSubscription = {
  onUpdateUserProfile?:  {
    __typename: "UserProfile",
    id: string,
    email: string,
    username: string,
    user?:  {
      __typename: "User",
      id: string,
      email: string,
      phoneNumber?: string | null,
      profileID?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    friends?:  {
      __typename: "ModelFriendshipConnection",
      nextToken?: string | null,
    } | null,
    presenceList?:  {
      __typename: "ModelPresenceConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userProfileUserId?: string | null,
  } | null,
};

export type OnDeleteUserProfileSubscription = {
  onDeleteUserProfile?:  {
    __typename: "UserProfile",
    id: string,
    email: string,
    username: string,
    user?:  {
      __typename: "User",
      id: string,
      email: string,
      phoneNumber?: string | null,
      profileID?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    friends?:  {
      __typename: "ModelFriendshipConnection",
      nextToken?: string | null,
    } | null,
    presenceList?:  {
      __typename: "ModelPresenceConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userProfileUserId?: string | null,
  } | null,
};

export type OnCreateFriendshipSubscription = {
  onCreateFriendship?:  {
    __typename: "Friendship",
    id: string,
    userProfileID: string,
    friendProfileID: string,
    friendProfile?:  {
      __typename: "UserProfile",
      id: string,
      email: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      userProfileUserId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateFriendshipSubscription = {
  onUpdateFriendship?:  {
    __typename: "Friendship",
    id: string,
    userProfileID: string,
    friendProfileID: string,
    friendProfile?:  {
      __typename: "UserProfile",
      id: string,
      email: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      userProfileUserId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteFriendshipSubscription = {
  onDeleteFriendship?:  {
    __typename: "Friendship",
    id: string,
    userProfileID: string,
    friendProfileID: string,
    friendProfile?:  {
      __typename: "UserProfile",
      id: string,
      email: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      userProfileUserId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateFriendshipRequestSubscription = {
  onCreateFriendshipRequest?:  {
    __typename: "FriendshipRequest",
    id: string,
    status: FriendshipRequestStatus,
    senderProfileID: string,
    receiverProfileID: string,
    senderProfile?:  {
      __typename: "UserProfile",
      id: string,
      email: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      userProfileUserId?: string | null,
    } | null,
    receiverProfile?:  {
      __typename: "UserProfile",
      id: string,
      email: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      userProfileUserId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateFriendshipRequestSubscription = {
  onUpdateFriendshipRequest?:  {
    __typename: "FriendshipRequest",
    id: string,
    status: FriendshipRequestStatus,
    senderProfileID: string,
    receiverProfileID: string,
    senderProfile?:  {
      __typename: "UserProfile",
      id: string,
      email: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      userProfileUserId?: string | null,
    } | null,
    receiverProfile?:  {
      __typename: "UserProfile",
      id: string,
      email: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      userProfileUserId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteFriendshipRequestSubscription = {
  onDeleteFriendshipRequest?:  {
    __typename: "FriendshipRequest",
    id: string,
    status: FriendshipRequestStatus,
    senderProfileID: string,
    receiverProfileID: string,
    senderProfile?:  {
      __typename: "UserProfile",
      id: string,
      email: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      userProfileUserId?: string | null,
    } | null,
    receiverProfile?:  {
      __typename: "UserProfile",
      id: string,
      email: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      userProfileUserId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePlaceSubscription = {
  onCreatePlace?:  {
    __typename: "Place",
    id: string,
    name: string,
    address: string,
    gameList?:  {
      __typename: "ModelGameConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePlaceSubscription = {
  onUpdatePlace?:  {
    __typename: "Place",
    id: string,
    name: string,
    address: string,
    gameList?:  {
      __typename: "ModelGameConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePlaceSubscription = {
  onDeletePlace?:  {
    __typename: "Place",
    id: string,
    name: string,
    address: string,
    gameList?:  {
      __typename: "ModelGameConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateGameSubscription = {
  onCreateGame?:  {
    __typename: "Game",
    id: string,
    presenceList?:  {
      __typename: "ModelPresenceConnection",
      nextToken?: string | null,
    } | null,
    placeID: string,
    startingDateTime: string,
    endingDateTime: string,
    place?:  {
      __typename: "Place",
      id: string,
      name: string,
      address: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateGameSubscription = {
  onUpdateGame?:  {
    __typename: "Game",
    id: string,
    presenceList?:  {
      __typename: "ModelPresenceConnection",
      nextToken?: string | null,
    } | null,
    placeID: string,
    startingDateTime: string,
    endingDateTime: string,
    place?:  {
      __typename: "Place",
      id: string,
      name: string,
      address: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteGameSubscription = {
  onDeleteGame?:  {
    __typename: "Game",
    id: string,
    presenceList?:  {
      __typename: "ModelPresenceConnection",
      nextToken?: string | null,
    } | null,
    placeID: string,
    startingDateTime: string,
    endingDateTime: string,
    place?:  {
      __typename: "Place",
      id: string,
      name: string,
      address: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePresenceSubscription = {
  onCreatePresence?:  {
    __typename: "Presence",
    id: string,
    type: presenceType,
    placeID: string,
    userProfileID: string,
    gameID: string,
    game?:  {
      __typename: "Game",
      id: string,
      placeID: string,
      startingDateTime: string,
      endingDateTime: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    place?:  {
      __typename: "Place",
      id: string,
      name: string,
      address: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    userProfile?:  {
      __typename: "UserProfile",
      id: string,
      email: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      userProfileUserId?: string | null,
    } | null,
    startingDateTime: string,
    endingDateTime: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePresenceSubscription = {
  onUpdatePresence?:  {
    __typename: "Presence",
    id: string,
    type: presenceType,
    placeID: string,
    userProfileID: string,
    gameID: string,
    game?:  {
      __typename: "Game",
      id: string,
      placeID: string,
      startingDateTime: string,
      endingDateTime: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    place?:  {
      __typename: "Place",
      id: string,
      name: string,
      address: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    userProfile?:  {
      __typename: "UserProfile",
      id: string,
      email: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      userProfileUserId?: string | null,
    } | null,
    startingDateTime: string,
    endingDateTime: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePresenceSubscription = {
  onDeletePresence?:  {
    __typename: "Presence",
    id: string,
    type: presenceType,
    placeID: string,
    userProfileID: string,
    gameID: string,
    game?:  {
      __typename: "Game",
      id: string,
      placeID: string,
      startingDateTime: string,
      endingDateTime: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    place?:  {
      __typename: "Place",
      id: string,
      name: string,
      address: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    userProfile?:  {
      __typename: "UserProfile",
      id: string,
      email: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      userProfileUserId?: string | null,
    } | null,
    startingDateTime: string,
    endingDateTime: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateNotificationSubscription = {
  onCreateNotification?:  {
    __typename: "Notification",
    id: string,
    type: NotificationType,
    receiverProfileID: string,
    friendshipRequestID?: string | null,
    friendshipRequest?:  {
      __typename: "FriendshipRequest",
      id: string,
      status: FriendshipRequestStatus,
      senderProfileID: string,
      receiverProfileID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    presenceID?: string | null,
    senderProfileID?: string | null,
    senderProfile?:  {
      __typename: "UserProfile",
      id: string,
      email: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      userProfileUserId?: string | null,
    } | null,
    receiverProfile?:  {
      __typename: "UserProfile",
      id: string,
      email: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      userProfileUserId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateNotificationSubscription = {
  onUpdateNotification?:  {
    __typename: "Notification",
    id: string,
    type: NotificationType,
    receiverProfileID: string,
    friendshipRequestID?: string | null,
    friendshipRequest?:  {
      __typename: "FriendshipRequest",
      id: string,
      status: FriendshipRequestStatus,
      senderProfileID: string,
      receiverProfileID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    presenceID?: string | null,
    senderProfileID?: string | null,
    senderProfile?:  {
      __typename: "UserProfile",
      id: string,
      email: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      userProfileUserId?: string | null,
    } | null,
    receiverProfile?:  {
      __typename: "UserProfile",
      id: string,
      email: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      userProfileUserId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteNotificationSubscription = {
  onDeleteNotification?:  {
    __typename: "Notification",
    id: string,
    type: NotificationType,
    receiverProfileID: string,
    friendshipRequestID?: string | null,
    friendshipRequest?:  {
      __typename: "FriendshipRequest",
      id: string,
      status: FriendshipRequestStatus,
      senderProfileID: string,
      receiverProfileID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    presenceID?: string | null,
    senderProfileID?: string | null,
    senderProfile?:  {
      __typename: "UserProfile",
      id: string,
      email: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      userProfileUserId?: string | null,
    } | null,
    receiverProfile?:  {
      __typename: "UserProfile",
      id: string,
      email: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      userProfileUserId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateJoinMeInvitationSubscription = {
  onCreateJoinMeInvitation?:  {
    __typename: "JoinMeInvitation",
    id: string,
    type: joinMeInvitationType,
    status: joinMeInvitationStatus,
    receiverProfileID: string,
    senderProfileID: string,
    gameID: string,
    receiverProfile?:  {
      __typename: "UserProfile",
      id: string,
      email: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      userProfileUserId?: string | null,
    } | null,
    senderProfile?:  {
      __typename: "UserProfile",
      id: string,
      email: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      userProfileUserId?: string | null,
    } | null,
    game?:  {
      __typename: "Game",
      id: string,
      placeID: string,
      startingDateTime: string,
      endingDateTime: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateJoinMeInvitationSubscription = {
  onUpdateJoinMeInvitation?:  {
    __typename: "JoinMeInvitation",
    id: string,
    type: joinMeInvitationType,
    status: joinMeInvitationStatus,
    receiverProfileID: string,
    senderProfileID: string,
    gameID: string,
    receiverProfile?:  {
      __typename: "UserProfile",
      id: string,
      email: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      userProfileUserId?: string | null,
    } | null,
    senderProfile?:  {
      __typename: "UserProfile",
      id: string,
      email: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      userProfileUserId?: string | null,
    } | null,
    game?:  {
      __typename: "Game",
      id: string,
      placeID: string,
      startingDateTime: string,
      endingDateTime: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteJoinMeInvitationSubscription = {
  onDeleteJoinMeInvitation?:  {
    __typename: "JoinMeInvitation",
    id: string,
    type: joinMeInvitationType,
    status: joinMeInvitationStatus,
    receiverProfileID: string,
    senderProfileID: string,
    gameID: string,
    receiverProfile?:  {
      __typename: "UserProfile",
      id: string,
      email: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      userProfileUserId?: string | null,
    } | null,
    senderProfile?:  {
      __typename: "UserProfile",
      id: string,
      email: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      userProfileUserId?: string | null,
    } | null,
    game?:  {
      __typename: "Game",
      id: string,
      placeID: string,
      startingDateTime: string,
      endingDateTime: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateNotificationByReceiverSubscriptionVariables = {
  receiverProfileID: string,
};

export type OnCreateNotificationByReceiverSubscription = {
  onCreateNotificationByReceiver?:  {
    __typename: "Notification",
    id: string,
    type: NotificationType,
    receiverProfileID: string,
    friendshipRequestID?: string | null,
    friendshipRequest?:  {
      __typename: "FriendshipRequest",
      id: string,
      status: FriendshipRequestStatus,
      senderProfileID: string,
      receiverProfileID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    presenceID?: string | null,
    senderProfileID?: string | null,
    senderProfile?:  {
      __typename: "UserProfile",
      id: string,
      email: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      userProfileUserId?: string | null,
    } | null,
    receiverProfile?:  {
      __typename: "UserProfile",
      id: string,
      email: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      userProfileUserId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
