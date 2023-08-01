import { listCities } from "./../graphql/queries";
import { GraphQLQuery } from "@aws-amplify/api";
import { ListCitiesQuery } from "./../API";
import BallerzApiClient from "../client";
import { API } from "aws-amplify";



export class BallerzCityClient extends BallerzApiClient {

    async listAllCities(): Promise<ListCitiesQuery | undefined> {
        const payload = this.genGqlOptions(listCities, {})
        const response = await API.graphql<GraphQLQuery<ListCitiesQuery>>(payload)
        const result = this._handleResponse(response)
        return result
    }
}



const cityClient = new BallerzCityClient()
export default cityClient;