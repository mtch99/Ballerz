import { GraphQLQuery } from "@aws-amplify/api";
import { getAdministration } from "mobx/dist/internal";
import BallerzApiClient from "../client";
import { GetAllGamesQuery, GetAllGamesQueryVariables, getAllGames_gql } from "./queries";
import { API } from "aws-amplify";




export default class BallerzGameClient extends BallerzApiClient{
    
    
    constructor(config?:any , authMode?: "API_KEY"){
        super(config, authMode);
    }
    



    async getAllGames(email: string): Promise<GetAllGamesQuery | undefined> {
        const variables: GetAllGamesQueryVariables = {
            frendshipFilter: {
                friendProfileID: {
                    eq: email
                }
            }
        }

        const payload = this.genRequestPayload(getAllGames_gql, variables)
        const response = await API.graphql<GraphQLQuery<GetAllGamesQuery>>(payload)
        const result = this._handleResponse(response)
        return result
    }

}