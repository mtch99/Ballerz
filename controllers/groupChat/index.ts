import { IGroupChatModel } from "../../app/features/groupChat/model";
import IGroupChatMapState from "../../app/features/groupChat/groupChatMap/slice/interface";
import { IGroupChatListState } from "../../app/features/groupChat/types";
import GroupChatUseCase from "../../domain/use-cases/groupchat";
import IGroupChatUseCase from "../../domain/use-cases/groupchat/interface";
import { ISendGroupChatMessageInput } from "../../domain/use-cases/groupchat/types";
import IGroupChatController from "./interface";


export default class GroupChatController implements IGroupChatController {

    private groupChatUseCase: IGroupChatUseCase
    groupChatList: IGroupChatListState
    groupChatMap: IGroupChatMapState;

    constructor(groupChatModel: IGroupChatModel, groupChatList: IGroupChatListState, groupChatMap: IGroupChatMapState){
        this.groupChatUseCase = new GroupChatUseCase(groupChatModel)
        this.groupChatList = groupChatList
        this.groupChatMap = groupChatMap
    }

    getGroupChatList(): void {
        this.groupChatUseCase.getGroupChatList()
    }

    sendGroupChatMessage(input: ISendGroupChatMessageInput): boolean {
        return this.groupChatUseCase.sendGroupChatMessage(input)
    }
}