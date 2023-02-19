import initialGroupChatList from "./data/groupChatList";
import IGroupChatUseCase, { IGroupChatModelEventListener } from "./interface";
import { IGroupChat, IGroupChatList } from "./types";


export default class GroupChatUseCase implements IGroupChatUseCase{

    modelEventListener: IGroupChatModelEventListener;
    constructor(groupChatModel: IGroupChatModelEventListener){
        this.modelEventListener = groupChatModel;
    }

    getGroupChatList(): IGroupChatList {
        const groupChatList: IGroupChatList = initialGroupChatList
        this.modelEventListener.newGroupChatListEventHandler(groupChatList)
        return groupChatList
    }
}

