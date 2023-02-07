import { IFeed, IFeedItem } from "./types";

export interface IFeedEventObserver {
    newFeedEventHandler: (payload: IFeed) => any
}


export interface IFeedUseCase {
    getFeed(): Promise<IFeedItem[]>
}

