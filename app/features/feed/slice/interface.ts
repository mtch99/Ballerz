import { IBadge, IFeedItem, IPlaceData, IUserProfileData } from "../../../../domain/use-cases/types";
import { IFeed, IUserProfile } from "../../../../domain/use-cases/types";


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



export interface IBadgeData extends Partial<IBadge>{
    name: IBadge['name']
    symbol: IBadge['symbol']
}
