import { IUserProfileDataState } from "./../../app/features/userProfile/userProfileList/slice/interface";


export interface IUserProfileItemViewProps {
    onPressUserProfileItem(id: IUserProfileDataState['id']): void;
    userProfile: IUserProfileDataState
}