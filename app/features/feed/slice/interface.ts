import { IBadge, IFeedItem } from "./../../../../use-cases/feed/types";
import { IFeed, IPlace, IUserProfile } from "../../../../use-cases/feed/types";


export interface IFeedState {
    items: IFeedItemState[]
}


export interface IFeedItemState {
    id: string;
    badges: IBadgesData[]
    place: IPlaceData
    startingTime: string
    endingTime: string
    attendants: IUserProfileData[]
}


export interface IUserProfileData extends Partial<IUserProfile>{
    id: IUserProfile['id'];
    username: IUserProfile['username'];
}

export interface IPlaceData extends Partial<IPlace>{
    id: IPlace['id'];
    name: IPlace['name'];
}

export interface IBadgesData extends Partial<IBadge>{
    name: IBadge['name']
    symbol: IBadge['symbol']
}





