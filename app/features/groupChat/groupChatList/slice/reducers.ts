import {INewGroupChatMessageActionPayload, INewGroupChatListActionPayload } from "./actions";
import { PayloadAction } from "@reduxjs/toolkit";
import { action } from "mobx";
import { IGroupChatListItemState, IGroupChatListState } from "../../types";

/**
 * New slice reducers protocol
 * 1) Define the payload action in the actions.ts file
 * 2) Add the action string to the FeedActionType enum
 * 3) Implement the reducer function 
 * 4) Add the new reducers to the object containing all the reducers at the bottom
 */


/**
 * Step 1
 */
 export enum GroupChatActionType{
    NEW_GROUPCHATLIST='NEW_GROUPCHATLIST',
    NEW_MESSAGE="NEW_MESSAGE"
}


/**
 * Define a type for all the reducers
 * For each reducer, the (state parameter)'s type is set to the slice's state
 * steps 2 and 3
 */
type IGroupChatReducer<PayloadType> = (state: IGroupChatListState, action: PayloadAction<PayloadType>) => IGroupChatListState

const NewGroupChatListReducer: IGroupChatReducer<INewGroupChatListActionPayload> = (state, action) => {

    const items = action.payload.items
    const newGroupChatList: IGroupChatListState = {items:[...items]}
    
    return newGroupChatList
}



/**
 * Removes the item of specified id, updates its last message and place it at first position
 * @param prevGroupChatList 
 * @param groupChatId 
 * @returns 
 */
const newMessageReducer: IGroupChatReducer<INewGroupChatMessageActionPayload> = (state, action) => {
    const payload = action.payload
    const prevGroupChatList = state
    const groupChatId = payload.groupChatId

    const groupChatIndex: number = prevGroupChatList.items.findIndex(groupChat => groupChat.id==groupChatId)
    if(groupChatIndex == -1) {
        console.error("Unexisting group chat")
        return {...prevGroupChatList}
    } else {
        
        // Update item
        const prevGroupChatListItem = prevGroupChatList.items[groupChatIndex]
        const newGroupChatListItem: IGroupChatListItemState = {...prevGroupChatListItem, lastMessage: payload.message}
        
        // Update item's position to first element
        const newItems = [...prevGroupChatList.items]
        newItems.splice(groupChatIndex,1)
        newItems.unshift(newGroupChatListItem)

        const result: IGroupChatListState = {items: newItems}
        return result
    }
}


function sortGroupChatList(prevGroupChatList: IGroupChatListState, payload: INewGroupChatMessageActionPayload): IGroupChatListState {
    const groupChatId = payload.groupChatId

    const groupChatIndex: number = prevGroupChatList.items.findIndex(groupChat => groupChat.id==groupChatId)
    if(groupChatIndex == -1) {
        console.error("Unexisting group chat")
        return {...prevGroupChatList}
    } else {
        
        // Update item
        const prevGroupChatListItem = prevGroupChatList.items[groupChatIndex]
        const newGroupChatListItem: IGroupChatListItemState = {...prevGroupChatListItem, lastMessage: payload.message}
        
        // Put change item's position to first element
        const newItems = [...prevGroupChatList.items]
        newItems.splice(groupChatIndex,1)
        newItems.unshift(newGroupChatListItem)

        const result: IGroupChatListState = {items: newItems}
        return result
    }
}



/**
 * Step 4
 */
const groupChatListReducers = {
    NEW_GROUPCHATLIST: NewGroupChatListReducer,
    GROUPCHATLIST_NEW_MESSAGE: newMessageReducer
}

export default groupChatListReducers
