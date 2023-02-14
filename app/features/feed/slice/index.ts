import { IFeedState } from "./interface";
import { ActionCreatorWithPayload, createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../../store'
import { feedReducers } from "./reducers";


// Define a type for the slice state

// Define the initial state using that type
const initialState: IFeedState = {
  items: []
}

export const feedSlice = createSlice({
  name: 'feed',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    ...feedReducers
  }
})




export const {ADD_ITEM, REMOVE_ITEM, CHECK_IN, NEW_FEED, COMMENT} = feedSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectFeed = (state: RootState) => state.feed

export default feedSlice.reducer