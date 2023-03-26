import { IUserProfileListState } from "../../app/features/userProfile/userProfileList/slice/interface";




export interface IUserProfileSearchScreen {
    userProfileList: IUserProfileListState
    onPressUserProfile(id: string): void
}

export interface IUserProfileListViewProps {
    onPressUserProfile: (id: string) => void;
    userProfileList: IUserProfileListState;
}