import { ICheckinEventPayload, ICheckinInput, ICommentInput, ICreateGameInput, ICreateGameOutput } from "../../domain/use-cases/feed/interface";
import { IFeed, IFeedItem, IUserProfileData } from "../../domain/use-cases/types";
import { FeedUseCase } from "../../domain/use-cases/feed"
import IFeedModel, { IFeedModelEventListener, IFeedUseCase } from "../../domain/use-cases/feed/interface";
import IFeedController from "./interface";
import { IFeedState } from "../../app/features/feed/slice/interface";


class FeedController implements IFeedController {

    private feedUseCase: IFeedUseCase = fakeUseCase

    createUseCase(model: IFeedModelEventListener){
        this.feedUseCase = new FeedUseCase(model)
        console.log(`\n Feed usecase initialized \n`)
    }
    
    async createGame(input: ICreateGameInput): Promise<ICreateGameOutput>{
        const result = await this.feedUseCase.createGame(input)
        return result
    }


    async getFeed(email?:string): Promise<IFeedItem[]>{
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


const feedController = new FeedController()
export default feedController


const fakeUseCase: IFeedUseCase = {
    getFeed: function (): Promise<IFeedItem[]> {
        throw new Error("Function not implemented.");
    },
    checkIn: function (payload: ICheckinInput): Promise<boolean> {
        throw new Error("Function not implemented.");
    },
    comment: function (input: ICommentInput): Promise<boolean> {
        throw new Error("Function not implemented.");
    },
    createGame: function (input: ICreateGameInput): Promise<ICreateGameOutput> {
        throw new Error("Function not implemented.");
    }
}