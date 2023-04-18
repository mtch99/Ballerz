
export interface IFeed extends Array<IFeedItem>{}



export interface IComment{
    id: string;
    author: IUserProfileData
    text: string;
}
export interface IFeedItem extends IGame {
    place: IPlaceData
}


export interface IGame {
    id: string;
    friendsThere: IUserProfileData[]
    comments: IComment[]
    badges: IBadge[]
    startingTime: Date
    endingTime: Date
    attendants: IUserProfileData[]
    place: IPlaceData
}



export interface IPlaceData {
    id: string;
    name: string
    address: string
}



export interface IUserProfile extends IUserProfileData {
    games: IGame[]
    friends: IUserProfileData[]
    email:string
}


export interface IUserProfileData{
    id: string
    username: string
    badges: IBadge[]
    isFriend: boolean | undefined
}


export interface IPlaceData {
    id: string;
    name: string;
    address: string
}


export interface IBadge {
    name: string
    symbol: string
    description: string
}


export interface IBadgeList {
    items: IBadge[]
}

export enum NotificationType{
    friendshipRequest="friendshipRequest",
    newFriend="newFriend",
    friendPlaying="friendPlaying",
    joinGroupChat="joinGroupChat",
    newGroupChatMember="newGroupChatMember"
}

export type Notification = IFriendShipRequestNotification | INewFriendNotification | IFriendPlayingNotification


export interface IFriendshipRequest{
    id: string
    senderProfileID: string
    senderProfile: IUserProfileData
    receiverProfileID: string
    receiverProfile: IUserProfileData
    status: keyof typeof FriendshipRequestStatus
}

export interface _INotification{
    type: keyof typeof NotificationType
    receiverProfileID: string;
    senderProfileID: string;
    senderProfile: IUserProfileData;
    createdAt: string;
    updatedAt: string;
}

export interface IFriendShipRequestNotification extends _INotification{
    type: NotificationType.friendshipRequest
    friendshipRequestID: string;
    friendshipRequest: IFriendshipRequest
}

export enum FriendshipRequestStatus {
    pending="pending",
    accepted="accepted",
    rejected="rejected"
}

export interface INewFriendNotification extends _INotification{
    type: NotificationType.newFriend
}

export interface IFriendPlayingNotification extends _INotification{
    type: NotificationType.friendPlaying
    game: IGame
}










