import { IUserProfileDataState } from "../../../app/features/userProfile/userProfileList/slice/interface"



export interface IUserProfileListScreenNavigationController{
    goToUserProfile(id: IUserProfileDataState['id']): void
}