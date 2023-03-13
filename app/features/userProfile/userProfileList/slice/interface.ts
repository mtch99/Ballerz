import { IUserProfile, IUserProfileData } from "../../../../../use-cases/types";


export interface IUserProfileListState {
    items: IUserProfileDataState[]
}

export interface IUserProfileDataState extends IUserProfileData{}