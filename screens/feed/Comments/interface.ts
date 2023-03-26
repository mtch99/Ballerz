import { IFeedItemState } from "../../../app/features/feed/slice/interface"
import { ICommentInput } from "../../../domain/use-cases/feed/interface";


export default interface  ICommentsScreen{
    writeComment(): void;
    postComment(payload: ICommentInput): Promise<boolean>
    feedItem: IFeedItemState
    comments: IFeedItemState['comments']
}


export interface ICommentsScreenNavigator{

}