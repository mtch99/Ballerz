import { MyNotificationsSubscription, onCreateNotification_gql } from "./subscriptions";
import {API} from "aws-amplify";
import BallerzApiClient from "../client";
import { INotificationsClient} from "./interface";
import { FilterNotificationsByUserQueryVariables, NotificationsByReceiverQueryVariables, listNotificationsByReceiverQuery, listNotificationsByReceiver_gql} from "./queries";
import {GraphQLQuery} from "@aws-amplify/api"
import { Notification } from "./types";
import { subscriptionClient } from "../subscriptionClient";
import { gql } from "@apollo/client";
import {Subscription} from "@apollo/client/node_modules/zen-observable-ts";
import { ModelSortDirection } from "../API";




export default class NotificationsClient extends BallerzApiClient implements INotificationsClient{
    
    lastNotification?: Notification
    subscription?: Subscription
    

    async subscribeToNotifications(userProfileID: string, callback: (value: Notification) => void): Promise<void> {
        this.subscription?.unsubscribe()
        
        const sub = subscriptionClient.subscribe({
            query: gql(onCreateNotification_gql),
            variables: genMyNotificationsSubscriptionVariables(userProfileID),
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


    async filterNotificationsByReceiver(receiverProfileID: string, minCreationDate?: string): Promise<listNotificationsByReceiverQuery | undefined> {
        const variables = genNotificationsByReceiverVariables(receiverProfileID, minCreationDate)
        const payload = this.genGqlOptions(listNotificationsByReceiver_gql, variables)
        const response = await API.graphql<GraphQLQuery<listNotificationsByReceiverQuery>>(payload)
        const result = this._handleResponse(response)
        // console.error(`${JSON.stringify(result)}`)
        return result
    }

}


function genNotificationsByReceiverVariables(receiverProfileID: string, minCreationDate?: string): NotificationsByReceiverQueryVariables{
    const variables: NotificationsByReceiverQueryVariables = {
      receiverProfileID,
      frendshipFilter: {
        friendProfileID: {
          eq: receiverProfileID
        }
      },
      sortDirection: ModelSortDirection.DESC
    };
    if(minCreationDate){
        variables.createdAt = {
            gt: minCreationDate
        }
    }

    return variables
}
function genMyNotificationsSubscriptionVariables(receiverProfileID: string): FilterNotificationsByUserQueryVariables{
  return {
    filter: {
      receiverProfileID: {
        eq: receiverProfileID
      }
    }
  };
}