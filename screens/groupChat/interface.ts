import { IGroupChatListState, IGroupChatState } from "../../app/features/groupChat/types";
import { GroupChatStackNavigationProp } from "../../navigation/groupChat/types";


export default interface  IGroupChatListScreen{
    navigationController: IGroupChatNavigationController
    handleGroupChatPress(id: string): void
    getGroupChatList(): void
} 


export interface IGroupChatNavigationController {
    goToGroupChatConversationScreen(GroupChat: IGroupChatState): void
    navigation: GroupChatStackNavigationProp<'GroupChatListScreen'>
}


export interface IGroupChatListViewProps {
    groupChatList: IGroupChatListState
    onPressGroupChat: IGroupChatListScreen['handleGroupChatPress']
}