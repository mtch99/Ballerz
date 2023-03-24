import { IUserProfileData } from "../types";
import { IUserProfile } from "../types";

export interface IUserProfileUseCase {
    observer: IUserProfileModelEventListener
    getAllUserProfileData(): Promise<IUserProfileData[]>
    getUserProfile(id: IUserProfileData['id']): Promise<IUserProfile | null>
    defineUsername(input: IDefineUsernameInput): Promise<IDefineUsernameResult>
    requestFriendShip(input: IRequestFriendShipInput): Promise<IRequestFriendShipResult>
    getMyUserProfile(email: string): Promise<IUserProfile | null>
}


export interface IUserProfileModelEventListener {
    onNewUserProfileList(input: IUserProfileData[]): void
    onNewUserProfile(input: IUserProfile): void
    onUsernameDefinedEvent(userProfileData: IUserProfileData): void
    setMyProfile(input: IUserProfile): void
}


export interface IUserProfileRepository {
    getAllUserProfileData(): Promise<IUserProfileData[]>
    getUserProfile(id: IUserProfileData['id']): Promise<IUserProfile | null>
    defineUsername(input: IDefineUsernameInput): Promise<IDefineUsernameResult>
    requestFriendship(input: IRequestFriendShipInput): Promise<IRequestFriendShipResult>
    getUserProfileByEmail(email: string): Promise<IUserProfile | null>
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