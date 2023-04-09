import { IDefineUsernameResult } from "../../domain/use-cases/auth/interface";
import { IDefineUsernameInput, IRequestFriendShipResult } from "./../../domain/use-cases/userProfile/interface";
import { IUserProfileUseCase } from "../../domain/use-cases/userProfile/interface";
import { IUserProfileListState } from "../../app/features/userProfile/userProfileList/slice/interface";
import { IUserProfileState } from "../../app/features/types";
import { IUserProfileData } from "../../domain/use-cases/types";


export interface IUserProfileController {
    getAllUserProfiles(): Promise<void>
    getUserProfile(id: IUserProfileState['id']): void
    getMyProfile(email: string): void
    defineUsername(input: IDefineUsernameInput): Promise<IDefineUsernameResult>
    sendFriendShipRequest(input: {senderProfileID: string, receiverProfileID: string}): Promise<IRequestFriendShipResult>
    sendMultipleFriendShipRequests(input: ISendFriendshipRequestsInput): Promise<void>
}


export interface ISendFriendshipRequestsInput {
    myProfileID: string
    receiverProfiles: IUserProfileData[]
}