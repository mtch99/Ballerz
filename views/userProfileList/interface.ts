import { IUserProfileState } from "../../app/features/userProfile/slice/interface";


export interface IUserProfileItemViewProps {
    onPressUserProfileItem(): void;
    userProfile: IUserProfileState
}