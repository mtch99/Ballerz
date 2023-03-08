import { IPlace } from "./../types";
import { IPlaceProfile } from "./types";


export default interface IPlaceUseCase{
    observer: IPlaceModelEventListener
    getAllPlaces(): IPlace[]
    getPlaceProfile(id: string): IPlaceProfile | null
}


export interface IPlaceModelEventListener {
    onNewPlaceList(input: IPlace[]): void
    onNewPlaceProfile(input: IPlaceProfile): void
}


