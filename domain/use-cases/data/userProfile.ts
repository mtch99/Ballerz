import { IGame, IUserProfileData } from "../types";
import { GMBadge, NewBieBadge, fivePlayerGameBadges } from "./badge";
import { IUserProfile } from "../types"

const initialUserProfileData: IUserProfileData[] = [
    {
        id: "maximeId",
        username: "maxime",
        badges: [NewBieBadge, GMBadge]
    },
    {
        id: "frankId",
        username: "frank",
        badges: []
    },
    {
        id: "YannId",
        username: "yann",
        badges: []
    },
    {
        id: "scottId",
        username: "scott",
        badges: []
    }, 
    {
        id: "unknownId",
        username: "unknownUser",
        badges: []
    }, 
    {
        id: "unknownId2",
        username: "unknownUser",
        badges: []
    }, 
    {
        id: "unknownId3",
        username: "unknownUser",
        badges: []
    }, 
    {
        id: "unknownId4",
        username: "unknownUser",
        badges: []
    }, 
    {
        id: "unknownId5",
        username: "unknownUser",
        badges: []
    }, 
    {
        id: "unknownId6",
        username: "unknownUser",
        badges: []
    }, 
    {
        id: "unknownId7",
        username: "unknownUser",
        badges: []
    }, 
]


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
        place: {
            id: "ByfarId",
            name: "ByFar centre sportif",
            address: "355 boulevard des ballerz"
        },
    },

    {
        id: "sevenPlayerGameId23",
        startingTime: todayWithHour(17),
        endingTime: todayWithHour(21),
        attendants: initialUserProfileData,
        badges: [],
        friendsThere: [],
        comments: [],
        place: {
            id: "LimoilouId",
            name: "La cité Limoilou",
            address: "355 boulevard des ballerz"
        },
    },

    {
        id: "twoPlayersGameId",
        startingTime: todayWithHour(17),
        endingTime: todayWithHour(21),
        attendants: initialUserProfileData.slice(0, 2),
        badges: fivePlayerGameBadges,
        friendsThere: [],
        comments: [],
        place: {
            id: "LimoilouId",
            name: "La cité Limoilou",
            address: "355 boulevard des ballerz"
        },
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

export const initialUserProfiles: IUserProfile[] = [
    {
        id: "maximeId",
        username: "maxime",
        badges: [NewBieBadge, GMBadge],
        games: initialGames,
        friends: []
    },
    {
        id: "frankId",
        username: "frank",
        badges: [],
        friends: initialUserProfileData,
        games: []
    },
    {
        id: "YannId",
        username: "yann",
        badges: [],
        games: [],
        friends: []
    },
    {
        id: "scottId",
        username: "scott",
        badges: [],
        games: [],
        friends: [],
    }, 
    {
        id: "unknownId",
        username: "unknownUser",
        badges: [],
        games: [],
        friends: [],
    }, 
    {
        id: "unknownId2",
        username: "unknownUser",
        badges: [],
        games: [],
        friends: [],
    }, 
    {
        id: "unknownId3",
        username: "unknownUser",
        badges: [],
        games: [],
        friends: [],
    }, 
    {
        id: "unknownId4",
        username: "unknownUser",
        badges: [],
        games: [],
        friends: [],
    }, 
]

export function todayWithHour(hour: number): Date {

    const date = new Date()
    date.setHours(hour)
    
    return date
}






export default initialUserProfileData