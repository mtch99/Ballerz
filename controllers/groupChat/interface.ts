import IGroupChatMapState from "../../app/features/groupChat/groupChatMap/slice/interface";
import { IGroupChatListState } from "../../app/features/groupChat/types";
import IGroupChatUseCase from "../../domain/use-cases/groupchat/interface";


export default interface IGroupChatController {
    getGroupChatList(): void
    sendGroupChatMessage: IGroupChatUseCase['sendGroupChatMessage']
}

export interface IGroupChatContext {
    controller: IGroupChatController
    groupChatList: IGroupChatListState
    groupChatMap: IGroupChatMapState
}