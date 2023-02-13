import { fivePlayerGameBadges } from "./badge";
import { IFeedItem } from "../types"
import initialUserProfiles from "./userProfile"

/**
 * @param hour
 * @returns a date corresponding to the current day at the hour passed as parameter
 */
 function todayWithHour(hour: number): Date {

    const date = new Date()
    date.setHours(hour)
    
    return date
}

const initialFeed: IFeedItem[] = [
    {
        id: "sevenPlayerGameId",
        badges: fivePlayerGameBadges,
        place: {
            id: "ByfarId",
            name: "ByFar centre sportif"
        },
        startingTime: todayWithHour(17),
        endingTime: todayWithHour(21),
        attendants: initialUserProfiles,
        friendsThere: initialUserProfiles.slice(0, 2)
    },

    {
        id: "sevenPlayerGameId23",
        place: {
            id: "PepsId",
            name: "Peps de l'université Laval"
        },
        startingTime: todayWithHour(17),
        endingTime: todayWithHour(21),
        attendants: initialUserProfiles,
        badges: [],
        friendsThere: []
    },

    {
        id: "twoPlayersGameId",
        place: {
            id: "LimoilouId",
            name: "La cité Limoilou"
        },
        startingTime: todayWithHour(17),
        endingTime: todayWithHour(21),
        attendants: initialUserProfiles.slice(0, 2),
        badges: fivePlayerGameBadges,
        friendsThere: []
    },

    // {
    //     id: "noPlayersGameId",
    //     place: {
    //         id: "VictoriaId",
    //         name: "Parc Victoria"
    //     },
    //     startingTime: todayWithHour(17),
    //     endingTime: todayWithHour(21),
    //     attendants: [],
    //     badges: [],
    //     friendsThere: []
    // },
]

export default initialFeed