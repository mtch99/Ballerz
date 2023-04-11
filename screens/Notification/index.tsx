import React from "react";
import { AppContext, IAppContext } from "../../controllers/provider";
import NotificationListView from "../../views/notificationList";

export interface INotificationScreenPropsWithoutNavigation {

}
export interface INotificationScreenProps {

}

export interface INotificationScreenNavigationController {

}

export default class NotificationScreen extends React.Component<INotificationScreenProps> {

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

    render(): React.ReactNode {
        return(
            <NotificationListView notificationList={this.context.notificationListState}/>
        ) 
    }
}