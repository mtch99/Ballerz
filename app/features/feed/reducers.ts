import { IFeedItemState, IFeedState } from "./interface";
import { IAddItemAction, IAddItemActionPayload, ICheckInActionPayload, IRemoveItemActionPayload, feedActions} from "./actions";
import { PayloadAction } from "@reduxjs/toolkit";


/**
 * New slice reducers protocol
 * 1) Define the payload action in the actions.ts file
 * 2) Add the action string to the FeedActionType enum
 * 3) Implement the reducer function 
 * 4) Add the new reducers to the feed reucers const at the bottom
 */




/**
 * Define Slice actions respective payloads
 */
enum FeedActionType {
	ADD_ITEM='ADD_ITEM',
	REMOVE_ITEM="REMOVE_ITEM",
	CHECK_IN="CHECK_IN",
}
export type FeedActionString = keyof typeof FeedActionType


/**
 * Define a type for all the reducers
 * For each reducer, the (state parameter)'s type is set to the slice's state
 */
type FeedReducer<PayloadType> = (state: IFeedState, action: PayloadAction<PayloadType>) => IFeedState



const addItemReducer: FeedReducer<IAddItemActionPayload> = (state, action) => {
	return {
		...state,
		items: [...state.items, action.payload],
	};
}


const removeItemReducer: FeedReducer<IRemoveItemActionPayload> = (state, action) => {
	return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload.id),
    };
}

const checkInReducer: FeedReducer<ICheckInActionPayload> = (state, action) => {
	const currentItems = state.items
            const {keyToUpdate, userProfileData} = action.payload
            const newItems: IFeedItemState[] = currentItems.map(item => {
                if (item.id === keyToUpdate) {
                    const newFeedItem = addAttendantToFeedItem(item, userProfileData)
					return newFeedItem
                }  
                return item
            })
            return {
                ...state,
                items: newItems
            }
}


/**
 * An object containing all the reducers
 */
export const feedReducers = {
	"ADD_ITEM": addItemReducer,
	"CHECK_IN": checkInReducer,
	"REMOVE_ITEM": removeItemReducer
} 


function addAttendantToFeedItem(feedItem: IFeedItemState, userProfileData: ICheckInActionPayload['userProfileData']): IFeedItemState {
	const currentAttendants = feedItem.attendants.items
	currentAttendants.push(userProfileData)

	return {
		...feedItem,
		attendants: {items: currentAttendants}
	}
}




