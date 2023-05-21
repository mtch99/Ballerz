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
    place: PlaceData
    presenceList: {
        items: Array<Presence | null>
        nextToken: string | null
    }
}


export type Presence = {
    __typename: "Presence",
    id: string
    placeID: string
    userProfileID: string
    userProfile: UserProfileData
	place: PlaceData
	startingDateTime: string
	endingDateTime: string
    game: Game
}

export type PlaceData = {
    __typename: "Place",
    id: string,
    name: string
    address: string
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
        items: Array<Presence | null>
        nextToken: string | null
    }
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

