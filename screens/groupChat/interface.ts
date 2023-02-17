import { IGroupChatState } from "../../app/features/groupChat/slice/interface";


export default interface  IGroupChatListScreen{
    navigationController: IGroupChatNavigationController
    handleGroupChatPress(GroupChat: IGroupChatState): void
    getGroupChatList(): void
} 


export interface IGroupChatNavigationController {
    goToGroupChatConversationScreen(GroupChat: IGroupChatState): void
}