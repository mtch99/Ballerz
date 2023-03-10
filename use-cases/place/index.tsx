import initialPlaces, { initialPlaceProfiles } from "../data/places";
import initialUserProfiles from "../data/userProfile";
import { IPlace } from "../types";
import IPlaceUseCase, { IPlaceModelEventListener } from "./interface";
import { IPlaceProfile } from "./types";


export default class PlaceUseCase implements IPlaceUseCase {
    
    observer: IPlaceModelEventListener
    constructor(observer: IPlaceModelEventListener){
        this.observer = observer;
    }
    getAllPlaces(): IPlace[] {
        const result = initialPlaces
        this.observer.onNewPlaceList(result)
        return result
    }

    getPlaceProfile(id: string): IPlaceProfile | null {
        for (let placeProfile of initialPlaceProfiles) {
            if(placeProfile.id === id) {
                console.warn("Found id: " + id)
                this.observer.onNewPlaceProfile(placeProfile)
                return placeProfile;
            }
        }
        return null;
    }
} 