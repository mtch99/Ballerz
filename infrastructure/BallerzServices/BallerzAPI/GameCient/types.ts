import { Presence } from "../types"




export type GameDoc = {
    __typename: "Game",
    id: string,
    placeID: string,
    place: {
        id: string,
        name: string,
        address: string
    } | null,
    presenceList: {
        items: Array<Presence>
    }
    startingDateTime: string,
    endingDateTime: string,
    createdAt: string,
    updatedAt: string,
} | null