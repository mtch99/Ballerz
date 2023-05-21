import { IUserProfile } from "../../../../../domain/use-cases/types";
import { IUserProfileListState } from "./interface";



export interface INewUserProfileListActionPayload extends IUserProfileListState{}
export interface INewSentFriendshipRequestActionPayload {
    receiverProfileID: string
}