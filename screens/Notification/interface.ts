import { IFriendShipRequestNotification } from "../../domain/use-cases/types";


export interface INotificationScreen {
    acceptFriendShipRequest: (notification: IFriendShipRequestNotification) => Promise<boolean>;
}
