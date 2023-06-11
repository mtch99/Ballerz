import { Game, PresenceWithoutGame } from "../../infrastructure/BallerzServices/BallerzAPI/types"
import { IAttendance, IGame, IUserProfileData } from "../use-cases/types"



export function parseGameList(items: (Game | null)[]): IGame[] {
    const result: IGame[] = []
    for (const item of items) {
        if (item?.place) {
            const attendants = item.presenceList.items
            const friendsThere: IUserProfileData[] = getFriendsThereListFromPresenceList(attendants)
            const game: IGame = {
                id: item.id,
                placeID: item.placeID,
                friendsThere,
                comments: [],
                badges: [],
                startingTime: item.startingDateTime,
                endingTime: item.endingDateTime,
                attendants: parsePresenceList(item.presenceList.items),
                place: item.place
            }
            if(game.attendants.length > 0){
                result.push(game)
            }
        }
    }
    return result
}



export function parsePresenceList(presenceList: (PresenceWithoutGame|null)[]): IGame['attendants']{
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


export function parsePresenceDoc(presenceDoc: PresenceWithoutGame): IAttendance | null{
    if(presenceDoc.userProfile){
        let isFriend = false
        if(presenceDoc.userProfile.friends){
            isFriend = true
        } else {
            console.error("Friends list is empty, could not yield 'isFriend' field in IAtttendance")
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


export function getFriendsThereListFromPresenceList(presenceList: (PresenceWithoutGame|null)[]): IUserProfileData[] {
    const friendsThere: IUserProfileData[] = []
    presenceList.forEach(attendant => {
        const attendantProfile = attendant?.userProfile
        const friends = attendantProfile?.friends
        if(friends && friends.items.length > 0 && attendantProfile){
            friendsThere.push({...attendantProfile, badges: [], isFriend: true})
        }
    })
    // console.log(JSON.stringify(friendsThere))

    return friendsThere
}