import { ICheckinEventPayload, ICommentInput, IFeedUseCase } from "./../../use-cases/feed/interface";
export default interface IFeedController {
    getFeed: IFeedUseCase['getFeed']
    checkIn(payload: ICheckinEventPayload): Promise<boolean>
    comment(payload: ICommentInput): Promise<void>
}

