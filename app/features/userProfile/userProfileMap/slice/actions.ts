import { IUserProfileState } from "../../../types";
import { IUserProfileMapState} from "../../types";




export interface INewUserProfileMapActionPayload extends IUserProfileMapState{}


export interface INewUserProfileProfileActionPayload extends IUserProfileState{}

export interface INewSentFriendshipRequestActionPayload {
    receiverProfileID: string
}