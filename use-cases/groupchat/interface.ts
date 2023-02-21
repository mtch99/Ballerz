import { IGroupChat, IGroupChatList, INewGroupChatMessageEventHandlerInput, ISendGroupChatMessageInput } from "./types";

export default interface IGroupChatUseCase {
    getGroupChatList(): IGroupChatList
    sendGroupChatMessage(input: ISendGroupChatMessageInput): boolean
}




export interface IGroupChatModelEventListener {
    newGroupChatListEventHandler(groupChatList: IGroupChatList): void
    newGroupChatMessageEventHandler(input: INewGroupChatMessageEventHandlerInput): void
}


