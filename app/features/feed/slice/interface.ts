import { IFeed, IPlace, IUserProfile } from "../../../../use-cases/feed/types";


export interface IFeedState {
    items: IFeedItemState[]
}


export interface IFeedItemState  {
    id: string;
    place: IPlaceData
    startingTime: string
    endingTime: string
    attendants: IUserProfileData[]
}


export interface IUserProfileData extends Partial<IUserProfile>{
    id: string;
    username: string;
}

export interface IPlaceData extends Partial<IPlace>{
    id: string;
    name: string;
}




