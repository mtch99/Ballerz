import { IUserProfileData } from "../types";
import { IUserProfile } from "../types";

export interface IUserProfileUseCase {
    observer: IUserProfileModel
    getAllUserProfileData(): IUserProfileData[]
    getUserProfile(id: IUserProfileData['id']): IUserProfile | null
    defineUsername(input: IDefineUsernameInput): Promise<IDefineUsernameResult>
}


export interface IUserProfileModel {
    onNewUserProfileList(input: IUserProfileData[]): void
    onNewUserProfile(input: IUserProfile): void
    onDefineUsername(input: IUserProfile): void
    setMyProfile(input: IUserProfile): void
}


export interface IUserProfileRepository {
    getAllUserProfileData(): IUserProfileData[]
    getUserProfile(id: IUserProfileData['id']): IUserProfile | null
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