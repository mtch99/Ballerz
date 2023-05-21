import { createSlice } from "@reduxjs/toolkit";
import UserProfileMapReducers from "./reducers"
import { RootState } from "../../../../store";
import { IUserProfileMapState } from "../../types";

const initialState: IUserProfileMapState = {}

export const UserProfileMapSlice = createSlice({
    name: 'groupChat',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
      ...UserProfileMapReducers
    }
})

export const {NEW_USERPROFILE, NEW_USERPROFILEMAP, NEW_SENT_FRIENDSHIPREQUEST:NEW_SENT_FRIENDSHIPREQUEST_formap} = UserProfileMapSlice.actions

export const selectUserProfileMapState = (state: RootState) => state.userProfileMap

export default UserProfileMapSlice.reducer