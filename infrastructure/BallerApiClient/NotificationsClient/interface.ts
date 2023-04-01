import { MyNotificationsSubscription, MyNotificationsSubscriptionVariables } from "./subscriptions";
import { ListNotificationsQueryVariables } from "../API"
import { ListNotificationsQuery } from "./queries"


export interface INotificationsClient {
    filterNotificationsByReceiver(input: ListNotificationsQueryVariables): Promise<ListNotificationsQuery | undefined>
    subscribeToNotifications(variables: MyNotificationsSubscriptionVariables): Promise<void>
}