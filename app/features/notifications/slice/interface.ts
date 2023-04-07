import { IFriendShipRequestNotification } from "../../../../domain/use-cases/types"


export type NotificationListState = NotificationState[]
export type NotificationState = IFriendShipRequestNotificationState

export interface IFriendShipRequestNotificationState extends IFriendShipRequestNotification{}
