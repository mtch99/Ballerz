import { API } from "aws-amplify";
import BallerzApiClient from "../client";
import { GetPlaceQuery, GetPlaceQueryVariables, ListPlacesQuery, getPlace_gql, listPlaces_gql } from "./queries";
import { GraphQLQuery } from "@aws-amplify/api";


export default class BallerzPlaceClient extends BallerzApiClient {


    async getPlace(id: string, userProfileID?: string): Promise<GetPlaceQuery | undefined> {
        const variables: GetPlaceQueryVariables = { id };
        // if(userProfileID){
        //     variables.frendshipFilter= {
        //         friendProfileID: {
        //             eq: userProfileID
        //         }
        //     }
        // }

        const response = await API.graphql<GraphQLQuery<GetPlaceQuery>>({
            query: getPlace_gql,
            variables,
        });

        const result = this._handleResponse(response)
        return result
    }


    async listAllPlaces(): Promise<ListPlacesQuery|undefined>{
        const response = await API.graphql<GraphQLQuery<ListPlacesQuery>>({
            query: listPlaces_gql,
        });

        const result = this._handleResponse(response)
        return result
    }
}