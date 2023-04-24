import uuid from "react-native-uuid";
import initialFeed from "./data/feed";
import initialUserProfileData from "../data/userProfile";
import { ICheckInResult, ICheckinEventPayload, ICheckoutInput, ICommentEventPayload, ICommentInput, ICreateGameInput, ICreateGameResult, IFeedModelEventListener, IFeedUseCase, IGameRepository } from "./interface";
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
    
    async createGame(input: ICreateGameInput): Promise<ICreateGameResult> {
        const response = await this.repo.createGame(input);
        if(!response.error && response.feedItem){
            this.observer.newGameEventHandler(response.feedItem);
        }
        return response;
    }

    async getFeed(email?:string): Promise<IFeed> {
        const result = await this.repo.getAllGames(email)
        this.observer.newFeedEventHandler(result)
        return result
    }

    async checkIn(payload: ICheckinEventPayload): Promise<ICheckInResult> {
        const response = await this.repo.checkIn(payload)
        if(!response.error && response.attendanceID){
            this.observer.checkInEventHandler({...payload, attendanceID: response.attendanceID})
        }
        return response
    }

    async checkOut(input: ICheckoutInput): Promise<boolean> {
        const response = await this.repo.checkOut(input)
        if(response){
            this.observer.onCheckout(input)
        }
        return response
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