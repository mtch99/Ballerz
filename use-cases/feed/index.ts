import { IFeedItem, IUserProfile } from "./types";


export class FeedUseCase {

    static getFeed(): IFeedItem[] {
        return getInitialFeedItems()
    }
}


function getInitialUsers(): IUserProfile[] {
    return initialUserProfiles
}

function getInitialFeedItems(): IFeedItem[] {
    return initialFeedItems
}


function todayWithHour(hour: number): Date {

    const date = new Date()
    date.setHours(hour)
    
    return date
}


const initialUserProfiles: IUserProfile[] = [
    {
        id: "maximeId",
        username: "maxime",
        badges: []
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
        id: "unknownId",
        username: "unknownUser",
        badges: []
    }, 
    {
        id: "unknownId",
        username: "unknownUser",
        badges: []
    }, 
    {
        id: "unknownId",
        username: "unknownUser",
        badges: []
    }, 
]


const initialFeedItems: IFeedItem[] = [
    {
        id: "sevenPlayerGameId",
        place: {
            name: "ByFar centre sportif"
        },
        startingTime: todayWithHour(17),
        endingTime: todayWithHour(21),
        attendants: getInitialUsers()
    },

    {
        id: "sevenPlayerGameId",
        place: {
            name: "Peps de l'université Laval"
        },
        startingTime: todayWithHour(17),
        endingTime: todayWithHour(21),
        attendants: getInitialUsers()
    },

    {
        id: "twoPlayersGameId",
        place: {
            name: "La cité Limoilou"
        },
        startingTime: todayWithHour(17),
        endingTime: todayWithHour(21),
        attendants: getInitialUsers().slice(0, 2)
    },

    {
        id: "noPlayersGameId",
        place: {
            name: "Cegep Limoilou"
        },
        startingTime: todayWithHour(17),
        endingTime: todayWithHour(21),
        attendants: []
    },
]
