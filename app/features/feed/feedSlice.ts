import { IFeedItem } from "./../../../use-cases/feed/types";
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'
import feedReducer from "./reducers";


// Define a type for the slice state

// Define the initial state using that type
const initialState: IFeedState = []

export const feedSlice = createSlice({
  name: 'posts',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    increment: (state: IFeedState) => {
      state.value += 1
    },
    decrement: (state: FeedState) => {
      state.value -= 1
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state: FeedState, action: PayloadAction<number>) => {
      state.value += action.payload
    }
  }
})


export const { increment, decrement, incrementByAmount } = feedSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectFeed = (state: RootState) => state.feed

export default feedSlice.reducer