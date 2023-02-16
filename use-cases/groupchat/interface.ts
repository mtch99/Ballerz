import { IGroupChat } from "./types";

export default interface IGroupChatUseCase {
    getGroupChatList(): IGroupChat[]
}


export interface IGroupChatModelEventListener {
    onNewGroupChatList(groupChatList: IGroupChat[]): void
}