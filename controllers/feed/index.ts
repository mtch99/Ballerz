import { ICheckinEventPayload } from "./../../use-cases/feed/interface";
import { IFeed, IFeedItem, IUserProfileData } from "./../../use-cases/feed/types";
import { FeedUseCase } from "../../use-cases/feed"
import IFeedModel, { IFeedEventObserver, IFeedUseCase } from "../../use-cases/feed/interface";
import IFeedController from "./interface";


export class FeedController implements IFeedController {

    private feedUseCase: IFeedUseCase
    


    constructor(feedModel: IFeedModel ){
        const feedEventObserver = this.createObserver(feedModel)
        this.feedUseCase = new FeedUseCase(feedEventObserver)
    }

    async getFeed(): Promise<IFeedItem[]>{
        const result = await this.feedUseCase.getFeed()
        return result
    }

    async checkIn(payload: ICheckinEventPayload): Promise<boolean>{
        return this.feedUseCase.checkIn(payload)
    }
 

    private createObserver(feedModel: IFeedModel): IFeedEventObserver {
        return {
            newFeedEventHandler: feedModel.newFeedEventHandler,
            checkInEventHandler: feedModel.checkInEventHandler
        }
    }
}


