import { createSlice } from "@reduxjs/toolkit";
import { NotificationListState } from "./interface";
import notificationReducers from "./reducers";
import { RootState } from "../../../store";


const initialState: NotificationListState = []


const NotificationSlice = createSlice({
    name: 'Notification',
    initialState,
    reducers: {
        ...notificationReducers
    }
})




export const {NEW_NOTIFICATION, NEW_NOTIFICATIONLIST} = NotificationSlice.actions

export const selectNotificationList = (state: RootState) => state.notifications

export default NotificationSlice.reducer

