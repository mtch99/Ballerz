import { IFriendShipRequestNotification, INewFriendNotification } from "./../../../../domain/use-cases/types";
import { INewNotificationListPayload, INewNotificationPayload } from "./../slice/actions";
import { INotificationsObserver } from "./../../../../domain/use-cases/notifications/interface";
import { useAppSelector } from "../../../hooks"
import { AppDispatch } from "../../../store"
import { NEW_NOTIFICATION, NEW_NOTIFICATIONLIST } from "../slice";

interface INotificationModelInput{
    dispatchFunc: AppDispatch
    selectorFunc: typeof useAppSelector  
}


export function createNotificationModel(input: INotificationModelInput): INotificationsObserver {
    const result: INotificationsObserver = {
        onNewNotification: function (notification: IFriendShipRequestNotification | INewFriendNotification): void {
            const payload: INewNotificationPayload =  notification
            input.dispatchFunc(NEW_NOTIFICATION(payload))
        },
        onNewNotificationsList: function (notifications: Array<IFriendShipRequestNotification | INewFriendNotification>): void {
            const payload: INewNotificationListPayload = notifications
            input.dispatchFunc(NEW_NOTIFICATIONLIST(payload))
        }
    }
    return result
}