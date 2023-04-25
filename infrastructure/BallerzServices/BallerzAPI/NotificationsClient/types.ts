import { NotificationType } from "../API"
import { FriendShipRequestData, PlaceData, UserProfileData } from "../types"

export type Notification = {
    __typename: "Notification",
    id: string,
    type: NotificationType,
    friendshipRequestID: string | null,
    friendshipRequest: FriendShipRequestData | null,
    receiverProfileID: string 
    senderProfileID: string | null,
    senderProfile: UserProfileData | null
    presenceID: string
    presence: Presence
    createdAt: string,
    updatedAt: string,
}


type Presence = {
    __typename: "Presence",
    id: string,
    placeID: string,
    userProfileID: string
    place: PlaceData
    startingDateTime: string
    endingDateTime: string
    game: GameData
}
  

type GameData = {
    id: string
    placeID: string
    place: PlaceData
    startingDateTime: string
    endingDateTime: string
}