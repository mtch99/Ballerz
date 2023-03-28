import { IUserProfileDataState } from "../../app/features/types";
import { IUserProfileListState } from "../../app/features/userProfile/userProfileList/slice/interface";
import { IUserProfileData } from "../../domain/use-cases/types";

export interface ISelectableUserProfileData extends IUserProfileData {
    selected: boolean
}

export interface IUserProfileListScreenState {
    userProfileList: IUserProfileListState['items']
    filteredUserProfileList: IUserProfileListState['items']
    filterInput: string | null
}


export interface ISelectableUserProfileListScreenState extends IUserProfileListScreenState {
    userProfileList: ISelectableUserProfileData[]
    filteredUserProfileList: ISelectableUserProfileData[]
}

export interface ISelectableUserProfileViewProps {
    usersList: ISelectableUserProfileData[]
    onAddButtonPress(item: ISelectableUserProfileData): void
}

export interface IUserProfileListScreenNavigationController{
    goToUserProfile(id: IUserProfileDataState['id']): void
}