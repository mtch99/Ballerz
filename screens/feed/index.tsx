import React from "react";
import { FeedContext, IFeedContext } from "../../controllers/feed/provider";
import FeedView from "../../views/feed";
import { IFeedState } from "../../app/features/feed/slice/interface";
import IFeedScreen from "./interface";

export interface IProps<N, C>{
    navigation: N
    controller: C
}


export class FeedScreen<N, C> extends React.Component implements IFeedScreen{
    static contextType = FeedContext
    context: React.ContextType<typeof FeedContext> = {} as IFeedContext
    componentDidMount(): void {
        this.getFeed();
    }

    getFeed() {
        this.context.controller.getFeed()
    }

    render() {
        return (
            <FeedView
                feedState={this.context.feedState}
            />
        )
    }

}