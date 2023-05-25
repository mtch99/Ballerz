import { IGetMyNotificationsResult, INotificationsObserver, INotificationsRepository, INotificationsUseCase } from "./interface";
import { Notification } from "../types";
import { NotificationsRepository } from "../../repositories/notifications";




export default class NotificationsUseCase implements INotificationsUseCase {
    
    repo: INotificationsRepository
    observer: INotificationsObserver
    
    constructor(observer: INotificationsObserver,repo?: INotificationsRepository) {
        this.repo = repo || new NotificationsRepository(this);
        this.observer = observer;

    }


    async initNotifications(myProfileID: string): Promise<void> {
        let newNotifications: Notification[] = []
        const currentNotifications = await this.repo.__getCacheNotifications()

        newNotifications =  await this.repo.getNotificationsByUser(myProfileID).then((response) => {
                return response.notifications
        })
        
        
        let badge: number|undefined = undefined
        const diff = newNotifications.length - currentNotifications.length
        if(diff > 0) {
            badge = diff
        }
        
        this.observer.initNotificationState(newNotifications, badge)

        return;
        
    }


    subscribeToMyNotifications(myProfileID: string) {
        this.repo.subscribeToMyNotifications(myProfileID);
    }


    async getMyNotifications(myProfileID: string): Promise<IGetMyNotificationsResult> {
        const result = await this.repo.getNotificationsByUser(myProfileID);
        if(result.notifications.length > 0) {
            this.observer.onNewNotificationsList(result.notifications)
        }     
        return result
    }


    async updateNotifications(myProfileID: string): Promise<void>{
        const deltaNotifications = await this.repo.getUnReceivedNotifications(myProfileID)
        this.observer.onUpdateNotifications(deltaNotifications)
    }


    async onNewNotificationReceived(notification: Notification): Promise<void> {
        // console.log(`\n Notifications UseCase: \n new notification: ${JSON.stringify(notification)}`)
        this.observer.onNewNotification(notification)
        return 
    }

}