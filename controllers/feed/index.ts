import { IFeed, IFeedItem } from "./../../use-cases/feed/types";
import IFeedModel from "../../app/features/feed/adapter/interface";
import { FeedUseCase } from "../../use-cases/feed"
import { IFeedEventObserver, IFeedUseCase } from "../../use-cases/feed/interface";
import IFeedController from "./interface";


export class FeedController implements IFeedController{

    private feedUseCase: IFeedUseCase

    constructor(feedModel: IFeedModel ){
        const feedEventObserver = this.createObserver(feedModel)
        this.feedUseCase = new FeedUseCase(feedEventObserver)
    }

    async getFeed(): Promise<IFeedItem[]>{
        const result = await this.feedUseCase.getFeed()
        return result
    }

    private createObserver(feedModel: IFeedModel): IFeedEventObserver {
        return {
            newFeedEventHandler: feedModel.newFeedEventHandler
        }
    }
}


