import {INewGroupChatMessageActionPayload, INewGroupChatListActionPayload } from "./actions";
import { PayloadAction } from "@reduxjs/toolkit";
import { IGroupChatListState, IGroupChatMessageState, IGroupChatModelState, IGroupChatRepo, IGroupChatState} from "./interface";

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
type IGroupChatReducer<PayloadType> = (state: IGroupChatModelState, action: PayloadAction<PayloadType>) => IGroupChatModelState

const NewGroupChatListReducer: IGroupChatReducer<INewGroupChatListActionPayload> = (state, action) => {

    const items = action.payload.items
    const groupChatList: IGroupChatListState = {items:[...items]}
    let groupChatRepo: IGroupChatRepo = {}
    
    for(const groupChat of items){
        groupChatRepo = {
            ...groupChatRepo,
            [groupChat.id]: groupChat
        }
    }

    const result = {
        ...state,
        groupChatList: groupChatList,
        groupChatRepo
    }

    return result
}


const newMessageReducer: IGroupChatReducer<INewGroupChatMessageActionPayload> = (state, action) => {
    
    const newGroupChatList = sortGroupChatList(state.groupChatList, action.payload)
    const newGroupChatRepo = updateGroupChatRepo(state.groupChatRepo, action.payload)

    console.error("GroupChat Convo: \n " + JSON.stringify(newGroupChatRepo["firstGroupChatId"].conversation[0]))

    return {
        groupChatList: newGroupChatList,
        groupChatRepo: newGroupChatRepo
    }
}


/**
 * Removes the item of specified id, updates its last message and place it at first position
 * TODO: After changing the data contained in the IGoupChatListState, implemement the last message update, watch the upper comment for reminder
 * @param prevGroupChatList 
 * @param groupChatId 
 * @returns 
 */
function sortGroupChatList(prevGroupChatList: IGroupChatListState, payload: INewGroupChatMessageActionPayload): IGroupChatListState {
    const groupChatId = payload.groupChatId

    const groupChatIndex: number = prevGroupChatList.items.findIndex(groupChat => groupChat.id==groupChatId)
    if(groupChatIndex == -1) {
        console.error("Unexisting group chat")
        return {...prevGroupChatList}
    } else {
        const groupChat = prevGroupChatList.items[groupChatIndex]

        const newItems = [...prevGroupChatList.items]
        newItems.splice(groupChatIndex)
        newItems.unshift(groupChat)

        const result: IGroupChatListState = {items: newItems}
        return result
    }
}


function updateGroupChatRepo(groupChatRepo: IGroupChatModelState['groupChatRepo'], payload: INewGroupChatMessageActionPayload): IGroupChatModelState['groupChatRepo']{
    const groupChat = groupChatRepo[payload.groupChatId]
    if(!groupChat){
        console.error("Unexisting conversation")
        return groupChatRepo
    } else {
        const prevConvo = groupChat.conversation
        const newConvo = [...prevConvo]
        const newMessage = payload.message
        newConvo.unshift(newMessage)

        return {
            ...groupChatRepo,
            [payload.groupChatId]: {
                ...{
                    ...groupChat,
                    conversation: newConvo
                }
            }
        }
    }
    
}



/**
 * Add the new message at the start of the conversion array
 * @param message 
 * @param conversation 
 * @returns 
 */
const addNewMessageToConversation = (message: IGroupChatMessageState, conversation: IGroupChatMessageState[]): IGroupChatMessageState[] => {
    let result: IGroupChatMessageState[] = [];
    result = [...conversation]
    result.unshift(message)

    return result
}


const updateGroupChatConversation = (conversation: IGroupChatMessageState[], groupChat: IGroupChatState): IGroupChatState => {
    return {
        ...groupChat,
        conversation
    }
}




/**
 * Update a groupChatState in the list of groupChatStates and put it as first element in the list
 * @param groupChatId id of 
 * @param newGroupChatState updated group chat state
 * @param prevGroupChatList previous group chat List
 * @returns 
 */
function updateGroupChatList(newGroupChatState: IGroupChatState, prevGroupChatList: IGroupChatState[]): IGroupChatState[] {
    const groupChatId: IGroupChatState['id'] = newGroupChatState.id
    const groupChatIndex: number = prevGroupChatList.findIndex(groupChat => groupChat.id==groupChatId)
    
    // If the prevGroupChatList does not contain a groupChat of that id
    if(groupChatIndex == -1){
        return prevGroupChatList
    }


    // Initialize the result as a copy of the prevGroupChatList
    const result = [...prevGroupChatList]

    //Remvove the previous groupChat from the result list
    result.splice(groupChatIndex, 1)
    // Add the updated item at the front
    result.unshift(newGroupChatState)


    return result
}





/**
 * Step 4
 */
const groupChatListReducers = {
    NEW_GROUPCHATLIST: NewGroupChatListReducer,
    NEW_MESSAGE: newMessageReducer
}

export default groupChatListReducers
