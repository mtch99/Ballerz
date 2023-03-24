import { IUserProfileDataState } from "../../app/features/types";


export interface IUserProfileItemViewProps {
    onPressUserProfileItem(id: IUserProfileDataState['id']): void;
    userProfile: IUserProfileDataState
}

export interface ISelectableUserProfileItemViewProps extends IUserProfileItemViewProps{
    selected: boolean
    onPressCheckBox(id: IUserProfileDataState['id']): void
}