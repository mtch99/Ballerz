import { PayloadAction } from "@reduxjs/toolkit";
import { NotificationListState, NotificationState } from "./interface";
import { INewNotificationPayload, INewNotificationListPayload } from "./actions";


export enum UserProfileActionType{
    NEW_NOTIFICATIONLIST="NEW_NOTIFICATIONLIST",
    NEW_NOTIFICATION="NEW_NOTIFICATION",
    REINIT_BADGE="REINIT_BADGE"
}


type INotificationReducer<PayloadType> = (state: NotificationListState, action: PayloadAction<PayloadType>) => NotificationListState


const newNotificationListReducer: INotificationReducer<INewNotificationListPayload> = (state, action) => {
    const items = action.payload
    items.sort((a, b) => {
        return new Date(b.createdAt).valueOf() - new Date(a.createdAt).valueOf();
    })
    let badge: number|undefined = items.length - state.items.length;
    if(badge == 0){
        badge = undefined;
    }
    return {
        ...state,
        items,
        badge
    }
}

const newNotificationReducer: INotificationReducer<INewNotificationPayload> = (state, action) => {
    let badge: number | undefined
    if(state.badge){
        badge = state.badge + 1
    } else {
        badge = 1
    }
    const items: NotificationState[] = [action.payload, ...state.items]
    return {...state, items, badge}
}

const reinitBadgeReducer: INotificationReducer<void> = (state, action) => {
    return {...state, badge: undefined}
}

const userProfileListReducers = {
    NEW_NOTIFICATIONLIST: newNotificationListReducer,
    NEW_NOTIFICATION: newNotificationReducer,
    REINIT_BADGE: reinitBadgeReducer
}

export default userProfileListReducers