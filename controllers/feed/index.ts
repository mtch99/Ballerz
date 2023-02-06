import { FeedUseCase } from "../../use-cases/feed"
import { IFeedItem } from "../../use-cases/feed/types";


export class FeedController {

    feedUseCase = new FeedUseCase();
    loading = true
    feedItems: IFeedItem[] = []

    constructor(){
        this.feedItems = this.feedUseCase.getFeed()
    }

    


}