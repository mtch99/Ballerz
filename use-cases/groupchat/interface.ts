import { IGroupChat, IGroupChatList } from "./types";

export default interface IGroupChatUseCase {
    getGroupChatList(): IGroupChatList
}


export interface IGroupChatModelEventListener {
    newGroupChatListEventHandler(groupChatList: IGroupChatList): void
}