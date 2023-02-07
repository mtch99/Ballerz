import { IFeed } from "./types";

export interface IFeedEventObserver {
    newFeedEventHandler: (payload: IFeed) => any
}