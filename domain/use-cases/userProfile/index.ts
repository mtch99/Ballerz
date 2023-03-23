import { AuthRepository } from "../../repositories/Auth";
import UserProfileRepository from "../../repositories/UserProfile";
import initialUserProfileData, { initialUserProfiles } from "../data/userProfile";
import { IUserProfile, IUserProfileData } from "../types";
import { IDefineUsernameInput, IDefineUsernameResult, IUserProfileModel, IUserProfileRepository, IUserProfileUseCase } from "./interface";


export default class UserProfileUseCase implements IUserProfileUseCase{

    observer: IUserProfileModel;

    repo: IUserProfileRepository = new UserProfileRepository()

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


    async getAllUserProfileData(): Promise<IUserProfileData[]> {
        const result = await this.repo.getAllUserProfileData()
        // console.warn("Fetching userProfiles")
        this.observer.onNewUserProfileList(result);
        return result
    }

    async getUserProfile(id: string): Promise<IUserProfile | null> {
        const response = await this.repo.getUserProfile(id)
        if(response){
            this.observer.onNewUserProfile(response)
        }
        return response
    }


}