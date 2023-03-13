

export interface IFeed extends Array<IFeedItem>{}



export interface IComment{
    id: string;
    author: IUserProfileData
    text: string;
}
export interface IFeedItem extends IGame {
    place: IPlaceData
}


export interface IGame {
    id: string;
    friendsThere: IUserProfileData[]
    comments: IComment[]
    badges: IBadge[]
    startingTime: Date
    endingTime: Date
    attendants: IUserProfileData[]
    place: IPlaceData
}



export interface IPlaceData {
    id: string;
    name: string
    address: string
}





export interface IUserProfile extends IUserProfileData {
    games: IGame[]
    friends: IUserProfileData[]
}


export interface IUserProfileData{
    id: string
    username: string
    badges: IBadge[]
}


export interface IPlaceData {
    id: string;
    name: string;
    address: string
}


export interface IBadge {
    name: string
    symbol: string
    description: string
}


export interface IBadgeList {
    items: IBadge[]
}



