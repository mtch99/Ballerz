import initialGroupChatList from "./data/groupChatList";
import IGroupChatUseCase, { IGroupChatModelEventListener } from "./interface";
import { IGroupChat } from "./types";


export default class GroupChatUseCase implements IGroupChatUseCase{

    modelEventListener: IGroupChatModelEventListener;
    constructor(groupChatModel: IGroupChatModelEventListener){
        this.modelEventListener = groupChatModel;
    }

    getGroupChatList(): IGroupChat[] {
        const groupChatList: IGroupChat[] = initialGroupChatList
        this.modelEventListener.onNewGroupChatList(groupChatList)
        return groupChatList
    }

}
