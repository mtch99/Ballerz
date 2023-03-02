import { IGroupChatMessageState, IGroupChatState } from "../../types"


export interface INewGroupChatMessageActionPayload {
    groupChatId: IGroupChatState['id'] 
    message: IGroupChatMessageState
}


export interface INewGroupChatListActionPayload {
    groupChatList: IGroupChatState[]
}
