import {Notification} from '../../domain/use-cases/types'
export interface INotificationController {
    getMyNotifications: (userProfileID: string) => Promise<GetMyNotificationsResult> 
    reinitBadge: () => void
    initNotifications(myProfileID: string): Promise<void>
}

export type GetMyNotificationsResult = {
    error: boolean,
    notifications: Notification[]
}