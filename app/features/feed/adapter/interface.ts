import { IFeed } from "../../../../use-cases/feed/types";
import { IFeedEventObserver } from "../../../../use-cases/feed/interface";


export default interface IFeedModel extends Partial<IFeedEventObserver>{
    newFeedEventHandler: (payload: IFeed) => void
}