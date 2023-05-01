import { IGetMyNotificationsErrorReason, IgetMyNotificationsError } from "./../../use-cases/notifications/interface";
import { FriendShipRequestData, UserProfileData } from "../../../infrastructure/BallerzServices/BallerzAPI/types";
import { IFriendPlayingNotification, IFriendShipRequestNotification, IFriendshipRequest, INewFriendNotification, IUserProfileData } from "./../../use-cases/types";
import { ListNotificationsQuery } from "../../../infrastructure/BallerzServices/BallerzAPI/NotificationsClient/queries";
import { INotificationsClient } from "../../../infrastructure/BallerzServices/BallerzAPI/NotificationsClient/interface";
import { Notification as ClientNotification } from "../../../infrastructure/BallerzServices/BallerzAPI/NotificationsClient/types";
import { INotificationsRepository, INotificationsUseCase, IGetMyNotificationsResult } from "../../use-cases/notifications/interface";
import { Notification, NotificationType as DomainNotificationType } from "../../use-cases/types";
import NotificationsClient from "../../../infrastructure/BallerzServices/BallerzAPI/NotificationsClient";
import { NotificationType } from "../../../infrastructure/BallerzServices/BallerzAPI/API";

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
        console.log(`New Notification received: ${JSON.stringify(notification)}`)
        if(notification){
            this.onNewNotification(notification)
        }
    }



    onNewNotification(notification: Notification): void {
        // console.warn(`Notification bien recue: ${JSON.stringify(notification)}`);
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
                break;

            case NotificationType.friendPlaying:
                const friendPlayingNotification = this.parseFriendPlayingNotification(clientNotif)
                result = friendPlayingNotification
            default:
                break;
        }
        return result
    }


    static parseFriendPlayingNotificationSubscription(clientNotif: ClientNotification): IFriendPlayingNotification | undefined {
        let result: IFriendPlayingNotification | undefined;
        if(clientNotif.type == NotificationType.friendPlaying && clientNotif.presenceID && clientNotif.presence
             && clientNotif.senderProfile && clientNotif.senderProfileID)
         {
                result = {
                    ...clientNotif,
                    senderProfileID: clientNotif.senderProfileID,
                    senderProfile: this.parseUserProfileData(clientNotif.senderProfile),
                    type: NotificationType.friendPlaying,
                    game: {
                        ...clientNotif.presence.game,
                        placeID: clientNotif.presence.placeID,
                        place: {
                            id: clientNotif.presence.placeID,
                            name: clientNotif.presence.place.name,
                            address: clientNotif.presence.place.address,
                        },
                        startingTime: clientNotif.presence.game.startingDateTime,
                        endingTime: clientNotif.presence.game.endingDateTime
                    },
                    presence: {
                        id: clientNotif.presenceID,
                        place: {
                            id: clientNotif.presence.placeID,
                            name: clientNotif.presence.place.name,
                            address: clientNotif.presence.place.address,
                        },
                        startingDateTime: clientNotif.presence.startingDateTime,
                        endingDateTime: clientNotif.presence.endingDateTime,
                    }
                }
        }
        return result
    }


    static parseFriendPlayingNotification(clientNotif: ClientNotification): IFriendPlayingNotification | undefined {
        let result: IFriendPlayingNotification | undefined;
        if(clientNotif.type == NotificationType.friendPlaying && clientNotif.presenceID && clientNotif.presence
             && clientNotif.senderProfile && clientNotif.senderProfileID)
         {
                result = {
                    ...clientNotif,
                    senderProfileID: clientNotif.senderProfileID,
                    senderProfile: this.parseUserProfileData(clientNotif.senderProfile),
                    type: NotificationType.friendPlaying,
                    game: {
                        ...clientNotif.presence.game,
                        startingTime: clientNotif.presence.startingDateTime,
                        endingTime: clientNotif.presence.endingDateTime,
                    }
                }
        }
        return result
    }

    private static parseFriendshipRequestNotification(arg: ClientNotification): IFriendShipRequestNotification | undefined {
        if(arg.type != NotificationType.friendshipRequest 
            || (!arg.friendshipRequestID) || (!arg.senderProfile) || (!arg.friendshipRequest)
            ){
            console.log(`\nReceived friendship request for ${JSON.stringify(arg)}`)
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
        let result: INewFriendNotification|undefined
        if(arg.type != NotificationType.newFriend 
            || !arg.senderProfile || !arg.senderProfileID
        ){
            // console.warn(JSON.stringify(arg))
        } else {
            result = {
                ...arg,
                type: DomainNotificationType.newFriend, 
                senderProfileID: arg.senderProfileID,
                senderProfile: this.parseUserProfileData(arg.senderProfile)
            }
        }
        return result
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