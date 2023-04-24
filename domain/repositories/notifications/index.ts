import { GraphQLResult, GraphQLSubscription } from "@aws-amplify/api";
import { IGetMyNotificationsErrorReason, IgetMyNotificationsError } from "./../../use-cases/notifications/interface";
import { FriendShipRequestData, UserProfileData } from "../../../infrastructure/BallerzServices/BallerzAPI/types";
import { IFriendShipRequestNotification, IFriendshipRequest, INewFriendNotification, IUserProfileData } from "./../../use-cases/types";
import { FilterNotificationsByUserQueryVariables, ListNotificationsQuery } from "../../../infrastructure/BallerzServices/BallerzAPI/NotificationsClient/queries";
import { INotificationsClient } from "../../../infrastructure/BallerzServices/BallerzAPI/NotificationsClient/interface";
import { Notification as ClientNotification } from "../../../infrastructure/BallerzServices/BallerzAPI/NotificationsClient/types";
import { INotificationsRepository, INotificationsUseCase, IGetMyNotificationsResult } from "../../use-cases/notifications/interface";
import { Notification, NotificationType as DomainNotificationType } from "../../use-cases/types";
import NotificationsClient, { NotificationsClientMock } from "../../../infrastructure/BallerzServices/BallerzAPI/NotificationsClient";
import { NotificationType } from "../../../infrastructure/BallerzServices/BallerzAPI/API";
import { useTheme } from "react-navigation";
import { MyNotificationsSubscription } from "../../../infrastructure/BallerzServices/BallerzAPI/NotificationsClient/subscriptions";

export class NotificationsRepository implements INotificationsRepository {
    observer: INotificationsUseCase;
    client: INotificationsClient
    userProfileID: string | undefined;

    constructor(observer: INotificationsUseCase) {
        this.observer = observer;
        this.client = new NotificationsClient(undefined,"API_KEY");
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
        console.warn(`Notification received: ${JSON.stringify(notification)}`)
        if(notification){
            this.onNewNotification(notification)
        }
    }



    onNewNotification(notification: Notification): void {
        console.warn(`Notification bien recue: ${JSON.stringify(notification)}`);
        this.observer.onNewNotificationReceived(notification)
    }


    subscribeToMyNotifications(myProfileID: string): void {
        this.client.subscribeToNotifications(myProfileID, this.notificationsSubscriptionHandler.bind(this))
        console.log(`\nSubscribed to notifications for profile ${myProfileID}\n`);
    }

}


class ResponseHandler {
    static handleFilterNotificationsByReceiverResponse(response: ListNotificationsQuery): IGetMyNotificationsResult{
        let error: IGetMyNotificationsResult['error'] = false;
        let notifications: Notification[] = []
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
                result = friendShipRequestNotification
                break;

            case NotificationType.newFriend:
                const newFriendNotification = this.parseNewFriendNotification(clientNotif)
                result = newFriendNotification
            
            default:
                break;
        }
        return result
    }

    // parseSubscription(clientNotif: )

    private static parseFriendshipRequestNotification(arg: ClientNotification): IFriendShipRequestNotification | undefined {
        // console.log(`\nReceived friendship request for ${JSON.stringify(arg)}`)
        if(arg.type != NotificationType.friendshipRequest 
            || (!arg.friendshipRequestID) || (!arg.senderProfile) || (!arg.friendshipRequest)
        ){
            return undefined
        }

        const senderProfile = this.parseUserProfileData(arg.senderProfile)
        const friendshipRequest = this.parseFriendShipRequest(arg.friendshipRequest)

        if(!friendshipRequest){
            return undefined
        }

        const result: IFriendShipRequestNotification = {
            id: arg.id,
            type: arg.type,
            receiverProfileID: arg.receiverProfileID,
            senderProfileID: arg.senderProfile.id,
            senderProfile: senderProfile,
            friendshipRequestID: arg.friendshipRequestID,
            friendshipRequest: friendshipRequest,
            createdAt: arg.createdAt,
            updatedAt: arg.updatedAt
        }

        return result
    }

    private static parseNewFriendNotification(arg: ClientNotification): INewFriendNotification | undefined {
        if(arg.type != NotificationType.newFriend 
            || !arg.senderProfile || !arg.senderProfileID
        ){
            console.warn(JSON.stringify(arg))
            return undefined
        } 

        return {
            ...arg,
            type: DomainNotificationType.newFriend, 
            senderProfileID: arg.senderProfileID,
            senderProfile: this.parseUserProfileData(arg.senderProfile)
        }
    }

    private static parseUserProfileData(input: UserProfileData): IUserProfileData{
        return {
            ...input,
            isFriend: undefined,
            badges: []
        }
    }

    static parseFriendShipRequest(input: FriendShipRequestData): IFriendshipRequest | undefined {
        
        if(!input.receiverProfileID ||  !input.receiverProfile  || !input.senderProfile){
            if(!input.senderProfile){
                console.error("FriendshipRequest missing senderProfile")
            }
            if(!input.receiverProfile){
                console.error("FriendshipRequest missing receiverProfile")
            }
            if(!input.receiverProfileID){
                console.error("FriendshipRequest missing receiverProfileID")
            }
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