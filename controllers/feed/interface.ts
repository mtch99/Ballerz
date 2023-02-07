import { IFeedUseCase } from "./../../use-cases/feed/interface";
export default interface IFeedController {
    getFeed: IFeedUseCase['getFeed']
}

