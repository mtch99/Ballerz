import { IFriendShipRequestNotification } from "./../../../../domain/use-cases/types";
import { PayloadAction } from "@reduxjs/toolkit";
import { NotificationListState, NotificationState } from "./interface";
import { INewNotificationPayload, INewNotificationListPayload, AcceptedFriendshipRequestNotificationPayload } from "./actions";
import { NotificationType } from "../../../../domain/use-cases/types";


export enum UserProfileActionType{
    NEW_NOTIFICATIONLIST="NEW_NOTIFICATIONLIST",
    NEW_NOTIFICATION="NEW_NOTIFICATION",
    REINIT_BADGE="REINIT_BADGE",
    ACCEPTED_FRIENDSHIP_REQUEST="ACCEPTED_FRIENDSHIP_FRIENDSHIP_REQUEST",
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

const userProfileListReducers = {
    NEW_NOTIFICATIONLIST: newNotificationListReducer,
    NEW_NOTIFICATION: newNotificationReducer,
    REINIT_BADGE: reinitBadgeReducer,
    ACCEPTED_FRIENDSHIP_REQUEST: acceptedFriendshipRequestReducer
}

export default userProfileListReducers