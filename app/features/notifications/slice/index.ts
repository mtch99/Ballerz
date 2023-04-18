import { createSlice } from "@reduxjs/toolkit";
import { NotificationListState } from "./interface";
import notificationReducers from "./reducers";
import { RootState } from "../../../store";


const initialState: NotificationListState = {items: [], badge: undefined};


const NotificationSlice = createSlice({
    name: 'Notification',
    initialState,
    reducers: {
        ...notificationReducers
    }
})




export const {NEW_NOTIFICATION, NEW_NOTIFICATIONLIST, REINIT_BADGE} = NotificationSlice.actions

export const selectNotificationList = (state: RootState) => state.notifications

export default NotificationSlice.reducer

