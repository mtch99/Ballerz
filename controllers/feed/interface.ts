import { ICheckinEventPayload, ICommentInput, IFeedUseCase } from "./../../use-cases/feed/interface";
import ICommentsController from "./Comments/interface";
export default interface IFeedController {
    getFeed: IFeedUseCase['getFeed']
    checkIn(payload: ICheckinEventPayload): Promise<boolean>
    commentsController: ICommentsController
}

