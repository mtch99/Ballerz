import { IGroupChatModel } from "../../app/features/groupChat/model";
import IGroupChatMapState from "../../app/features/groupChat/groupChatMap/slice/interface";
import { IGroupChatListState } from "../../app/features/groupChat/types";
import GroupChatUseCase from "../../domain/use-cases/groupchat";
import IGroupChatUseCase, { IGroupChatModelEventListener } from "../../domain/use-cases/groupchat/interface";
import { IGroupChatList, ISendGroupChatMessageInput } from "../../domain/use-cases/groupchat/types";
import IGroupChatController from "./interface";


class GroupChatController implements IGroupChatController {

    private groupChatUseCase: IGroupChatUseCase = fakeUseCase

    createUseCase(model: IGroupChatModelEventListener){
        this.groupChatUseCase = new GroupChatUseCase(model)
        console.log(`\n GroupChat usecase initialized \n`)
    }

    getGroupChatList(): void {
        this.groupChatUseCase.getGroupChatList()
    }

    sendGroupChatMessage(input: ISendGroupChatMessageInput): boolean {
        return this.groupChatUseCase.sendGroupChatMessage(input)
    }
}

const groupChatController = new GroupChatController()
export default groupChatController


const fakeUseCase: IGroupChatUseCase = {
    getGroupChatList: function (): IGroupChatList {
        throw new Error("Function not implemented.");
    },
    sendGroupChatMessage: function (input: ISendGroupChatMessageInput): boolean {
        throw new Error("Function not implemented.");
    }
}