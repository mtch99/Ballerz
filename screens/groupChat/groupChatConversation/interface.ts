
import { IGroupChatState } from "../../../app/features/groupChat/types";
import IGroupChatMapState from "../../../app/features/groupChat/groupChatMap/slice/interface";


export interface  IGroupChatConversationNavigationController{}

export default interface IGroupChatConversationScreen {
    navigationController: IGroupChatConversationNavigationController;
    groupChatMap: IGroupChatMapState
    handleSendMessagePress(groupChatId: string, messageContent: string): void
}


export interface IGroupChatConversationViewProps {
    handleSendMessagePress: IGroupChatConversationScreen['handleSendMessagePress']
    groupChatMap: IGroupChatMapState 
    groupChatId: IGroupChatState['id']
}


