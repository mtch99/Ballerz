import { IGroupChatState } from "../../app/features/groupChat/groupChatList/slice/interface";


export interface  IGroupChatConversationNavigationController{}

export default interface IGroupChatConversationScreen {
    navigationController: IGroupChatConversationNavigationController;
    groupChat: IGroupChatState
    handleSendMessagePress(groupChatId: string, messageContent: string): void
}


export interface IGroupChatConversationViewProps {
    handleSendMessagePress: IGroupChatConversationScreen['handleSendMessagePress']
    groupChat: IGroupChatState
}


