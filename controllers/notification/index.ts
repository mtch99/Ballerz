import { INotificationsUseCase } from "./../../domain/use-cases/notifications/interface";
import { GetMyNotificationsResult, INotificationController } from "./interface";
import * as usecase_types from '../../domain/use-cases/notifications/interface'
import NotificationsUseCase from "../../domain/use-cases/notifications";
import { IFriendShipRequestNotification } from "../../domain/use-cases/types";
import { INotificationsModel } from "../../app/features/notifications/model";


class NotificationController implements INotificationController{
    
    async initNotifications(myProfileID: string): Promise<void> {
        return this.useCase.initNotifications(myProfileID)
    }
    model: INotificationsModel | undefined

    reinitBadge(): void {
        this.model?.reinitializeBadge();
    };
    
    useCase: usecase_types.INotificationsUseCase = fakeNotificationUseCase
    private _userProfileID: string | undefined;



    createUseCase(model: INotificationsModel){
        this.useCase = new NotificationsUseCase(model)
        this.model = model
        console.log(`\n Notification usecase initialized \n`)
    }
    
    
    async getMyNotifications(userProfileID: string) : Promise<GetMyNotificationsResult>{
        const response = await this.useCase.getMyNotifications(userProfileID)
        let result = {
            error: response.error?true:false,
            notifications: response.notifications
        }
        return result
    }


    async updateNotificationList(myProfileID: string): Promise<void> {
        await this.useCase.updateNotifications(myProfileID)
    }

    
    async subscribeToMyNotifications(userProfileID: string): Promise<void>{
        this.useCase.subscribeToMyNotifications(userProfileID)
    }
    
    get userProfileID(): string | undefined {
        return this._userProfileID;
    }
    set userProfileID(value: string | undefined) {
        this._userProfileID = value;
    }
}

const notificationController = new NotificationController();
export default notificationController;


const fakeNotificationUseCase: INotificationsUseCase = {
    getMyNotifications: function (myProfileID: string): Promise<usecase_types.IGetMyNotificationsResult> {
        throw new Error("UseCase not initialized");
    },
    onNewNotificationReceived: function (notification: IFriendShipRequestNotification): Promise<void> {
        throw new Error("UseCase not initialized");
    },
    subscribeToMyNotifications: function (myProfileID: string): void {
        throw new Error("UseCase not initialized");
    },
    initNotifications: function (myProfileID: string): Promise<void> {
        throw new Error("Function not implemented.");
    },
    updateNotifications: function (myProfileID: string): Promise<void> {
        throw new Error("Function not implemented.");
    }
}