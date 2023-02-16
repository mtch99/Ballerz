import { IUserProfileData } from "./../../../../use-cases/feed/types";
import { IGroupChat } from "../../../../use-cases/groupchat/types";
import { IUserProfile } from "../../../../use-cases/feed/types";



export interface IGroupChatListState {
    items: IGroupChatState[]
}


export interface IGroupChatState {
    id: IGroupChat['id'];
    name: IGroupChat['name'];
    members: IUserProfileData[];
    conversation: IGroupChat['conversation']
}