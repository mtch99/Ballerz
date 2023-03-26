import { ActionCreatorWithPayload, createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../../../store'
import groupChatListReducers  from "./reducers";
import { IGroupChatListState } from '../../types';



const initialState: IGroupChatListState = {
    items: []
}


export const groupChatListSlice = createSlice({
    name: 'groupChat',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
      ...groupChatListReducers
    }
})



export const {NEW_GROUPCHATLIST, GROUPCHATLIST_NEW_MESSAGE} = groupChatListSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectgroupChatListState = (state: RootState) => state.groupChat


export default groupChatListSlice.reducer
