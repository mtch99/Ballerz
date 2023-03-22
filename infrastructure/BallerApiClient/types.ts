export type Presence = {
    __typename: "Presence",
    id: string,
    placeID: string,
    userProfileID: string
	place: PlaceData
	startingDateTime: string
	endingDateTime: string
	startingTime: string
	endingTime: string
}

export type PlaceData = {
    __typename: "Place",
    id: string,
    name: string
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
}


export type Friendship = {
    __typename: "Friendship",
    id: string
    friendProfile: UserProfileData
}


export type GroupChatUserProfileConnection = {
    groupChatID: string
	userProfileID: string
	userProfile: UserProfileData
	groupChat: GroupChatData
}

