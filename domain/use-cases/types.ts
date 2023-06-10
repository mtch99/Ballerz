
export interface IFeed extends Array<IFeedItem>{}


export interface ICity{
    id: string;
    name: string;
}

export interface IComment{
    id: string;
    author: IUserProfileData
    text: string;
}
export interface IFeedItem extends IGame {
    place: IPlaceData
}

export interface IAttendance {
    id: string;
    arrivalDateTime: string;
    departureDateTime: string;
    userProfileData: IUserProfileData
}

export interface IGameData {
    id: string
    placeID: string
    place: IPlaceData
    startingTime: string
    endingTime: string
    city: ICity
    comments: Array<IComment>
}

export interface IGame extends IGameData {
    friendsThere: IUserProfileData[]
    comments: IComment[]
    badges: IBadge[]
    attendants: IAttendance[]
    place: IPlaceData
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
    city: ICity
}


export interface IPlaceData {
    id: string
    name: string
    address: string
    city: ICity
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
    id: string
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
    game: IGameData
    presence: {
        id: string
        place: {
            id: string
            name: string
            address: string
        }
        startingDateTime: string
        endingDateTime: string
    }
}












