import { IGroupChat } from "../../../domain/use-cases/groupchat/types";
import { IUserProfileData } from "../../../domain/use-cases/types";
import { IFeedItemState} from "../feed/slice/interface";

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