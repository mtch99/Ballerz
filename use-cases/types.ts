export interface IFeed extends Array<IFeedItem>{}



export interface IComment{
    id: string;
    author: IUserProfileData
    text: string;
}
export interface IFeedItem extends IGame {
    place: IPlace
}


export interface IGame {
    id: string;
    friendsThere: IUserProfile[]
    comments: IComment[]
    badges: IBadge[]
    startingTime: Date
    endingTime: Date
    attendants: IUserProfile[]
}



export interface IPlace {
    id: string;
    name: string
    address: string
}





export interface IUserProfile {
    id: string
    username: string
    badges: IBadge[]
}





export interface IBadge {
    name: string
    symbol: string
    description: string
}


export interface IBadgeList {
    items: IBadge[]
}



export interface IUserProfileData extends Partial<IUserProfile> {
    id: string;
    username: string;
    badges: IBadge[]
}