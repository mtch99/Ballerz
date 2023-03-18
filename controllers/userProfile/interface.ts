import { IUserProfileUseCase } from "../../domain/use-cases/userProfile/interface";
import { IUserProfileListState } from "../../app/features/userProfile/userProfileList/slice/interface";
import { IUserProfileState } from "../../app/features/userProfile/types";


export interface IUserProfileController {
    getAllUserProfiles(): void
    userProfileList: IUserProfileListState
    getUserProfile(id: IUserProfileState['id']): void
}