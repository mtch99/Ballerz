import { IBadge, IFeedItem, IUserProfileData } from "../../../../use-cases/types";
import { IFeed, IPlace, IUserProfile } from "../../../../use-cases/types";


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
    comments: IFeedItem['comments']
}



export interface IPlaceData extends Partial<IPlace>{
    id: IPlace['id'];
    name: IPlace['name'];
}

export interface IBadgeData extends Partial<IBadge>{
    name: IBadge['name']
    symbol: IBadge['symbol']
}





