import uuid  from "react-native-uuid";
import initialGroupChatList from "./data/groupChatList";
import IGroupChatUseCase, { IGroupChatModelEventListener } from "./interface";
import { IGroupChat, IGroupChatList, ISendGroupChatMessageInput } from "./types";


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

    sendGroupChatMessage(input: ISendGroupChatMessageInput): boolean {
        this.modelEventListener.newGroupChatMessageEventHandler({
            groupChatId: input.groupChatId,
            message: {
                id: uuid.v4().toString(),
                author: {
                    id: 'moiId',
                    username: "moi",
                    badges: {items: []}
                },
                content: input.messageContent
            }
        })
        return true
    }
}

