import { IUserProfileData } from "../types";
import { IUserProfile } from "../types";

export interface IUserProfileUseCase {
    observer: IUserProfileModel
    getAllUserProfileData(): Promise<IUserProfileData[]>
    getUserProfile(id: IUserProfileData['id']): Promise<IUserProfile | null>
    defineUsername(input: IDefineUsernameInput): Promise<IDefineUsernameResult>
}


export interface IUserProfileModel {
    onNewUserProfileList(input: IUserProfileData[]): void
    onNewUserProfile(input: IUserProfile): void
    onDefineUsername(input: IUserProfile): void
    setMyProfile(input: IUserProfile): void
}


export interface IUserProfileRepository {
    getAllUserProfileData(): Promise<IUserProfileData[]>
    getUserProfile(id: IUserProfileData['id']): Promise<IUserProfile | null>
    defineUsername(input: IDefineUsernameInput): Promise<IDefineUsernameResult>
}


export interface IDefineUsernameInput {
    email: string
    username: string
}

export interface IDefineUsernameResult {
    error: boolean
    userProfile?: IUserProfile
}