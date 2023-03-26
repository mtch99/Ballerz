import { IUserProfile, IUserProfileData } from "../../../../../domain/use-cases/types";
import { IUserProfileDataState } from "../../../types";


export interface IUserProfileListState {
    items: IUserProfileDataState[]
}

