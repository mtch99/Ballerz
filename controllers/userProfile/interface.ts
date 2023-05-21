import { IDefineUsernameResult } from "../../domain/use-cases/auth/interface";
import { IAcceptFriendshipRequestInput, IAcceptFriendshipRequestResult, IDefineUsernameInput, IRequestFriendShipResult } from "./../../domain/use-cases/userProfile/interface";
import { IUserProfileUseCase } from "../../domain/use-cases/userProfile/interface";
import { IUserProfileListState } from "../../app/features/userProfile/userProfileList/slice/interface";
import { IUserProfileState } from "../../app/features/types";
import { IUserProfileData } from "../../domain/use-cases/types";
import UserProfileUseCase from "../../domain/use-cases/userProfile";


export interface IUserProfileController {
    getAllUserProfiles(): Promise<void>
    getUserProfile(id: IUserProfileState['id']): void
    getMyProfile(email: string): void
    defineUsername(input: IDefineUsernameInput): Promise<IDefineUsernameResult>
    sendFriendShipRequest(input: {senderProfileID: string, receiverProfileID: string}): Promise<IRequestFriendShipResult>
    sendMultipleFriendShipRequests(input: ISendFriendshipRequestsInput): Promise<void>
    acceptFriendshipRequest(input: IAcceptFriendshipRequestInput): Promise<IAcceptFriendshipRequestResult>
    uploadProfilePic: UserProfileUseCase['uploadProfilePic']
}


export interface ISendFriendshipRequestsInput {
    myProfileID: string
    receiverProfiles: IUserProfileData[]
}