import initialPlaces, { initialPlaceProfiles } from "../data/places";
import initialUserProfileData from "../data/userProfile";
import { IPlaceData } from "../types";
import IPlaceUseCase, { IPlaceModelEventListener } from "./interface";
import { IPlaceProfile } from "./types";


export default class PlaceUseCase implements IPlaceUseCase {
    
    observer: IPlaceModelEventListener
    constructor(observer: IPlaceModelEventListener){
        this.observer = observer;
    }
    getAllPlaces(): IPlaceData[] {
        const result = initialPlaces
        this.observer.onNewPlaceList(result)
        return result
    }

    getPlaceProfile(id: string): IPlaceProfile | null {
        for (let placeProfile of initialPlaceProfiles) {
            if(placeProfile.id === id) {
                this.observer.onNewPlaceProfile(placeProfile)
                return placeProfile;
            }
        }
        return null;
    }
} 