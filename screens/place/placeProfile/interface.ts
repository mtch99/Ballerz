import { IFeedItemState } from "../../../app/features/feed/slice/interface";
import { IPlaceData, IUserProfileData } from "../../../domain/use-cases/types";


export default interface IPlaceProfileScreen{
    addPicture(): void
    play(): void
    navigationController: IPlaceProfileScreenNavigationController
}


export interface IPlaceProfileScreenNavigationController{
    goToCreateTimeSlot(placeDate: IPlaceData): void
    goToAttendantsScreen(attendantsList: IUserProfileData[]): void
}