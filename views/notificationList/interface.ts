import { NotificationState } from "../../app/features/notifications/slice/interface";

export type INotificationItemProps = NotificationState & {onPress: () => void};