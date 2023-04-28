import { IPlaceData } from "./../../domain/use-cases/types";


export default interface IPlaceProfileScreen{
    addPicture(): void
    play(): void
    navigationController: IPlaceProfileScreenNavigationController
}


export interface IPlaceProfileScreenNavigationController{
    goToCreateTimeSlot(placeDate: IPlaceData): void
}