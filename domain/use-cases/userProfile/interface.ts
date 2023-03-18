import { IUserProfileData } from "../types";
import { IUserProfile } from "../types";

export interface IUserProfileUseCase {
    observer: IUserProfileModelEventListener
    getAllUserProfilData(): IUserProfileData[]
    getUserProfile(id: IUserProfileData['id']): IUserProfile | null
}


export interface IUserProfileModelEventListener {
    onNewUserProfileList(input: IUserProfileData[]): void
    onNewUserProfile(input: IUserProfile): void
}