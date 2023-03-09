import { GMBadge, NewBieBadge } from "./badge";
import { IUserProfile } from "../types"

const initialUserProfiles: IUserProfile[] = [
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

export default initialUserProfiles