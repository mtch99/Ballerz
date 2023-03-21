import initialUserProfileData, { initialUserProfiles } from "../data/userProfile";
import { IUserProfile, IUserProfileData } from "../types";
import { IDefineUsernameInput, IDefineUsernameResult, IUserProfileModel, IUserProfileRepository, IUserProfileUseCase } from "./interface";


export default class UserProfileUseCase implements IUserProfileUseCase{

    observer: IUserProfileModel;

    repo: IUserProfileRepository = {
        getAllUserProfileData: function (): IUserProfileData[] {
            throw new Error("Function not implemented.");
        },
        getUserProfile: function (id: string): IUserProfile | null {
            throw new Error("Function not implemented.");
        },
        defineUsername: function (input: IDefineUsernameInput): Promise<IDefineUsernameResult> {
            throw new Error("Function not implemented.");
        }
    } 

    constructor(observer: IUserProfileModel){
        this.observer = observer;
    }


    async defineUsername(input: IDefineUsernameInput): Promise<IDefineUsernameResult> {
        const result = await this.repo.defineUsername(input)
        if(!result.error && result.userProfile){
            this.observer.onDefineUsername(result.userProfile)
        }
        return result
    }


    getAllUserProfileData(): IUserProfileData[] {
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