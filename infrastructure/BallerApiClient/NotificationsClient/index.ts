import { MyNotificationsSubscription, onCreateNotification_gql } from "./subscriptions";
// import { awsmobile_game_feat } from "./../aws-exports";
import {API, graphqlOperation, } from "aws-amplify"
import {GraphQLSubscription} from "@aws-amplify/api"
import BallerzApiClient from "../client";
import { INotificationsClient, INotificationsSubscriber } from "./interface";
import { ListNotificationsQuery, FilterNotificationsByUserQueryVariables, listNotifications_gql} from "./queries";
import {GraphQLQuery, GraphQLResult} from "@aws-amplify/api"
import { awsmobileAPIMock } from "../aws-exports";
import { genNotificationFilterByReceiverVariables } from "./subscriptions";




export default class NotificationsClient extends BallerzApiClient implements INotificationsClient{
    
    lastNotification: Notification | null
    subscriber: any

    constructor(config?:any , authMode?: "API_KEY"){
        super(config, authMode);
        this.lastNotification = null
    }
    
    subscribeToNotifications(userProfileID: string, callback: (value: GraphQLResult<GraphQLSubscription<MyNotificationsSubscription>>) => void): void {
        const variables = genNotificationFilterByReceiverVariables(userProfileID)
        const payload = this.genRequestPayload(onCreateNotification_gql, variables)
        const subscription = API.graphql<GraphQLSubscription<MyNotificationsSubscription>>(payload)
            .subscribe(
                {
                    next: ({provider, value}) => {
                        console.error(`NotificationsSubscription received payload: \n ${JSON.stringify({provider, value})}`)
                        callback(value)
                    },
                }
        )

    }

    




    async filterNotificationsByReceiver(receiverProfileID: string): Promise<ListNotificationsQuery | undefined> {
        const variables = genNotificationFilterByReceiverVariables(receiverProfileID)
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

// export class NotificationClient_gamefeat extends NotificationsClient {
//     constructor(){
//         super(awsmobile_game_feat, "API_KEY")
//     }
// }