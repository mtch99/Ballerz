import { FeedUseCase } from "../../use-cases/feed"
import { IFeedItem } from "../../use-cases/feed/types";


export class FeedController {

    feedUseCase = new FeedUseCase();
    feedItems: IFeedItem[] = []

    constructor(){
        this.feedItems = this.feedUseCase.getFeed()
    }

}