import BallerzPlaceClient from "../../../infrastructure/BallerzServices/BallerzAPI/PlaceClient";
import { GetPlaceQuery, ListPlacesQuery} from "../../../infrastructure/BallerzServices/BallerzAPI/PlaceClient/queries";
import { IPlaceProfile } from "../../use-cases/place/types";
import { IAttendance, IGame, IPlaceData } from "../../use-cases/types";

import { IPlaceRepository } from "./../../use-cases/place/interface";
import { parseGameList } from "../adapter";


export default class PlaceRepository implements IPlaceRepository {

    client = new BallerzPlaceClient()

    async getAllPlaces(): Promise<IPlaceData[]> {
        const response = await this.client.listAllPlaces()
        if(response){
            return parseListPlacesQuery(response)
        }

        return []
    }
   
    async getPlaceProfile(id: string, userProfileID?: string): Promise<IPlaceProfile | null> {
        let result = null
        const response = await this.client.getPlace(id, userProfileID)
        if (response) {
            const parsedResult =  parseGetPlaceQuery(response)
            result = parsedResult
        } 
        return result
    }

}



function parseGetPlaceQuery(response: GetPlaceQuery): IPlaceProfile | null {
    let result: IPlaceProfile|null = null
    if(response.getPlace?.city){
        const city = response.getPlace.city
        if(response.getPlace?.gameList?.items){
            const gameList: IGame[] = parseGameList(response.getPlace.gameList?.items)
            result = {
                ...response.getPlace,
                city,
                games: gameList
            }
        }
    }

    return result
}



function parseListPlacesQuery(response: ListPlacesQuery): IPlaceData[] {
    let result: IPlaceData[] = []
    response.listPlaces?.items?.map(item => {
        const city = item.city
        if(city){
            result.push({...item, city})
        } else {
            console.error(`Error getting city for place named ${item.name}`)
        }
    })

    return result
}


