import { IUserProfile } from "./../../domain/use-cases/types";
import { IDefineUsernameResult, IRequestFriendShipInput, IRequestFriendShipResult } from "./../../domain/use-cases/userProfile/interface";
import { IUserProfileData } from "../../domain/use-cases/types";
import UserProfileUseCase from "../../domain/use-cases/userProfile";
import { IDefineUsernameInput, IUserProfileModelEventListener, IUserProfileUseCase } from "../../domain/use-cases/userProfile/interface";
import { ISendFriendshipRequestsInput, IUserProfileController } from "./interface";


export class UserProfileController implements IUserProfileController{

    userProfileUseCase: IUserProfileUseCase = fakeUseCase ;


    createUseCase(model: IUserProfileModelEventListener){
        this.userProfileUseCase = new UserProfileUseCase(model)
        console.log(`\n UserProfile usecase initialized \n`)
    }

    async getMyProfile(email: string | undefined): Promise<IUserProfile | undefined> {
        if(!email){
            return undefined
        }
        const response = await this.userProfileUseCase.getMyUserProfile(email)
        if(!response){
            return undefined
        }
        return response
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


const userProfileController = new UserProfileController();
export default userProfileController;



const fakeUseCase: IUserProfileUseCase = {
    getAllUserProfileData: function (): Promise<IUserProfileData[]> {
        throw new Error("Function not implemented.");
    },
    getUserProfile: function (id: string): Promise<IUserProfile | null> {
        throw new Error("Function not implemented.");
    },
    defineUsername: function (input: IDefineUsernameInput): Promise<IDefineUsernameResult> {
        throw new Error("Function not implemented.");
    },
    requestFriendShip: function (input: IRequestFriendShipInput): Promise<IRequestFriendShipResult> {
        throw new Error("Function not implemented.");
    },
    getMyUserProfile: function (email: string): Promise<IUserProfile | null> {
        throw new Error("Function not implemented.");
    },
    observer: {} as IUserProfileModelEventListener
}