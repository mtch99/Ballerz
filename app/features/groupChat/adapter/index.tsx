import React from "react";
import { useAppSelector } from "../../../hooks";
import { IFeed, IFeedItem } from "../../../../use-cases/types";
import * as GroupChatListSlice from "../groupChatList/slice";
import * as GroupChatMapSlice from "../groupChatMap/slice"
import { IGroupChatState, IGroupChatListState, IGroupChatMessageState } from "../groupChatList/slice/interface";
import { useSelector } from "react-redux";
import { AppDispatch } from "../../../store";
import { INewGroupChatListActionPayload, INewGroupChatMessageActionPayload } from "../groupChatList/slice/actions";
import { INewGroupChatListActionPayload as INewGroupChatMapMessageActionPayload } from "../groupChatMap/slice/actions";
import { IGroupChat, IGroupChatList, IGroupChatMessage } from "../../../../use-cases/groupchat/types";
import { IGroupChatModelEventListener } from "../../../../use-cases/groupchat/interface";
import { IFeedItemState } from "../../feed/slice/interface";
import { NEW_GROUPCHATLIST } from "../groupChatList/slice";


interface IGroupChatModelInput {
    dispatchFunc: AppDispatch
    selectorFunc: typeof useAppSelector
}

export interface IGroupChatModel extends IGroupChatModelEventListener{}


export function createGroupChatModel (modelInput: IGroupChatModelInput): IGroupChatModel {
    const model : IGroupChatModel = {
        newGroupChatListEventHandler: (groupChatList: IGroupChatList) => {
            const payload: INewGroupChatListActionPayload = GroupChatModelAdapter.parseGroupChatList(groupChatList)
            modelInput.dispatchFunc(NEW_GROUPCHATLIST(payload))
            const payload2: INewGroupChatMapMessageActionPayload = {groupChatList: payload.items}
            modelInput.dispatchFunc(GroupChatMapSlice.NEW_GROUPCHATMAP(payload2))
        },
        newGroupChatMessageEventHandler: (input) => {
            const groupChatMessageState = GroupChatModelAdapter.parseGroupChatMessage(input.message)
            const payload: INewGroupChatMessageActionPayload = {...input, message: groupChatMessageState}
            modelInput.dispatchFunc(GroupChatListSlice.NEW_MESSAGE(payload))
            modelInput.dispatchFunc(GroupChatMapSlice.NEW_MESSAGE(payload))
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

    static parseGroupChatMessage(input: IGroupChatMessage): IGroupChatMessageState {
        const content = input.content
        if(typeof content != 'string'){
            const feedItemState = this.parseFeedItem(content)
            return {
                ...input,
                content: feedItemState
            }
        } else {
            return {
                ...input,
                content
            }
        }
        
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