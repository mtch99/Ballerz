import { MyNotificationsSubscription, onCreateNotification_gql } from "./subscriptions";
// import { awsmobile_game_feat } from "./../aws-exports";
import {API, Hub, graphqlOperation} from "aws-amplify";
import { AWSAppSyncRealTimeProvider } from "@aws-amplify/pubsub"
import BallerzApiClient from "../client";
import { INotificationsClient, INotificationsSubscriber } from "./interface";
import { ListNotificationsQuery, FilterNotificationsByUserQueryVariables, listNotifications_gql} from "./queries";
import {GraphQLQuery, GraphQLSubscription, GraphQLResult} from "@aws-amplify/api"
import { awsmobileAPIMock } from "../aws-exports";
import { genNotificationFilterByReceiverVariables } from "./subscriptions";
import { Notification } from "./types";
import  {Observable, ZenObservable} from "zen-observable-ts";
import { CONNECTION_STATE_CHANGE, ConnectionState } from '@aws-amplify/pubsub';


let priorConnectionState: ConnectionState;


export default class NotificationsClient extends BallerzApiClient implements INotificationsClient{
    
    lastNotification: Notification | null
    subscription: ZenObservable.Subscription| null = null;
    
    constructor(config?:any , authMode?: "API_KEY"){
        super(config, authMode);
        this.lastNotification = null
        Hub.listen("api", (data: any) => {
            const { payload } = data;
            if (
              payload.event === CONNECTION_STATE_CHANGE
            ) {
              if (priorConnectionState === ConnectionState.Connecting && payload.data.connectionState === ConnectionState.Connected) {
                // fetchRecentData();
                console.error("connection state changed to connected")
        
              }
              console.error(`connextionState: ${payload.data.connectionState}`);
            }
        });
          
    }
    

    async subscribeToNotifications(userProfileID: string, callback: (value: Notification) => void): Promise<void> {
        const variables = genNotificationFilterByReceiverVariables(userProfileID)
        const payload = this.genRequestPayload(onCreateNotification_gql, variables)
        this.subscription = API.graphql<GraphQLSubscription<MyNotificationsSubscription>>(
            {
                ...payload,
                authMode:"API_KEY",
            }
        ).subscribe(
            {
                next: ({provider, value}) => {
                    if(value.data?.onCreateNotification){
                        callback(value.data.onCreateNotification)
                    }
                    console.error(`NotificationsSubscription received payload: \n ${JSON.stringify({provider, value})}`)
                },
                error: (error: any) => {
                    console.error(`NotificationsSubscription error: \n ${JSON.stringify(error)}`)
                }
            }
        )   
        console.warn(`subscription closed: ${this.subscription.closed}`)
    }


    async filterNotificationsByReceiver(receiverProfileID: string): Promise<ListNotificationsQuery | undefined> {
        const variables = genNotificationFilterByReceiverVariables(receiverProfileID)
        const payload = this.genRequestPayload(listNotifications_gql, variables)
        const response = await API.graphql<GraphQLQuery<ListNotificationsQuery>>(payload)
        const result = this._handleResponse(response)
        console.error(`${JSON.stringify(result)}`)
        return result
    }

}


export class NotificationsClientMock extends NotificationsClient {
    constructor(){
        super(awsmobileAPIMock, "API_KEY")
    }
}

// export class NotificationClient_gamefeat extends NotificationsClient {
//     constructor(){
//         super(awsmobile_game_feat, "API_KEY")
//     }
// }