import { IUserProfileData } from "../domain/use-cases/types"

export interface ISelectableUserProfileData extends IUserProfileData {
    selected: boolean
}


export interface ISelectableUserProfileViewProps {
    usersList: ISelectableUserProfileData[]
    onAddButtonPress(item: ISelectableUserProfileData): void
}