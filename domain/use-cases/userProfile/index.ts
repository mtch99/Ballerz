import { AuthRepository } from "../../repositories/Auth";
import UserProfileRepository from "../../repositories/UserProfile";
import initialUserProfileData, { initialUserProfiles } from "../data/userProfile";
import { IUserProfile, IUserProfileData } from "../types";
import { IAcceptFriendshipRequestInput, IAcceptFriendshipRequestResult, IDefineUsernameInput, IDefineUsernameResult, IRequestFriendShipInput, IRequestFriendShipResult, IUploadProfilePicInput, IUploadProfilePicResult, IUserProfileModelEventListener, IUserProfileRepository, IUserProfileUseCase } from "./interface";


export default class UserProfileUseCase implements IUserProfileUseCase{

    observer: IUserProfileModelEventListener;

    repo: IUserProfileRepository = new UserProfileRepository()

    constructor(observer: IUserProfileModelEventListener){
        this.observer = observer;
    }


    async getMyUserProfile(email: string): Promise<IUserProfile | null> {
        const result = await this.repo.getMyUserProfile(email)
        if(result){
            // console.warn(`Get my user profile result: ${JSON.stringify(result)}`);
            this.repo.setMyUserProfileID(result.id)
            this.observer.setMyProfile(result)
        }
        return result
    }
    
    
    async defineUsername(input: IDefineUsernameInput): Promise<IDefineUsernameResult> {
        const result = await this.repo.defineUsername(input)
        if(result.error){
            // TODO: Define and implment error types in output port and response handler
            console.error("Error on defineUsername request")
        }
        if(result.userProfile){
            const userProfileData: IUserProfileData = {
                ...result.userProfile,
                badges: []
            }
            if(!result.error && result.userProfile){
                this.observer.onUsernameDefinedEvent(userProfileData)
            }
        }
        return result
    }
    
    
    async getAllUserProfileData(): Promise<IUserProfileData[]> {
        const result = await this.repo.getAllUserProfileData()
        this.observer.onNewUserProfileList(result);
        return result
    }

    
    async getUserProfile(id: string): Promise<IUserProfile | null> {
        // const response = await this.repo.getUserProfile(id)
        let response: IUserProfile | null = await this.repo.getUserProfile(id)
        
        if(response){
            this.observer.onNewUserProfile(response)
        }
        return response
    }

    
    async requestFriendShip(input: IRequestFriendShipInput): Promise<IRequestFriendShipResult> {
        const response = await this.repo.requestFriendship(input)
        if(!response.error){
            this.observer.onNewFriendShipRequest(input)
        }
        return response
    }


    async acceptFriendshipRequest(input: IAcceptFriendshipRequestInput): Promise<IAcceptFriendshipRequestResult> {
        const response = await this.repo.acceptFriendshipRequest(input)
        if(!response.error){
            this.observer.onAcceptedFriendshipRequest(input.notificationID)
        }
        return response
    }


    async uploadProfilePic(input: IUploadProfilePicInput): Promise<IUploadProfilePicResult> {
        return await this.repo.uploadProfilePic(input)
    }
    
}

