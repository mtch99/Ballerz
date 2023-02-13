import { IBadge, IFeedItem } from "./../../../../use-cases/feed/types";
import { IFeed, IPlace, IUserProfile } from "../../../../use-cases/feed/types";


export interface IFeedState {
    items: IFeedItemState[]
}


export interface IFeedItemState {
    id: string;
    badges: IBadgeData[]
    place: IPlaceData
    startingTime: string
    endingTime: string
    attendants: IUserProfileData[],
    friendsThere: IUserProfileData[],
}


export interface IUserProfileData extends Partial<IUserProfile>{
    id: IUserProfile['id'];
    username: IUserProfile['username'];
}

export interface IPlaceData extends Partial<IPlace>{
    id: IPlace['id'];
    name: IPlace['name'];
}

export interface IBadgeData extends Partial<IBadge>{
    name: IBadge['name']
    symbol: IBadge['symbol']
}





