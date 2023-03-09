import { IUserProfile } from "../../../../use-cases/types";
import { IUserProfileData } from "../../feed/slice/interface";


export interface IUserProfileListState {
    items: IUserProfileState[]
}

export interface IUserProfileState extends IUserProfileData{}