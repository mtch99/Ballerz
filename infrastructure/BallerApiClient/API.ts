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
  blog?: Blog | null,
  comments?: ModelCommentConnection | null,
  createdAt: string,
  updatedAt: string,
  blogPostsId?: string | null,
};

export type ModelCommentConnection = {
  __typename: "ModelCommentConnection",
  items:  Array<Comment | null >,
  nextToken?: string | null,
};

export type Comment = {
  __typename: "Comment",
  id: string,
  post?: Post | null,
  content: string,
  createdAt: string,
  updatedAt: string,
  postCommentsId?: string | null,
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
  blogPostsId?: string | null,
};

export type ModelPostConditionInput = {
  title?: ModelStringInput | null,
  and?: Array< ModelPostConditionInput | null > | null,
  or?: Array< ModelPostConditionInput | null > | null,
  not?: ModelPostConditionInput | null,
  blogPostsId?: ModelIDInput | null,
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
  blogPostsId?: string | null,
};

export type DeletePostInput = {
  id: string,
};

export type CreateCommentInput = {
  id?: string | null,
  content: string,
  postCommentsId?: string | null,
};

export type ModelCommentConditionInput = {
  content?: ModelStringInput | null,
  and?: Array< ModelCommentConditionInput | null > | null,
  or?: Array< ModelCommentConditionInput | null > | null,
  not?: ModelCommentConditionInput | null,
  postCommentsId?: ModelIDInput | null,
};

export type UpdateCommentInput = {
  id: string,
  content?: string | null,
  postCommentsId?: string | null,
};

export type DeleteCommentInput = {
  id: string,
};

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
  groupChatUserProfileConnectionList?: ModelGroupChatUserProfileConnectionConnection | null,
  createdGroupChatList?: ModelGroupChatConnection | null,
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
  placeID: string,
  userProfileID: string,
  place?: Place | null,
  userProfile?: UserProfile | null,
  startingDateTime: string,
  endingDateTime: string,
  startingTime?: string | null,
  endingTime: string,
  createdAt: string,
  updatedAt: string,
};

export type Place = {
  __typename: "Place",
  id: string,
  name: string,
  presenceList?: ModelPresenceConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelGroupChatUserProfileConnectionConnection = {
  __typename: "ModelGroupChatUserProfileConnectionConnection",
  items:  Array<GroupChatUserProfileConnection | null >,
  nextToken?: string | null,
};

export type GroupChatUserProfileConnection = {
  __typename: "GroupChatUserProfileConnection",
  id: string,
  groupChatID: string,
  userProfileID: string,
  userProfile?: UserProfile | null,
  groupChat?: GroupChat | null,
  createdAt: string,
  updatedAt: string,
};

export type GroupChat = {
  __typename: "GroupChat",
  id: string,
  name: string,
  firstInvitedProfileIDList?: string | null,
  groupChatUserProfileConnectionList?: ModelGroupChatUserProfileConnectionConnection | null,
  creatorProfileID: string,
  creatorProfile?: UserProfile | null,
  messageList?: ModelGroupChatMessageConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelGroupChatMessageConnection = {
  __typename: "ModelGroupChatMessageConnection",
  items:  Array<GroupChatMessage | null >,
  nextToken?: string | null,
};

export type GroupChatMessage = {
  __typename: "GroupChatMessage",
  id: string,
  type: GroupChatMessageType,
  groupChatID: string,
  senderProfileID: string,
  groupChat?: GroupChat | null,
  senderProfile?: UserProfile | null,
  createdAt: string,
  updatedAt: string,
};

export enum GroupChatMessageType {
  text = "text",
}


export type ModelGroupChatConnection = {
  __typename: "ModelGroupChatConnection",
  items:  Array<GroupChat | null >,
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
  senderProfile?: UserProfile | null,
  receiverProfileID: string,
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

export type CreateNotificationInput = {
  id?: string | null,
  type: NotificationType,
  receiverProfileID: string,
  friendshipRequestID?: string | null,
  presenceID?: string | null,
  senderProfileID?: string | null,
  groupChatInvitationID?: string | null,
  groupChatID?: string | null,
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
  groupChatInvitationID?: ModelIDInput | null,
  groupChatID?: ModelIDInput | null,
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
  presenceID?: string | null,
  senderProfileID?: string | null,
  groupChatInvitationID?: string | null,
  groupChatID?: string | null,
  presence?: Presence | null,
  senderProfile?: UserProfile | null,
  groupChatInvitation?: GroupChatInvitation | null,
  groupChat?: GroupChat | null,
  createdAt: string,
  updatedAt: string,
};

export type GroupChatInvitation = {
  __typename: "GroupChatInvitation",
  id: string,
  senderProfileID: string,
  receiverProfileID: string,
  groupChatID: string,
  senderProfile?: UserProfile | null,
  receiverProfile?: UserProfile | null,
  groupChat?: GroupChat | null,
  status: GroupChatInvitationStatus,
  createdAt: string,
  updatedAt: string,
};

export enum GroupChatInvitationStatus {
  pending = "pending",
  accepted = "accepted",
  rejected = "rejected",
}


export type UpdateNotificationInput = {
  id: string,
  type?: NotificationType | null,
  receiverProfileID?: string | null,
  friendshipRequestID?: string | null,
  presenceID?: string | null,
  senderProfileID?: string | null,
  groupChatInvitationID?: string | null,
  groupChatID?: string | null,
};

export type DeleteNotificationInput = {
  id: string,
};

export type CreatePresenceInput = {
  id?: string | null,
  placeID: string,
  userProfileID: string,
  startingDateTime: string,
  endingDateTime: string,
  startingTime?: string | null,
  endingTime: string,
};

export type ModelPresenceConditionInput = {
  placeID?: ModelIDInput | null,
  userProfileID?: ModelIDInput | null,
  startingDateTime?: ModelStringInput | null,
  endingDateTime?: ModelStringInput | null,
  startingTime?: ModelStringInput | null,
  endingTime?: ModelStringInput | null,
  and?: Array< ModelPresenceConditionInput | null > | null,
  or?: Array< ModelPresenceConditionInput | null > | null,
  not?: ModelPresenceConditionInput | null,
};

export type UpdatePresenceInput = {
  id: string,
  placeID?: string | null,
  userProfileID?: string | null,
  startingDateTime?: string | null,
  endingDateTime?: string | null,
  startingTime?: string | null,
  endingTime?: string | null,
};

export type DeletePresenceInput = {
  id: string,
};

export type CreatePlaceInput = {
  id?: string | null,
  name: string,
};

export type ModelPlaceConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelPlaceConditionInput | null > | null,
  or?: Array< ModelPlaceConditionInput | null > | null,
  not?: ModelPlaceConditionInput | null,
};

export type UpdatePlaceInput = {
  id: string,
  name?: string | null,
};

export type DeletePlaceInput = {
  id: string,
};

export type CreateGroupChatInput = {
  id?: string | null,
  name: string,
  firstInvitedProfileIDList?: string | null,
  creatorProfileID: string,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelGroupChatConditionInput = {
  name?: ModelStringInput | null,
  firstInvitedProfileIDList?: ModelStringInput | null,
  creatorProfileID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelGroupChatConditionInput | null > | null,
  or?: Array< ModelGroupChatConditionInput | null > | null,
  not?: ModelGroupChatConditionInput | null,
};

export type UpdateGroupChatInput = {
  id: string,
  name?: string | null,
  firstInvitedProfileIDList?: string | null,
  creatorProfileID?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteGroupChatInput = {
  id: string,
};

export type CreateGroupChatUserProfileConnectionInput = {
  id?: string | null,
  groupChatID: string,
  userProfileID: string,
};

export type ModelGroupChatUserProfileConnectionConditionInput = {
  groupChatID?: ModelIDInput | null,
  userProfileID?: ModelIDInput | null,
  and?: Array< ModelGroupChatUserProfileConnectionConditionInput | null > | null,
  or?: Array< ModelGroupChatUserProfileConnectionConditionInput | null > | null,
  not?: ModelGroupChatUserProfileConnectionConditionInput | null,
};

export type UpdateGroupChatUserProfileConnectionInput = {
  id: string,
  groupChatID?: string | null,
  userProfileID?: string | null,
};

export type DeleteGroupChatUserProfileConnectionInput = {
  id: string,
};

export type CreateGroupChatInvitationInput = {
  id?: string | null,
  senderProfileID: string,
  receiverProfileID: string,
  groupChatID: string,
  status: GroupChatInvitationStatus,
};

export type ModelGroupChatInvitationConditionInput = {
  senderProfileID?: ModelIDInput | null,
  receiverProfileID?: ModelIDInput | null,
  groupChatID?: ModelIDInput | null,
  status?: ModelGroupChatInvitationStatusInput | null,
  and?: Array< ModelGroupChatInvitationConditionInput | null > | null,
  or?: Array< ModelGroupChatInvitationConditionInput | null > | null,
  not?: ModelGroupChatInvitationConditionInput | null,
};

export type ModelGroupChatInvitationStatusInput = {
  eq?: GroupChatInvitationStatus | null,
  ne?: GroupChatInvitationStatus | null,
};

export type UpdateGroupChatInvitationInput = {
  id: string,
  senderProfileID?: string | null,
  receiverProfileID?: string | null,
  groupChatID?: string | null,
  status?: GroupChatInvitationStatus | null,
};

export type DeleteGroupChatInvitationInput = {
  id: string,
};

export type CreateGroupChatMessageInput = {
  id?: string | null,
  type: GroupChatMessageType,
  groupChatID: string,
  senderProfileID: string,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelGroupChatMessageConditionInput = {
  type?: ModelGroupChatMessageTypeInput | null,
  groupChatID?: ModelIDInput | null,
  senderProfileID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelGroupChatMessageConditionInput | null > | null,
  or?: Array< ModelGroupChatMessageConditionInput | null > | null,
  not?: ModelGroupChatMessageConditionInput | null,
};

export type ModelGroupChatMessageTypeInput = {
  eq?: GroupChatMessageType | null,
  ne?: GroupChatMessageType | null,
};

export type UpdateGroupChatMessageInput = {
  id: string,
  type?: GroupChatMessageType | null,
  groupChatID?: string | null,
  senderProfileID?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteGroupChatMessageInput = {
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
  and?: Array< ModelPostFilterInput | null > | null,
  or?: Array< ModelPostFilterInput | null > | null,
  not?: ModelPostFilterInput | null,
  blogPostsId?: ModelIDInput | null,
};

export type ModelCommentFilterInput = {
  id?: ModelIDInput | null,
  content?: ModelStringInput | null,
  and?: Array< ModelCommentFilterInput | null > | null,
  or?: Array< ModelCommentFilterInput | null > | null,
  not?: ModelCommentFilterInput | null,
  postCommentsId?: ModelIDInput | null,
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

export type ModelNotificationFilterInput = {
  id?: ModelIDInput | null,
  type?: ModelNotificationTypeInput | null,
  receiverProfileID?: ModelIDInput | null,
  friendshipRequestID?: ModelIDInput | null,
  presenceID?: ModelIDInput | null,
  senderProfileID?: ModelIDInput | null,
  groupChatInvitationID?: ModelIDInput | null,
  groupChatID?: ModelIDInput | null,
  and?: Array< ModelNotificationFilterInput | null > | null,
  or?: Array< ModelNotificationFilterInput | null > | null,
  not?: ModelNotificationFilterInput | null,
};

export type ModelNotificationConnection = {
  __typename: "ModelNotificationConnection",
  items:  Array<Notification | null >,
  nextToken?: string | null,
};

export type ModelPresenceFilterInput = {
  id?: ModelIDInput | null,
  placeID?: ModelIDInput | null,
  userProfileID?: ModelIDInput | null,
  startingDateTime?: ModelStringInput | null,
  endingDateTime?: ModelStringInput | null,
  startingTime?: ModelStringInput | null,
  endingTime?: ModelStringInput | null,
  and?: Array< ModelPresenceFilterInput | null > | null,
  or?: Array< ModelPresenceFilterInput | null > | null,
  not?: ModelPresenceFilterInput | null,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelPlaceFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelPlaceFilterInput | null > | null,
  or?: Array< ModelPlaceFilterInput | null > | null,
  not?: ModelPlaceFilterInput | null,
};

export type ModelPlaceConnection = {
  __typename: "ModelPlaceConnection",
  items:  Array<Place | null >,
  nextToken?: string | null,
};

export type ModelGroupChatFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  firstInvitedProfileIDList?: ModelStringInput | null,
  creatorProfileID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelGroupChatFilterInput | null > | null,
  or?: Array< ModelGroupChatFilterInput | null > | null,
  not?: ModelGroupChatFilterInput | null,
};

export type ModelGroupChatUserProfileConnectionFilterInput = {
  id?: ModelIDInput | null,
  groupChatID?: ModelIDInput | null,
  userProfileID?: ModelIDInput | null,
  and?: Array< ModelGroupChatUserProfileConnectionFilterInput | null > | null,
  or?: Array< ModelGroupChatUserProfileConnectionFilterInput | null > | null,
  not?: ModelGroupChatUserProfileConnectionFilterInput | null,
};

export type ModelGroupChatInvitationFilterInput = {
  id?: ModelIDInput | null,
  senderProfileID?: ModelIDInput | null,
  receiverProfileID?: ModelIDInput | null,
  groupChatID?: ModelIDInput | null,
  status?: ModelGroupChatInvitationStatusInput | null,
  and?: Array< ModelGroupChatInvitationFilterInput | null > | null,
  or?: Array< ModelGroupChatInvitationFilterInput | null > | null,
  not?: ModelGroupChatInvitationFilterInput | null,
};

export type ModelGroupChatInvitationConnection = {
  __typename: "ModelGroupChatInvitationConnection",
  items:  Array<GroupChatInvitation | null >,
  nextToken?: string | null,
};

export type ModelGroupChatMessageFilterInput = {
  id?: ModelIDInput | null,
  type?: ModelGroupChatMessageTypeInput | null,
  groupChatID?: ModelIDInput | null,
  senderProfileID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelGroupChatMessageFilterInput | null > | null,
  or?: Array< ModelGroupChatMessageFilterInput | null > | null,
  not?: ModelGroupChatMessageFilterInput | null,
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
    blogPostsId?: string | null,
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
    blogPostsId?: string | null,
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
    blogPostsId?: string | null,
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
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      createdAt: string,
      updatedAt: string,
      blogPostsId?: string | null,
    } | null,
    content: string,
    createdAt: string,
    updatedAt: string,
    postCommentsId?: string | null,
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
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      createdAt: string,
      updatedAt: string,
      blogPostsId?: string | null,
    } | null,
    content: string,
    createdAt: string,
    updatedAt: string,
    postCommentsId?: string | null,
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
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      createdAt: string,
      updatedAt: string,
      blogPostsId?: string | null,
    } | null,
    content: string,
    createdAt: string,
    updatedAt: string,
    postCommentsId?: string | null,
  } | null,
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
    groupChatUserProfileConnectionList?:  {
      __typename: "ModelGroupChatUserProfileConnectionConnection",
      nextToken?: string | null,
    } | null,
    createdGroupChatList?:  {
      __typename: "ModelGroupChatConnection",
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
    groupChatUserProfileConnectionList?:  {
      __typename: "ModelGroupChatUserProfileConnectionConnection",
      nextToken?: string | null,
    } | null,
    createdGroupChatList?:  {
      __typename: "ModelGroupChatConnection",
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
    groupChatUserProfileConnectionList?:  {
      __typename: "ModelGroupChatUserProfileConnectionConnection",
      nextToken?: string | null,
    } | null,
    createdGroupChatList?:  {
      __typename: "ModelGroupChatConnection",
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
    senderProfile?:  {
      __typename: "UserProfile",
      id: string,
      email: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      userProfileUserId?: string | null,
    } | null,
    receiverProfileID: string,
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
    senderProfile?:  {
      __typename: "UserProfile",
      id: string,
      email: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      userProfileUserId?: string | null,
    } | null,
    receiverProfileID: string,
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
    senderProfile?:  {
      __typename: "UserProfile",
      id: string,
      email: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      userProfileUserId?: string | null,
    } | null,
    receiverProfileID: string,
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
    presenceID?: string | null,
    senderProfileID?: string | null,
    groupChatInvitationID?: string | null,
    groupChatID?: string | null,
    presence?:  {
      __typename: "Presence",
      id: string,
      placeID: string,
      userProfileID: string,
      startingDateTime: string,
      endingDateTime: string,
      startingTime?: string | null,
      endingTime: string,
      createdAt: string,
      updatedAt: string,
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
    groupChatInvitation?:  {
      __typename: "GroupChatInvitation",
      id: string,
      senderProfileID: string,
      receiverProfileID: string,
      groupChatID: string,
      status: GroupChatInvitationStatus,
      createdAt: string,
      updatedAt: string,
    } | null,
    groupChat?:  {
      __typename: "GroupChat",
      id: string,
      name: string,
      firstInvitedProfileIDList?: string | null,
      creatorProfileID: string,
      createdAt: string,
      updatedAt: string,
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
    presenceID?: string | null,
    senderProfileID?: string | null,
    groupChatInvitationID?: string | null,
    groupChatID?: string | null,
    presence?:  {
      __typename: "Presence",
      id: string,
      placeID: string,
      userProfileID: string,
      startingDateTime: string,
      endingDateTime: string,
      startingTime?: string | null,
      endingTime: string,
      createdAt: string,
      updatedAt: string,
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
    groupChatInvitation?:  {
      __typename: "GroupChatInvitation",
      id: string,
      senderProfileID: string,
      receiverProfileID: string,
      groupChatID: string,
      status: GroupChatInvitationStatus,
      createdAt: string,
      updatedAt: string,
    } | null,
    groupChat?:  {
      __typename: "GroupChat",
      id: string,
      name: string,
      firstInvitedProfileIDList?: string | null,
      creatorProfileID: string,
      createdAt: string,
      updatedAt: string,
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
    presenceID?: string | null,
    senderProfileID?: string | null,
    groupChatInvitationID?: string | null,
    groupChatID?: string | null,
    presence?:  {
      __typename: "Presence",
      id: string,
      placeID: string,
      userProfileID: string,
      startingDateTime: string,
      endingDateTime: string,
      startingTime?: string | null,
      endingTime: string,
      createdAt: string,
      updatedAt: string,
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
    groupChatInvitation?:  {
      __typename: "GroupChatInvitation",
      id: string,
      senderProfileID: string,
      receiverProfileID: string,
      groupChatID: string,
      status: GroupChatInvitationStatus,
      createdAt: string,
      updatedAt: string,
    } | null,
    groupChat?:  {
      __typename: "GroupChat",
      id: string,
      name: string,
      firstInvitedProfileIDList?: string | null,
      creatorProfileID: string,
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
    placeID: string,
    userProfileID: string,
    place?:  {
      __typename: "Place",
      id: string,
      name: string,
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
    startingTime?: string | null,
    endingTime: string,
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
    placeID: string,
    userProfileID: string,
    place?:  {
      __typename: "Place",
      id: string,
      name: string,
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
    startingTime?: string | null,
    endingTime: string,
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
    placeID: string,
    userProfileID: string,
    place?:  {
      __typename: "Place",
      id: string,
      name: string,
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
    startingTime?: string | null,
    endingTime: string,
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
    presenceList?:  {
      __typename: "ModelPresenceConnection",
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
    presenceList?:  {
      __typename: "ModelPresenceConnection",
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
    presenceList?:  {
      __typename: "ModelPresenceConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateGroupChatMutationVariables = {
  input: CreateGroupChatInput,
  condition?: ModelGroupChatConditionInput | null,
};

export type CreateGroupChatMutation = {
  createGroupChat?:  {
    __typename: "GroupChat",
    id: string,
    name: string,
    firstInvitedProfileIDList?: string | null,
    groupChatUserProfileConnectionList?:  {
      __typename: "ModelGroupChatUserProfileConnectionConnection",
      nextToken?: string | null,
    } | null,
    creatorProfileID: string,
    creatorProfile?:  {
      __typename: "UserProfile",
      id: string,
      email: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      userProfileUserId?: string | null,
    } | null,
    messageList?:  {
      __typename: "ModelGroupChatMessageConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateGroupChatMutationVariables = {
  input: UpdateGroupChatInput,
  condition?: ModelGroupChatConditionInput | null,
};

export type UpdateGroupChatMutation = {
  updateGroupChat?:  {
    __typename: "GroupChat",
    id: string,
    name: string,
    firstInvitedProfileIDList?: string | null,
    groupChatUserProfileConnectionList?:  {
      __typename: "ModelGroupChatUserProfileConnectionConnection",
      nextToken?: string | null,
    } | null,
    creatorProfileID: string,
    creatorProfile?:  {
      __typename: "UserProfile",
      id: string,
      email: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      userProfileUserId?: string | null,
    } | null,
    messageList?:  {
      __typename: "ModelGroupChatMessageConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteGroupChatMutationVariables = {
  input: DeleteGroupChatInput,
  condition?: ModelGroupChatConditionInput | null,
};

export type DeleteGroupChatMutation = {
  deleteGroupChat?:  {
    __typename: "GroupChat",
    id: string,
    name: string,
    firstInvitedProfileIDList?: string | null,
    groupChatUserProfileConnectionList?:  {
      __typename: "ModelGroupChatUserProfileConnectionConnection",
      nextToken?: string | null,
    } | null,
    creatorProfileID: string,
    creatorProfile?:  {
      __typename: "UserProfile",
      id: string,
      email: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      userProfileUserId?: string | null,
    } | null,
    messageList?:  {
      __typename: "ModelGroupChatMessageConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateGroupChatUserProfileConnectionMutationVariables = {
  input: CreateGroupChatUserProfileConnectionInput,
  condition?: ModelGroupChatUserProfileConnectionConditionInput | null,
};

export type CreateGroupChatUserProfileConnectionMutation = {
  createGroupChatUserProfileConnection?:  {
    __typename: "GroupChatUserProfileConnection",
    id: string,
    groupChatID: string,
    userProfileID: string,
    userProfile?:  {
      __typename: "UserProfile",
      id: string,
      email: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      userProfileUserId?: string | null,
    } | null,
    groupChat?:  {
      __typename: "GroupChat",
      id: string,
      name: string,
      firstInvitedProfileIDList?: string | null,
      creatorProfileID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateGroupChatUserProfileConnectionMutationVariables = {
  input: UpdateGroupChatUserProfileConnectionInput,
  condition?: ModelGroupChatUserProfileConnectionConditionInput | null,
};

export type UpdateGroupChatUserProfileConnectionMutation = {
  updateGroupChatUserProfileConnection?:  {
    __typename: "GroupChatUserProfileConnection",
    id: string,
    groupChatID: string,
    userProfileID: string,
    userProfile?:  {
      __typename: "UserProfile",
      id: string,
      email: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      userProfileUserId?: string | null,
    } | null,
    groupChat?:  {
      __typename: "GroupChat",
      id: string,
      name: string,
      firstInvitedProfileIDList?: string | null,
      creatorProfileID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteGroupChatUserProfileConnectionMutationVariables = {
  input: DeleteGroupChatUserProfileConnectionInput,
  condition?: ModelGroupChatUserProfileConnectionConditionInput | null,
};

export type DeleteGroupChatUserProfileConnectionMutation = {
  deleteGroupChatUserProfileConnection?:  {
    __typename: "GroupChatUserProfileConnection",
    id: string,
    groupChatID: string,
    userProfileID: string,
    userProfile?:  {
      __typename: "UserProfile",
      id: string,
      email: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      userProfileUserId?: string | null,
    } | null,
    groupChat?:  {
      __typename: "GroupChat",
      id: string,
      name: string,
      firstInvitedProfileIDList?: string | null,
      creatorProfileID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateGroupChatInvitationMutationVariables = {
  input: CreateGroupChatInvitationInput,
  condition?: ModelGroupChatInvitationConditionInput | null,
};

export type CreateGroupChatInvitationMutation = {
  createGroupChatInvitation?:  {
    __typename: "GroupChatInvitation",
    id: string,
    senderProfileID: string,
    receiverProfileID: string,
    groupChatID: string,
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
    groupChat?:  {
      __typename: "GroupChat",
      id: string,
      name: string,
      firstInvitedProfileIDList?: string | null,
      creatorProfileID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    status: GroupChatInvitationStatus,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateGroupChatInvitationMutationVariables = {
  input: UpdateGroupChatInvitationInput,
  condition?: ModelGroupChatInvitationConditionInput | null,
};

export type UpdateGroupChatInvitationMutation = {
  updateGroupChatInvitation?:  {
    __typename: "GroupChatInvitation",
    id: string,
    senderProfileID: string,
    receiverProfileID: string,
    groupChatID: string,
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
    groupChat?:  {
      __typename: "GroupChat",
      id: string,
      name: string,
      firstInvitedProfileIDList?: string | null,
      creatorProfileID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    status: GroupChatInvitationStatus,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteGroupChatInvitationMutationVariables = {
  input: DeleteGroupChatInvitationInput,
  condition?: ModelGroupChatInvitationConditionInput | null,
};

export type DeleteGroupChatInvitationMutation = {
  deleteGroupChatInvitation?:  {
    __typename: "GroupChatInvitation",
    id: string,
    senderProfileID: string,
    receiverProfileID: string,
    groupChatID: string,
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
    groupChat?:  {
      __typename: "GroupChat",
      id: string,
      name: string,
      firstInvitedProfileIDList?: string | null,
      creatorProfileID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    status: GroupChatInvitationStatus,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateGroupChatMessageMutationVariables = {
  input: CreateGroupChatMessageInput,
  condition?: ModelGroupChatMessageConditionInput | null,
};

export type CreateGroupChatMessageMutation = {
  createGroupChatMessage?:  {
    __typename: "GroupChatMessage",
    id: string,
    type: GroupChatMessageType,
    groupChatID: string,
    senderProfileID: string,
    groupChat?:  {
      __typename: "GroupChat",
      id: string,
      name: string,
      firstInvitedProfileIDList?: string | null,
      creatorProfileID: string,
      createdAt: string,
      updatedAt: string,
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
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateGroupChatMessageMutationVariables = {
  input: UpdateGroupChatMessageInput,
  condition?: ModelGroupChatMessageConditionInput | null,
};

export type UpdateGroupChatMessageMutation = {
  updateGroupChatMessage?:  {
    __typename: "GroupChatMessage",
    id: string,
    type: GroupChatMessageType,
    groupChatID: string,
    senderProfileID: string,
    groupChat?:  {
      __typename: "GroupChat",
      id: string,
      name: string,
      firstInvitedProfileIDList?: string | null,
      creatorProfileID: string,
      createdAt: string,
      updatedAt: string,
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
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteGroupChatMessageMutationVariables = {
  input: DeleteGroupChatMessageInput,
  condition?: ModelGroupChatMessageConditionInput | null,
};

export type DeleteGroupChatMessageMutation = {
  deleteGroupChatMessage?:  {
    __typename: "GroupChatMessage",
    id: string,
    type: GroupChatMessageType,
    groupChatID: string,
    senderProfileID: string,
    groupChat?:  {
      __typename: "GroupChat",
      id: string,
      name: string,
      firstInvitedProfileIDList?: string | null,
      creatorProfileID: string,
      createdAt: string,
      updatedAt: string,
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
    blogPostsId?: string | null,
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
      createdAt: string,
      updatedAt: string,
      blogPostsId?: string | null,
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
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      createdAt: string,
      updatedAt: string,
      blogPostsId?: string | null,
    } | null,
    content: string,
    createdAt: string,
    updatedAt: string,
    postCommentsId?: string | null,
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
      content: string,
      createdAt: string,
      updatedAt: string,
      postCommentsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
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
    groupChatUserProfileConnectionList?:  {
      __typename: "ModelGroupChatUserProfileConnectionConnection",
      nextToken?: string | null,
    } | null,
    createdGroupChatList?:  {
      __typename: "ModelGroupChatConnection",
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
    senderProfile?:  {
      __typename: "UserProfile",
      id: string,
      email: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      userProfileUserId?: string | null,
    } | null,
    receiverProfileID: string,
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
    presenceID?: string | null,
    senderProfileID?: string | null,
    groupChatInvitationID?: string | null,
    groupChatID?: string | null,
    presence?:  {
      __typename: "Presence",
      id: string,
      placeID: string,
      userProfileID: string,
      startingDateTime: string,
      endingDateTime: string,
      startingTime?: string | null,
      endingTime: string,
      createdAt: string,
      updatedAt: string,
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
    groupChatInvitation?:  {
      __typename: "GroupChatInvitation",
      id: string,
      senderProfileID: string,
      receiverProfileID: string,
      groupChatID: string,
      status: GroupChatInvitationStatus,
      createdAt: string,
      updatedAt: string,
    } | null,
    groupChat?:  {
      __typename: "GroupChat",
      id: string,
      name: string,
      firstInvitedProfileIDList?: string | null,
      creatorProfileID: string,
      createdAt: string,
      updatedAt: string,
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
      groupChatInvitationID?: string | null,
      groupChatID?: string | null,
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
    placeID: string,
    userProfileID: string,
    place?:  {
      __typename: "Place",
      id: string,
      name: string,
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
    startingTime?: string | null,
    endingTime: string,
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
      placeID: string,
      userProfileID: string,
      startingDateTime: string,
      endingDateTime: string,
      startingTime?: string | null,
      endingTime: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type PresencesByPlaceIDAndStartingTimeQueryVariables = {
  placeID: string,
  startingTime?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPresenceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PresencesByPlaceIDAndStartingTimeQuery = {
  presencesByPlaceIDAndStartingTime?:  {
    __typename: "ModelPresenceConnection",
    items:  Array< {
      __typename: "Presence",
      id: string,
      placeID: string,
      userProfileID: string,
      startingDateTime: string,
      endingDateTime: string,
      startingTime?: string | null,
      endingTime: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type PresencesByUserProfileIDQueryVariables = {
  userProfileID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPresenceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PresencesByUserProfileIDQuery = {
  presencesByUserProfileID?:  {
    __typename: "ModelPresenceConnection",
    items:  Array< {
      __typename: "Presence",
      id: string,
      placeID: string,
      userProfileID: string,
      startingDateTime: string,
      endingDateTime: string,
      startingTime?: string | null,
      endingTime: string,
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
    presenceList?:  {
      __typename: "ModelPresenceConnection",
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
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetGroupChatQueryVariables = {
  id: string,
};

export type GetGroupChatQuery = {
  getGroupChat?:  {
    __typename: "GroupChat",
    id: string,
    name: string,
    firstInvitedProfileIDList?: string | null,
    groupChatUserProfileConnectionList?:  {
      __typename: "ModelGroupChatUserProfileConnectionConnection",
      nextToken?: string | null,
    } | null,
    creatorProfileID: string,
    creatorProfile?:  {
      __typename: "UserProfile",
      id: string,
      email: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      userProfileUserId?: string | null,
    } | null,
    messageList?:  {
      __typename: "ModelGroupChatMessageConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListGroupChatsQueryVariables = {
  filter?: ModelGroupChatFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGroupChatsQuery = {
  listGroupChats?:  {
    __typename: "ModelGroupChatConnection",
    items:  Array< {
      __typename: "GroupChat",
      id: string,
      name: string,
      firstInvitedProfileIDList?: string | null,
      creatorProfileID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GroupChatsByCreatorProfileIDAndCreatedAtQueryVariables = {
  creatorProfileID: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelGroupChatFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GroupChatsByCreatorProfileIDAndCreatedAtQuery = {
  groupChatsByCreatorProfileIDAndCreatedAt?:  {
    __typename: "ModelGroupChatConnection",
    items:  Array< {
      __typename: "GroupChat",
      id: string,
      name: string,
      firstInvitedProfileIDList?: string | null,
      creatorProfileID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetGroupChatUserProfileConnectionQueryVariables = {
  id: string,
};

export type GetGroupChatUserProfileConnectionQuery = {
  getGroupChatUserProfileConnection?:  {
    __typename: "GroupChatUserProfileConnection",
    id: string,
    groupChatID: string,
    userProfileID: string,
    userProfile?:  {
      __typename: "UserProfile",
      id: string,
      email: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      userProfileUserId?: string | null,
    } | null,
    groupChat?:  {
      __typename: "GroupChat",
      id: string,
      name: string,
      firstInvitedProfileIDList?: string | null,
      creatorProfileID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListGroupChatUserProfileConnectionsQueryVariables = {
  filter?: ModelGroupChatUserProfileConnectionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGroupChatUserProfileConnectionsQuery = {
  listGroupChatUserProfileConnections?:  {
    __typename: "ModelGroupChatUserProfileConnectionConnection",
    items:  Array< {
      __typename: "GroupChatUserProfileConnection",
      id: string,
      groupChatID: string,
      userProfileID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GroupChatUserProfileConnectionsByGroupChatIDQueryVariables = {
  groupChatID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelGroupChatUserProfileConnectionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GroupChatUserProfileConnectionsByGroupChatIDQuery = {
  groupChatUserProfileConnectionsByGroupChatID?:  {
    __typename: "ModelGroupChatUserProfileConnectionConnection",
    items:  Array< {
      __typename: "GroupChatUserProfileConnection",
      id: string,
      groupChatID: string,
      userProfileID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GroupChatUserProfileConnectionsByUserProfileIDQueryVariables = {
  userProfileID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelGroupChatUserProfileConnectionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GroupChatUserProfileConnectionsByUserProfileIDQuery = {
  groupChatUserProfileConnectionsByUserProfileID?:  {
    __typename: "ModelGroupChatUserProfileConnectionConnection",
    items:  Array< {
      __typename: "GroupChatUserProfileConnection",
      id: string,
      groupChatID: string,
      userProfileID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetGroupChatInvitationQueryVariables = {
  id: string,
};

export type GetGroupChatInvitationQuery = {
  getGroupChatInvitation?:  {
    __typename: "GroupChatInvitation",
    id: string,
    senderProfileID: string,
    receiverProfileID: string,
    groupChatID: string,
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
    groupChat?:  {
      __typename: "GroupChat",
      id: string,
      name: string,
      firstInvitedProfileIDList?: string | null,
      creatorProfileID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    status: GroupChatInvitationStatus,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListGroupChatInvitationsQueryVariables = {
  filter?: ModelGroupChatInvitationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGroupChatInvitationsQuery = {
  listGroupChatInvitations?:  {
    __typename: "ModelGroupChatInvitationConnection",
    items:  Array< {
      __typename: "GroupChatInvitation",
      id: string,
      senderProfileID: string,
      receiverProfileID: string,
      groupChatID: string,
      status: GroupChatInvitationStatus,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetGroupChatMessageQueryVariables = {
  id: string,
};

export type GetGroupChatMessageQuery = {
  getGroupChatMessage?:  {
    __typename: "GroupChatMessage",
    id: string,
    type: GroupChatMessageType,
    groupChatID: string,
    senderProfileID: string,
    groupChat?:  {
      __typename: "GroupChat",
      id: string,
      name: string,
      firstInvitedProfileIDList?: string | null,
      creatorProfileID: string,
      createdAt: string,
      updatedAt: string,
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
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListGroupChatMessagesQueryVariables = {
  filter?: ModelGroupChatMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGroupChatMessagesQuery = {
  listGroupChatMessages?:  {
    __typename: "ModelGroupChatMessageConnection",
    items:  Array< {
      __typename: "GroupChatMessage",
      id: string,
      type: GroupChatMessageType,
      groupChatID: string,
      senderProfileID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GroupChatMessagesByGroupChatIDAndCreatedAtQueryVariables = {
  groupChatID: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelGroupChatMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GroupChatMessagesByGroupChatIDAndCreatedAtQuery = {
  groupChatMessagesByGroupChatIDAndCreatedAt?:  {
    __typename: "ModelGroupChatMessageConnection",
    items:  Array< {
      __typename: "GroupChatMessage",
      id: string,
      type: GroupChatMessageType,
      groupChatID: string,
      senderProfileID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
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
    blogPostsId?: string | null,
  } | null,
};

export type OnUpdatePostSubscription = {
  onUpdatePost?:  {
    __typename: "Post",
    id: string,
    title: string,
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
    blogPostsId?: string | null,
  } | null,
};

export type OnDeletePostSubscription = {
  onDeletePost?:  {
    __typename: "Post",
    id: string,
    title: string,
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
    blogPostsId?: string | null,
  } | null,
};

export type OnCreateCommentSubscription = {
  onCreateComment?:  {
    __typename: "Comment",
    id: string,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      createdAt: string,
      updatedAt: string,
      blogPostsId?: string | null,
    } | null,
    content: string,
    createdAt: string,
    updatedAt: string,
    postCommentsId?: string | null,
  } | null,
};

export type OnUpdateCommentSubscription = {
  onUpdateComment?:  {
    __typename: "Comment",
    id: string,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      createdAt: string,
      updatedAt: string,
      blogPostsId?: string | null,
    } | null,
    content: string,
    createdAt: string,
    updatedAt: string,
    postCommentsId?: string | null,
  } | null,
};

export type OnDeleteCommentSubscription = {
  onDeleteComment?:  {
    __typename: "Comment",
    id: string,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      createdAt: string,
      updatedAt: string,
      blogPostsId?: string | null,
    } | null,
    content: string,
    createdAt: string,
    updatedAt: string,
    postCommentsId?: string | null,
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
    groupChatUserProfileConnectionList?:  {
      __typename: "ModelGroupChatUserProfileConnectionConnection",
      nextToken?: string | null,
    } | null,
    createdGroupChatList?:  {
      __typename: "ModelGroupChatConnection",
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
    groupChatUserProfileConnectionList?:  {
      __typename: "ModelGroupChatUserProfileConnectionConnection",
      nextToken?: string | null,
    } | null,
    createdGroupChatList?:  {
      __typename: "ModelGroupChatConnection",
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
    groupChatUserProfileConnectionList?:  {
      __typename: "ModelGroupChatUserProfileConnectionConnection",
      nextToken?: string | null,
    } | null,
    createdGroupChatList?:  {
      __typename: "ModelGroupChatConnection",
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
    senderProfile?:  {
      __typename: "UserProfile",
      id: string,
      email: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      userProfileUserId?: string | null,
    } | null,
    receiverProfileID: string,
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
    senderProfile?:  {
      __typename: "UserProfile",
      id: string,
      email: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      userProfileUserId?: string | null,
    } | null,
    receiverProfileID: string,
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
    senderProfile?:  {
      __typename: "UserProfile",
      id: string,
      email: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      userProfileUserId?: string | null,
    } | null,
    receiverProfileID: string,
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
    presenceID?: string | null,
    senderProfileID?: string | null,
    groupChatInvitationID?: string | null,
    groupChatID?: string | null,
    presence?:  {
      __typename: "Presence",
      id: string,
      placeID: string,
      userProfileID: string,
      startingDateTime: string,
      endingDateTime: string,
      startingTime?: string | null,
      endingTime: string,
      createdAt: string,
      updatedAt: string,
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
    groupChatInvitation?:  {
      __typename: "GroupChatInvitation",
      id: string,
      senderProfileID: string,
      receiverProfileID: string,
      groupChatID: string,
      status: GroupChatInvitationStatus,
      createdAt: string,
      updatedAt: string,
    } | null,
    groupChat?:  {
      __typename: "GroupChat",
      id: string,
      name: string,
      firstInvitedProfileIDList?: string | null,
      creatorProfileID: string,
      createdAt: string,
      updatedAt: string,
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
    presenceID?: string | null,
    senderProfileID?: string | null,
    groupChatInvitationID?: string | null,
    groupChatID?: string | null,
    presence?:  {
      __typename: "Presence",
      id: string,
      placeID: string,
      userProfileID: string,
      startingDateTime: string,
      endingDateTime: string,
      startingTime?: string | null,
      endingTime: string,
      createdAt: string,
      updatedAt: string,
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
    groupChatInvitation?:  {
      __typename: "GroupChatInvitation",
      id: string,
      senderProfileID: string,
      receiverProfileID: string,
      groupChatID: string,
      status: GroupChatInvitationStatus,
      createdAt: string,
      updatedAt: string,
    } | null,
    groupChat?:  {
      __typename: "GroupChat",
      id: string,
      name: string,
      firstInvitedProfileIDList?: string | null,
      creatorProfileID: string,
      createdAt: string,
      updatedAt: string,
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
    presenceID?: string | null,
    senderProfileID?: string | null,
    groupChatInvitationID?: string | null,
    groupChatID?: string | null,
    presence?:  {
      __typename: "Presence",
      id: string,
      placeID: string,
      userProfileID: string,
      startingDateTime: string,
      endingDateTime: string,
      startingTime?: string | null,
      endingTime: string,
      createdAt: string,
      updatedAt: string,
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
    groupChatInvitation?:  {
      __typename: "GroupChatInvitation",
      id: string,
      senderProfileID: string,
      receiverProfileID: string,
      groupChatID: string,
      status: GroupChatInvitationStatus,
      createdAt: string,
      updatedAt: string,
    } | null,
    groupChat?:  {
      __typename: "GroupChat",
      id: string,
      name: string,
      firstInvitedProfileIDList?: string | null,
      creatorProfileID: string,
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
    placeID: string,
    userProfileID: string,
    place?:  {
      __typename: "Place",
      id: string,
      name: string,
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
    startingTime?: string | null,
    endingTime: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePresenceSubscription = {
  onUpdatePresence?:  {
    __typename: "Presence",
    id: string,
    placeID: string,
    userProfileID: string,
    place?:  {
      __typename: "Place",
      id: string,
      name: string,
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
    startingTime?: string | null,
    endingTime: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePresenceSubscription = {
  onDeletePresence?:  {
    __typename: "Presence",
    id: string,
    placeID: string,
    userProfileID: string,
    place?:  {
      __typename: "Place",
      id: string,
      name: string,
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
    startingTime?: string | null,
    endingTime: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePlaceSubscription = {
  onCreatePlace?:  {
    __typename: "Place",
    id: string,
    name: string,
    presenceList?:  {
      __typename: "ModelPresenceConnection",
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
    presenceList?:  {
      __typename: "ModelPresenceConnection",
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
    presenceList?:  {
      __typename: "ModelPresenceConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateGroupChatSubscription = {
  onCreateGroupChat?:  {
    __typename: "GroupChat",
    id: string,
    name: string,
    firstInvitedProfileIDList?: string | null,
    groupChatUserProfileConnectionList?:  {
      __typename: "ModelGroupChatUserProfileConnectionConnection",
      nextToken?: string | null,
    } | null,
    creatorProfileID: string,
    creatorProfile?:  {
      __typename: "UserProfile",
      id: string,
      email: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      userProfileUserId?: string | null,
    } | null,
    messageList?:  {
      __typename: "ModelGroupChatMessageConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateGroupChatSubscription = {
  onUpdateGroupChat?:  {
    __typename: "GroupChat",
    id: string,
    name: string,
    firstInvitedProfileIDList?: string | null,
    groupChatUserProfileConnectionList?:  {
      __typename: "ModelGroupChatUserProfileConnectionConnection",
      nextToken?: string | null,
    } | null,
    creatorProfileID: string,
    creatorProfile?:  {
      __typename: "UserProfile",
      id: string,
      email: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      userProfileUserId?: string | null,
    } | null,
    messageList?:  {
      __typename: "ModelGroupChatMessageConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteGroupChatSubscription = {
  onDeleteGroupChat?:  {
    __typename: "GroupChat",
    id: string,
    name: string,
    firstInvitedProfileIDList?: string | null,
    groupChatUserProfileConnectionList?:  {
      __typename: "ModelGroupChatUserProfileConnectionConnection",
      nextToken?: string | null,
    } | null,
    creatorProfileID: string,
    creatorProfile?:  {
      __typename: "UserProfile",
      id: string,
      email: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      userProfileUserId?: string | null,
    } | null,
    messageList?:  {
      __typename: "ModelGroupChatMessageConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateGroupChatUserProfileConnectionSubscription = {
  onCreateGroupChatUserProfileConnection?:  {
    __typename: "GroupChatUserProfileConnection",
    id: string,
    groupChatID: string,
    userProfileID: string,
    userProfile?:  {
      __typename: "UserProfile",
      id: string,
      email: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      userProfileUserId?: string | null,
    } | null,
    groupChat?:  {
      __typename: "GroupChat",
      id: string,
      name: string,
      firstInvitedProfileIDList?: string | null,
      creatorProfileID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateGroupChatUserProfileConnectionSubscription = {
  onUpdateGroupChatUserProfileConnection?:  {
    __typename: "GroupChatUserProfileConnection",
    id: string,
    groupChatID: string,
    userProfileID: string,
    userProfile?:  {
      __typename: "UserProfile",
      id: string,
      email: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      userProfileUserId?: string | null,
    } | null,
    groupChat?:  {
      __typename: "GroupChat",
      id: string,
      name: string,
      firstInvitedProfileIDList?: string | null,
      creatorProfileID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteGroupChatUserProfileConnectionSubscription = {
  onDeleteGroupChatUserProfileConnection?:  {
    __typename: "GroupChatUserProfileConnection",
    id: string,
    groupChatID: string,
    userProfileID: string,
    userProfile?:  {
      __typename: "UserProfile",
      id: string,
      email: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      userProfileUserId?: string | null,
    } | null,
    groupChat?:  {
      __typename: "GroupChat",
      id: string,
      name: string,
      firstInvitedProfileIDList?: string | null,
      creatorProfileID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateGroupChatInvitationSubscription = {
  onCreateGroupChatInvitation?:  {
    __typename: "GroupChatInvitation",
    id: string,
    senderProfileID: string,
    receiverProfileID: string,
    groupChatID: string,
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
    groupChat?:  {
      __typename: "GroupChat",
      id: string,
      name: string,
      firstInvitedProfileIDList?: string | null,
      creatorProfileID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    status: GroupChatInvitationStatus,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateGroupChatInvitationSubscription = {
  onUpdateGroupChatInvitation?:  {
    __typename: "GroupChatInvitation",
    id: string,
    senderProfileID: string,
    receiverProfileID: string,
    groupChatID: string,
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
    groupChat?:  {
      __typename: "GroupChat",
      id: string,
      name: string,
      firstInvitedProfileIDList?: string | null,
      creatorProfileID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    status: GroupChatInvitationStatus,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteGroupChatInvitationSubscription = {
  onDeleteGroupChatInvitation?:  {
    __typename: "GroupChatInvitation",
    id: string,
    senderProfileID: string,
    receiverProfileID: string,
    groupChatID: string,
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
    groupChat?:  {
      __typename: "GroupChat",
      id: string,
      name: string,
      firstInvitedProfileIDList?: string | null,
      creatorProfileID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    status: GroupChatInvitationStatus,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateGroupChatMessageSubscription = {
  onCreateGroupChatMessage?:  {
    __typename: "GroupChatMessage",
    id: string,
    type: GroupChatMessageType,
    groupChatID: string,
    senderProfileID: string,
    groupChat?:  {
      __typename: "GroupChat",
      id: string,
      name: string,
      firstInvitedProfileIDList?: string | null,
      creatorProfileID: string,
      createdAt: string,
      updatedAt: string,
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
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateGroupChatMessageSubscription = {
  onUpdateGroupChatMessage?:  {
    __typename: "GroupChatMessage",
    id: string,
    type: GroupChatMessageType,
    groupChatID: string,
    senderProfileID: string,
    groupChat?:  {
      __typename: "GroupChat",
      id: string,
      name: string,
      firstInvitedProfileIDList?: string | null,
      creatorProfileID: string,
      createdAt: string,
      updatedAt: string,
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
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteGroupChatMessageSubscription = {
  onDeleteGroupChatMessage?:  {
    __typename: "GroupChatMessage",
    id: string,
    type: GroupChatMessageType,
    groupChatID: string,
    senderProfileID: string,
    groupChat?:  {
      __typename: "GroupChat",
      id: string,
      name: string,
      firstInvitedProfileIDList?: string | null,
      creatorProfileID: string,
      createdAt: string,
      updatedAt: string,
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
    presenceID?: string | null,
    senderProfileID?: string | null,
    groupChatInvitationID?: string | null,
    groupChatID?: string | null,
    presence?:  {
      __typename: "Presence",
      id: string,
      placeID: string,
      userProfileID: string,
      startingDateTime: string,
      endingDateTime: string,
      startingTime?: string | null,
      endingTime: string,
      createdAt: string,
      updatedAt: string,
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
    groupChatInvitation?:  {
      __typename: "GroupChatInvitation",
      id: string,
      senderProfileID: string,
      receiverProfileID: string,
      groupChatID: string,
      status: GroupChatInvitationStatus,
      createdAt: string,
      updatedAt: string,
    } | null,
    groupChat?:  {
      __typename: "GroupChat",
      id: string,
      name: string,
      firstInvitedProfileIDList?: string | null,
      creatorProfileID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
