import { IPlaceData } from "../types";
import { IPlaceProfile } from "./types";


export default interface IPlaceUseCase{
    repository: IPlaceRepository
    observer: IPlaceModelEventListener
    getAllPlaces(): Promise<IPlaceData[]>
    getPlaceProfile(id: string, userProfielID?:string): Promise<IPlaceProfile | null>
}


export interface IPlaceRepository {
    getAllPlaces(): Promise<IPlaceData[]>
    getPlaceProfile(id: string, userProfileID?:string): Promise<IPlaceProfile | null>
}


export interface IPlaceModelEventListener {
    onNewPlaceList(input: IPlaceData[]): void
    onNewPlaceProfile(input: IPlaceProfile): void
}


