import { createSlice } from "@reduxjs/toolkit";
import { IUserProfileListState } from "./interface";
import userProfileListReducers from "./reducers";
import { RootState } from "../../../../store";


const initialState: IUserProfileListState = {
    items: []
}


const userProfileSlice = createSlice({
    name: 'userProfile',
    initialState,
    reducers: {
        ...userProfileListReducers
    }
})




export const {NEW_USERPROFILELIST} = userProfileSlice.actions

export const selectUserProfileListState = (state: RootState) => state.userProfile

export default userProfileSlice.reducer

