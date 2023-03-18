import { IUserProfile, IUserProfileData } from "../../../../../domain/use-cases/types";


export interface IUserProfileListState {
    items: IUserProfileDataState[]
}

export interface IUserProfileDataState extends IUserProfileData{}