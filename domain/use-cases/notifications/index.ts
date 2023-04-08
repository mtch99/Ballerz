import { IGetMyNotificationsResult, INotificationsObserver, INotificationsRepository, INotificationsUseCase } from "./interface";
import { Notification } from "../types";
import { NotificationsRepository } from "../../repositories/notifications";
import BallerzApiClient from "../../../infrastructure/BallerzServices/BallerzAPI/client";




export default class NotificationsUseCase implements INotificationsUseCase {
    
    repo: INotificationsRepository
    observer: INotificationsObserver
    
    constructor(observer: INotificationsObserver,repo?: INotificationsRepository) {
        this.repo = repo || new NotificationsRepository(this);
        this.observer = observer;
    }

    subscribeToMyNotifications(myProfileID: string) {
        this.repo.subscribeToMyNotifications(myProfileID);
    }


    async getMyReceivedNotifications(myProfileID: string): Promise<IGetMyNotificationsResult> {
        const result = await this.repo.getNotificationsByUser(myProfileID);
        if(result.notifications.length > 0) {
            this.observer.onNewNotificationsList(result.notifications)
        }     
        return result
    }


    async onNewNotificationReceived(notification: Notification): Promise<void> {
        console.log(`\n Notifications UseCase: \n new notification: ${JSON.stringify(notification)}`)
        this.observer.onNewNotification(notification)
        return 
    }

}