import { IGroupChatListViewProps } from "./../../screens/groupChat/interface";
import { IGroupChatState } from "../../app/features/groupChat/groupChatList/slice/interface";


export interface IGroupChatItemViewProps {
    groupChat: IGroupChatState
    onPressGroupChat: () => void
}




