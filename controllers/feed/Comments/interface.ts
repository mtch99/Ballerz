import { ICommentInput } from "../../../use-cases/feed/interface";


export default interface ICommentsController{
    postComment(payload: ICommentInput): Promise<boolean>
}