import { IFeed, IFeedItem } from "./../../../use-cases/feed/types";

export interface IFeedState extends IFeed {
    items: IFeedItemState[]
}


export interface IFeedItemState extends IFeedItem {}