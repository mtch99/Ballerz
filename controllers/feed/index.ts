import { ICheckInResult, ICheckinEventPayload, ICheckinInput, ICheckoutInput, ICommentInput, ICreateGameInput, ICreateGameResult } from "../../domain/use-cases/feed/interface";
import { IFeed, IFeedItem, IUserProfileData } from "../../domain/use-cases/types";
import { FeedUseCase } from "../../domain/use-cases/feed"
import IFeedModel, { IFeedModelEventListener, IFeedUseCase } from "../../domain/use-cases/feed/interface";
import IFeedController from "./interface";
import { IFeedState } from "../../app/features/feed/slice/interface";


class FeedController implements IFeedController {
    
    getMyGamesList(userProfileID: string) : Promise<{ gameID: string; }[]> {
        return this.feedUseCase.getMyGamesList(userProfileID)
    }


    private feedUseCase: IFeedUseCase = fakeUseCase

    createUseCase(model: IFeedModelEventListener){
        this.feedUseCase = new FeedUseCase(model)
        console.log(`\n Feed usecase initialized \n`)
    }
    
    async createGame(input: ICreateGameInput): Promise<ICreateGameResult>{
        const result = await this.feedUseCase.createGame(input)
        return result
    }


    async getFeed(myUserProfileID?:string): Promise<IFeedItem[]>{
        const result = await this.feedUseCase.getFeed(myUserProfileID)
        return result
    }

    async checkIn(payload: ICheckinEventPayload): Promise<ICheckInResult>{
        return this.feedUseCase.checkIn(payload)
    }

    async checkOut(input: ICheckoutInput): Promise<boolean>{
        return this.feedUseCase.checkOut(input)
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
    checkIn: function (payload: ICheckinInput): Promise<ICheckInResult> {
        throw new Error("Function not implemented.");
    },
    comment: function (input: ICommentInput): Promise<boolean> {
        throw new Error("Function not implemented.");
    },
    createGame: function (input: ICreateGameInput): Promise<ICreateGameResult> {
        throw new Error("Function not implemented.");
    },
    checkOut: function (input: ICheckoutInput): Promise<boolean> {
        throw new Error("Function not implemented.");
    },
    getMyGamesList: function (userProfileID: string): Promise<{ gameID: string; }[]> {
        throw new Error("Function not implemented.");
    }
}