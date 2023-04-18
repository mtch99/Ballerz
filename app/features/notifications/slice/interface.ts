import { IFriendShipRequestNotification, INewFriendNotification} from "../../../../domain/use-cases/types"


export type NotificationListState = {items: NotificationState[], badge: number | undefined}
export type NotificationState = IFriendShipRequestNotificationState | NewFriendNotificationState

export interface IFriendShipRequestNotificationState extends IFriendShipRequestNotification{}
export interface NewFriendNotificationState extends INewFriendNotification{}
