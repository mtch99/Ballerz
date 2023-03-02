import { IGroupChat } from "../../../use-cases/groupchat/types";
import { IFeedItemState, IUserProfileData } from "../feed/slice/interface";

export interface IGroupChatModelState{
    groupChatList: IGroupChatListState;
    groupChatRepo: IGroupChatRepo
}

export interface IGroupChatListState{
    items: IGroupChatListItemState[]
}

export interface IGroupChatListItemState{
    id: IGroupChat['id']
    name: IGroupChat['name']
    lastMessage: IGroupChatMessageState | undefined
}

export interface IGroupChatRepo {
    [key: string]: IGroupChatState
}

export interface IGroupChatState {
    id: IGroupChat['id'];
    name: IGroupChat['name'];
    members: IUserProfileData[];
    conversation: IGroupChatMessageState[]
}

export interface IGroupChatMessageState{
    id: string;
    author: IUserProfileData;
    content: string | IFeedItemState
}