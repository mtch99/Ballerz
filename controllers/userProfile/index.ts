import { IUserProfileModel } from "../../app/features/userProfile/adapter";
import { IUserProfileListState } from "../../app/features/userProfile/userProfileList/slice/interface";
import { IDefineUsernameResult } from "../../domain/use-cases/Auth/interface";
import UserProfileUseCase from "../../domain/use-cases/userProfile";
import { IDefineUsernameInput, IUserProfileUseCase } from "../../domain/use-cases/userProfile/interface";
import { IUserProfileController } from "./interface";



export default class UserProfileController implements IUserProfileController{

    userProfileUseCase: IUserProfileUseCase;
    userProfileList: IUserProfileListState;
    constructor(model: IUserProfileModel, userProfileList: IUserProfileListState){
        this.userProfileUseCase = new UserProfileUseCase(model)
        this.userProfileList = userProfileList
    }

    getAllUserProfiles(): void{
        this.userProfileUseCase.getAllUserProfileData()
    }

    getUserProfile(id: string): void {
        this.userProfileUseCase.getUserProfile(id)
    }

    defineUsername(input: IDefineUsernameInput): Promise<IDefineUsernameResult> {
        return this.userProfileUseCase.defineUsername(input)
    }
}