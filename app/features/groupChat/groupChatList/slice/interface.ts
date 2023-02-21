import { IGroupChatMessage } from "../../../../../use-cases/groupchat/types";
import { IUserProfileData } from "../../../../../use-cases/feed/types";
import { IGroupChat } from "../../../../../use-cases/groupchat/types";
import { IUserProfile } from "../../../../../use-cases/feed/types";
import { IFeedItemState } from "../../../feed/slice/interface";




export interface IGroupChatModelState{
    groupChatList: IGroupChatListState;
    groupChatRepo: IGroupChatRepo
}

export interface IGroupChatListState {
    items: IGroupChatState[]
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