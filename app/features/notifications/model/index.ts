import { IFriendShipRequestNotification, INewFriendNotification, Notification } from "./../../../../domain/use-cases/types";
import { INewNotificationListPayload, INewNotificationPayload, InitNotificationStatePayload, SyncNotificationsPayload } from "./../slice/actions";
import { INotificationsObserver } from "./../../../../domain/use-cases/notifications/interface";
import { useAppSelector } from "../../../hooks"
import { AppDispatch } from "../../../store"
import { INIT_NOTIFICATIONSTATE, NEW_NOTIFICATION, NEW_NOTIFICATIONLIST, REINIT_BADGE, SYNC_NOTIFICATIONS } from "../slice";

interface IStore{
    dispatchFunc: AppDispatch
    selectorFunc: typeof useAppSelector  
}

export interface INotificationsTabObserver{
    reinitializeBadge: () => void
}

export interface INotificationsModel extends INotificationsObserver, INotificationsTabObserver {}

export function createNotificationModel(input: IStore): INotificationsModel {
    const result: INotificationsModel = {
        onNewNotification: function (notification: IFriendShipRequestNotification | INewFriendNotification): void {
            const payload: INewNotificationPayload = notification;
            input.dispatchFunc(NEW_NOTIFICATION(payload));
        },
        onNewNotificationsList: function (notifications: Array<IFriendShipRequestNotification | INewFriendNotification>): void {
            const payload: INewNotificationListPayload = notifications;
            input.dispatchFunc(NEW_NOTIFICATIONLIST(payload));
        },
        reinitializeBadge: function (): void {
            input.dispatchFunc(REINIT_BADGE);
        },
        initNotificationState: function (notificationList: Notification[], badge: number): void {
            const payload: InitNotificationStatePayload = {
                notifications: notificationList,
                badge: badge
            };
            input.dispatchFunc(INIT_NOTIFICATIONSTATE(payload));
        },
        onUpdateNotifications: (deltaNotificationList: Notification[]): void => {
            const payload: SyncNotificationsPayload = {
                deltaNotificationList
            }
            input.dispatchFunc(SYNC_NOTIFICATIONS(payload))
        }
    }
    return result
}