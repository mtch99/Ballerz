import { IUserProfileData } from "../types";
import { IUserProfile } from "../types";

export interface IUserProfileUseCase {
    observer: IUserProfileModelEventListener
    getAllUserProfileData(): Promise<IUserProfileData[]>
    getUserProfile(id: IUserProfileData['id']): Promise<IUserProfile | null>
    defineUsername(input: IDefineUsernameInput): Promise<IDefineUsernameResult>
    requestFriendShip(input: IRequestFriendShipInput): Promise<IRequestFriendShipResult>
    getMyUserProfile(email: string): Promise<IUserProfile | null>
    acceptFriendshipRequest(input: IAcceptFriendshipRequestInput): Promise<IAcceptFriendshipRequestResult>
    uploadProfilePic(input: IUploadProfilePicInput): Promise<IUploadProfilePicResult>
}


export interface IUserProfileModelEventListener {
    onNewUserProfileList(input: IUserProfileData[]): void
    onNewUserProfile(input: IUserProfile): void
    onUsernameDefinedEvent(userProfileData: IUserProfileData): void
    setMyProfile(input: IUserProfile): void
    onNewFriendShipRequest(input: IRequestFriendShipInput): void
    onAcceptedFriendshipRequest(notificationID: string): void
}


export interface IUserProfileRepository {
    getAllUserProfileData(): Promise<IUserProfileData[]>
    getUserProfile(id: IUserProfileData['id']): Promise<IUserProfile | null>
    defineUsername(input: IDefineUsernameInput): Promise<IDefineUsernameResult>
    requestFriendship(input: IRequestFriendShipInput): Promise<IRequestFriendShipResult>
    getMyUserProfile(email: string): Promise<IUserProfile | null>
    getMyUserProfileData(): Promise<IMyUserProfileData | null>
    acceptFriendshipRequest(input: IAcceptFriendshipRequestInput): Promise<IAcceptFriendshipRequestResult>
    uploadProfilePic(input: IUploadProfilePicInput): Promise<IUploadProfilePicResult>
    
}

export interface IMyUserProfileData extends IUserProfileData {
    email: string
}

export interface IRequestFriendShipInput {
    senderProfileID: string
    receiverProfileID: string
}

export interface IRequestFriendShipResult {
    error: false | string
}


export interface IDefineUsernameInput {
    email: string
    username: string
}

export interface IDefineUsernameResult {
    error: boolean
    userProfile?: IUserProfile
}

export interface IAcceptFriendshipRequestInput {
    friendshipRequestID: string, 
    notificationID: string
}

export interface IAcceptFriendshipRequestResult {
    error: false | string
    friendshipRequestID: string
}

export interface IUploadProfilePicInput {
    userProfileID: string,
    image: Blob
}

export interface IUploadProfilePicResult {
    error: false | string
}