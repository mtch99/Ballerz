import initialUserProfileData, { initialUserProfiles } from "../data/userProfile";
import { IUserProfile, IUserProfileData } from "../types";
import { IUserProfileModelEventListener, IUserProfileUseCase } from "./interface";


export default class UserProfileUseCase implements IUserProfileUseCase{

    observer: IUserProfileModelEventListener;

    constructor(observer: IUserProfileModelEventListener){
        this.observer = observer;
    }


    getAllUserProfilData(): IUserProfileData[] {
        const result = initialUserProfileData
        // console.warn("Fetching userProfiles")
        this.observer.onNewUserProfileList(result);
        return initialUserProfileData
    }

    getUserProfile(id: string): IUserProfile | null {
        for (let userProfile of initialUserProfiles) {
            if(userProfile.id === id) {
                console.warn("Found id: " + id)
                this.observer.onNewUserProfile(userProfile)
                return userProfile;
            }
        }
        return null;
    }


}