import React from "react";
import { useAppSelector } from "../../../hooks";
import { IFeed, IFeedItem } from "../../../../use-cases/feed/types";
import { NEW_GROUPCHATLIST } from "../slice";
import { IGroupChatState, IGroupChatListState, IGroupChatMessageState } from "../slice/interface";
import { useSelector } from "react-redux";
import { AppDispatch } from "../../../store";
import { INewGroupChatListActionPayload } from "../slice/actions";
import groupChatReducers from "../slice/reducers";
import { IGroupChat, IGroupChatList, IGroupChatMessage } from "../../../../use-cases/groupchat/types";
import { IGroupChatModelEventListener } from "../../../../use-cases/groupchat/interface";
import { IFeedItemState } from "../../feed/slice/interface";


interface IGroupChatModelInput {
    dispatchFunc: AppDispatch
    selectorFunc: typeof useAppSelector
}

export interface IGroupChatModel extends IGroupChatModelEventListener{}


export function createGroupChatModel (input: IGroupChatModelInput): IGroupChatModel {
    const model : IGroupChatModel = {
        newGroupChatListEventHandler: (groupChatList: IGroupChatList) => {
            const payload: INewGroupChatListActionPayload = GroupChatModelAdapter.parseGroupChatList(groupChatList)
            input.dispatchFunc(NEW_GROUPCHATLIST(payload))
        }
    }

    return model
}


/**
 * Parse the payload coming from the use case into the model's payload action
 */
class GroupChatModelAdapter{

    static parseGroupChatList(groupChatList: IGroupChatList): IGroupChatListState{
        const items: IGroupChatState[] = []

        groupChatList.items.forEach((item: IGroupChat) => {
            const groupChatState: IGroupChatState = {
                ...item,
                conversation: this.parseGroupChatConversation(item.conversation)
            }
            items.push(groupChatState)
        })
        
        return {items}
    }

    private static parseGroupChatConversation(conversation: IGroupChat['conversation']): IGroupChatState['conversation']{

        const conversationState: IGroupChatState['conversation'] = []

        conversation.forEach((item: IGroupChatMessage) => {
            let messageState: IGroupChatMessageState;
            if(typeof item.content == "string"){
                messageState = {
                    ...item,
                    content: item.content
                }
            } else {
                messageState = {
                    ...item,
                    content: this.parseFeedItem(item.content)
                }
            }
            conversationState.push(messageState)
        })

        return conversationState
    }

    private static parseFeedItem(feedItem: IFeedItem): IFeedItemState{
        
        return {
            ...feedItem,
            startingTime: feedItem.startingTime.toLocaleDateString(),
            endingTime: feedItem.endingTime.toLocaleDateString() 
        }
    }
}