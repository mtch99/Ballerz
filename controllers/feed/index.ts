import { ICheckinEventPayload, ICommentInput } from "./../../use-cases/feed/interface";
import { IFeed, IFeedItem, IUserProfileData } from "../../use-cases/types";
import { FeedUseCase } from "../../use-cases/feed"
import IFeedModel, { IFeedEventObserver, IFeedUseCase } from "../../use-cases/feed/interface";
import IFeedController from "./interface";
import ICommentsController from "./Comments/interface";


export class FeedController implements IFeedController {

    private feedUseCase: IFeedUseCase
    
    commentsController: ICommentsController = {
        postComment: this.postComment
    }


    private async postComment(payload: ICommentInput): Promise<boolean> {
        return true
    }


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

    async comment(input: ICommentInput): Promise<void> {
        this.feedUseCase.comment(input)
        return
    }
 

    private createObserver(feedModel: IFeedModel): IFeedEventObserver {
        return feedModel
    }
}


