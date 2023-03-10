import { initialGames } from "./../feed/data/feed";
import { IUserProfileData } from "./../types";
import { GMBadge, NewBieBadge } from "./badge";
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
]



export default initialUserProfileData