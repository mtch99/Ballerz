import React from "react";
import { FeedContext, IFeedContext } from "../../controllers/feed/provider";
import FeedView from "../../views/feed";
import { IFeedItemState, IFeedState } from "../../app/features/feed/slice/interface";
import IFeedScreen, { IFeedScreenNavigationController } from "./interface";


export interface IFeedScreenPropsWithoutNavigation {

}

export interface IFeedScreenProps extends IFeedScreenPropsWithoutNavigation{
    navigationController: IFeedScreenNavigationController
}


export class FeedScreen extends React.Component<IFeedScreenProps> implements IFeedScreen{
    
    navigationController: IFeedScreenNavigationController;
    
    static contextType = FeedContext
    constructor(props: IFeedScreenProps){
        super(props);
        this.navigationController = props.navigationController
    }
    context: React.ContextType<typeof FeedContext> = {} as IFeedContext
    componentDidMount(): void {
        this.getFeed();
    }

    getFeed() {
        this.context.controller.getFeed()
    }

    handleBadgeClick(feedItem: IFeedItemState): void {
        this.viewBadgeList(feedItem.badges)
    }

    viewBadgeList(badgeList: IFeedItemState['badges']): void {
        this.navigationController.goToBadgeListScreen(badgeList)
    }



    render() {
        return (
            <FeedView
                feedState={this.context.feedState}
            />
        )
    }

}