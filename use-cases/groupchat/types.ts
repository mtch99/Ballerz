import { IFeedItem } from "./../feed/types";
import { IUserProfile } from "../feed/types";

export interface IGroupChat {
    id: string;
    name: string;
    members: IUserProfile[];
    conversation: IGroupChatMessage[];
}

export interface IGroupChatMessage {
    id: string;
    author: IUserProfile;
    content: string | IFeedItem
}