import PlaceRepository from "../../repositories/Place";
import initialPlaces, { initialPlaceProfiles } from "../data/places";
import initialUserProfileData from "../data/userProfile";
import { IPlaceData } from "../types";
import IPlaceUseCase, { IPlaceModelEventListener, IPlaceRepository } from "./interface";
import { IPlaceProfile } from "./types";


export default class PlaceUseCase implements IPlaceUseCase {
    
    observer: IPlaceModelEventListener
    constructor(observer: IPlaceModelEventListener){
        this.observer = observer;
    }
    repository: IPlaceRepository = new PlaceRepository();

    async getAllPlaces(): Promise<IPlaceData[]> {
        const response = await this.repository.getAllPlaces()
        this.observer.onNewPlaceList(response);
        return response;
    }

   async getPlaceProfile(id: string, myUserProfileID?: string): Promise<IPlaceProfile | null> {
        const response = await this.repository.getPlaceProfile(id, myUserProfileID)
        if(response){
            this.observer.onNewPlaceProfile(response);
        }
        return response;
    }
} 