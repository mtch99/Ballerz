import { IUserProfileModel } from "../../app/features/userProfile/adapter";
import { IUserProfileListState } from "../../app/features/userProfile/userProfileList/slice/interface";
import UserProfileUseCase from "../../domain/use-cases/userProfile";
import { IUserProfileUseCase } from "../../domain/use-cases/userProfile/interface";
import { IUserProfileController } from "./interface";



export default class UserProfileController implements IUserProfileController{

    userProfileUseCase: IUserProfileUseCase;
    userProfileList: IUserProfileListState;
    constructor(model: IUserProfileModel, userProfileList: IUserProfileListState){
        this.userProfileUseCase = new UserProfileUseCase(model)
        this.userProfileList = userProfileList
    }

    getAllUserProfiles(): void{
        this.userProfileUseCase.getAllUserProfilData()
    }

    getUserProfile(id: string): void {
        this.userProfileUseCase.getUserProfile(id)
    }
}