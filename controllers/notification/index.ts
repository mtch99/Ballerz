import { INotificationsObserver, INotificationsUseCase } from "./../../domain/use-cases/notifications/interface";
import { GetMyNotificationsResult, INotificationController } from "./interface";
import * as usecase_types from '../../domain/use-cases/notifications/interface'
import NotificationsUseCase from "../../domain/use-cases/notifications";
import { IFriendShipRequestNotification } from "../../domain/use-cases/types";


export default class NotificationController implements INotificationController{
    
    useCase: usecase_types.INotificationsUseCase = fakeNotificationUseCase
    private _userProfileID: string | undefined;



    createUseCase(model: INotificationsObserver){
        this.useCase = new NotificationsUseCase(model)
        console.log(`\n Notification usecase initialized \n`)
    }
    
    
    async getMyNotifications(userProfileID: string) : Promise<GetMyNotificationsResult>{
        const response = await this.useCase.getMyReceivedNotifications(userProfileID)
        let result = {
            error: response.error?true:false,
            notifications: response.notifications
        }
        return result
    }
    
    async subscribeToMyNotifications(userProfileID: string): Promise<void>{
        if(!this.userProfileID){
            throw new Error('User profile ID is not set')
        } 
        this.useCase.subscribeToMyNotifications(this.userProfileID)
    }
    
    get userProfileID(): string | undefined {
        return this._userProfileID;
    }
    set userProfileID(value: string | undefined) {
        this._userProfileID = value;
    }
}


const fakeNotificationUseCase: INotificationsUseCase = {
    getMyReceivedNotifications: function (myProfileID: string): Promise<usecase_types.IGetMyNotificationsResult> {
        throw new Error("UseCase not initialized");
    },
    onNewNotificationReceived: function (notification: IFriendShipRequestNotification): Promise<void> {
        throw new Error("UseCase not initialized");
    },
    subscribeToMyNotifications: function (myProfileID: string): void {
        throw new Error("UseCase not initialized");
    }
}