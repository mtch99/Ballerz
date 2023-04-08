import { MyNotificationsSubscription, onCreateNotification_gql } from "./subscriptions";
// import { awsmobile_game_feat } from "./../aws-exports";
import {API, Hub, graphqlOperation} from "aws-amplify";
import { AWSAppSyncRealTimeProvider } from "@aws-amplify/pubsub"
import BallerzApiClient from "../client";
import { INotificationsClient, INotificationsSubscriber } from "./interface";
import { ListNotificationsQuery, FilterNotificationsByUserQueryVariables, listNotifications_gql} from "./queries";
import {GraphQLQuery, GraphQLSubscription, GraphQLResult} from "@aws-amplify/api"
import { awsmobileAPIMock } from "../../aws-exports";
import { genNotificationFilterByReceiverVariables } from "./subscriptions";
import { Notification } from "./types";
import { subscriptionClient } from "./subscriptionClient";
import { gql, Observable, FetchResult} from "@apollo/client";
import {Subscription} from "@apollo/client/node_modules/zen-observable-ts";




export default class NotificationsClient extends BallerzApiClient implements INotificationsClient{
    
    lastNotification: Notification | null
    subscription: Subscription | null = null;
    
    constructor(config?:any , authMode?: "API_KEY"){
        super(config, authMode);
        this.lastNotification = null  
    }
    

    async subscribeToNotifications(userProfileID: string, callback: (value: Notification) => void): Promise<void> {
        this.subscription?.unsubscribe()
        
        const sub = subscriptionClient.subscribe({
            query: gql(onCreateNotification_gql),
            variables: genNotificationFilterByReceiverVariables(userProfileID),
        }).subscribe({
          next: ({data}) => {
            const subscription: MyNotificationsSubscription = data
			if(subscription.onCreateNotification){
				callback(subscription.onCreateNotification)
			}
          },
          error: (err) => {
			console.error(`\n Notification Subscription received error: ${err}\n`);
            this.resubscribe(userProfileID, callback);
          },
        })

		this.subscription = sub;
    }

	private resubscribe(userProfileID: string, callback: (value: Notification) => void): void{
		console.log("resubscribing");
		this.subscription?.unsubscribe()
		this.subscribeToNotifications(userProfileID, callback)
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