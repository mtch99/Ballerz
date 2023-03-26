import { IUserProfileState } from "./../../app/features/types";
import { IUserProfile } from "./../../domain/use-cases/types";
import { IRequestFriendShipInput, IRequestFriendShipResult } from "./../../domain/use-cases/userProfile/interface";
import { IUserProfileListState } from "../../app/features/userProfile/userProfileList/slice/interface";
import { IDefineUsernameResult } from "../../domain/use-cases/Auth/interface";
import { IUserProfileData } from "../../domain/use-cases/types";
import UserProfileUseCase from "../../domain/use-cases/userProfile";
import { IDefineUsernameInput, IUserProfileModelEventListener, IUserProfileUseCase } from "../../domain/use-cases/userProfile/interface";
import { ISendFriendshipRequestsInput, IUserProfileController } from "./interface";



export default class UserProfileController implements IUserProfileController{

    userProfileUseCase: IUserProfileUseCase;
    userProfileList: IUserProfileListState;
    constructor(model: IUserProfileModelEventListener, userProfileList: IUserProfileListState){
        this.userProfileUseCase = new UserProfileUseCase(model)
        this.userProfileList = userProfileList
        console.log("Creating user profile controller")
    }
    async getMyProfile(email: string | undefined): Promise<boolean> {
        if(!email){
            return false
        }
        const response = await this.userProfileUseCase.getMyUserProfile(email)
        if(!response){
            return false
        }
        return true
    }

    async sendFriendShipRequests(input: ISendFriendshipRequestsInput): Promise<void> {
        const promises: Promise<IRequestFriendShipResult>[] = []
        const {myProfileID, receiverProfiles} = input
        receiverProfiles.forEach((userProfileData) => {
            const input: IRequestFriendShipInput = {
                senderProfileID: myProfileID,
                receiverProfileID: userProfileData.id
            }
            promises.push(this.userProfileUseCase.requestFriendShip(input))
        })

        const result = await Promise.all(promises)
        console.warn(`Result of senndFriendshipRequests function: ${JSON.stringify(result)}`) 
    }

    async getAllUserProfiles(): Promise<void>{
        await this.userProfileUseCase.getAllUserProfileData()
    }

    async getUserProfile(id: string): Promise<boolean> {
        let result = true
        const response = await this.userProfileUseCase.getUserProfile(id)
        if(!response) {
            result = false
        }
        return result
    }

    async defineUsername(input: IDefineUsernameInput): Promise<IDefineUsernameResult> {
        const result = await this.userProfileUseCase.defineUsername(input)
        console.log(`Response of define username function: ${JSON.stringify(result)}`)
        return result
    }
}