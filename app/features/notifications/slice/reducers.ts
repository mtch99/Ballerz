import { action } from "mobx";
import { IFriendShipRequestNotification } from "./../../../../domain/use-cases/types";
import { PayloadAction } from "@reduxjs/toolkit";
import { NotificationListState, NotificationState } from "./interface";
import { INewNotificationPayload, INewNotificationListPayload, AcceptedFriendshipRequestNotificationPayload, InitNotificationStatePayload, SyncNotificationsPayload } from "./actions";
import { NotificationType } from "../../../../domain/use-cases/types";


export enum UserProfileActionType{
    NEW_NOTIFICATIONLIST="NEW_NOTIFICATIONLIST",
    NEW_NOTIFICATION="NEW_NOTIFICATION",
    REINIT_BADGE="REINIT_BADGE",
    ACCEPTED_FRIENDSHIP_REQUEST="ACCEPTED_FRIENDSHIP_FRIENDSHIP_REQUEST",
    INIT_NOTIFICATIONSTATE="INIT_NOTIFICATIONSTATE",
    SYNC_NOTIFICATIONS="SYNC_NOTIFICATIONS",
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
    const notificationExists = checkIfNotificationExists(action.payload, state)
    if(notificationExists){
        return {...state}
    } else {
        const badge = incrementBadge(state)
        const items: NotificationState[] = [action.payload, ...state.items]
        return {...state, items, badge}
    }
}

const reinitBadgeReducer: INotificationReducer<void> = (state, action) => {
    return {...state, badge: undefined}
}

const acceptedFriendshipRequestReducer: INotificationReducer<AcceptedFriendshipRequestNotificationPayload> = (state, action) => {
    const items: NotificationState[] = []
    state.items.forEach(item => {
        if(item.id == action.payload.notificationID && item.type == NotificationType.friendshipRequest){
            const newItem: IFriendShipRequestNotification = {
                ...item,
                friendshipRequest: {
                    ...item.friendshipRequest,
                    status: "accepted"
                }
            }
            items.push(newItem)
        } else {
            items.push(item)
        }
    })
    return {...state, items}
}

const initNotificationStateReducer: INotificationReducer<InitNotificationStatePayload> = (state, action) => {
    return {
        ...state, 
        items: action.payload.notifications,
        badge: action.payload.badge
    }
}

const syncNotificationsReducer: INotificationReducer<SyncNotificationsPayload> = (state, action) => {
    const deltaNotificationList = action.payload.deltaNotificationList
    const deltaLength = deltaNotificationList.length
    let newBadgeState: NotificationListState['badge']
    if(deltaLength > 0){
        newBadgeState = deltaLength
    }

    const newNotificationList = [...deltaNotificationList, ...state.items]

    return {
        ...state,
        badge: newBadgeState,
        items: newNotificationList
    }
}





const userProfileListReducers = {
    NEW_NOTIFICATIONLIST: newNotificationListReducer,
    NEW_NOTIFICATION: newNotificationReducer,
    REINIT_BADGE: reinitBadgeReducer,
    ACCEPTED_FRIENDSHIP_REQUEST: acceptedFriendshipRequestReducer,
    INIT_NOTIFICATIONSTATE: initNotificationStateReducer,
    SYNC_NOTIFICATIONS: syncNotificationsReducer,
}

export default userProfileListReducers



function checkIfNotificationExists(notif: NotificationState, currentState: NotificationListState){
    let result = false
    currentState.items.forEach((notificationListItem)  => {
        if(notificationListItem.id == notif.id){
            result = true
        }
    })
    return result

}

function incrementBadge(currentState: NotificationListState){
    let incrementedBadge: number
    if(currentState.badge){
        incrementedBadge = currentState.badge + 1
    } else {
        incrementedBadge = 1
    }
    return incrementedBadge
}