import { createSlice } from "@reduxjs/toolkit";
import groupChatMapReducers from "./reducers"
import { RootState } from "../../../../store";
import IGroupChatMapState from "./interface";

const initialState: IGroupChatMapState = {}

export const groupChatMapSlice = createSlice({
    name: 'groupChat',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
      ...groupChatMapReducers
    }
})

export const {NEW_MESSAGE} = groupChatMapSlice.actions

export const selectGroupChatMapState = (state: RootState) => state.groupChatMap

export default groupChatMapSlice.reducer