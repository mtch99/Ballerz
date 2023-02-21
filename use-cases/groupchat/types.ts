import { IFeedItem } from "./../feed/types";
import { IUserProfile } from "../feed/types";


export interface IGroupChatList{
    items: IGroupChat[]
}
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


export interface ISendGroupChatMessageInput {
    groupChatId: string;
    senderUserProfileId: string;
    messageContent: IGroupChatMessage['content']
}


export interface INewGroupChatMessageEventHandlerInput{
    groupChatId: string;
    message: IGroupChatMessage
}