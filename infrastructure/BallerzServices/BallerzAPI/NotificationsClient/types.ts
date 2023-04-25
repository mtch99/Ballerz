import { FriendshipRequestStatus, NotificationType } from "../API"
import { FriendShipRequestData, UserProfileData } from "../types"

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
    createdAt: string,
    updatedAt: string,
}

