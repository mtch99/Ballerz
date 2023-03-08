import { IPlaceProfile } from "./../place/types";
import { IPlace } from "../types";
import { todayWithHour } from "../feed/data/feed";
import { fivePlayerGameBadges } from "./badge";
import initialUserProfiles from "./userProfile";

const initialPlaces: IPlace[] = [
    {
        id: "ByfarId",
        name: "ByFar centre sportif",
        address: "355 boulevard des ballerz"

    },
    {
        id: "PepsId",
        name: "Peps de l'université Laval",
        address: "355 boulevard des ballerz"
    },
    {
        id: "LimoilouId",
        name: "La cité Limoilou",
        address: "355 boulevard des ballerz"
    },
]


export const initialPlaceProfiles: IPlaceProfile[] = [
    {
            id: "ByfarId",
            name: "ByFar centre sportif",
            address: "355 boulevard des ballerz",
            games: [
                {
                    id: "twoPlayersGameId",
                    startingTime: todayWithHour(17),
                    endingTime: todayWithHour(21),
                    attendants: initialUserProfiles.slice(0, 2),
                    badges: fivePlayerGameBadges,
                    friendsThere: [],
                    comments: [],
                }
            ]
    },
    {
        id: "PepsId",
        name: "Peps de l'université Laval",
        address: "355 boulevard des ballerz",
        games: [
            {
                id: "twoPlayersGameId",
                startingTime: todayWithHour(17),
                endingTime: todayWithHour(21),
                attendants: initialUserProfiles.slice(0, 2),
                badges: fivePlayerGameBadges,
                friendsThere: [],
                comments: [],
            }
        ]
    },
    {
        id: "LimoilouId",
        name: "La cité Limoilou",
        address: "355 boulevard des ballerz",
        games: [
            {
                id: "twoPlayersGameId",
                startingTime: todayWithHour(17),
                endingTime: todayWithHour(21),
                attendants: initialUserProfiles.slice(0, 2),
                badges: fivePlayerGameBadges,
                friendsThere: [],
                comments: [],
            }
        ]
    },
]

export default initialPlaces