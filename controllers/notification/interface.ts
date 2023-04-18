import {Notification} from '../../domain/use-cases/types'
export interface INotificationController {
    getMyNotifications: (userProfileID: string) => Promise<GetMyNotificationsResult> 
    reinitBadge: () => void
}

export type GetMyNotificationsResult = {
    error: boolean,
    notifications: Notification[]
}