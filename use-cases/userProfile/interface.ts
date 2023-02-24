import { IUserProfile } from "../types";

export interface IUserProfileUseCase {
    observer: IUserProfileModelEventListener
    getAllUserProfiles(): IUserProfile[]
}


export interface IUserProfileModelEventListener {
    onNewUserProfileList(input: IUserProfile[]): void
}