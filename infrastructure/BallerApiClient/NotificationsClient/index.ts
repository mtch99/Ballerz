import { awsmobile_game_feat } from "./../aws-exports";
import { ListNotificationsQueryVariables } from "../API";
import {API, graphqlOperation, } from "aws-amplify"
import {GraphQLSubscription} from "@aws-amplify/api"
import BallerzApiClient from "../client";
import { INotificationsClient } from "./interface";
import { ListNotificationsQuery, FilterNotificationsByUserQueryVariables, listNotifications_gql } from "./queries";
import {GraphQLQuery, GraphQLResult} from "@aws-amplify/api"
import { awsmobileAPIMock } from "../aws-exports";
import { MyNotificationsSubscriptionVariables, MyNotificationsSubscription, myNotificationsSubscription_gql } from "./subscriptions";


export default class NotificationsClient extends BallerzApiClient implements INotificationsClient{
    
    
    async subscribeToNotifications(variables: MyNotificationsSubscriptionVariables): Promise<void> {
        const subscription = await API.graphql<GraphQLSubscription<MyNotificationsSubscription> >(
            graphqlOperation(myNotificationsSubscription_gql, variables)
          ).subscribe({
            next: (data) => {
              const receivedNotification = data.value.data?.onCreateNotificationByReceiver;
              console.log(":;;;")
              if (receivedNotification) {
                console.log(`New message from ${JSON.stringify(receivedNotification)}`);
              }
            },
            error: (error: any) => console.log(error),
        })

        return
    }

    async filterNotificationsByReceiver(variables: FilterNotificationsByUserQueryVariables): Promise<ListNotificationsQuery | undefined> {
        const payload = this.genRequestPayload(listNotifications_gql, variables)
        const response = await API.graphql<GraphQLQuery<ListNotificationsQuery>>(payload)
        const result = this._handleResponse(response)
        return result
    }

}


export class NotificationsClientMock extends NotificationsClient {
    constructor(){
        super(awsmobileAPIMock, "API_KEY")
    }
}

export class NotificationClient_gamefeat extends NotificationsClient {
    constructor(){
        super(awsmobile_game_feat, "API_KEY")
    }
}