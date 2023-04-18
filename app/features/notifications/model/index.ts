import { IFriendShipRequestNotification, INewFriendNotification } from "./../../../../domain/use-cases/types";
import { INewNotificationListPayload, INewNotificationPayload } from "./../slice/actions";
import { INotificationsObserver } from "./../../../../domain/use-cases/notifications/interface";
import { useAppSelector } from "../../../hooks"
import { AppDispatch } from "../../../store"
import { NEW_NOTIFICATION, NEW_NOTIFICATIONLIST, REINIT_BADGE } from "../slice";

interface INotificationModelInput{
    dispatchFunc: AppDispatch
    selectorFunc: typeof useAppSelector  
}

export interface INotificationsTabObserver{
    reinitializeBadge: () => void
}

export interface INotificationsModel extends INotificationsObserver, INotificationsTabObserver {}

export function createNotificationModel(input: INotificationModelInput): INotificationsModel {
    const result: INotificationsModel = {
        onNewNotification: function (notification: IFriendShipRequestNotification | INewFriendNotification): void {
            const payload: INewNotificationPayload =  notification
            input.dispatchFunc(NEW_NOTIFICATION(payload))
        },
        onNewNotificationsList: function (notifications: Array<IFriendShipRequestNotification | INewFriendNotification>): void {
            const payload: INewNotificationListPayload = notifications
            input.dispatchFunc(NEW_NOTIFICATIONLIST(payload))
        },
        reinitializeBadge: function(): void {
            input.dispatchFunc(REINIT_BADGE)
        }
    }
    return result
}