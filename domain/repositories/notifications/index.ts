import { INotificationsRepository, INotificationsUseCase, IGetMyNotificationsResult } from "../../use-cases/notifications/interface";
import { Notification } from "../../use-cases/types";

export class NotificationsRepository implements INotificationsRepository {
    observer: INotificationsUseCase;

    constructor(observer: INotificationsUseCase) {
        this.observer = observer;
    }
    getNotificationsByUser(userProfileId: string): Promise<IGetMyNotificationsResult> {
        throw new Error("Method not implemented.");
    }
    onNewNotification(notification: Notification): Promise<void> {
        throw new Error("Method not implemented.");
    }
    subscribeToMyNotifications(myProfileID: string): void {
        throw new Error("Method not implemented.");
    }

}