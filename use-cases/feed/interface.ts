import { IFeed, IFeedItem, IUserProfileData } from "./types";

export interface IFeedEventObserver {
    newFeedEventHandler: (payload: IFeed) => any
    checkInEventHandler: (payload: ICheckinEventPayload) => any
}

export default interface IFeedModel extends Partial<IFeedEventObserver>{
    newFeedEventHandler: (payload: IFeed) => void
    checkInEventHandler: (payload: ICheckinEventPayload) => void
}


export interface IFeedUseCase {
    getFeed(): Promise<IFeedItem[]>
    checkIn(payload: ICheckinEventPayload): Promise<boolean>
}

export interface ICheckinEventPayload{
    id: IFeedItem['id']
    userProfile: IUserProfileData
}

