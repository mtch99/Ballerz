import { IGame } from "./../../types";
import { fivePlayerGameBadges } from "../../data/badge";
import { IFeedItem } from "../../types"
import initialUserProfileData from "../../data/userProfile"

/**
 * @param hour
 * @returns a date corresponding to the current day at the hour passed as parameter
 */
export function todayWithHour(hour: number): Date {

    const date = new Date()
    date.setHours(hour)
    
    return date
}

export const initialGames: IGame[] = [
    {
        id: "sevenPlayerGameId",
        badges: fivePlayerGameBadges,
        startingTime: todayWithHour(17),
        endingTime: todayWithHour(21),
        attendants: initialUserProfileData,
        friendsThere: initialUserProfileData.slice(0, 2),
        comments: [
            {
                id:"firstTestCommentId",
                author: initialUserProfileData[0],
                text: "5v5 tout-terrain ce soir 🔥"
            }
        ],
    },

    {
        id: "sevenPlayerGameId23",
        startingTime: todayWithHour(17),
        endingTime: todayWithHour(21),
        attendants: initialUserProfileData,
        badges: [],
        friendsThere: [],
        comments: [],
    },

    {
        id: "twoPlayersGameId",
        startingTime: todayWithHour(17),
        endingTime: todayWithHour(21),
        attendants: initialUserProfileData.slice(0, 2),
        badges: fivePlayerGameBadges,
        friendsThere: [],
        comments: [],
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

const initialFeed: IFeedItem[] = [
    {
        id: "sevenPlayerGameId",
        badges: fivePlayerGameBadges,
        place: {
            id: "ByfarId",
            name: "ByFar centre sportif",
            address: "355 boulevard des ballerz"
        },
        startingTime: todayWithHour(17),
        endingTime: todayWithHour(21),
        attendants: initialUserProfileData,
        friendsThere: initialUserProfileData.slice(0, 2),
        comments: [
            {
                id:"firstTestCommentId",
                author: initialUserProfileData[0],
                text: "5v5 tout-terrain ce soir 🔥"
            }
        ],
    },

    {
        id: "sevenPlayerGameId23",
        place: {
            id: "PepsId",
            name: "Peps de l'université Laval",
            address: "355 boulevard des ballerz"
        },
        startingTime: todayWithHour(17),
        endingTime: todayWithHour(21),
        attendants: initialUserProfileData,
        badges: [],
        friendsThere: [],
        comments: [],
    },

    {
        id: "twoPlayersGameId",
        place: {
            id: "LimoilouId",
            name: "La cité Limoilou",
            address: "355 boulevard des ballerz"
        },
        startingTime: todayWithHour(17),
        endingTime: todayWithHour(21),
        attendants: initialUserProfileData.slice(0, 2),
        badges: fivePlayerGameBadges,
        friendsThere: [],
        comments: [],
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