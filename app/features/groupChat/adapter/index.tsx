import React from "react";
import { useAppSelector } from "../../../hooks";
import { IFeed, IFeedItem } from "../../../../use-cases/types";
import * as GroupChatListSlice from "../groupChatList/slice";
import * as GroupChatMapSlice from "../groupChatMap/slice"
import { useSelector } from "react-redux";
import { AppDispatch } from "../../../store";
import { INewGroupChatListActionPayload, INewGroupChatMessageActionPayload } from "../groupChatList/slice/actions";
import { INewGroupChatListActionPayload as INewGroupChatMapMessageActionPayload } from "../groupChatMap/slice/actions";
import { IGroupChat, IGroupChatList, IGroupChatMessage } from "../../../../use-cases/groupchat/types";
import { IGroupChatModelEventListener } from "../../../../use-cases/groupchat/interface";
import { IFeedItemState } from "../../feed/slice/interface";
import { NEW_GROUPCHATLIST } from "../groupChatList/slice";
import { IGroupChatListItemState, IGroupChatListState, IGroupChatMessageState, IGroupChatState } from "../types";
import IGroupChatMapState from "../groupChatMap/slice/interface";



interface IGroupChatModelInput {
    dispatchFunc: AppDispatch
    selectorFunc: typeof useAppSelector
}

export interface IGroupChatModel extends IGroupChatModelEventListener{}


export function createGroupChatModel (modelInput: IGroupChatModelInput): IGroupChatModel {
    const model : IGroupChatModel = {
        newGroupChatListEventHandler: (groupChatList: IGroupChatList) => {
            const [groupChatListState, groupChatMapState] = GroupChatModelAdapter.parseToGroupChatListState(groupChatList)
            modelInput.dispatchFunc(NEW_GROUPCHATLIST(groupChatListState))
            modelInput.dispatchFunc(GroupChatMapSlice.NEW_GROUPCHATMAP(groupChatMapState))
        },
        newGroupChatMessageEventHandler: (input) => {
            const groupChatMessageState = GroupChatModelAdapter.parseGroupChatMessage(input.message)
            const payload: INewGroupChatMessageActionPayload = {...input, message: groupChatMessageState}
            modelInput.dispatchFunc(GroupChatMapSlice.NEW_MESSAGE(payload))
            modelInput.dispatchFunc(GroupChatListSlice.GROUPCHATLIST_NEW_MESSAGE(payload))
        }
    }

    return model
}


/**
 * Parse the payload coming from the use case into the model's payload action
 */
class GroupChatModelAdapter{

    static parseToGroupChatListState(groupChatList: IGroupChatList): [IGroupChatListState, IGroupChatMapState]{
        const items: IGroupChatListItemState[] = []

        const groupChatMapState: IGroupChatMapState = {}

        groupChatList.items.forEach((item: IGroupChat) => {
            const groupChatId = item.id
            const groupChatState: IGroupChatState = {
                ...item,
                conversation: this.parseGroupChatConversation(item.conversation)
            }
            const groupChatListItemState: IGroupChatListItemState = {
                id: item.id,
                lastMessage: this.getLastMessage(item.conversation),
                name: item.name
            }
            items.push(groupChatListItemState)
            groupChatMapState[groupChatId] = groupChatState
        })

        const groupChatListState = {items}
        
        return [groupChatListState, groupChatMapState]
    }


    private static getLastMessage(conversation: IGroupChat['conversation']): IGroupChatListItemState['lastMessage'] {
        if(conversation.length == 0){
            return undefined
        } else {
            const lastMessage = conversation[conversation.length-1]
            return this.parseGroupChatMessage(lastMessage)
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


    static parseGroupChatMessage(message: IGroupChatMessage): IGroupChatMessageState {
        let messageState: IGroupChatMessageState;
            if(typeof message.content == "string"){
                messageState = {
                    ...message,
                    content: message.content
                }
            } else {
                messageState = {
                    ...message,
                    content: this.parseFeedItem(message.content)
                }
            }
            return messageState
    }



}