import { ListNotificationsQueryVariables } from "../API";
import {API} from "aws-amplify"
import BallerzApiClient from "../client";
import { INotificationsClient } from "./interface";
import { ListNotificationsQuery, FilterNotificationsByUserQueryVariables, listNotifications_gql } from "./queries";
import {GraphQLQuery, GraphQLResult} from "@aws-amplify/api"


export default class NotificationsClient extends BallerzApiClient implements INotificationsClient{

    async filterNotificationsByReceiver(input: FilterNotificationsByUserQueryVariables): Promise<ListNotificationsQuery | undefined> {
        const payload = this.genRequestPayload(listNotifications_gql, input)
        const response = await API.graphql<GraphQLQuery<ListNotificationsQuery>>(payload)
        const result = this._handleResponse(response)
        return result
    }

}