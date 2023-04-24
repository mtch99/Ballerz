import { ICheckInResult } from "./../../domain/use-cases/feed/interface";
import { IFeedState } from "../../app/features/feed/slice/interface";
import { ICheckinEventPayload, ICheckinInput, ICheckoutInput, ICommentInput, ICreateGameInput, ICreateGameResult, IFeedUseCase } from "../../domain/use-cases/feed/interface";
export default interface IFeedController {
    getFeed: IFeedUseCase['getFeed']
    checkIn(payload: ICheckinInput): Promise<ICheckInResult>
    createGame(input: ICreateGameInput): Promise<ICreateGameResult>
    checkOut(input: ICheckoutInput): Promise<boolean>
}

