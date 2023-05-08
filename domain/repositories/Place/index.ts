import { IUserProfileData } from "./../../use-cases/types";
import BallerzPlaceClient from "../../../infrastructure/BallerzServices/BallerzAPI/PlaceClient";
import { GetPlaceQuery} from "../../../infrastructure/BallerzServices/BallerzAPI/PlaceClient/queries";
import { IPlaceProfile } from "../../use-cases/place/types";
import { IAttendance, IGame, IPlaceData } from "../../use-cases/types";

import { IPlaceRepository } from "./../../use-cases/place/interface";
import { parseGameList } from "../adapter";


export default class PlaceRepository implements IPlaceRepository {

    client = new BallerzPlaceClient()

    async getAllPlaces(): Promise<IPlaceData[]> {
        const result: IPlaceData[] = []
        const response = await this.client.listAllPlaces()
        if (response?.listPlaces?.items) {
            const items = response.listPlaces.items 
            items.forEach(item => {
                if(item){
                    result.push(item)
                }
            })
        }

        return result
    }
   
    async getPlaceProfile(id: string, userProfileID?: string): Promise<IPlaceProfile | null> {
        let result = null
        const response = await this.client.getPlace(id, userProfileID)
        if (response) {
            const parsedResult =  parseGetPlaceQuery(response)
            // console.log(`Get Place Response: \n ${parsedResult?.name}.games:  ${JSON.stringify(parsedResult?.games)} \n \n`)
            result = parsedResult
        } 
        return result
    }

}






function parseGetPlaceQuery(response: GetPlaceQuery): IPlaceProfile | null {
    let result: IPlaceProfile|null = null
    if(response.getPlace?.gameList?.items){
        const gameList: IGame[] = parseGameList(response.getPlace.gameList?.items)
        result = {
            ...response.getPlace,
            games: gameList
        }
    }

    return result
}



