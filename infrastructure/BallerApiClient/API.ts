/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateBlogInput = {
  id?: string | null,
  name: string,
};

export type ModelBlogConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelBlogConditionInput | null > | null,
  or?: Array< ModelBlogConditionInput | null > | null,
  not?: ModelBlogConditionInput | null,
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

export type Blog = {
  __typename: "Blog",
  id: string,
  name: string,
  posts?: ModelPostConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelPostConnection = {
  __typename: "ModelPostConnection",
  items:  Array<Post | null >,
  nextToken?: string | null,
};

export type Post = {
  __typename: "Post",
  id: string,
  title: string,
  blogID: string,
  blog?: Blog | null,
  comments?: ModelCommentConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelCommentConnection = {
  __typename: "ModelCommentConnection",
  items:  Array<Comment | null >,
  nextToken?: string | null,
};

export type Comment = {
  __typename: "Comment",
  id: string,
  postID: string,
  post?: Post | null,
  content: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateBlogInput = {
  id: string,
  name?: string | null,
};

export type DeleteBlogInput = {
  id: string,
};

export type CreatePostInput = {
  id?: string | null,
  title: string,
  blogID: string,
};

export type ModelPostConditionInput = {
  title?: ModelStringInput | null,
  blogID?: ModelIDInput | null,
  and?: Array< ModelPostConditionInput | null > | null,
  or?: Array< ModelPostConditionInput | null > | null,
  not?: ModelPostConditionInput | null,
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

export type UpdatePostInput = {
  id: string,
  title?: string | null,
  blogID?: string | null,
};

export type DeletePostInput = {
  id: string,
};

export type CreateCommentInput = {
  id?: string | null,
  postID: string,
  content: string,
};

export type ModelCommentConditionInput = {
  postID?: ModelIDInput | null,
  content?: ModelStringInput | null,
  and?: Array< ModelCommentConditionInput | null > | null,
  or?: Array< ModelCommentConditionInput | null > | null,
  not?: ModelCommentConditionInput | null,
};

export type UpdateCommentInput = {
  id: string,
  postID?: string | null,
  content?: string | null,
};

export type DeleteCommentInput = {
  id: string,
};

export type CreateUserDocInput = {
  id?: string | null,
  profileID?: string | null,
  email: string,
  deviceToken?: string | null,
  phoneNumber?: string | null,
};

export type ModelUserDocConditionInput = {
  profileID?: ModelIDInput | null,
  email?: ModelStringInput | null,
  deviceToken?: ModelStringInput | null,
  phoneNumber?: ModelStringInput | null,
  and?: Array< ModelUserDocConditionInput | null > | null,
  or?: Array< ModelUserDocConditionInput | null > | null,
  not?: ModelUserDocConditionInput | null,
};

export type UserDoc = {
  __typename: "UserDoc",
  id: string,
  profileID?: string | null,
  email: string,
  deviceToken?: string | null,
  phoneNumber?: string | null,
  createdAt: string,
  updatedAt: string,
  uProfile?: Uprofile | null,
};

export type Uprofile = {
  __typename: "Uprofile",
  id: string,
  username: string,
  name?: string | null,
  userDocID: string,
  currentPlaceID?: string | null,
  expoPushToken?: string | null,
  createdAt: string,
  updatedAt: string,
  userDoc?: UserDoc | null,
  attendings?: ModelUserPlaceConnectionConnection | null,
  placeTimeSlots?: ModelPlaceTimeSlotUserPlaceConnectionConnection | null,
  currentPlace?: Place | null,
  friends?: ModelFriendConnectionConnection | null,
  sentNotifications?: ModelNotificationConnection | null,
  notifications?: ModelNotificationConnection | null,
};

export type ModelUserPlaceConnectionConnection = {
  __typename: "ModelUserPlaceConnectionConnection",
  items:  Array<UserPlaceConnection | null >,
  nextToken?: string | null,
};

export type UserPlaceConnection = {
  __typename: "UserPlaceConnection",
  id: string,
  profileID: string,
  placeID: string,
  arrivingTime?: string | null,
  departureTime?: string | null,
  placeTimeSoltUserPlaceConnection?: Place | null,
  createdAt: string,
  updatedAt: string,
  uProfile?: Uprofile | null,
  place?: Place | null,
};

export type Place = {
  __typename: "Place",
  id: string,
  name: string,
  address: string,
  coords: Coords,
  createdAt: string,
  updatedAt: string,
  currentPlayers?: ModelUprofileConnection | null,
  timeSlots?: ModelPlaceTimeSlotConnection | null,
};

export type Coords = {
  __typename: "Coords",
  lon: number,
  lat: number,
};

export type ModelUprofileConnection = {
  __typename: "ModelUprofileConnection",
  items:  Array<Uprofile | null >,
  nextToken?: string | null,
};

export type ModelPlaceTimeSlotConnection = {
  __typename: "ModelPlaceTimeSlotConnection",
  items:  Array<PlaceTimeSlot | null >,
  nextToken?: string | null,
};

export type PlaceTimeSlot = {
  __typename: "PlaceTimeSlot",
  id: string,
  numAttendings?: number | null,
  myDate?: MyDate | null,
  dateTime?: string | null,
  placeID: string,
  startingHour: string,
  endingHour: string,
  createdAt: string,
  updatedAt: string,
  attendings?: ModelPlaceTimeSlotUserPlaceConnectionConnection | null,
  place?: Place | null,
};

export type MyDate = {
  __typename: "MyDate",
  weekDay: string,
  monthDay: string,
  month: string,
  year: string,
};

export type ModelPlaceTimeSlotUserPlaceConnectionConnection = {
  __typename: "ModelPlaceTimeSlotUserPlaceConnectionConnection",
  items:  Array<PlaceTimeSlotUserPlaceConnection | null >,
  nextToken?: string | null,
};

export type PlaceTimeSlotUserPlaceConnection = {
  __typename: "PlaceTimeSlotUserPlaceConnection",
  id: string,
  attendingID: string,
  profileID?: string | null,
  placeTimeSlotID: string,
  createdAt?: string | null,
  updatedAt: string,
  uProfile?: Uprofile | null,
  attending?: UserPlaceConnection | null,
  timeSlot?: PlaceTimeSlot | null,
};

export type ModelFriendConnectionConnection = {
  __typename: "ModelFriendConnectionConnection",
  items:  Array<FriendConnection | null >,
  nextToken?: string | null,
};

export type FriendConnection = {
  __typename: "FriendConnection",
  id: string,
  userProfileID: string,
  friendProfileID: string,
  createdAt: string,
  updatedAt: string,
  friendProfile?: Uprofile | null,
};

export type ModelNotificationConnection = {
  __typename: "ModelNotificationConnection",
  items:  Array<Notification | null >,
  nextToken?: string | null,
};

export type Notification = {
  __typename: "Notification",
  id: string,
  placeID?: string | null,
  placeName?: string | null,
  arrivingTime?: string | null,
  departureTime?: string | null,
  senderProfileID: string,
  message: string,
  receiverProfileID: string,
  photo?: string | null,
  createdAt?: string | null,
  type: NotifType,
  status: Status,
  placeTimeSlotID?: string | null,
  updatedAt: string,
  userProfile?: Uprofile | null,
  senderProfile?: Uprofile | null,
  placeTimeSlot?: PlaceTimeSlot | null,
};

export enum NotifType {
  newFriend = "newFriend",
  friendRequest = "friendRequest",
  eventInvitation = "eventInvitation",
  friendPlaying = "friendPlaying",
  hotCourt = "hotCourt",
  casualInvitation = "casualInvitation",
  friendJoining = "friendJoining",
  playersJoining = "playersJoining",
}


export enum Status {
  noStatus = "noStatus",
  pending = "pending",
  accepted = "accepted",
  refused = "refused",
}


export type UpdateUserDocInput = {
  id: string,
  profileID?: string | null,
  email?: string | null,
  deviceToken?: string | null,
  phoneNumber?: string | null,
};

export type DeleteUserDocInput = {
  id: string,
};

export type CreateUprofileInput = {
  id?: string | null,
  username: string,
  name?: string | null,
  userDocID: string,
  currentPlaceID?: string | null,
  expoPushToken?: string | null,
};

export type ModelUprofileConditionInput = {
  username?: ModelStringInput | null,
  name?: ModelStringInput | null,
  userDocID?: ModelIDInput | null,
  currentPlaceID?: ModelIDInput | null,
  expoPushToken?: ModelStringInput | null,
  and?: Array< ModelUprofileConditionInput | null > | null,
  or?: Array< ModelUprofileConditionInput | null > | null,
  not?: ModelUprofileConditionInput | null,
};

export type UpdateUprofileInput = {
  id: string,
  username?: string | null,
  name?: string | null,
  userDocID?: string | null,
  currentPlaceID?: string | null,
  expoPushToken?: string | null,
};

export type DeleteUprofileInput = {
  id: string,
};

export type CreateUserPlaceConnectionInput = {
  id?: string | null,
  profileID: string,
  placeID: string,
  arrivingTime?: string | null,
  departureTime?: string | null,
};

export type ModelUserPlaceConnectionConditionInput = {
  profileID?: ModelIDInput | null,
  placeID?: ModelIDInput | null,
  arrivingTime?: ModelStringInput | null,
  departureTime?: ModelStringInput | null,
  and?: Array< ModelUserPlaceConnectionConditionInput | null > | null,
  or?: Array< ModelUserPlaceConnectionConditionInput | null > | null,
  not?: ModelUserPlaceConnectionConditionInput | null,
};

export type UpdateUserPlaceConnectionInput = {
  id: string,
  profileID?: string | null,
  placeID?: string | null,
  arrivingTime?: string | null,
  departureTime?: string | null,
};

export type DeleteUserPlaceConnectionInput = {
  id: string,
};

export type CreatePlaceTimeSlotInput = {
  id?: string | null,
  numAttendings?: number | null,
  myDate?: MyDateInput | null,
  dateTime?: string | null,
  placeID: string,
  startingHour: string,
  endingHour: string,
};

export type MyDateInput = {
  weekDay: string,
  monthDay: string,
  month: string,
  year: string,
};

export type ModelPlaceTimeSlotConditionInput = {
  numAttendings?: ModelIntInput | null,
  dateTime?: ModelStringInput | null,
  placeID?: ModelIDInput | null,
  startingHour?: ModelStringInput | null,
  endingHour?: ModelStringInput | null,
  and?: Array< ModelPlaceTimeSlotConditionInput | null > | null,
  or?: Array< ModelPlaceTimeSlotConditionInput | null > | null,
  not?: ModelPlaceTimeSlotConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdatePlaceTimeSlotInput = {
  id: string,
  numAttendings?: number | null,
  myDate?: MyDateInput | null,
  dateTime?: string | null,
  placeID?: string | null,
  startingHour?: string | null,
  endingHour?: string | null,
};

export type DeletePlaceTimeSlotInput = {
  id: string,
};

export type CreatePlaceTimeSlotUserPlaceConnectionInput = {
  id?: string | null,
  attendingID: string,
  profileID?: string | null,
  placeTimeSlotID: string,
  createdAt?: string | null,
};

export type ModelPlaceTimeSlotUserPlaceConnectionConditionInput = {
  attendingID?: ModelIDInput | null,
  profileID?: ModelIDInput | null,
  placeTimeSlotID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelPlaceTimeSlotUserPlaceConnectionConditionInput | null > | null,
  or?: Array< ModelPlaceTimeSlotUserPlaceConnectionConditionInput | null > | null,
  not?: ModelPlaceTimeSlotUserPlaceConnectionConditionInput | null,
};

export type UpdatePlaceTimeSlotUserPlaceConnectionInput = {
  id: string,
  attendingID?: string | null,
  profileID?: string | null,
  placeTimeSlotID?: string | null,
  createdAt?: string | null,
};

export type DeletePlaceTimeSlotUserPlaceConnectionInput = {
  id: string,
};

export type CreatePlaceInput = {
  id?: string | null,
  name: string,
  address: string,
  coords: CoordsInput,
};

export type CoordsInput = {
  lon: number,
  lat: number,
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
  coords?: CoordsInput | null,
};

export type DeletePlaceInput = {
  id: string,
};

export type CreateFriendConnectionInput = {
  id?: string | null,
  userProfileID: string,
  friendProfileID: string,
};

export type ModelFriendConnectionConditionInput = {
  userProfileID?: ModelIDInput | null,
  friendProfileID?: ModelIDInput | null,
  and?: Array< ModelFriendConnectionConditionInput | null > | null,
  or?: Array< ModelFriendConnectionConditionInput | null > | null,
  not?: ModelFriendConnectionConditionInput | null,
};

export type UpdateFriendConnectionInput = {
  id: string,
  userProfileID?: string | null,
  friendProfileID?: string | null,
};

export type DeleteFriendConnectionInput = {
  id: string,
};

export type CreateNotificationInput = {
  id?: string | null,
  placeID?: string | null,
  placeName?: string | null,
  arrivingTime?: string | null,
  departureTime?: string | null,
  senderProfileID: string,
  message: string,
  receiverProfileID: string,
  photo?: string | null,
  createdAt?: string | null,
  type: NotifType,
  status: Status,
  placeTimeSlotID?: string | null,
};

export type ModelNotificationConditionInput = {
  placeID?: ModelIDInput | null,
  placeName?: ModelStringInput | null,
  arrivingTime?: ModelStringInput | null,
  departureTime?: ModelStringInput | null,
  senderProfileID?: ModelIDInput | null,
  message?: ModelStringInput | null,
  receiverProfileID?: ModelIDInput | null,
  photo?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  type?: ModelNotifTypeInput | null,
  status?: ModelStatusInput | null,
  placeTimeSlotID?: ModelIDInput | null,
  and?: Array< ModelNotificationConditionInput | null > | null,
  or?: Array< ModelNotificationConditionInput | null > | null,
  not?: ModelNotificationConditionInput | null,
};

export type ModelNotifTypeInput = {
  eq?: NotifType | null,
  ne?: NotifType | null,
};

export type ModelStatusInput = {
  eq?: Status | null,
  ne?: Status | null,
};

export type UpdateNotificationInput = {
  id: string,
  placeID?: string | null,
  placeName?: string | null,
  arrivingTime?: string | null,
  departureTime?: string | null,
  senderProfileID?: string | null,
  message?: string | null,
  receiverProfileID?: string | null,
  photo?: string | null,
  createdAt?: string | null,
  type?: NotifType | null,
  status?: Status | null,
  placeTimeSlotID?: string | null,
};

export type DeleteNotificationInput = {
  id: string,
};

export type CreatePushNotificationsBatchInput = {
  id?: string | null,
  payloadsList?: string | null,
};

export type ModelPushNotificationsBatchConditionInput = {
  payloadsList?: ModelStringInput | null,
  and?: Array< ModelPushNotificationsBatchConditionInput | null > | null,
  or?: Array< ModelPushNotificationsBatchConditionInput | null > | null,
  not?: ModelPushNotificationsBatchConditionInput | null,
};

export type PushNotificationsBatch = {
  __typename: "PushNotificationsBatch",
  id: string,
  payloadsList?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdatePushNotificationsBatchInput = {
  id: string,
  payloadsList?: string | null,
};

export type DeletePushNotificationsBatchInput = {
  id: string,
};

export type CreatePushNotificationsInput = {
  id?: string | null,
  body: string,
  userTokens: string,
  data: string,
  type?: NotifType | null,
};

export type ModelPushNotificationsConditionInput = {
  body?: ModelStringInput | null,
  userTokens?: ModelStringInput | null,
  data?: ModelStringInput | null,
  type?: ModelNotifTypeInput | null,
  and?: Array< ModelPushNotificationsConditionInput | null > | null,
  or?: Array< ModelPushNotificationsConditionInput | null > | null,
  not?: ModelPushNotificationsConditionInput | null,
};

export type PushNotifications = {
  __typename: "PushNotifications",
  id?: string | null,
  body: string,
  userTokens: string,
  data: string,
  type?: NotifType | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdatePushNotificationsInput = {
  id: string,
  body?: string | null,
  userTokens?: string | null,
  data?: string | null,
  type?: NotifType | null,
};

export type DeletePushNotificationsInput = {
  id: string,
};

export type ModelBlogFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelBlogFilterInput | null > | null,
  or?: Array< ModelBlogFilterInput | null > | null,
  not?: ModelBlogFilterInput | null,
};

export type ModelBlogConnection = {
  __typename: "ModelBlogConnection",
  items:  Array<Blog | null >,
  nextToken?: string | null,
};

export type ModelPostFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  blogID?: ModelIDInput | null,
  and?: Array< ModelPostFilterInput | null > | null,
  or?: Array< ModelPostFilterInput | null > | null,
  not?: ModelPostFilterInput | null,
};

export type ModelCommentFilterInput = {
  id?: ModelIDInput | null,
  postID?: ModelIDInput | null,
  content?: ModelStringInput | null,
  and?: Array< ModelCommentFilterInput | null > | null,
  or?: Array< ModelCommentFilterInput | null > | null,
  not?: ModelCommentFilterInput | null,
};

export type ModelUserDocFilterInput = {
  id?: ModelIDInput | null,
  profileID?: ModelIDInput | null,
  email?: ModelStringInput | null,
  deviceToken?: ModelStringInput | null,
  phoneNumber?: ModelStringInput | null,
  and?: Array< ModelUserDocFilterInput | null > | null,
  or?: Array< ModelUserDocFilterInput | null > | null,
  not?: ModelUserDocFilterInput | null,
};

export type ModelUserDocConnection = {
  __typename: "ModelUserDocConnection",
  items:  Array<UserDoc | null >,
  nextToken?: string | null,
};

export type ModelUprofileFilterInput = {
  id?: ModelIDInput | null,
  username?: ModelStringInput | null,
  name?: ModelStringInput | null,
  userDocID?: ModelIDInput | null,
  currentPlaceID?: ModelIDInput | null,
  expoPushToken?: ModelStringInput | null,
  and?: Array< ModelUprofileFilterInput | null > | null,
  or?: Array< ModelUprofileFilterInput | null > | null,
  not?: ModelUprofileFilterInput | null,
};

export type ModelUserPlaceConnectionFilterInput = {
  id?: ModelIDInput | null,
  profileID?: ModelIDInput | null,
  placeID?: ModelIDInput | null,
  arrivingTime?: ModelStringInput | null,
  departureTime?: ModelStringInput | null,
  and?: Array< ModelUserPlaceConnectionFilterInput | null > | null,
  or?: Array< ModelUserPlaceConnectionFilterInput | null > | null,
  not?: ModelUserPlaceConnectionFilterInput | null,
};

export type ModelPlaceTimeSlotFilterInput = {
  id?: ModelIDInput | null,
  numAttendings?: ModelIntInput | null,
  dateTime?: ModelStringInput | null,
  placeID?: ModelIDInput | null,
  startingHour?: ModelStringInput | null,
  endingHour?: ModelStringInput | null,
  and?: Array< ModelPlaceTimeSlotFilterInput | null > | null,
  or?: Array< ModelPlaceTimeSlotFilterInput | null > | null,
  not?: ModelPlaceTimeSlotFilterInput | null,
};

export type ModelPlaceTimeSlotUserPlaceConnectionFilterInput = {
  id?: ModelIDInput | null,
  attendingID?: ModelIDInput | null,
  profileID?: ModelIDInput | null,
  placeTimeSlotID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelPlaceTimeSlotUserPlaceConnectionFilterInput | null > | null,
  or?: Array< ModelPlaceTimeSlotUserPlaceConnectionFilterInput | null > | null,
  not?: ModelPlaceTimeSlotUserPlaceConnectionFilterInput | null,
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

export type ModelFriendConnectionFilterInput = {
  id?: ModelIDInput | null,
  userProfileID?: ModelIDInput | null,
  friendProfileID?: ModelIDInput | null,
  and?: Array< ModelFriendConnectionFilterInput | null > | null,
  or?: Array< ModelFriendConnectionFilterInput | null > | null,
  not?: ModelFriendConnectionFilterInput | null,
};

export type ModelNotificationFilterInput = {
  id?: ModelIDInput | null,
  placeID?: ModelIDInput | null,
  placeName?: ModelStringInput | null,
  arrivingTime?: ModelStringInput | null,
  departureTime?: ModelStringInput | null,
  senderProfileID?: ModelIDInput | null,
  message?: ModelStringInput | null,
  receiverProfileID?: ModelIDInput | null,
  photo?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  type?: ModelNotifTypeInput | null,
  status?: ModelStatusInput | null,
  placeTimeSlotID?: ModelIDInput | null,
  and?: Array< ModelNotificationFilterInput | null > | null,
  or?: Array< ModelNotificationFilterInput | null > | null,
  not?: ModelNotificationFilterInput | null,
};

export type ModelPushNotificationsBatchFilterInput = {
  id?: ModelIDInput | null,
  payloadsList?: ModelStringInput | null,
  and?: Array< ModelPushNotificationsBatchFilterInput | null > | null,
  or?: Array< ModelPushNotificationsBatchFilterInput | null > | null,
  not?: ModelPushNotificationsBatchFilterInput | null,
};

export type ModelPushNotificationsBatchConnection = {
  __typename: "ModelPushNotificationsBatchConnection",
  items:  Array<PushNotificationsBatch | null >,
  nextToken?: string | null,
};

export type ModelPushNotificationsFilterInput = {
  id?: ModelIDInput | null,
  body?: ModelStringInput | null,
  userTokens?: ModelStringInput | null,
  data?: ModelStringInput | null,
  type?: ModelNotifTypeInput | null,
  and?: Array< ModelPushNotificationsFilterInput | null > | null,
  or?: Array< ModelPushNotificationsFilterInput | null > | null,
  not?: ModelPushNotificationsFilterInput | null,
};

export type ModelPushNotificationsConnection = {
  __typename: "ModelPushNotificationsConnection",
  items:  Array<PushNotifications | null >,
  nextToken?: string | null,
};

export type DeleteAttendanceMutationVariables = {
  id: string,
};

export type DeleteAttendanceMutation = {
  deleteAttendance?: boolean | null,
};

export type CreateBlogMutationVariables = {
  input: CreateBlogInput,
  condition?: ModelBlogConditionInput | null,
};

export type CreateBlogMutation = {
  createBlog?:  {
    __typename: "Blog",
    id: string,
    name: string,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateBlogMutationVariables = {
  input: UpdateBlogInput,
  condition?: ModelBlogConditionInput | null,
};

export type UpdateBlogMutation = {
  updateBlog?:  {
    __typename: "Blog",
    id: string,
    name: string,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteBlogMutationVariables = {
  input: DeleteBlogInput,
  condition?: ModelBlogConditionInput | null,
};

export type DeleteBlogMutation = {
  deleteBlog?:  {
    __typename: "Blog",
    id: string,
    name: string,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePostMutationVariables = {
  input: CreatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type CreatePostMutation = {
  createPost?:  {
    __typename: "Post",
    id: string,
    title: string,
    blogID: string,
    blog?:  {
      __typename: "Blog",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePostMutationVariables = {
  input: UpdatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type UpdatePostMutation = {
  updatePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    blogID: string,
    blog?:  {
      __typename: "Blog",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePostMutationVariables = {
  input: DeletePostInput,
  condition?: ModelPostConditionInput | null,
};

export type DeletePostMutation = {
  deletePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    blogID: string,
    blog?:  {
      __typename: "Blog",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCommentMutationVariables = {
  input: CreateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type CreateCommentMutation = {
  createComment?:  {
    __typename: "Comment",
    id: string,
    postID: string,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      blogID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    content: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCommentMutationVariables = {
  input: UpdateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type UpdateCommentMutation = {
  updateComment?:  {
    __typename: "Comment",
    id: string,
    postID: string,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      blogID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    content: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCommentMutationVariables = {
  input: DeleteCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type DeleteCommentMutation = {
  deleteComment?:  {
    __typename: "Comment",
    id: string,
    postID: string,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      blogID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    content: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateUserDocMutationVariables = {
  input: CreateUserDocInput,
  condition?: ModelUserDocConditionInput | null,
};

export type CreateUserDocMutation = {
  createUserDoc?:  {
    __typename: "UserDoc",
    id: string,
    profileID?: string | null,
    email: string,
    deviceToken?: string | null,
    phoneNumber?: string | null,
    createdAt: string,
    updatedAt: string,
    uProfile?:  {
      __typename: "Uprofile",
      id: string,
      username: string,
      name?: string | null,
      userDocID: string,
      currentPlaceID?: string | null,
      expoPushToken?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type UpdateUserDocMutationVariables = {
  input: UpdateUserDocInput,
  condition?: ModelUserDocConditionInput | null,
};

export type UpdateUserDocMutation = {
  updateUserDoc?:  {
    __typename: "UserDoc",
    id: string,
    profileID?: string | null,
    email: string,
    deviceToken?: string | null,
    phoneNumber?: string | null,
    createdAt: string,
    updatedAt: string,
    uProfile?:  {
      __typename: "Uprofile",
      id: string,
      username: string,
      name?: string | null,
      userDocID: string,
      currentPlaceID?: string | null,
      expoPushToken?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type DeleteUserDocMutationVariables = {
  input: DeleteUserDocInput,
  condition?: ModelUserDocConditionInput | null,
};

export type DeleteUserDocMutation = {
  deleteUserDoc?:  {
    __typename: "UserDoc",
    id: string,
    profileID?: string | null,
    email: string,
    deviceToken?: string | null,
    phoneNumber?: string | null,
    createdAt: string,
    updatedAt: string,
    uProfile?:  {
      __typename: "Uprofile",
      id: string,
      username: string,
      name?: string | null,
      userDocID: string,
      currentPlaceID?: string | null,
      expoPushToken?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type CreateUprofileMutationVariables = {
  input: CreateUprofileInput,
  condition?: ModelUprofileConditionInput | null,
};

export type CreateUprofileMutation = {
  createUprofile?:  {
    __typename: "Uprofile",
    id: string,
    username: string,
    name?: string | null,
    userDocID: string,
    currentPlaceID?: string | null,
    expoPushToken?: string | null,
    createdAt: string,
    updatedAt: string,
    userDoc?:  {
      __typename: "UserDoc",
      id: string,
      profileID?: string | null,
      email: string,
      deviceToken?: string | null,
      phoneNumber?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    attendings?:  {
      __typename: "ModelUserPlaceConnectionConnection",
      nextToken?: string | null,
    } | null,
    placeTimeSlots?:  {
      __typename: "ModelPlaceTimeSlotUserPlaceConnectionConnection",
      nextToken?: string | null,
    } | null,
    currentPlace?:  {
      __typename: "Place",
      id: string,
      name: string,
      address: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    friends?:  {
      __typename: "ModelFriendConnectionConnection",
      nextToken?: string | null,
    } | null,
    sentNotifications?:  {
      __typename: "ModelNotificationConnection",
      nextToken?: string | null,
    } | null,
    notifications?:  {
      __typename: "ModelNotificationConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type UpdateUprofileMutationVariables = {
  input: UpdateUprofileInput,
  condition?: ModelUprofileConditionInput | null,
};

export type UpdateUprofileMutation = {
  updateUprofile?:  {
    __typename: "Uprofile",
    id: string,
    username: string,
    name?: string | null,
    userDocID: string,
    currentPlaceID?: string | null,
    expoPushToken?: string | null,
    createdAt: string,
    updatedAt: string,
    userDoc?:  {
      __typename: "UserDoc",
      id: string,
      profileID?: string | null,
      email: string,
      deviceToken?: string | null,
      phoneNumber?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    attendings?:  {
      __typename: "ModelUserPlaceConnectionConnection",
      nextToken?: string | null,
    } | null,
    placeTimeSlots?:  {
      __typename: "ModelPlaceTimeSlotUserPlaceConnectionConnection",
      nextToken?: string | null,
    } | null,
    currentPlace?:  {
      __typename: "Place",
      id: string,
      name: string,
      address: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    friends?:  {
      __typename: "ModelFriendConnectionConnection",
      nextToken?: string | null,
    } | null,
    sentNotifications?:  {
      __typename: "ModelNotificationConnection",
      nextToken?: string | null,
    } | null,
    notifications?:  {
      __typename: "ModelNotificationConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type DeleteUprofileMutationVariables = {
  input: DeleteUprofileInput,
  condition?: ModelUprofileConditionInput | null,
};

export type DeleteUprofileMutation = {
  deleteUprofile?:  {
    __typename: "Uprofile",
    id: string,
    username: string,
    name?: string | null,
    userDocID: string,
    currentPlaceID?: string | null,
    expoPushToken?: string | null,
    createdAt: string,
    updatedAt: string,
    userDoc?:  {
      __typename: "UserDoc",
      id: string,
      profileID?: string | null,
      email: string,
      deviceToken?: string | null,
      phoneNumber?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    attendings?:  {
      __typename: "ModelUserPlaceConnectionConnection",
      nextToken?: string | null,
    } | null,
    placeTimeSlots?:  {
      __typename: "ModelPlaceTimeSlotUserPlaceConnectionConnection",
      nextToken?: string | null,
    } | null,
    currentPlace?:  {
      __typename: "Place",
      id: string,
      name: string,
      address: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    friends?:  {
      __typename: "ModelFriendConnectionConnection",
      nextToken?: string | null,
    } | null,
    sentNotifications?:  {
      __typename: "ModelNotificationConnection",
      nextToken?: string | null,
    } | null,
    notifications?:  {
      __typename: "ModelNotificationConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type CreateUserPlaceConnectionMutationVariables = {
  input: CreateUserPlaceConnectionInput,
  condition?: ModelUserPlaceConnectionConditionInput | null,
};

export type CreateUserPlaceConnectionMutation = {
  createUserPlaceConnection?:  {
    __typename: "UserPlaceConnection",
    id: string,
    profileID: string,
    placeID: string,
    arrivingTime?: string | null,
    departureTime?: string | null,
    placeTimeSoltUserPlaceConnection?:  {
      __typename: "Place",
      id: string,
      name: string,
      address: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    uProfile?:  {
      __typename: "Uprofile",
      id: string,
      username: string,
      name?: string | null,
      userDocID: string,
      currentPlaceID?: string | null,
      expoPushToken?: string | null,
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
  } | null,
};

export type UpdateUserPlaceConnectionMutationVariables = {
  input: UpdateUserPlaceConnectionInput,
  condition?: ModelUserPlaceConnectionConditionInput | null,
};

export type UpdateUserPlaceConnectionMutation = {
  updateUserPlaceConnection?:  {
    __typename: "UserPlaceConnection",
    id: string,
    profileID: string,
    placeID: string,
    arrivingTime?: string | null,
    departureTime?: string | null,
    placeTimeSoltUserPlaceConnection?:  {
      __typename: "Place",
      id: string,
      name: string,
      address: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    uProfile?:  {
      __typename: "Uprofile",
      id: string,
      username: string,
      name?: string | null,
      userDocID: string,
      currentPlaceID?: string | null,
      expoPushToken?: string | null,
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
  } | null,
};

export type DeleteUserPlaceConnectionMutationVariables = {
  input: DeleteUserPlaceConnectionInput,
  condition?: ModelUserPlaceConnectionConditionInput | null,
};

export type DeleteUserPlaceConnectionMutation = {
  deleteUserPlaceConnection?:  {
    __typename: "UserPlaceConnection",
    id: string,
    profileID: string,
    placeID: string,
    arrivingTime?: string | null,
    departureTime?: string | null,
    placeTimeSoltUserPlaceConnection?:  {
      __typename: "Place",
      id: string,
      name: string,
      address: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    uProfile?:  {
      __typename: "Uprofile",
      id: string,
      username: string,
      name?: string | null,
      userDocID: string,
      currentPlaceID?: string | null,
      expoPushToken?: string | null,
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
  } | null,
};

export type CreatePlaceTimeSlotMutationVariables = {
  input: CreatePlaceTimeSlotInput,
  condition?: ModelPlaceTimeSlotConditionInput | null,
};

export type CreatePlaceTimeSlotMutation = {
  createPlaceTimeSlot?:  {
    __typename: "PlaceTimeSlot",
    id: string,
    numAttendings?: number | null,
    myDate?:  {
      __typename: "MyDate",
      weekDay: string,
      monthDay: string,
      month: string,
      year: string,
    } | null,
    dateTime?: string | null,
    placeID: string,
    startingHour: string,
    endingHour: string,
    createdAt: string,
    updatedAt: string,
    attendings?:  {
      __typename: "ModelPlaceTimeSlotUserPlaceConnectionConnection",
      nextToken?: string | null,
    } | null,
    place?:  {
      __typename: "Place",
      id: string,
      name: string,
      address: string,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type UpdatePlaceTimeSlotMutationVariables = {
  input: UpdatePlaceTimeSlotInput,
  condition?: ModelPlaceTimeSlotConditionInput | null,
};

export type UpdatePlaceTimeSlotMutation = {
  updatePlaceTimeSlot?:  {
    __typename: "PlaceTimeSlot",
    id: string,
    numAttendings?: number | null,
    myDate?:  {
      __typename: "MyDate",
      weekDay: string,
      monthDay: string,
      month: string,
      year: string,
    } | null,
    dateTime?: string | null,
    placeID: string,
    startingHour: string,
    endingHour: string,
    createdAt: string,
    updatedAt: string,
    attendings?:  {
      __typename: "ModelPlaceTimeSlotUserPlaceConnectionConnection",
      nextToken?: string | null,
    } | null,
    place?:  {
      __typename: "Place",
      id: string,
      name: string,
      address: string,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type DeletePlaceTimeSlotMutationVariables = {
  input: DeletePlaceTimeSlotInput,
  condition?: ModelPlaceTimeSlotConditionInput | null,
};

export type DeletePlaceTimeSlotMutation = {
  deletePlaceTimeSlot?:  {
    __typename: "PlaceTimeSlot",
    id: string,
    numAttendings?: number | null,
    myDate?:  {
      __typename: "MyDate",
      weekDay: string,
      monthDay: string,
      month: string,
      year: string,
    } | null,
    dateTime?: string | null,
    placeID: string,
    startingHour: string,
    endingHour: string,
    createdAt: string,
    updatedAt: string,
    attendings?:  {
      __typename: "ModelPlaceTimeSlotUserPlaceConnectionConnection",
      nextToken?: string | null,
    } | null,
    place?:  {
      __typename: "Place",
      id: string,
      name: string,
      address: string,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type CreatePlaceTimeSlotUserPlaceConnectionMutationVariables = {
  input: CreatePlaceTimeSlotUserPlaceConnectionInput,
  condition?: ModelPlaceTimeSlotUserPlaceConnectionConditionInput | null,
};

export type CreatePlaceTimeSlotUserPlaceConnectionMutation = {
  createPlaceTimeSlotUserPlaceConnection?:  {
    __typename: "PlaceTimeSlotUserPlaceConnection",
    id: string,
    attendingID: string,
    profileID?: string | null,
    placeTimeSlotID: string,
    createdAt?: string | null,
    updatedAt: string,
    uProfile?:  {
      __typename: "Uprofile",
      id: string,
      username: string,
      name?: string | null,
      userDocID: string,
      currentPlaceID?: string | null,
      expoPushToken?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    attending?:  {
      __typename: "UserPlaceConnection",
      id: string,
      profileID: string,
      placeID: string,
      arrivingTime?: string | null,
      departureTime?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    timeSlot?:  {
      __typename: "PlaceTimeSlot",
      id: string,
      numAttendings?: number | null,
      dateTime?: string | null,
      placeID: string,
      startingHour: string,
      endingHour: string,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type UpdatePlaceTimeSlotUserPlaceConnectionMutationVariables = {
  input: UpdatePlaceTimeSlotUserPlaceConnectionInput,
  condition?: ModelPlaceTimeSlotUserPlaceConnectionConditionInput | null,
};

export type UpdatePlaceTimeSlotUserPlaceConnectionMutation = {
  updatePlaceTimeSlotUserPlaceConnection?:  {
    __typename: "PlaceTimeSlotUserPlaceConnection",
    id: string,
    attendingID: string,
    profileID?: string | null,
    placeTimeSlotID: string,
    createdAt?: string | null,
    updatedAt: string,
    uProfile?:  {
      __typename: "Uprofile",
      id: string,
      username: string,
      name?: string | null,
      userDocID: string,
      currentPlaceID?: string | null,
      expoPushToken?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    attending?:  {
      __typename: "UserPlaceConnection",
      id: string,
      profileID: string,
      placeID: string,
      arrivingTime?: string | null,
      departureTime?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    timeSlot?:  {
      __typename: "PlaceTimeSlot",
      id: string,
      numAttendings?: number | null,
      dateTime?: string | null,
      placeID: string,
      startingHour: string,
      endingHour: string,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type DeletePlaceTimeSlotUserPlaceConnectionMutationVariables = {
  input: DeletePlaceTimeSlotUserPlaceConnectionInput,
  condition?: ModelPlaceTimeSlotUserPlaceConnectionConditionInput | null,
};

export type DeletePlaceTimeSlotUserPlaceConnectionMutation = {
  deletePlaceTimeSlotUserPlaceConnection?:  {
    __typename: "PlaceTimeSlotUserPlaceConnection",
    id: string,
    attendingID: string,
    profileID?: string | null,
    placeTimeSlotID: string,
    createdAt?: string | null,
    updatedAt: string,
    uProfile?:  {
      __typename: "Uprofile",
      id: string,
      username: string,
      name?: string | null,
      userDocID: string,
      currentPlaceID?: string | null,
      expoPushToken?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    attending?:  {
      __typename: "UserPlaceConnection",
      id: string,
      profileID: string,
      placeID: string,
      arrivingTime?: string | null,
      departureTime?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    timeSlot?:  {
      __typename: "PlaceTimeSlot",
      id: string,
      numAttendings?: number | null,
      dateTime?: string | null,
      placeID: string,
      startingHour: string,
      endingHour: string,
      createdAt: string,
      updatedAt: string,
    } | null,
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
    coords:  {
      __typename: "Coords",
      lon: number,
      lat: number,
    },
    createdAt: string,
    updatedAt: string,
    currentPlayers?:  {
      __typename: "ModelUprofileConnection",
      nextToken?: string | null,
    } | null,
    timeSlots?:  {
      __typename: "ModelPlaceTimeSlotConnection",
      nextToken?: string | null,
    } | null,
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
    coords:  {
      __typename: "Coords",
      lon: number,
      lat: number,
    },
    createdAt: string,
    updatedAt: string,
    currentPlayers?:  {
      __typename: "ModelUprofileConnection",
      nextToken?: string | null,
    } | null,
    timeSlots?:  {
      __typename: "ModelPlaceTimeSlotConnection",
      nextToken?: string | null,
    } | null,
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
    coords:  {
      __typename: "Coords",
      lon: number,
      lat: number,
    },
    createdAt: string,
    updatedAt: string,
    currentPlayers?:  {
      __typename: "ModelUprofileConnection",
      nextToken?: string | null,
    } | null,
    timeSlots?:  {
      __typename: "ModelPlaceTimeSlotConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type CreateFriendConnectionMutationVariables = {
  input: CreateFriendConnectionInput,
  condition?: ModelFriendConnectionConditionInput | null,
};

export type CreateFriendConnectionMutation = {
  createFriendConnection?:  {
    __typename: "FriendConnection",
    id: string,
    userProfileID: string,
    friendProfileID: string,
    createdAt: string,
    updatedAt: string,
    friendProfile?:  {
      __typename: "Uprofile",
      id: string,
      username: string,
      name?: string | null,
      userDocID: string,
      currentPlaceID?: string | null,
      expoPushToken?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type UpdateFriendConnectionMutationVariables = {
  input: UpdateFriendConnectionInput,
  condition?: ModelFriendConnectionConditionInput | null,
};

export type UpdateFriendConnectionMutation = {
  updateFriendConnection?:  {
    __typename: "FriendConnection",
    id: string,
    userProfileID: string,
    friendProfileID: string,
    createdAt: string,
    updatedAt: string,
    friendProfile?:  {
      __typename: "Uprofile",
      id: string,
      username: string,
      name?: string | null,
      userDocID: string,
      currentPlaceID?: string | null,
      expoPushToken?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type DeleteFriendConnectionMutationVariables = {
  input: DeleteFriendConnectionInput,
  condition?: ModelFriendConnectionConditionInput | null,
};

export type DeleteFriendConnectionMutation = {
  deleteFriendConnection?:  {
    __typename: "FriendConnection",
    id: string,
    userProfileID: string,
    friendProfileID: string,
    createdAt: string,
    updatedAt: string,
    friendProfile?:  {
      __typename: "Uprofile",
      id: string,
      username: string,
      name?: string | null,
      userDocID: string,
      currentPlaceID?: string | null,
      expoPushToken?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
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
    placeID?: string | null,
    placeName?: string | null,
    arrivingTime?: string | null,
    departureTime?: string | null,
    senderProfileID: string,
    message: string,
    receiverProfileID: string,
    photo?: string | null,
    createdAt?: string | null,
    type: NotifType,
    status: Status,
    placeTimeSlotID?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "Uprofile",
      id: string,
      username: string,
      name?: string | null,
      userDocID: string,
      currentPlaceID?: string | null,
      expoPushToken?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    senderProfile?:  {
      __typename: "Uprofile",
      id: string,
      username: string,
      name?: string | null,
      userDocID: string,
      currentPlaceID?: string | null,
      expoPushToken?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    placeTimeSlot?:  {
      __typename: "PlaceTimeSlot",
      id: string,
      numAttendings?: number | null,
      dateTime?: string | null,
      placeID: string,
      startingHour: string,
      endingHour: string,
      createdAt: string,
      updatedAt: string,
    } | null,
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
    placeID?: string | null,
    placeName?: string | null,
    arrivingTime?: string | null,
    departureTime?: string | null,
    senderProfileID: string,
    message: string,
    receiverProfileID: string,
    photo?: string | null,
    createdAt?: string | null,
    type: NotifType,
    status: Status,
    placeTimeSlotID?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "Uprofile",
      id: string,
      username: string,
      name?: string | null,
      userDocID: string,
      currentPlaceID?: string | null,
      expoPushToken?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    senderProfile?:  {
      __typename: "Uprofile",
      id: string,
      username: string,
      name?: string | null,
      userDocID: string,
      currentPlaceID?: string | null,
      expoPushToken?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    placeTimeSlot?:  {
      __typename: "PlaceTimeSlot",
      id: string,
      numAttendings?: number | null,
      dateTime?: string | null,
      placeID: string,
      startingHour: string,
      endingHour: string,
      createdAt: string,
      updatedAt: string,
    } | null,
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
    placeID?: string | null,
    placeName?: string | null,
    arrivingTime?: string | null,
    departureTime?: string | null,
    senderProfileID: string,
    message: string,
    receiverProfileID: string,
    photo?: string | null,
    createdAt?: string | null,
    type: NotifType,
    status: Status,
    placeTimeSlotID?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "Uprofile",
      id: string,
      username: string,
      name?: string | null,
      userDocID: string,
      currentPlaceID?: string | null,
      expoPushToken?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    senderProfile?:  {
      __typename: "Uprofile",
      id: string,
      username: string,
      name?: string | null,
      userDocID: string,
      currentPlaceID?: string | null,
      expoPushToken?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    placeTimeSlot?:  {
      __typename: "PlaceTimeSlot",
      id: string,
      numAttendings?: number | null,
      dateTime?: string | null,
      placeID: string,
      startingHour: string,
      endingHour: string,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type CreatePushNotificationsBatchMutationVariables = {
  input: CreatePushNotificationsBatchInput,
  condition?: ModelPushNotificationsBatchConditionInput | null,
};

export type CreatePushNotificationsBatchMutation = {
  createPushNotificationsBatch?:  {
    __typename: "PushNotificationsBatch",
    id: string,
    payloadsList?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePushNotificationsBatchMutationVariables = {
  input: UpdatePushNotificationsBatchInput,
  condition?: ModelPushNotificationsBatchConditionInput | null,
};

export type UpdatePushNotificationsBatchMutation = {
  updatePushNotificationsBatch?:  {
    __typename: "PushNotificationsBatch",
    id: string,
    payloadsList?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePushNotificationsBatchMutationVariables = {
  input: DeletePushNotificationsBatchInput,
  condition?: ModelPushNotificationsBatchConditionInput | null,
};

export type DeletePushNotificationsBatchMutation = {
  deletePushNotificationsBatch?:  {
    __typename: "PushNotificationsBatch",
    id: string,
    payloadsList?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateAttendanceMutationVariables = {
  arrivingTime: string,
  departureTime?: string | null,
  placeID: string,
  profileID: string,
};

export type CreateAttendanceMutation = {
  createAttendance?:  {
    __typename: "PlaceTimeSlotUserPlaceConnection",
    id: string,
    attendingID: string,
    profileID?: string | null,
    placeTimeSlotID: string,
    createdAt?: string | null,
    updatedAt: string,
    uProfile?:  {
      __typename: "Uprofile",
      id: string,
      username: string,
      name?: string | null,
      userDocID: string,
      currentPlaceID?: string | null,
      expoPushToken?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    attending?:  {
      __typename: "UserPlaceConnection",
      id: string,
      profileID: string,
      placeID: string,
      arrivingTime?: string | null,
      departureTime?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    timeSlot?:  {
      __typename: "PlaceTimeSlot",
      id: string,
      numAttendings?: number | null,
      dateTime?: string | null,
      placeID: string,
      startingHour: string,
      endingHour: string,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type CreatePushNotificationsMutationVariables = {
  input: CreatePushNotificationsInput,
  condition?: ModelPushNotificationsConditionInput | null,
};

export type CreatePushNotificationsMutation = {
  createPushNotifications?:  {
    __typename: "PushNotifications",
    id?: string | null,
    body: string,
    userTokens: string,
    data: string,
    type?: NotifType | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePushNotificationsMutationVariables = {
  input: UpdatePushNotificationsInput,
  condition?: ModelPushNotificationsConditionInput | null,
};

export type UpdatePushNotificationsMutation = {
  updatePushNotifications?:  {
    __typename: "PushNotifications",
    id?: string | null,
    body: string,
    userTokens: string,
    data: string,
    type?: NotifType | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePushNotificationsMutationVariables = {
  input: DeletePushNotificationsInput,
  condition?: ModelPushNotificationsConditionInput | null,
};

export type DeletePushNotificationsMutation = {
  deletePushNotifications?:  {
    __typename: "PushNotifications",
    id?: string | null,
    body: string,
    userTokens: string,
    data: string,
    type?: NotifType | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetBlogQueryVariables = {
  id: string,
};

export type GetBlogQuery = {
  getBlog?:  {
    __typename: "Blog",
    id: string,
    name: string,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListBlogsQueryVariables = {
  filter?: ModelBlogFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBlogsQuery = {
  listBlogs?:  {
    __typename: "ModelBlogConnection",
    items:  Array< {
      __typename: "Blog",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPostQueryVariables = {
  id: string,
};

export type GetPostQuery = {
  getPost?:  {
    __typename: "Post",
    id: string,
    title: string,
    blogID: string,
    blog?:  {
      __typename: "Blog",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPostsQueryVariables = {
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPostsQuery = {
  listPosts?:  {
    __typename: "ModelPostConnection",
    items:  Array< {
      __typename: "Post",
      id: string,
      title: string,
      blogID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCommentQueryVariables = {
  id: string,
};

export type GetCommentQuery = {
  getComment?:  {
    __typename: "Comment",
    id: string,
    postID: string,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      blogID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    content: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCommentsQueryVariables = {
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCommentsQuery = {
  listComments?:  {
    __typename: "ModelCommentConnection",
    items:  Array< {
      __typename: "Comment",
      id: string,
      postID: string,
      content: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserDocQueryVariables = {
  id: string,
};

export type GetUserDocQuery = {
  getUserDoc?:  {
    __typename: "UserDoc",
    id: string,
    profileID?: string | null,
    email: string,
    deviceToken?: string | null,
    phoneNumber?: string | null,
    createdAt: string,
    updatedAt: string,
    uProfile?:  {
      __typename: "Uprofile",
      id: string,
      username: string,
      name?: string | null,
      userDocID: string,
      currentPlaceID?: string | null,
      expoPushToken?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type ListUserDocsQueryVariables = {
  filter?: ModelUserDocFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserDocsQuery = {
  listUserDocs?:  {
    __typename: "ModelUserDocConnection",
    items:  Array< {
      __typename: "UserDoc",
      id: string,
      profileID?: string | null,
      email: string,
      deviceToken?: string | null,
      phoneNumber?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUprofileQueryVariables = {
  id: string,
};

export type GetUprofileQuery = {
  getUprofile?:  {
    __typename: "Uprofile",
    id: string,
    username: string,
    name?: string | null,
    userDocID: string,
    currentPlaceID?: string | null,
    expoPushToken?: string | null,
    createdAt: string,
    updatedAt: string,
    userDoc?:  {
      __typename: "UserDoc",
      id: string,
      profileID?: string | null,
      email: string,
      deviceToken?: string | null,
      phoneNumber?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    attendings?:  {
      __typename: "ModelUserPlaceConnectionConnection",
      nextToken?: string | null,
    } | null,
    placeTimeSlots?:  {
      __typename: "ModelPlaceTimeSlotUserPlaceConnectionConnection",
      nextToken?: string | null,
    } | null,
    currentPlace?:  {
      __typename: "Place",
      id: string,
      name: string,
      address: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    friends?:  {
      __typename: "ModelFriendConnectionConnection",
      nextToken?: string | null,
    } | null,
    sentNotifications?:  {
      __typename: "ModelNotificationConnection",
      nextToken?: string | null,
    } | null,
    notifications?:  {
      __typename: "ModelNotificationConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type ListUprofilesQueryVariables = {
  filter?: ModelUprofileFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUprofilesQuery = {
  listUprofiles?:  {
    __typename: "ModelUprofileConnection",
    items:  Array< {
      __typename: "Uprofile",
      id: string,
      username: string,
      name?: string | null,
      userDocID: string,
      currentPlaceID?: string | null,
      expoPushToken?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserPlaceConnectionQueryVariables = {
  id: string,
};

export type GetUserPlaceConnectionQuery = {
  getUserPlaceConnection?:  {
    __typename: "UserPlaceConnection",
    id: string,
    profileID: string,
    placeID: string,
    arrivingTime?: string | null,
    departureTime?: string | null,
    placeTimeSoltUserPlaceConnection?:  {
      __typename: "Place",
      id: string,
      name: string,
      address: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    uProfile?:  {
      __typename: "Uprofile",
      id: string,
      username: string,
      name?: string | null,
      userDocID: string,
      currentPlaceID?: string | null,
      expoPushToken?: string | null,
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
  } | null,
};

export type ListUserPlaceConnectionsQueryVariables = {
  filter?: ModelUserPlaceConnectionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserPlaceConnectionsQuery = {
  listUserPlaceConnections?:  {
    __typename: "ModelUserPlaceConnectionConnection",
    items:  Array< {
      __typename: "UserPlaceConnection",
      id: string,
      profileID: string,
      placeID: string,
      arrivingTime?: string | null,
      departureTime?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPlaceTimeSlotQueryVariables = {
  id: string,
};

export type GetPlaceTimeSlotQuery = {
  getPlaceTimeSlot?:  {
    __typename: "PlaceTimeSlot",
    id: string,
    numAttendings?: number | null,
    myDate?:  {
      __typename: "MyDate",
      weekDay: string,
      monthDay: string,
      month: string,
      year: string,
    } | null,
    dateTime?: string | null,
    placeID: string,
    startingHour: string,
    endingHour: string,
    createdAt: string,
    updatedAt: string,
    attendings?:  {
      __typename: "ModelPlaceTimeSlotUserPlaceConnectionConnection",
      nextToken?: string | null,
    } | null,
    place?:  {
      __typename: "Place",
      id: string,
      name: string,
      address: string,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type ListPlaceTimeSlotsQueryVariables = {
  filter?: ModelPlaceTimeSlotFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPlaceTimeSlotsQuery = {
  listPlaceTimeSlots?:  {
    __typename: "ModelPlaceTimeSlotConnection",
    items:  Array< {
      __typename: "PlaceTimeSlot",
      id: string,
      numAttendings?: number | null,
      dateTime?: string | null,
      placeID: string,
      startingHour: string,
      endingHour: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPlaceTimeSlotUserPlaceConnectionQueryVariables = {
  id: string,
};

export type GetPlaceTimeSlotUserPlaceConnectionQuery = {
  getPlaceTimeSlotUserPlaceConnection?:  {
    __typename: "PlaceTimeSlotUserPlaceConnection",
    id: string,
    attendingID: string,
    profileID?: string | null,
    placeTimeSlotID: string,
    createdAt?: string | null,
    updatedAt: string,
    uProfile?:  {
      __typename: "Uprofile",
      id: string,
      username: string,
      name?: string | null,
      userDocID: string,
      currentPlaceID?: string | null,
      expoPushToken?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    attending?:  {
      __typename: "UserPlaceConnection",
      id: string,
      profileID: string,
      placeID: string,
      arrivingTime?: string | null,
      departureTime?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    timeSlot?:  {
      __typename: "PlaceTimeSlot",
      id: string,
      numAttendings?: number | null,
      dateTime?: string | null,
      placeID: string,
      startingHour: string,
      endingHour: string,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type ListPlaceTimeSlotUserPlaceConnectionsQueryVariables = {
  filter?: ModelPlaceTimeSlotUserPlaceConnectionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPlaceTimeSlotUserPlaceConnectionsQuery = {
  listPlaceTimeSlotUserPlaceConnections?:  {
    __typename: "ModelPlaceTimeSlotUserPlaceConnectionConnection",
    items:  Array< {
      __typename: "PlaceTimeSlotUserPlaceConnection",
      id: string,
      attendingID: string,
      profileID?: string | null,
      placeTimeSlotID: string,
      createdAt?: string | null,
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
    coords:  {
      __typename: "Coords",
      lon: number,
      lat: number,
    },
    createdAt: string,
    updatedAt: string,
    currentPlayers?:  {
      __typename: "ModelUprofileConnection",
      nextToken?: string | null,
    } | null,
    timeSlots?:  {
      __typename: "ModelPlaceTimeSlotConnection",
      nextToken?: string | null,
    } | null,
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

export type GetFriendConnectionQueryVariables = {
  id: string,
};

export type GetFriendConnectionQuery = {
  getFriendConnection?:  {
    __typename: "FriendConnection",
    id: string,
    userProfileID: string,
    friendProfileID: string,
    createdAt: string,
    updatedAt: string,
    friendProfile?:  {
      __typename: "Uprofile",
      id: string,
      username: string,
      name?: string | null,
      userDocID: string,
      currentPlaceID?: string | null,
      expoPushToken?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type ListFriendConnectionsQueryVariables = {
  filter?: ModelFriendConnectionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFriendConnectionsQuery = {
  listFriendConnections?:  {
    __typename: "ModelFriendConnectionConnection",
    items:  Array< {
      __typename: "FriendConnection",
      id: string,
      userProfileID: string,
      friendProfileID: string,
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
    placeID?: string | null,
    placeName?: string | null,
    arrivingTime?: string | null,
    departureTime?: string | null,
    senderProfileID: string,
    message: string,
    receiverProfileID: string,
    photo?: string | null,
    createdAt?: string | null,
    type: NotifType,
    status: Status,
    placeTimeSlotID?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "Uprofile",
      id: string,
      username: string,
      name?: string | null,
      userDocID: string,
      currentPlaceID?: string | null,
      expoPushToken?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    senderProfile?:  {
      __typename: "Uprofile",
      id: string,
      username: string,
      name?: string | null,
      userDocID: string,
      currentPlaceID?: string | null,
      expoPushToken?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    placeTimeSlot?:  {
      __typename: "PlaceTimeSlot",
      id: string,
      numAttendings?: number | null,
      dateTime?: string | null,
      placeID: string,
      startingHour: string,
      endingHour: string,
      createdAt: string,
      updatedAt: string,
    } | null,
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
      placeID?: string | null,
      placeName?: string | null,
      arrivingTime?: string | null,
      departureTime?: string | null,
      senderProfileID: string,
      message: string,
      receiverProfileID: string,
      photo?: string | null,
      createdAt?: string | null,
      type: NotifType,
      status: Status,
      placeTimeSlotID?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPushNotificationsBatchQueryVariables = {
  id: string,
};

export type GetPushNotificationsBatchQuery = {
  getPushNotificationsBatch?:  {
    __typename: "PushNotificationsBatch",
    id: string,
    payloadsList?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPushNotificationsBatchesQueryVariables = {
  filter?: ModelPushNotificationsBatchFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPushNotificationsBatchesQuery = {
  listPushNotificationsBatches?:  {
    __typename: "ModelPushNotificationsBatchConnection",
    items:  Array< {
      __typename: "PushNotificationsBatch",
      id: string,
      payloadsList?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPushNotificationsQueryVariables = {
  id: string,
};

export type GetPushNotificationsQuery = {
  getPushNotifications?:  {
    __typename: "PushNotifications",
    id?: string | null,
    body: string,
    userTokens: string,
    data: string,
    type?: NotifType | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPushNotificationsQueryVariables = {
  filter?: ModelPushNotificationsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPushNotificationsQuery = {
  listPushNotifications?:  {
    __typename: "ModelPushNotificationsConnection",
    items:  Array< {
      __typename: "PushNotifications",
      id?: string | null,
      body: string,
      userTokens: string,
      data: string,
      type?: NotifType | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnNewMyAttendanceSubscriptionVariables = {
  profileID: string,
};

export type OnNewMyAttendanceSubscription = {
  onNewMyAttendance?:  {
    __typename: "UserPlaceConnection",
    id: string,
    profileID: string,
    placeID: string,
    arrivingTime?: string | null,
    departureTime?: string | null,
    placeTimeSoltUserPlaceConnection?:  {
      __typename: "Place",
      id: string,
      name: string,
      address: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    uProfile?:  {
      __typename: "Uprofile",
      id: string,
      username: string,
      name?: string | null,
      userDocID: string,
      currentPlaceID?: string | null,
      expoPushToken?: string | null,
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
  } | null,
};

export type OnUpdateMyProfileSubscriptionVariables = {
  id: string,
};

export type OnUpdateMyProfileSubscription = {
  onUpdateMyProfile?:  {
    __typename: "Uprofile",
    id: string,
    username: string,
    name?: string | null,
    userDocID: string,
    currentPlaceID?: string | null,
    expoPushToken?: string | null,
    createdAt: string,
    updatedAt: string,
    userDoc?:  {
      __typename: "UserDoc",
      id: string,
      profileID?: string | null,
      email: string,
      deviceToken?: string | null,
      phoneNumber?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    attendings?:  {
      __typename: "ModelUserPlaceConnectionConnection",
      nextToken?: string | null,
    } | null,
    placeTimeSlots?:  {
      __typename: "ModelPlaceTimeSlotUserPlaceConnectionConnection",
      nextToken?: string | null,
    } | null,
    currentPlace?:  {
      __typename: "Place",
      id: string,
      name: string,
      address: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    friends?:  {
      __typename: "ModelFriendConnectionConnection",
      nextToken?: string | null,
    } | null,
    sentNotifications?:  {
      __typename: "ModelNotificationConnection",
      nextToken?: string | null,
    } | null,
    notifications?:  {
      __typename: "ModelNotificationConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnNewMyNotificationSubscriptionVariables = {
  receiverProfileID: string,
};

export type OnNewMyNotificationSubscription = {
  onNewMyNotification?:  {
    __typename: "Notification",
    id: string,
    placeID?: string | null,
    placeName?: string | null,
    arrivingTime?: string | null,
    departureTime?: string | null,
    senderProfileID: string,
    message: string,
    receiverProfileID: string,
    photo?: string | null,
    createdAt?: string | null,
    type: NotifType,
    status: Status,
    placeTimeSlotID?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "Uprofile",
      id: string,
      username: string,
      name?: string | null,
      userDocID: string,
      currentPlaceID?: string | null,
      expoPushToken?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    senderProfile?:  {
      __typename: "Uprofile",
      id: string,
      username: string,
      name?: string | null,
      userDocID: string,
      currentPlaceID?: string | null,
      expoPushToken?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    placeTimeSlot?:  {
      __typename: "PlaceTimeSlot",
      id: string,
      numAttendings?: number | null,
      dateTime?: string | null,
      placeID: string,
      startingHour: string,
      endingHour: string,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnCreateBlogSubscription = {
  onCreateBlog?:  {
    __typename: "Blog",
    id: string,
    name: string,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateBlogSubscription = {
  onUpdateBlog?:  {
    __typename: "Blog",
    id: string,
    name: string,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteBlogSubscription = {
  onDeleteBlog?:  {
    __typename: "Blog",
    id: string,
    name: string,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePostSubscription = {
  onCreatePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    blogID: string,
    blog?:  {
      __typename: "Blog",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePostSubscription = {
  onUpdatePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    blogID: string,
    blog?:  {
      __typename: "Blog",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePostSubscription = {
  onDeletePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    blogID: string,
    blog?:  {
      __typename: "Blog",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCommentSubscription = {
  onCreateComment?:  {
    __typename: "Comment",
    id: string,
    postID: string,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      blogID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    content: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCommentSubscription = {
  onUpdateComment?:  {
    __typename: "Comment",
    id: string,
    postID: string,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      blogID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    content: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCommentSubscription = {
  onDeleteComment?:  {
    __typename: "Comment",
    id: string,
    postID: string,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      blogID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    content: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUserDocSubscription = {
  onCreateUserDoc?:  {
    __typename: "UserDoc",
    id: string,
    profileID?: string | null,
    email: string,
    deviceToken?: string | null,
    phoneNumber?: string | null,
    createdAt: string,
    updatedAt: string,
    uProfile?:  {
      __typename: "Uprofile",
      id: string,
      username: string,
      name?: string | null,
      userDocID: string,
      currentPlaceID?: string | null,
      expoPushToken?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnUpdateUserDocSubscription = {
  onUpdateUserDoc?:  {
    __typename: "UserDoc",
    id: string,
    profileID?: string | null,
    email: string,
    deviceToken?: string | null,
    phoneNumber?: string | null,
    createdAt: string,
    updatedAt: string,
    uProfile?:  {
      __typename: "Uprofile",
      id: string,
      username: string,
      name?: string | null,
      userDocID: string,
      currentPlaceID?: string | null,
      expoPushToken?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnDeleteUserDocSubscription = {
  onDeleteUserDoc?:  {
    __typename: "UserDoc",
    id: string,
    profileID?: string | null,
    email: string,
    deviceToken?: string | null,
    phoneNumber?: string | null,
    createdAt: string,
    updatedAt: string,
    uProfile?:  {
      __typename: "Uprofile",
      id: string,
      username: string,
      name?: string | null,
      userDocID: string,
      currentPlaceID?: string | null,
      expoPushToken?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnCreateUprofileSubscription = {
  onCreateUprofile?:  {
    __typename: "Uprofile",
    id: string,
    username: string,
    name?: string | null,
    userDocID: string,
    currentPlaceID?: string | null,
    expoPushToken?: string | null,
    createdAt: string,
    updatedAt: string,
    userDoc?:  {
      __typename: "UserDoc",
      id: string,
      profileID?: string | null,
      email: string,
      deviceToken?: string | null,
      phoneNumber?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    attendings?:  {
      __typename: "ModelUserPlaceConnectionConnection",
      nextToken?: string | null,
    } | null,
    placeTimeSlots?:  {
      __typename: "ModelPlaceTimeSlotUserPlaceConnectionConnection",
      nextToken?: string | null,
    } | null,
    currentPlace?:  {
      __typename: "Place",
      id: string,
      name: string,
      address: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    friends?:  {
      __typename: "ModelFriendConnectionConnection",
      nextToken?: string | null,
    } | null,
    sentNotifications?:  {
      __typename: "ModelNotificationConnection",
      nextToken?: string | null,
    } | null,
    notifications?:  {
      __typename: "ModelNotificationConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnUpdateUprofileSubscription = {
  onUpdateUprofile?:  {
    __typename: "Uprofile",
    id: string,
    username: string,
    name?: string | null,
    userDocID: string,
    currentPlaceID?: string | null,
    expoPushToken?: string | null,
    createdAt: string,
    updatedAt: string,
    userDoc?:  {
      __typename: "UserDoc",
      id: string,
      profileID?: string | null,
      email: string,
      deviceToken?: string | null,
      phoneNumber?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    attendings?:  {
      __typename: "ModelUserPlaceConnectionConnection",
      nextToken?: string | null,
    } | null,
    placeTimeSlots?:  {
      __typename: "ModelPlaceTimeSlotUserPlaceConnectionConnection",
      nextToken?: string | null,
    } | null,
    currentPlace?:  {
      __typename: "Place",
      id: string,
      name: string,
      address: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    friends?:  {
      __typename: "ModelFriendConnectionConnection",
      nextToken?: string | null,
    } | null,
    sentNotifications?:  {
      __typename: "ModelNotificationConnection",
      nextToken?: string | null,
    } | null,
    notifications?:  {
      __typename: "ModelNotificationConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnDeleteUprofileSubscription = {
  onDeleteUprofile?:  {
    __typename: "Uprofile",
    id: string,
    username: string,
    name?: string | null,
    userDocID: string,
    currentPlaceID?: string | null,
    expoPushToken?: string | null,
    createdAt: string,
    updatedAt: string,
    userDoc?:  {
      __typename: "UserDoc",
      id: string,
      profileID?: string | null,
      email: string,
      deviceToken?: string | null,
      phoneNumber?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    attendings?:  {
      __typename: "ModelUserPlaceConnectionConnection",
      nextToken?: string | null,
    } | null,
    placeTimeSlots?:  {
      __typename: "ModelPlaceTimeSlotUserPlaceConnectionConnection",
      nextToken?: string | null,
    } | null,
    currentPlace?:  {
      __typename: "Place",
      id: string,
      name: string,
      address: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    friends?:  {
      __typename: "ModelFriendConnectionConnection",
      nextToken?: string | null,
    } | null,
    sentNotifications?:  {
      __typename: "ModelNotificationConnection",
      nextToken?: string | null,
    } | null,
    notifications?:  {
      __typename: "ModelNotificationConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnCreateUserPlaceConnectionSubscription = {
  onCreateUserPlaceConnection?:  {
    __typename: "UserPlaceConnection",
    id: string,
    profileID: string,
    placeID: string,
    arrivingTime?: string | null,
    departureTime?: string | null,
    placeTimeSoltUserPlaceConnection?:  {
      __typename: "Place",
      id: string,
      name: string,
      address: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    uProfile?:  {
      __typename: "Uprofile",
      id: string,
      username: string,
      name?: string | null,
      userDocID: string,
      currentPlaceID?: string | null,
      expoPushToken?: string | null,
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
  } | null,
};

export type OnUpdateUserPlaceConnectionSubscription = {
  onUpdateUserPlaceConnection?:  {
    __typename: "UserPlaceConnection",
    id: string,
    profileID: string,
    placeID: string,
    arrivingTime?: string | null,
    departureTime?: string | null,
    placeTimeSoltUserPlaceConnection?:  {
      __typename: "Place",
      id: string,
      name: string,
      address: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    uProfile?:  {
      __typename: "Uprofile",
      id: string,
      username: string,
      name?: string | null,
      userDocID: string,
      currentPlaceID?: string | null,
      expoPushToken?: string | null,
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
  } | null,
};

export type OnDeleteUserPlaceConnectionSubscription = {
  onDeleteUserPlaceConnection?:  {
    __typename: "UserPlaceConnection",
    id: string,
    profileID: string,
    placeID: string,
    arrivingTime?: string | null,
    departureTime?: string | null,
    placeTimeSoltUserPlaceConnection?:  {
      __typename: "Place",
      id: string,
      name: string,
      address: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    uProfile?:  {
      __typename: "Uprofile",
      id: string,
      username: string,
      name?: string | null,
      userDocID: string,
      currentPlaceID?: string | null,
      expoPushToken?: string | null,
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
  } | null,
};

export type OnCreatePlaceTimeSlotSubscription = {
  onCreatePlaceTimeSlot?:  {
    __typename: "PlaceTimeSlot",
    id: string,
    numAttendings?: number | null,
    myDate?:  {
      __typename: "MyDate",
      weekDay: string,
      monthDay: string,
      month: string,
      year: string,
    } | null,
    dateTime?: string | null,
    placeID: string,
    startingHour: string,
    endingHour: string,
    createdAt: string,
    updatedAt: string,
    attendings?:  {
      __typename: "ModelPlaceTimeSlotUserPlaceConnectionConnection",
      nextToken?: string | null,
    } | null,
    place?:  {
      __typename: "Place",
      id: string,
      name: string,
      address: string,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnUpdatePlaceTimeSlotSubscription = {
  onUpdatePlaceTimeSlot?:  {
    __typename: "PlaceTimeSlot",
    id: string,
    numAttendings?: number | null,
    myDate?:  {
      __typename: "MyDate",
      weekDay: string,
      monthDay: string,
      month: string,
      year: string,
    } | null,
    dateTime?: string | null,
    placeID: string,
    startingHour: string,
    endingHour: string,
    createdAt: string,
    updatedAt: string,
    attendings?:  {
      __typename: "ModelPlaceTimeSlotUserPlaceConnectionConnection",
      nextToken?: string | null,
    } | null,
    place?:  {
      __typename: "Place",
      id: string,
      name: string,
      address: string,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnDeletePlaceTimeSlotSubscription = {
  onDeletePlaceTimeSlot?:  {
    __typename: "PlaceTimeSlot",
    id: string,
    numAttendings?: number | null,
    myDate?:  {
      __typename: "MyDate",
      weekDay: string,
      monthDay: string,
      month: string,
      year: string,
    } | null,
    dateTime?: string | null,
    placeID: string,
    startingHour: string,
    endingHour: string,
    createdAt: string,
    updatedAt: string,
    attendings?:  {
      __typename: "ModelPlaceTimeSlotUserPlaceConnectionConnection",
      nextToken?: string | null,
    } | null,
    place?:  {
      __typename: "Place",
      id: string,
      name: string,
      address: string,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnCreatePlaceTimeSlotUserPlaceConnectionSubscription = {
  onCreatePlaceTimeSlotUserPlaceConnection?:  {
    __typename: "PlaceTimeSlotUserPlaceConnection",
    id: string,
    attendingID: string,
    profileID?: string | null,
    placeTimeSlotID: string,
    createdAt?: string | null,
    updatedAt: string,
    uProfile?:  {
      __typename: "Uprofile",
      id: string,
      username: string,
      name?: string | null,
      userDocID: string,
      currentPlaceID?: string | null,
      expoPushToken?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    attending?:  {
      __typename: "UserPlaceConnection",
      id: string,
      profileID: string,
      placeID: string,
      arrivingTime?: string | null,
      departureTime?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    timeSlot?:  {
      __typename: "PlaceTimeSlot",
      id: string,
      numAttendings?: number | null,
      dateTime?: string | null,
      placeID: string,
      startingHour: string,
      endingHour: string,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnUpdatePlaceTimeSlotUserPlaceConnectionSubscription = {
  onUpdatePlaceTimeSlotUserPlaceConnection?:  {
    __typename: "PlaceTimeSlotUserPlaceConnection",
    id: string,
    attendingID: string,
    profileID?: string | null,
    placeTimeSlotID: string,
    createdAt?: string | null,
    updatedAt: string,
    uProfile?:  {
      __typename: "Uprofile",
      id: string,
      username: string,
      name?: string | null,
      userDocID: string,
      currentPlaceID?: string | null,
      expoPushToken?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    attending?:  {
      __typename: "UserPlaceConnection",
      id: string,
      profileID: string,
      placeID: string,
      arrivingTime?: string | null,
      departureTime?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    timeSlot?:  {
      __typename: "PlaceTimeSlot",
      id: string,
      numAttendings?: number | null,
      dateTime?: string | null,
      placeID: string,
      startingHour: string,
      endingHour: string,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnDeletePlaceTimeSlotUserPlaceConnectionSubscription = {
  onDeletePlaceTimeSlotUserPlaceConnection?:  {
    __typename: "PlaceTimeSlotUserPlaceConnection",
    id: string,
    attendingID: string,
    profileID?: string | null,
    placeTimeSlotID: string,
    createdAt?: string | null,
    updatedAt: string,
    uProfile?:  {
      __typename: "Uprofile",
      id: string,
      username: string,
      name?: string | null,
      userDocID: string,
      currentPlaceID?: string | null,
      expoPushToken?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    attending?:  {
      __typename: "UserPlaceConnection",
      id: string,
      profileID: string,
      placeID: string,
      arrivingTime?: string | null,
      departureTime?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    timeSlot?:  {
      __typename: "PlaceTimeSlot",
      id: string,
      numAttendings?: number | null,
      dateTime?: string | null,
      placeID: string,
      startingHour: string,
      endingHour: string,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnCreatePlaceSubscription = {
  onCreatePlace?:  {
    __typename: "Place",
    id: string,
    name: string,
    address: string,
    coords:  {
      __typename: "Coords",
      lon: number,
      lat: number,
    },
    createdAt: string,
    updatedAt: string,
    currentPlayers?:  {
      __typename: "ModelUprofileConnection",
      nextToken?: string | null,
    } | null,
    timeSlots?:  {
      __typename: "ModelPlaceTimeSlotConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnUpdatePlaceSubscription = {
  onUpdatePlace?:  {
    __typename: "Place",
    id: string,
    name: string,
    address: string,
    coords:  {
      __typename: "Coords",
      lon: number,
      lat: number,
    },
    createdAt: string,
    updatedAt: string,
    currentPlayers?:  {
      __typename: "ModelUprofileConnection",
      nextToken?: string | null,
    } | null,
    timeSlots?:  {
      __typename: "ModelPlaceTimeSlotConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnDeletePlaceSubscription = {
  onDeletePlace?:  {
    __typename: "Place",
    id: string,
    name: string,
    address: string,
    coords:  {
      __typename: "Coords",
      lon: number,
      lat: number,
    },
    createdAt: string,
    updatedAt: string,
    currentPlayers?:  {
      __typename: "ModelUprofileConnection",
      nextToken?: string | null,
    } | null,
    timeSlots?:  {
      __typename: "ModelPlaceTimeSlotConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnCreateFriendConnectionSubscription = {
  onCreateFriendConnection?:  {
    __typename: "FriendConnection",
    id: string,
    userProfileID: string,
    friendProfileID: string,
    createdAt: string,
    updatedAt: string,
    friendProfile?:  {
      __typename: "Uprofile",
      id: string,
      username: string,
      name?: string | null,
      userDocID: string,
      currentPlaceID?: string | null,
      expoPushToken?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnUpdateFriendConnectionSubscription = {
  onUpdateFriendConnection?:  {
    __typename: "FriendConnection",
    id: string,
    userProfileID: string,
    friendProfileID: string,
    createdAt: string,
    updatedAt: string,
    friendProfile?:  {
      __typename: "Uprofile",
      id: string,
      username: string,
      name?: string | null,
      userDocID: string,
      currentPlaceID?: string | null,
      expoPushToken?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnDeleteFriendConnectionSubscription = {
  onDeleteFriendConnection?:  {
    __typename: "FriendConnection",
    id: string,
    userProfileID: string,
    friendProfileID: string,
    createdAt: string,
    updatedAt: string,
    friendProfile?:  {
      __typename: "Uprofile",
      id: string,
      username: string,
      name?: string | null,
      userDocID: string,
      currentPlaceID?: string | null,
      expoPushToken?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnCreateNotificationSubscription = {
  onCreateNotification?:  {
    __typename: "Notification",
    id: string,
    placeID?: string | null,
    placeName?: string | null,
    arrivingTime?: string | null,
    departureTime?: string | null,
    senderProfileID: string,
    message: string,
    receiverProfileID: string,
    photo?: string | null,
    createdAt?: string | null,
    type: NotifType,
    status: Status,
    placeTimeSlotID?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "Uprofile",
      id: string,
      username: string,
      name?: string | null,
      userDocID: string,
      currentPlaceID?: string | null,
      expoPushToken?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    senderProfile?:  {
      __typename: "Uprofile",
      id: string,
      username: string,
      name?: string | null,
      userDocID: string,
      currentPlaceID?: string | null,
      expoPushToken?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    placeTimeSlot?:  {
      __typename: "PlaceTimeSlot",
      id: string,
      numAttendings?: number | null,
      dateTime?: string | null,
      placeID: string,
      startingHour: string,
      endingHour: string,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnUpdateNotificationSubscription = {
  onUpdateNotification?:  {
    __typename: "Notification",
    id: string,
    placeID?: string | null,
    placeName?: string | null,
    arrivingTime?: string | null,
    departureTime?: string | null,
    senderProfileID: string,
    message: string,
    receiverProfileID: string,
    photo?: string | null,
    createdAt?: string | null,
    type: NotifType,
    status: Status,
    placeTimeSlotID?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "Uprofile",
      id: string,
      username: string,
      name?: string | null,
      userDocID: string,
      currentPlaceID?: string | null,
      expoPushToken?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    senderProfile?:  {
      __typename: "Uprofile",
      id: string,
      username: string,
      name?: string | null,
      userDocID: string,
      currentPlaceID?: string | null,
      expoPushToken?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    placeTimeSlot?:  {
      __typename: "PlaceTimeSlot",
      id: string,
      numAttendings?: number | null,
      dateTime?: string | null,
      placeID: string,
      startingHour: string,
      endingHour: string,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnDeleteNotificationSubscription = {
  onDeleteNotification?:  {
    __typename: "Notification",
    id: string,
    placeID?: string | null,
    placeName?: string | null,
    arrivingTime?: string | null,
    departureTime?: string | null,
    senderProfileID: string,
    message: string,
    receiverProfileID: string,
    photo?: string | null,
    createdAt?: string | null,
    type: NotifType,
    status: Status,
    placeTimeSlotID?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "Uprofile",
      id: string,
      username: string,
      name?: string | null,
      userDocID: string,
      currentPlaceID?: string | null,
      expoPushToken?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    senderProfile?:  {
      __typename: "Uprofile",
      id: string,
      username: string,
      name?: string | null,
      userDocID: string,
      currentPlaceID?: string | null,
      expoPushToken?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    placeTimeSlot?:  {
      __typename: "PlaceTimeSlot",
      id: string,
      numAttendings?: number | null,
      dateTime?: string | null,
      placeID: string,
      startingHour: string,
      endingHour: string,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnCreatePushNotificationsBatchSubscription = {
  onCreatePushNotificationsBatch?:  {
    __typename: "PushNotificationsBatch",
    id: string,
    payloadsList?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePushNotificationsBatchSubscription = {
  onUpdatePushNotificationsBatch?:  {
    __typename: "PushNotificationsBatch",
    id: string,
    payloadsList?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePushNotificationsBatchSubscription = {
  onDeletePushNotificationsBatch?:  {
    __typename: "PushNotificationsBatch",
    id: string,
    payloadsList?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePushNotificationsSubscription = {
  onCreatePushNotifications?:  {
    __typename: "PushNotifications",
    id?: string | null,
    body: string,
    userTokens: string,
    data: string,
    type?: NotifType | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePushNotificationsSubscription = {
  onUpdatePushNotifications?:  {
    __typename: "PushNotifications",
    id?: string | null,
    body: string,
    userTokens: string,
    data: string,
    type?: NotifType | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePushNotificationsSubscription = {
  onDeletePushNotifications?:  {
    __typename: "PushNotifications",
    id?: string | null,
    body: string,
    userTokens: string,
    data: string,
    type?: NotifType | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
