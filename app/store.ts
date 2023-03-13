import { configureStore } from '@reduxjs/toolkit'
import feedSliceReducer from "./features/feed/slice"
import groupChatSliceReducer from './features/groupChat/groupChatList/slice'
import groupChatMapSliceReducer from './features/groupChat/groupChatMap/slice'
import userProfileSliceReducer from './features/userProfile/userProfileList/slice'
import placeMapSliceReducer from './features/place/placeMap/slice'
import placeListSliceReducer from './features/place/placeList/slice'
import userProfileMapSliceReducer from './features/userProfile/userProfileMap/slice'

// ...

export const store = configureStore({
	reducer: {	
		feed: feedSliceReducer,	
		groupChat: groupChatSliceReducer,	
		groupChatMap: groupChatMapSliceReducer,	
		userProfile: userProfileSliceReducer,
		userProfileMap: userProfileMapSliceReducer,
		placeMap: placeMapSliceReducer,
		placeList: placeListSliceReducer	
	}
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

