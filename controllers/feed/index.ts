import { ICheckinEventPayload, ICommentInput, ICreateGameInput, ICreateGameOutput } from "./../../use-cases/feed/interface";
import { IFeed, IFeedItem, IUserProfileData } from "../../use-cases/types";
import { FeedUseCase } from "../../use-cases/feed"
import IFeedModel, { IFeedEventObserver, IFeedUseCase } from "../../use-cases/feed/interface";
import IFeedController from "./interface";
import { IFeedState } from "../../app/features/feed/slice/interface";


export class FeedController implements IFeedController {

    private feedUseCase: IFeedUseCase

    feed: IFeedState;

    constructor(feedModel: IFeedModel, feedState: IFeedState ){
        this.feedUseCase = new FeedUseCase(feedModel)
        this.feed = feedState
    }
    
    async createGame(input: ICreateGameInput): Promise<ICreateGameOutput>{
        const result = await this.feedUseCase.createGame(input)
        return result
    }


    async getFeed(): Promise<IFeedItem[]>{
        const result = await this.feedUseCase.getFeed()
        return result
    }

    async checkIn(payload: ICheckinEventPayload): Promise<boolean>{
        return this.feedUseCase.checkIn(payload)
    }

    async comment(input: ICommentInput): Promise<void> {
        this.feedUseCase.comment(input)
        return
    }
 
}


