import { IBadge, IFeedItem, IPlaceData, IUserProfileData } from "../../../../domain/use-cases/types";
import { IFeed, IUserProfile } from "../../../../domain/use-cases/types";


export interface IFeedState {
    items: IFeedItemState[]
    myGamesList: Array<{gameID: string}>
}


export interface IFeedItemState {
    id: string;
    badges: IBadgeData[]
    place: IPlaceData
    startingTime: string
    endingTime: string
    attendants: IFeedItem['attendants'],
    friendsThere: IUserProfileData[],
    comments: IFeedItem['comments']
}



export interface IBadgeData extends Partial<IBadge>{
    name: IBadge['name']
    symbol: IBadge['symbol']
}
