import initialFeed from "./data/feed";
import initialUserProfiles from "./data/userProfile";
import { ICheckinEventPayload, IFeedEventObserver, IFeedUseCase } from "./interface";
import { IFeed, IFeedItem, IUserProfile, IUserProfileData } from "./types";


export class FeedUseCase implements IFeedUseCase {

    // An object whose reponsibilty is to dispatch feed use case events to the right subscribers
    private observer: IFeedEventObserver;

    private feed = initialFeed

    constructor(observer: IFeedEventObserver){
        this.observer = observer;
    }

    async getFeed(): Promise<IFeed> {
        const result = this.feed
        this.observer.newFeedEventHandler(this.feed)
        return result
    }

    async checkIn(payload: ICheckinEventPayload): Promise<boolean> {
        this.observer.checkInEventHandler(payload)
        return true
    }
}