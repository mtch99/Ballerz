import { PlayMutationInput} from "./../API";
import { GraphQLQuery } from "@aws-amplify/api";
import { getAdministration } from "mobx/dist/internal";
import BallerzApiClient from "../client";
import { GetAllGamesQuery, GetAllGamesQueryVariables, GetGameQuery, GetGameQueryVariables, GetMyPresencesQuery, GetMyPresencesQueryVariables, getAllGames_gql, getGame_gql, listPresences_gql } from "./queries";
import { API } from "aws-amplify";
import { DeletePresenceMutationVariables } from "../API";
import { DeletePresenceMutation, PlayMutation, deletePresence_gql, playMutation_gql, PlayMutationVariables } from "./mutations";




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

    async deletePresence(presenceID: string): Promise<DeletePresenceMutation | undefined>{
        const variables: DeletePresenceMutationVariables = {
            input: {
                id: presenceID
            }
        }

        const payload = this.genRequestPayload(deletePresence_gql, variables)
        const response = await API.graphql<GraphQLQuery<DeletePresenceMutation>>(payload)
        const result = this._handleResponse(response)
        return result
    }

    async getGame(gameID: string, userProfileID: string): Promise<GetGameQuery | undefined>{
        const variables: GetGameQueryVariables = {
            id: gameID,
            presenceFilter: {
                userProfileID: {
                    eq: userProfileID
                }
            }
        }

        const payload = this.genRequestPayload(getGame_gql, variables)
        const response = await API.graphql<GraphQLQuery<GetGameQuery>>(payload)
        const result = this._handleResponse(response)
        return result
    }


    async play(input: PlayMutationInput, userProfileID: string): Promise<PlayMutation | undefined>{
        const variables: PlayMutationVariables = {
            input,
        }

        console.log(`Play Mutaion Input: ${JSON.stringify(variables.input)}`)

        const payload = this.genRequestPayload(playMutation_gql, variables)
        const response = await API.graphql<GraphQLQuery<PlayMutation>>(payload)
        const result = this._handleResponse(response)
        return result
    }

    async getMyPresences(userProfileID: string): Promise<GetMyPresencesQuery | undefined> {
        const variables: GetMyPresencesQueryVariables = {
            filter: {
                userProfileID: {
                eq: userProfileID
                }
            }
        }
        const payload = this.genRequestPayload(listPresences_gql, variables)
        const response = await API.graphql<GraphQLQuery<GetMyPresencesQuery>>(payload)
        const result = this._handleResponse(response)
        return result
    }

}