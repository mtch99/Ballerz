import React from "react";
import { IFeedItemState } from "../../../../app/features/feed/slice/interface";
import ICommentsScreen, { ICommentsScreenNavigator } from "./interface";
import { IComment } from "../../../../domain/use-cases/types";
// import ICommentsController from "../../../controllers/feed/Comments/interface";
import { ICommentInput } from "../../../../domain/use-cases/feed/interface";
import { FeedContext, IFeedContext } from "../../../../controllers/feed/provider";
import { Text } from "react-native";


export interface ICommentScreenPropsWithoutNavigation{
    feedItem: IFeedItemState;
    comments: IFeedItemState['comments']
}

export interface ICommentScreenProps extends ICommentScreenPropsWithoutNavigation{
    navigationController: ICommentsScreenNavigator
}

export default class CommentScreen extends React.Component<ICommentScreenProps> implements ICommentsScreen{

    static contextType = FeedContext
    context: React.ContextType<typeof FeedContext> = {} as IFeedContext
    // commentsController: ICommentsController = {} as ICommentsController

    componentDidMount(): void {
        // this.commentsController = this.context.controller.commentsController
    }

    feedItem  = this.props.feedItem
    comments = this.feedItem.comments
    
    
    constructor(props: ICommentScreenProps){
        super(props);
    }

    // Maybe handle the keyboard view when th users shows intent to wriite a comment
    writeComment(): void {
        
    }


    async postComment(payload: ICommentInput): Promise<boolean> {
        // return this.commentsController.postComment(payload)
        return true
    }


    render(): React.ReactNode {
        return(
            <Text
                style={{color: 'white'}}
            >
                {this.comments.length>0?(this.comments[0].text):(null)}
            </Text>
        )
    }


}