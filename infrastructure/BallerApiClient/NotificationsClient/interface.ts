import { MyNotificationsSubscription, MyNotificationsSubscriptionVariables } from "./subscriptions";
import { ListNotificationsQueryVariables } from "../API"
import { ListNotificationsQuery } from "./queries"


export interface INotificationsClient {
    filterNotificationsByReceiver(receiverProfileID: string): Promise<ListNotificationsQuery | undefined>
    subscribeToNotifications(receiverProfileID: string, callback: () => void): void
}


export interface INotificationsSubscriber {
    onNewNotifications(notification: ListNotificationsQuery): Promise<void>
}