import { Notification } from "./types";
import { MyNotificationsSubscription, MyNotificationsSubscriptionVariables } from "./subscriptions";
import { ListNotificationsQueryVariables } from "../API"
import { listNotificationsByReceiverQuery } from "./queries"


export interface INotificationsClient {
    filterNotificationsByReceiver(receiverProfileID: string): Promise<listNotificationsByReceiverQuery | undefined>
    subscribeToNotifications(receiverProfileID: string, callback: (notification: Notification) => void): void
}


export interface INotificationsSubscriber {
    onNewNotifications(notification: listNotificationsByReceiverQuery): Promise<void>
}