import { MyNotificationsSubscription, onCreateNotification_gql } from "./subscriptions";
import {API} from "aws-amplify";
import BallerzApiClient from "../client";
import { INotificationsClient} from "./interface";
import { ListNotificationsQuery, listNotifications_gql} from "./queries";
import {GraphQLQuery, GraphQLSubscription, GraphQLResult} from "@aws-amplify/api"
import { awsmobileAPIMock } from "../../aws-exports";
import { genNotificationFilterByReceiverVariables } from "./subscriptions";
import { Notification } from "./types";
import { subscriptionClient } from "../subscriptionClient";
import { gql } from "@apollo/client";
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
        console.log("subscribing to notifications: " + this)
        
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
                try {
                    this.resubscribe(userProfileID, callback);
                } catch (e) {
                    console.error(err)
                    // console.error(`\n Notification Subscription received error: ${JSON.stringify(err)}\n`);
                    this.resubscribe(userProfileID, callback);
                }
                console.error(err);
            },
        })
		this.subscription = sub;
    }

	private resubscribe(userProfileID: string, callback: (value: Notification) => void): void{
		console.log("resubscribing");
        this.subscription?.unsubscribe()
        setTimeout(() => {
            this.subscribeToNotifications(userProfileID, callback)
        }, 60000*2)
		// this.subscribeToNotifications(userProfileID, callback)
	}


    async filterNotificationsByReceiver(receiverProfileID: string): Promise<ListNotificationsQuery | undefined> {
        const variables = genNotificationFilterByReceiverVariables(receiverProfileID)
        const payload = this.genRequestPayload(listNotifications_gql, variables)
        const response = await API.graphql<GraphQLQuery<ListNotificationsQuery>>(payload)
        const result = this._handleResponse(response)
        // console.error(`${JSON.stringify(result)}`)
        return result
    }

}


export class NotificationsClientMock extends NotificationsClient {
    constructor(){
        super(awsmobileAPIMock, "API_KEY")
    }
}