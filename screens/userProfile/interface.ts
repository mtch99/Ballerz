import { IUserProfileDataState } from "../../app/features/types";
import { IPlaceData } from "./../../domain/use-cases/types";


export default interface IUserProfileScreen{
    addPicture(): void
    play(): void
    navigationController: IUserProfileScreenNavigationController
}


export interface IUserProfileListScreenNavigationController{
    goToUserProfile(id: IUserProfileDataState['id']): void
}


export interface IUserProfileScreenNavigationController{
    goToUserProfile(id: IUserProfileDataState['id']): void
    goToPlaceProfile(id: IPlaceData['id']): void
    goToCommentsScreen(gameId: string): void
    goToAttendantsListScreen(gameId: string): void
}