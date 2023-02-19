import {INewMessageChatListActionPayload, INewGroupChatListActionPayload } from "./actions";
import { PayloadAction } from "@reduxjs/toolkit";
import { IGroupChatListState, IGroupChatMessageState, IGroupChatState} from "./interface";

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
type FeedReducer<PayloadType> = (state: IGroupChatListState, action: PayloadAction<PayloadType>) => IGroupChatListState

const NewGroupChatListReducer: FeedReducer<INewGroupChatListActionPayload> = (state, action) => {

    const items = action.payload.items

    return {
        ...state,
        items
    }
}


const newMessageReducer: FeedReducer<INewMessageChatListActionPayload> = (state, action) => {
    
    const groupChatId = action.payload.groupChatId
    const newMessage: IGroupChatMessageState = action.payload.message
    const prevGroupChatList = state.items
    const prevGroupChatState: IGroupChatState | undefined = prevGroupChatList.find(groupChat => groupChat.id==groupChatId)
    if(!prevGroupChatState) {
        console.error("Unexisting group chat")
        return {...state,}
    } 

    else {
        const prevConversation: IGroupChatMessageState[] = prevGroupChatState.conversation
        const newConversation: IGroupChatMessageState[] = addNewMessageToConversation(newMessage, prevConversation)
        
        try{
            const newGroupChatState: IGroupChatState = updateGroupChatConversation(newConversation, prevGroupChatState)
            const newGroupChatList = updateGroupChatList(newGroupChatState, prevGroupChatList)
            return {
                items: newGroupChatList
            }
        } catch (err) {
            console.error(err)
            return {...state}
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
const groupChatReducers = {
    NEW_GROUPCHATLIST: NewGroupChatListReducer,
    NEW_MESSAGE: newMessageReducer
}

export default groupChatReducers
