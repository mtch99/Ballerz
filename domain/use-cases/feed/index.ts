import uuid from "react-native-uuid";
import initialFeed from "./data/feed";
import initialUserProfileData from "../data/userProfile";
import { ICheckinEventPayload, ICommentEventPayload, ICommentInput, ICreateGameInput, ICreateGameOutput, IFeedModelEventListener, IFeedUseCase, IGameRepository } from "./interface";
import { IComment, IFeed, IFeedItem, IUserProfile, IUserProfileData } from "../types";
import { initialPlaceProfiles } from "../data/places";
import GameRepository from "../../repositories/Game";


export class FeedUseCase implements IFeedUseCase {

    // An object whose reponsibilty is to dispatch feed use case events to the right subscribers
    private observer: IFeedModelEventListener;
    private repo: IGameRepository = new GameRepository();

    private feed = initialFeed

    constructor(observer: IFeedModelEventListener){
        this.observer = observer;
    }
    
    async createGame(input: ICreateGameInput): Promise<ICreateGameOutput> {

        const result: ICreateGameOutput ={
            error: false,
            feedItem: {
                ...input,
                place: {
                    id: input.placeId,
                    name: `Fake ${initialPlaceProfiles[0].name}`,
                    address: `Fake ${initialPlaceProfiles[0].address}`
                },
                id: uuid.v4().toString(),
                friendsThere: [],
                comments: [],
                badges: [],
                attendants: []
            }
        }
        this.observer.newGameEventHandler(result.feedItem)
        return result
    }

    async getFeed(email?:string): Promise<IFeed> {
        // const result = this.feed
        const result = await this.repo.getAllGames(email)
        this.observer.newFeedEventHandler(result)
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