import { IGroupChatMessageState, IGroupChatState } from "../../types"
import IGroupChatMapState from "./interface"


export interface INewGroupChatMessageActionPayload {
    groupChatId: IGroupChatState['id'] 
    message: IGroupChatMessageState
}


export interface INewGroupChatListActionPayload extends IGroupChatMapState{}
