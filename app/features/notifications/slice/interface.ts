import { IFriendShipRequestNotification, INewFriendNotification} from "../../../../domain/use-cases/types"


export type NotificationListState = NotificationState[]
export type NotificationState = IFriendShipRequestNotificationState | NewFriendNotificationState

export interface IFriendShipRequestNotificationState extends IFriendShipRequestNotification{}
export interface NewFriendNotificationState extends INewFriendNotification{}
