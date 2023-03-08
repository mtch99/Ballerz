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
        return initialPlaces
    }

    getPlaceProfile(id: string): IPlaceProfile | null {
        for (let placeProfile of initialPlaceProfiles) {
            if(placeProfile.id === id) {
                return placeProfile;
            }
        }
        return null;
    }
} 