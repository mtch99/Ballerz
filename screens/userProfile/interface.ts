import { IUserProfileDataState } from "../../app/features/types";
import { IUserProfileListState } from "../../app/features/userProfile/userProfileList/slice/interface";
import { IPlaceData } from "./../../domain/use-cases/types";


export default interface IUserProfileScreen{
    addPicture(): void
    play(): void
    navigationController: IUserProfileScreenNavigationController
}





export interface IUserProfileScreenNavigationController{
    goToUserProfile(item: IUserProfileDataState): void
    goToPlaceProfile(id: IPlaceData['id']): void
    goToCommentsScreen(gameId: string): void
    goToAttendantsListScreen(gameId: string): void
    goToFriendsListScreen(userProfileList: IUserProfileDataState[]): void
}