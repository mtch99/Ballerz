import { Notification } from "../types";

export interface INotificationsUseCase{
    getMyReceivedNotifications(myProfileID: string): Promise<IGetMyNotificationsResult>
    onNewNotificatioReceived(notification: Notification): Promise<void>
}


export interface INotificationsObserver {
    onNewNotification(notification: Notification): void
    onNewNotificationsList(notifications: Notification[]): void
}

export interface INotificationsRepository{
    observer: INotificationsUseCase
    getNotificationsByUser(userProfileId: string): Promise<IGetMyNotificationsResult>
    onNewNotification(notification: Notification): void
    subscribeToMyNotifications(myProfileID: string): void
}


export interface IGetMyNotificationsResult {
    error: false | IgetMyNotificationsError
    notifications: Notification[]
}

export interface IgetMyNotificationsError {
    reason: IGetMyNotificationsErrorReason
    message: string
}

export enum IGetMyNotificationsErrorReason {
    NETWORK_ERROR="NETWORK_ERROR"
}