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
    async initNotifications(myProfileID: string): Promise<void> {
        let cacheNotifications: Notification[] = []
        let newNotifications: Notification[] = []
        const promiseList: Promise<void>[] = []
        promiseList.push(
            this.repo.__getCacheNotifications().then((response) => {
                cacheNotifications = response
            })
        )
        promiseList.push(
            this.repo.getNotificationsByUser(myProfileID).then((response) => {
                newNotifications = response.notifications
            })
        )
        
        await Promise.all(promiseList)
        
        let badge: number|undefined = undefined
        const diff = newNotifications.length - cacheNotifications.length
        if(diff > 0) {
            badge = diff
        } else if(diff == 0){

        }
        
        this.observer.initNotificationState(newNotifications, badge)

        return;
        
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
        // console.log(`\n Notifications UseCase: \n new notification: ${JSON.stringify(notification)}`)
        this.observer.onNewNotification(notification)
        return 
    }

}