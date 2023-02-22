import { IComment, IFeedItem } from "../../../../use-cases/types";
import { IFeedItemState, IFeedState } from "./interface";
import {IAddItemActionPayload, ICheckInActionPayload, ICommentActionPayload, INewFeedActionPayload, IRemoveItemActionPayload} from "./actions";
import { PayloadAction } from "@reduxjs/toolkit";
import uuid from "uuid"


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
	NEW_FEED ='NEW_FEED',
	COMMENT='COMMENT',
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
	const currentItems = [...state.items]
	const newItems: IFeedItemState[] = []
    const {keyToUpdate, userProfileData} = action.payload
    for(let feedItem of currentItems) {
		if(feedItem.id == keyToUpdate){
			const newItem = addAttendantToFeedItem(feedItem, userProfileData)
			newItems.push(newItem)
		}else{
			newItems.push(feedItem)
		}
	}
    return {
        ...state,
        items: newItems
    }
}


const newFeedReducer: FeedReducer<INewFeedActionPayload> = (state, action) => {
	return action.payload
}

const commentReducer: FeedReducer<ICommentActionPayload> = (state, action) => {
	const currentItems = [...state.items]
	const newItems: IFeedItemState[] = []
    const {itemId, author, text} = action.payload
    for(let feedItem of currentItems) {
		if(feedItem.id == itemId){
			const newItem = addCommentToFeedItem(feedItem, {
				author, text, id: uuid.v4()
			})
			newItems.push(newItem)
		}else{
			newItems.push(feedItem)
		}
	}
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
	"REMOVE_ITEM": removeItemReducer,
	"NEW_FEED": newFeedReducer,
	"COMMENT": commentReducer,
} 


function addAttendantToFeedItem(feedItem: IFeedItemState, userProfileData: ICheckInActionPayload['userProfileData']): IFeedItemState {
	const currentAttendants = [...feedItem.attendants]
	currentAttendants.push(userProfileData)

	return {
		...feedItem,
		attendants: currentAttendants
	}
}


function addCommentToFeedItem(feedItem: IFeedItemState, comment: IComment): IFeedItemState {
	const currentComments = [...feedItem.comments]
	currentComments.push(comment)

	return {
		...feedItem,
		comments: currentComments
	}
}