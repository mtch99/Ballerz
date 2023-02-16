import { IGroupChatState, IGroupChatListState } from "./interface";
import { ActionCreatorWithPayload, createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../../store'
import groupChatReducers  from "./reducers";



const initialState: IGroupChatListState = {
    items: []
}


export const groupChatSlice = createSlice({
    name: 'groupChat',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
      ...groupChatReducers
    }
})



export const {NEW_GROUPCHATLIST} = groupChatSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectgroupChat = (state: RootState) => state.groupChat

export default groupChatSlice.reducer
