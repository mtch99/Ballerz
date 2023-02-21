import { IGroupChatListState, IGroupChatMessageState, IGroupChatState } from "./interface";
import { IGroupChatList } from "../../../../../use-cases/groupchat/types";
import { IGroupChat } from "../../../../../use-cases/groupchat/types";



export interface INewGroupChatListActionPayload extends IGroupChatListState{}


export interface INewGroupChatMessageActionPayload {
    groupChatId: IGroupChatState['id'] 
    message: IGroupChatMessageState
}

