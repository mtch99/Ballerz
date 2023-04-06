import { IGetMyNotificationsResult, INotificationsObserver, INotificationsRepository, INotificationsUseCase } from "./interface";
import { Notification } from "../types";
import { NotificationsRepository } from "../../repositories/notifications";
import BallerzApiClient from "../../../infrastructure/BallerApiClient/client";




export default class NotificationsUseCase implements INotificationsUseCase {
    
    repo: INotificationsRepository
    
    constructor(observer: INotificationsObserver,repo?: INotificationsRepository) {
        this.repo = repo || new NotificationsRepository(this, "123");
    }


    getMyReceivedNotifications(myProfileID: string): Promise<IGetMyNotificationsResult> {
        throw new Error("Method not implemented.");
    }
    onNewNotificatioReceived(notification: Notification): Promise<void> {
        throw new Error("Method not implemented.");
    }

}