import { IScreenState } from "./../interface";
import { IUserProfileDataState } from "../../app/features/types";
import { IUserProfileListState } from "../../app/features/userProfile/userProfileList/slice/interface";
import { IUserProfileData } from "../../domain/use-cases/types";



export interface IUserProfileListScreenState extends IScreenState {
    userProfileList: IUserProfileListState['items']
    filteredUserProfileList: IUserProfileListState['items']
    filterInput: string | null
}

export interface ISelectableUserProfileListViewProps extends IUserProfileListViewProps {
    usersList: ISelectableUserProfileData[]
}


export interface IUserProfileListScreenNavigationController{
    goToUserProfile(userProfileData: IUserProfileDataState): void
}

export interface IUserProfileListViewProps {
    usersList: IUserProfileData[]
    onPressUserProfile(item: IUserProfileData): void
}



export interface ISelectableUserProfileListScreenState extends IUserProfileListScreenState {
    userProfileList: ISelectableUserProfileData[]
    filteredUserProfileList: ISelectableUserProfileData[]
}

export interface ISelectableUserProfileData extends IUserProfileData {
    selected: boolean
}


export interface IUserProfileListScreenProps {
    userProfileList: IUserProfileData[]
}