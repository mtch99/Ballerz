import { ListUserProfileDataQueryItem } from "../UserProfileClient/queries"

export type PresenceDoc = {
    id: string,
    userProfile: ListUserProfileDataQueryItem
	startingDateTime: string,
    endingDateTime: string,
} | null


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
        items: Array<PresenceDoc>
    }
    startingDateTime: string,
    endingDateTime: string,
    createdAt: string,
    updatedAt: string,
} | null