import uuid from "react-native-uuid";
import initialFeed from "./data/feed";
import initialUserProfileData from "../data/userProfile";
import { ICheckinEventPayload, ICommentEventPayload, ICommentInput, IFeedEventObserver, IFeedUseCase } from "./interface";
import { IComment, IFeed, IFeedItem, IUserProfile, IUserProfileData } from "../types";


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

    async comment(input: ICommentInput): Promise<boolean> {
        const comment: IComment = {
            id: uuid.v4().toString(),
            author: input.author,
            text: input.text
        }
        const commentEventPayload: ICommentEventPayload = {
            feedItemId: input.feedItemId,
            comment
        }
        this.observer.commentEventHandler(commentEventPayload)

        return true
    }
}