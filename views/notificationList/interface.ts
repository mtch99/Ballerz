import { IFriendShipRequestNotificationState } from "./../../app/features/notifications/slice/interface";
import { NotificationState } from "../../app/features/notifications/slice/interface";

export type INotificationItemProps = NotificationState & {
    onPress: () => void
    onPressAcceptFriendshipRequest: (notification: IFriendShipRequestNotificationState) => void
};