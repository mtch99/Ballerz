import { IGroupChatModel } from "../../app/features/groupChat/adapter";
import GroupChatUseCase from "../../use-cases/groupchat";
import IGroupChatUseCase from "../../use-cases/groupchat/interface";
import IGroupChatController from "./interface";


export default class GroupChatController implements IGroupChatController {

    private groupChatUseCase: IGroupChatUseCase

    constructor(groupChatModel: IGroupChatModel){
        this.groupChatUseCase = new GroupChatUseCase(groupChatModel)
    }

    getGroupChatList(): void {
        this.groupChatUseCase.getGroupChatList()
    }
}