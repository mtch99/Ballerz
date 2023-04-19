import React from "react";
import { AppContext, IAppContext } from "../../controllers/provider";
import NotificationListView from "../../views/notificationList";
import { IFriendShipRequestNotification } from "../../domain/use-cases/types";
import { IAcceptFriendshipRequestInput } from "../../domain/use-cases/userProfile/interface";
import {Screen} from "../interface"
import { IFriendShipRequestNotificationState } from "../../app/features/notifications/slice/interface";

export interface INotificationScreenPropsWithoutNavigation {

}
export interface INotificationScreenNavigationController {

}
export interface INotificationScreenProps {
    navigationController: INotificationScreenNavigationController
}


export default class NotificationScreen extends Screen<INotificationScreenProps> {

    static contextType = AppContext
    context: React.ContextType<typeof AppContext> = {} as IAppContext


    componentDidMount(): void {
        this.getMyNotifications()
    }


    getMyNotifications(): void {
        const userProfileID = this.context.authState.profile?.id;
        if(userProfileID) {
            this.context.notificationController.getMyNotifications(userProfileID)
        }
    }

    private async __acceptFriendshipRequest(notification: IFriendShipRequestNotificationState): Promise<void> {
        const input: IAcceptFriendshipRequestInput  = {
            friendshipRequestID: notification.friendshipRequestID,
            notificationID: notification.id
        }
        await this.context.userProfileController.acceptFriendshipRequest(input)
        return 
    }

    async onPressAcceptFriendshipRequest(notification: IFriendShipRequestNotificationState): Promise<void> {
        this.makeRequest(this.__acceptFriendshipRequest(notification))
    }

    render(): React.ReactNode {
        return(
            <NotificationListView 
                notificationList={this.context.notificationListState.items}
                onPressAcceptFriendshipRequest={this.onPressAcceptFriendshipRequest.bind(this)}
            />
        ) 
    }
}