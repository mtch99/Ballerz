import { IFeed, IFeedItem, IUserProfile } from "./types";


export class FeedUseCase {

    async getFeed(): Promise<IFeed> {
        const items = await getInitialFeedItems()
        return items
    }
}


function getInitialUsers(): IUserProfile[] {
    return initialUserProfiles
}

async function getInitialFeedItems(): Promise<IFeedItem[]> {
    return initialFeedItems
}


/**
 * @param hour
 * @returns a date corresponding to the current day at the hour passed as parameter
 */
function todayWithHour(hour: number): Date {

    const date = new Date()
    date.setHours(hour)
    
    return date
}


const initialUserProfiles: IUserProfile[] = [
    {
        id: "maximeId",
        username: "maxime",
        badges: {
            items: []
        }
    },
    {
        id: "frankId",
        username: "frank",
        badges: {
            items: []
        }
    },
    {
        id: "YannId",
        username: "yann",
        badges: {
            items: []
        }
    },
    {
        id: "scottId",
        username: "scott",
        badges: {
            items: []
        }
    }, 
    {
        id: "unknownId",
        username: "unknownUser",
        badges: {
            items: []
        }
    }, 
    {
        id: "unknownId",
        username: "unknownUser",
        badges: {
            items: []
        }
    }, 
    {
        id: "unknownId",
        username: "unknownUser",
        badges: {
            items: []
        }
    }, 
    {
        id: "unknownId",
        username: "unknownUser",
        badges: {
            items: []
        }
    }, 
]


const initialFeedItems: IFeedItem[] = [
    {
        id: "sevenPlayerGameId",
        place: {
            id: "ByfarId",
            name: "ByFar centre sportif"
        },
        startingTime: todayWithHour(17),
        endingTime: todayWithHour(21),
        attendants: getInitialUsers()
    },

    {
        id: "sevenPlayerGameId",
        place: {
            id: "PepsId",
            name: "Peps de l'université Laval"
        },
        startingTime: todayWithHour(17),
        endingTime: todayWithHour(21),
        attendants: getInitialUsers()
    },

    {
        id: "twoPlayersGameId",
        place: {
            id: "LimoilouId",
            name: "La cité Limoilou"
        },
        startingTime: todayWithHour(17),
        endingTime: todayWithHour(21),
        attendants: getInitialUsers().slice(0, 2)
    },

    {
        id: "noPlayersGameId",
        place: {
            id: "VictoriaId",
            name: "Parc Victoria"
        },
        startingTime: todayWithHour(17),
        endingTime: todayWithHour(21),
        attendants: []
    },
]
