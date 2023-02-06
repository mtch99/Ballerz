import { IFeedItemState, IFeedState } from "./interface";
import { IAddItemActionPayload, ICheckInActionPayload, IRemoveItemActionPayload, feedActions} from "./actions";


enum FeedActionType {
	ADD_ITEM='ADD_ITEM',
	REMOVE_ITEM="REMOVE_ITEM",
	CHECK_IN="CHECK_IN",
}


type FeedActionStrings = keyof typeof FeedActionType


type FeedReducer<T> = (state: IFeedState, actionPayload: T) => IFeedState


const addItemReducer: FeedReducer<IAddItemActionPayload> = (state, payload) => {
	return {
		...state,
		items: [...state.items, payload],
	};
}

const removeItemReducer: FeedReducer<IRemoveItemActionPayload> = (state, payload) => {
	return {
        ...state,
        items: state.items.filter(item => item.id !== payload.id),
    };
}

const checkInReducer: FeedReducer<ICheckInActionPayload> = (state, payload) => {
	const currentItems = state.items
            const keyToUpdate = payload.keyToUpdate
            const newItems: IFeedItemState[] = currentItems.map(item => {
                if (item.id === keyToUpdate) {
                    const newFeedItem = addAttendantToFeedItem(item, payload.userProfileData)
					return newFeedItem
                }  
                return item
            })
            return {
                ...state,
                items: newItems
            }
}


export const feedReducers: Record<FeedActionStrings, FeedReducer<any>> = {
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




