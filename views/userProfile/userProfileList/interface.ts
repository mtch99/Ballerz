import { IUserProfileDataState } from "../../../app/features/userProfile/userProfileList/slice/interface";


export interface IUserProfileItemViewProps {
    onPressUserProfileItem(): void;
    userProfile: IUserProfileDataState
}