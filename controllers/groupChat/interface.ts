import { IGroupChatListState, IGroupChatRepo, IGroupChatState } from "../../app/features/groupChat/groupChatList/slice/interface";
import IGroupChatMapState from "../../app/features/groupChat/groupChatMap/slice/interface";
import IGroupChatUseCase from "../../use-cases/groupchat/interface";


export default interface IGroupChatController {
    getGroupChatList(): void
    sendGroupChatMessage: IGroupChatUseCase['sendGroupChatMessage']
    groupChatList: IGroupChatListState
    groupChatMap: IGroupChatMapState
}

export interface IGroupChatContext {
    controller: IGroupChatController
    groupChatList: IGroupChatListState
    groupChatMap: IGroupChatMapState
}