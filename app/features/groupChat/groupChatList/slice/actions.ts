import { IGroupChatList } from "../../../../../domain/use-cases/groupchat/types";
import { IGroupChat } from "../../../../../domain/use-cases/groupchat/types";
import { IGroupChatListState, IGroupChatMessageState, IGroupChatState } from "../../types";



export interface INewGroupChatListActionPayload extends IGroupChatListState{}


export interface INewGroupChatMessageActionPayload {
    groupChatId: IGroupChatState['id'] 
    message: IGroupChatMessageState
}

