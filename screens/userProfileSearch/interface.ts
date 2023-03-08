import { IUserProfileListState, IUserProfileState } from "./../../app/features/userProfile/slice/interface";




export interface IUserProfileSearchScreen {
    userProfileList: IUserProfileListState
    onPressUserProfile(id: string): void
}

export interface IUserProfileListViewProps {
    onPressUserProfile: (id: string) => void;
    userProfileList: IUserProfileListState;
}