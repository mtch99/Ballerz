import { NotificationListState, NotificationState } from "./interface";


export type INewNotificationPayload = NotificationState
export type INewNotificationListPayload = NotificationState[]
export type AcceptedFriendshipRequestNotificationPayload = {
    notificationID: string
}