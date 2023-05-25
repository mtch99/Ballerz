import { Notification } from "../types";

export interface INotificationsUseCase{
    getMyNotifications(myProfileID: string): Promise<IGetMyNotificationsResult>
    onNewNotificationReceived(notification: Notification): Promise<void>
    subscribeToMyNotifications(myProfileID: string): void
    initNotifications(myProfileID: string): Promise<void>
    updateNotifications(myProfileID: string): Promise<void>
}


export interface INotificationsObserver {
    onNewNotification(notification: Notification): void
    onNewNotificationsList(notifications: Notification[]): void
    initNotificationState(notification: Notification[], badge: number|undefined): void
    onUpdateNotifications(deltaNotificationList: Notification[]): void
}

export interface INotificationsRepository{
    observer: INotificationsUseCase
    getNotificationsByUser(userProfileId: string): Promise<IGetMyNotificationsResult>
    onNewNotification(notification: Notification): void
    getUnReceivedNotifications(userProfileID: string): Promise<Notification[]>
    subscribeToMyNotifications(myProfileID: string): void
    __getCacheNotifications(): Promise<Notification[]>
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