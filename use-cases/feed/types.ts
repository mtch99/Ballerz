export interface IFeedItem {
    id?: string;
    place: IPlace
    startingTime: Date
    endingTime: Date
    attendants: IUserProfile[]
}


export interface IPlace {
    name: string
}


export interface IUserProfile {
    id: string
    username: string
    badges: IBadge[]
}


export interface IBadge {
    name: string
    symbol: string
}
