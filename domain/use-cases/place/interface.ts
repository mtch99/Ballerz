import { IPlaceData } from "../types";
import { IPlaceProfile } from "./types";


export default interface IPlaceUseCase{
    observer: IPlaceModelEventListener
    getAllPlaces(): IPlaceData[]
    getPlaceProfile(id: string): IPlaceProfile | null
}


export interface IPlaceModelEventListener {
    onNewPlaceList(input: IPlaceData[]): void
    onNewPlaceProfile(input: IPlaceProfile): void
}


