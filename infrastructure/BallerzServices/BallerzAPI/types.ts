import { FriendshipRequestStatus } from "./API"

export type FriendShipRequestData = {
    __typename: "FriendshipRequest",
    id: string,
    senderProfileID: string,
    receiverProfileID: string
    receiverProfile: UserProfileData | null
    senderProfile: UserProfileData | null
    status: FriendshipRequestStatus
}


export type Game = {
    __typename: "Game"
    id: string
    startingDateTime: string
    endingDateTime: string
    placeID: string
    place: PlaceData | null
    cityID: string
    city: CityData | null
    presenceList: {
        items: Array<PresenceWithoutGame | null>
        nextToken: string | null
    }
}


export type PresenceWithoutGame = {
    __typename: "Presence",
    id: string
    placeID: string
    userProfileID: string
    userProfile: UserProfileData | null
	place: PlaceData | null
	startingDateTime: string
	endingDateTime: string
    gameID: string
}

export type PresenceWithGame = PresenceWithoutGame & {
    game: Game | null
}



export type PlaceData = {
    __typename: "Place",
    id: string,
    name: string
    address: string
    city: {
        id: string,
        name: string
    }
}


export type GroupChatData = {
    __typename: "GroupChat",
    id: string,
    name: string,
}

export type GroupChatDataWithMembers = {
    __typename: "GroupChat",
    id: string,
    name: string,
    groupChatUserProfileConnectionList: {
        items: Array<UserProfileData>
        nextToken: string
    }
}


export type GroupChatUserProfileConnectionConnection = {
    __typename: "ModelGroupChatUserProfileConnectionConnection",
    items: Array<GroupChatUserProfileConnection | null>
    nextToken: string | null
}


export type UserProfileData = {
    __typename: "UserProfile",
    id: string,
    username: string
    email: string
    cityID: string
    city: CityData | null
    friends?: {
        items: Array<UserProfileData | null>
        nextToken: string | null
    }
}



export type UserProfile = {
    __typename: "UserProfile",
    id: string,
    email: string
    username: string,
    friends: ModelFriendshipConnection,
    createdAt: string,
    updatedAt: string,
    presenceList: {
        items: Array<PresenceWithGame | null>
        nextToken: string | null
    }
    cityID: string,
    city: CityData | null
}


export type Friendship = {
    __typename: "Friendship",
    id: string
    friendProfile: UserProfileData
}

export type ModelFriendshipConnection = {
    __typename: "ModelFriendshipConnection",
    items:  Array<Friendship | null >,
    nextToken?: string | null,
};


export type GroupChatUserProfileConnection = {
    groupChatID: string
	userProfileID: string
	userProfile: UserProfileData
	groupChat: GroupChatData
}



export type CityData = {
    id: string,
    name: string
}