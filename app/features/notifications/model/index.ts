import { INewNotificationListPayload, INewNotificationPayload } from "./../slice/actions";
import { INotificationsObserver } from "./../../../../domain/use-cases/notifications/interface";
import { useAppSelector } from "../../../hooks"
import { AppDispatch } from "../../../store"
import { IFriendShipRequestNotification } from "../../../../domain/use-cases/types";
import { NEW_NOTIFICATION, NEW_NOTIFICATIONLIST } from "../slice";

interface INotificationModelInput{
    dispatchFunc: AppDispatch
    selectorFunc: typeof useAppSelector  
}


export function createNotificationModel(input: INotificationModelInput): INotificationsObserver {
    const result: INotificationsObserver = {
        onNewNotification: function (notification: IFriendShipRequestNotification): void {
            const payload: INewNotificationPayload =  notification
            input.dispatchFunc(NEW_NOTIFICATION(payload))
        },
        onNewNotificationsList: function (notifications: IFriendShipRequestNotification[]): void {
            const payload: INewNotificationListPayload = notifications
            input.dispatchFunc(NEW_NOTIFICATIONLIST(payload))
        }
    }
    return result
}