import { GraphQLResult, GraphQLSubscription } from "@aws-amplify/api";
import { IGetMyNotificationsErrorReason, IgetMyNotificationsError } from "./../../use-cases/notifications/interface";
import { FriendShipRequestData, UserProfileData } from "./../../../infrastructure/BallerApiClient/types";
import { IFriendShipRequestNotification, IFriendshipRequest, IUserProfileData } from "./../../use-cases/types";
import { FilterNotificationsByUserQueryVariables, ListNotificationsQuery } from "./../../../infrastructure/BallerApiClient/NotificationsClient/queries";
import { INotificationsClient } from "./../../../infrastructure/BallerApiClient/NotificationsClient/interface";
import { Notification as ClientNotification } from "./../../../infrastructure/BallerApiClient/NotificationsClient/types";
import { INotificationsRepository, INotificationsUseCase, IGetMyNotificationsResult } from "../../use-cases/notifications/interface";
import { Notification } from "../../use-cases/types";
import NotificationsClient, { NotificationsClientMock } from "../../../infrastructure/BallerApiClient/NotificationsClient";
import { NotificationType } from "../../../infrastructure/BallerApiClient/API";
import { useTheme } from "react-navigation";
import { MyNotificationsSubscription } from "../../../infrastructure/BallerApiClient/NotificationsClient/subscriptions";

export class NotificationsRepository implements INotificationsRepository {
    observer: INotificationsUseCase;
    client: INotificationsClient
    userProfileID: string | undefined;

    constructor(observer: INotificationsUseCase, userProfileID?: string) {
        this.observer = observer;
        console.log(`Notifications repository using a notifications client mock`)
        this.client = new NotificationsClient(undefined,"API_KEY");
        if(userProfileID){
            this.subscribeToMyNotifications(userProfileID)
            // this.getNotificationsByUser(userProfileID);
        }
    }

    async getNotificationsByUser(userProfileId: string): Promise<IGetMyNotificationsResult> {
        const response = await this.client.filterNotificationsByReceiver(userProfileId)
        if(!response){
            return {
                error: {
                    reason: IGetMyNotificationsErrorReason.NETWORK_ERROR,
                    message: "Network error"
                },
                notifications: []
            }
        }
        const result = ResponseHandler.handleFilterNotificationsByReceiverResponse(response);
        return result
    }


    private notificationsSubscriptionHandler(clientNotification: ClientNotification): void {
        const notification = ResponseHandler.parseClientNotification(clientNotification)
        if(notification){
            this.onNewNotification(notification)
        }
    }



    onNewNotification(notification: Notification): void {
        this.observer.onNewNotificatioReceived(notification)
    }


    subscribeToMyNotifications(myProfileID: string): void {
        this.client.subscribeToNotifications(myProfileID, this.notificationsSubscriptionHandler.bind(this))
    }

}


class ResponseHandler {
    static handleFilterNotificationsByReceiverResponse(response: ListNotificationsQuery): IGetMyNotificationsResult{
        let error: IGetMyNotificationsResult['error'] = false;
        let notifications: IFriendShipRequestNotification[] = []
        if(response.listNotifications){
            notifications = this.parseListNotificationsResult(response.listNotifications)
        } else {
            error = {
                reason: IGetMyNotificationsErrorReason.NETWORK_ERROR,
                message: "Network Error"
            }
        }

        return {
            error,
            notifications
        }
    }


    private static parseListNotificationsResult(arg: ListNotificationsQuery['listNotifications']): Notification[]{
        const result: Notification[] = []
        if(arg){
            for(let item of arg.items){
                const notification = this.parseClientNotification(item)
                if(notification){
                    result.push(notification)
                }
            }
        }
        return result

    }

    static parseClientNotification(clientNotif: ClientNotification): Notification | undefined {
        const notificationType = clientNotif.type
        let result: Notification | undefined
        switch(notificationType){
            case NotificationType.friendshipRequest:
                const friendShipRequestNotification = this.parseFriendshipRequestNotification(clientNotif)
                if(friendShipRequestNotification){
                    result = friendShipRequestNotification
                }
                break;
            
            default:
                break;
        }
        return result
    }


    private static parseFriendshipRequestNotification(arg: ClientNotification): IFriendShipRequestNotification | undefined {
        if(arg.type!= NotificationType.friendshipRequest 
            || !arg.receiverProfileID || !arg.friendshipRequestID ||!arg.senderProfileID 
            || !arg.senderProfile || !arg.friendshipRequest
        ){
            return undefined
        }

        const senderProfile = this.parseUserProfileData(arg.senderProfile)
        const friendshipRequest = this.parseFriendShipRequest(arg.friendshipRequest)

        if(!friendshipRequest){
            return undefined
        }

        const result: IFriendShipRequestNotification = {
            type: arg.type,
            receiverProfileID: arg.receiverProfileID,
            senderProfileID: arg.senderProfileID,
            senderProfile: senderProfile,
            friendshipRequestID: arg.friendshipRequestID,
            friendshipRequest: friendshipRequest,
            createdAt: arg.createdAt,
            updatedAt: arg.updatedAt
        }

        return result
    }

    private static parseUserProfileData(input: UserProfileData): IUserProfileData{
        return {
            ...input,
            badges: []
        }
    }

    static parseFriendShipRequest(input: FriendShipRequestData): IFriendshipRequest | undefined {
        
        if(!input.receiverProfileID ||  !input.receiverProfile  || !input.senderProfileID  || !input.senderProfile){
            return undefined
        }
         
        const result: IFriendshipRequest = {
            id: input.id,
            senderProfileID: input.senderProfileID,
            senderProfile: this.parseUserProfileData(input.senderProfile),
            receiverProfileID: input.receiverProfileID,
            receiverProfile: this.parseUserProfileData(input.receiverProfile),
            status: input.status
        }

        return result
    }

}