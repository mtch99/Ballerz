import { INewGroupChatListActionPayload } from "./actions";
import { PayloadAction } from "@reduxjs/toolkit";
import { IGroupChatListState} from "./interface";

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
}


/**
 * Define a type for all the reducers
 * For each reducer, the (state parameter)'s type is set to the slice's state
 * steps 2 and 3
 */
type FeedReducer<PayloadType> = (state: IGroupChatListState, action: PayloadAction<PayloadType>) => IGroupChatListState

const newGroupChatListReducer: FeedReducer<INewGroupChatListActionPayload> = (state, action) => {

    const items = action.payload.items

    return {
        ...state,
        items
    }
}


/**
 * Step 4
 */
const groupChatReducers = {
    NEW_GROUPCHATLIST: newGroupChatListReducer
}

export default groupChatReducers
