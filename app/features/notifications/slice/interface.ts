import { IFriendPlayingNotification } from "./../../../../domain/use-cases/types";
import { IFriendShipRequestNotification, INewFriendNotification} from "../../../../domain/use-cases/types"


export type NotificationListState = {items: NotificationState[], badge: number | undefined}
export type NotificationState = IFriendShipRequestNotificationState | INewFriendNotificationState | IFriendPlayingNotificationState

export interface IFriendShipRequestNotificationState extends IFriendShipRequestNotification{}
export interface INewFriendNotificationState extends INewFriendNotification{}
export interface IFriendPlayingNotificationState extends IFriendPlayingNotification{}
