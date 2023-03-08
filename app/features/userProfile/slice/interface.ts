import { IUserProfile } from "../../../../use-cases/types";


export interface IUserProfileListState {
    items: IUserProfileState[]
}

export interface IUserProfileState extends IUserProfile{}