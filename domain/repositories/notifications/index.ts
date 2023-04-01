import { UserProfileData } from "./../../../infrastructure/BallerApiClient/types";
import { IFriendShipRequestNotification, IUserProfileData } from "./../../use-cases/types";
import { FilterNotificationsByUserQueryVariables, ListNotificationsQuery } from "./../../../infrastructure/BallerApiClient/NotificationsClient/queries";
import { INotificationsClient } from "./../../../infrastructure/BallerApiClient/NotificationsClient/interface";
import { INotificationsRepository, INotificationsUseCase, IGetMyNotificationsResult } from "../../use-cases/notifications/interface";
import { Notification } from "../../use-cases/types";
import NotificationsClient, { NotificationsClientMock } from "../../../infrastructure/BallerApiClient/NotificationsClient";
import { NotificationType } from "../../../infrastructure/BallerApiClient/API";
import { useTheme } from "react-navigation";

export class NotificationsRepository implements INotificationsRepository {
    observer: INotificationsUseCase;
    client: INotificationsClient

    constructor(observer: INotificationsUseCase) {
        this.observer = observer;
        console.log(`Notifications repository using a notifications client mock`)
        this.client = new NotificationsClientMock();
    }
    async getNotificationsByUser(userProfileId: string): Promise<IGetMyNotificationsResult> {
        const variables: FilterNotificationsByUserQueryVariables = {
            filter: {
                receiverProfileID: {
                    eq: userProfileId
                }
            }
        }
        const response = await this.client.filterNotificationsByReceiver(variables)
    }
    onNewNotification(notification: Notification): Promise<void> {
        throw new Error("Method not implemented.");
    }
    subscribeToMyNotifications(myProfileID: string): void {
        throw new Error("Method not implemented.");
    }

}


class ResponseHandler {
    static handleFilterNotificationsByReceiverResponse(response: ListNotificationsQuery): IGetMyNotificationsResult{
        if(response.listNotifications){
            return {
                error: false,
                notifications: response.listNotifications.items
            }
        } else {

        }
    }


    static private parseNotificationsResult(arg: ListNotificationsQuery['listNotifications']): Notification[]{
        const result: Notification[] = []
        if(arg){
            for(let item of arg.items){
                if(item.type == NotificationType.friendshipRequest && item.senderProfile && item.friendshipRequest){
                    const senderProfile: IUserProfileData = {
                        ...item.senderProfile,
                        badges: []
                    }
                    const notification: IFriendShipRequestNotification = {
                        type: item.type,
                        receiverProfileID: item.receiverProfileID,
                        friendshipRequestID: item.friendshipRequestID as string,
                        senderProfileID: item.senderProfileID as string,
                        senderProfile: senderProfile,
                        friendshipRequest: {
                            ...item.friendshipRequest,
                            senderProfile: this.parseUserProfileData(item.friendshipRequest.senderProfile),
                        },
                        createdAt: "",
                        updatedAt: ""
                    }
                }
            }
        }
    }

    static private parseUserProfileData(input: UserProfileData): IUserProfileData{
        return {
            ...input,
            badges: []
        }
    }

}