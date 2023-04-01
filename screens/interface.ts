import { IUserProfileData } from "../domain/use-cases/types"

export interface ISelectableUserProfileData extends IUserProfileData {
    selected: boolean
}



export interface IUserProfileListViewProps {
    usersList: IUserProfileData[]
    onPressUserProfile(item: IUserProfileData): void
}