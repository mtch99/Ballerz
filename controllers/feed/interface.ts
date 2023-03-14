import { IFeedState } from "../../app/features/feed/slice/interface";
import { ICheckinEventPayload, ICommentInput, ICreateGameInput, ICreateGameOutput, IFeedUseCase } from "./../../use-cases/feed/interface";
export default interface IFeedController {
    getFeed: IFeedUseCase['getFeed']
    checkIn(payload: ICheckinEventPayload): Promise<boolean>
    feed: IFeedState
    createGame(input: ICreateGameInput): Promise<ICreateGameOutput>
}

