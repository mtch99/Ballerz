import { IGroupChatState } from "./../../app/features/groupChat/slice/interface";


export interface  IGroupChatConversationNavigationController{}

export default interface IGroupChatConversationScreen {
    navigationController: IGroupChatConversationNavigationController;
    groupChat: IGroupChatState
}


export interface IGroupChatConversationViewProps {
    handleSendMessagePress(message: string): void;
    groupChat: IGroupChatState
}


