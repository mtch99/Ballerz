import { Friendship } from "../../infrastructure/BallerzServices/BallerzAPI/types";
import { FriendshipRequest } from "../../infrastructure/BallerzServices/BallerzAPI/API";


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

export type Notification = IFriendShipRequestNotification


export interface IFriendshipRequest{
    id: string
    senderProfileID: string
    senderProfile: IUserProfileData
    receiverProfileID: string
    receiverProfile: IUserProfileData
    status: keyof typeof FriendshipRequestStatus
}

export interface IFriendShipRequestNotification{
    type: NotificationType.friendshipRequest
    receiverProfileID: string;
    senderProfileID: string;
    senderProfile: IUserProfileData;
    friendshipRequestID: string;
    friendshipRequest: IFriendshipRequest
    createdAt: string;
    updatedAt: string;
}

export enum FriendshipRequestStatus {
    pending="pending",
    accepted="accepted",
    rejected="rejected"
}










