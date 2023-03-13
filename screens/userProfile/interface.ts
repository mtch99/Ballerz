import { IUserProfileDataState } from "./../../app/features/userProfile/userProfileList/slice/interface";


export default interface IUserProfileScreen{
    addPicture(): void
    play(): void
    navigationController: IUserProfileListScreenNavigationController
}


export interface IUserProfileListScreenNavigationController{
    goToUserProfile(id: IUserProfileDataState['id']): void
}