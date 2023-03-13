import IGroupChatMapState from "../../app/features/groupChat/groupChatMap/slice/interface";
import { IGroupChatListState } from "../../app/features/groupChat/types";
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