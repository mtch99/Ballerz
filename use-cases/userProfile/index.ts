import initialUserProfiles from "../data/userProfile";
import { IUserProfile } from "../types";
import { IUserProfileModelEventListener, IUserProfileUseCase } from "./interface";


export default class UserProfileUseCase implements IUserProfileUseCase{

    observer: IUserProfileModelEventListener;

    constructor(observer: IUserProfileModelEventListener){
        this.observer = observer;
    }


    getAllUserProfiles(): IUserProfile[] {
        const result = initialUserProfiles
        this.observer.onNewUserProfileList(result);
        return initialUserProfiles
    }
}