export interface IFeed {
    items: IFeedItem[];
}


export interface IFeedItem {
    id: string;
    place: IPlace
    startingTime: Date
    endingTime: Date
    attendants: IUserProfileList
}



export interface IPlace {
    id: string;
    name: string
}




export interface IUserProfile {
    id: string
    username: string
    badges: IBadgeList
}

export interface IUserProfileList {
    items: IUserProfileData[]
}


export interface IBadge {
    name: string
    symbol: string
}


export interface IBadgeList {
    items: IBadge[]
}



export interface IUserProfileData extends Partial<IUserProfile> {
    id: string;
}