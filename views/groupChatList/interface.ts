import { IGroupChatListState, IGroupChatState } from "./../../app/features/groupChat/slice/interface";


export default interface IGroupChatListView {
    onPressGroupChatItem(item: IGroupChatState): void;
    groupChatListState: IGroupChatListState;
}




