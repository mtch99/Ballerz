import { IGroupChatMessageState, IGroupChatState } from "../../app/features/groupChat/groupChatList/slice/interface";
import { IFeedItemState } from "./../../app/features/feed/slice/interface";


export interface IMessageItemViewProps{
    message: IGroupChatMessageState
}

export interface IMessageInputViewProps{
    onPressSend: (textInput: string) => void;
}