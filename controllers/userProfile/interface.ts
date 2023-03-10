import { IUserProfileUseCase } from "./../../use-cases/userProfile/interface";
import { IUserProfileListState } from "../../app/features/userProfile/userProfileList/slice/interface";


export interface IUserProfileController {
    getAllUserProfiles(): void
    userProfileList: IUserProfileListState
}