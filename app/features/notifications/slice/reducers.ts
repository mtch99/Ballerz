import { PayloadAction } from "@reduxjs/toolkit";
import { NotificationListState } from "./interface";
import { INewNotificationPayload, INewNotificationListPayload } from "./actions";


export enum UserProfileActionType{
    NEW_NOTIFICATIONLIST="NEW_NOTIFICATIONLIST",
    NEW_NOTIFICATION="NEW_NOTIFICATION"
}


type INotificationReducer<PayloadType> = (state: NotificationListState, action: PayloadAction<PayloadType>) => NotificationListState


const newNotificationListReducer: INotificationReducer<INewNotificationListPayload> = (state, action) => {
    const items = action.payload
    return action.payload
}

const newNotificationReducer: INotificationReducer<INewNotificationPayload> = (state, action) => {
    return [action.payload, ...state]
}

const userProfileListReducers = {
    NEW_NOTIFICATIONLIST: newNotificationListReducer,
    NEW_NOTIFICATION: newNotificationReducer
}

export default userProfileListReducers