import { IGetMyNotificationsResult, INotificationsObserver, INotificationsRepository, INotificationsUseCase } from "./interface";
import { Notification } from "../types";
import { NotificationsRepository } from "../../repositories/notifications";




export default class NotificationUseCase implements INotificationsUseCase {
    
    repo: INotificationsRepository
    
    constructor(observer: INotificationsObserver,repo?: INotificationsRepository) {
        this.repo = repo || new NotificationsRepository(this);
    }


    getMyNotifications(myProfileID: string): Promise<IGetMyNotificationsResult> {
        throw new Error("Method not implemented.");
    }
    onNewNotification(notification: Notification): Promise<void> {
        throw new Error("Method not implemented.");
    }

}