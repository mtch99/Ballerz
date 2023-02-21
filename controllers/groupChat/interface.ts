import { IGroupChatListState, IGroupChatRepo, IGroupChatState } from "../../app/features/groupChat/groupChatList/slice/interface";
import IGroupChatUseCase from "../../use-cases/groupchat/interface";


export default interface IGroupChatController {
    getGroupChatList(): void
    sendGroupChatMessage: IGroupChatUseCase['sendGroupChatMessage']
}

export interface IGroupChatContext {
    controller: IGroupChatController
    groupChatListState: IGroupChatListState
    groupChatRepo: IGroupChatRepo
}