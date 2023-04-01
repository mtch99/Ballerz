import { ListNotificationsQueryVariables } from "../API"
import { ListNotificationsQuery } from "./queries"


export interface INotificationsClient {
    filterNotificationsByReceiver(input: ListNotificationsQueryVariables): Promise<ListNotificationsQuery | undefined>
}