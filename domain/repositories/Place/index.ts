import { IUserProfileData } from "./../../use-cases/types";
import BallerzPlaceClient from "../../../infrastructure/BallerzServices/BallerzAPI/PlaceClient";
import { Game, GetPlaceQuery, Presence } from "../../../infrastructure/BallerzServices/BallerzAPI/PlaceClient/queries";
import { IPlaceProfile } from "../../use-cases/place/types";
import { IAttendance, IGame, IPlaceData } from "../../use-cases/types";

import { IPlaceRepository } from "./../../use-cases/place/interface";


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
            result = parsedResult
        } 
        return result
    }

}






function parseGetPlaceQuery(response: GetPlaceQuery): IPlaceProfile | null {
    let result: IPlaceProfile|null = null
    if(response.getPlace?.gameList?.items){
        const gameList: IGame[] = parseGameConnection(response.getPlace.gameList?.items)
        result = {
            ...response.getPlace,
            games: gameList
        }
    }

    return result
}


function parseGameConnection(items: (Game | null)[]): IGame[] {
    const result: IGame[] = []
    for (const item of items) {
        if (item?.place) {
            const startingTime = new Date(item.startingDateTime)
            const endingTime = new Date(item.endingDateTime)
            const attendants = item.presenceList.items
            const friendsThere: IUserProfileData[] = getFriendsThereListFromPresenceList(attendants)
            const game: IGame = {
                id: item.id,
                placeID: item.placeID,
                friendsThere,
                comments: [],
                badges: [],
                startingTime,
                endingTime,
                attendants: parsePresenceList(item.presenceList.items),
                place: item.place
            }
            result.push(game)
        }
    }
    return result
}



function parsePresenceList(presenceList: (Presence|null)[]): IGame['attendants']{
    const result: IGame['attendants'] = []
    presenceList.forEach((presenceDoc) => {
        if(presenceDoc){
            const parsedPresence = parsePresenceDoc(presenceDoc)
            if(parsedPresence){
                result.push(parsedPresence)
            }
        }
    })
    return result
}


function parsePresenceDoc(presenceDoc: Presence): IAttendance | null {
    if(presenceDoc.userProfile){
        let isFriend = false
        if(presenceDoc.userProfile.friends.items.length > 0){
            isFriend = true
        }
        return {
            id: presenceDoc.id,
            userProfileData: {
                ...presenceDoc.userProfile,
                isFriend,
                badges: []
            },
            arrivalDateTime: presenceDoc.startingDateTime,
            departureDateTime: presenceDoc.endingDateTime,
        }
    }
    else {
        return null
    }

}


function getFriendsThereListFromPresenceList(presenceList: (Presence|null)[]): IUserProfileData[] {
    const result: IUserProfileData[] = []
    const friendsThere: IUserProfileData[] = []
    presenceList.forEach(attendant => {
        const attendantProfile = attendant?.userProfile
        const friends = attendantProfile?.friends
        if(friends && friends.items.length > 0 && attendantProfile){
            friendsThere.push({...attendantProfile, badges: [], isFriend: true})
        }
    })

    return result
}
