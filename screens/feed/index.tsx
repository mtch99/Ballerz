import React from "react";
import { FeedContext, IFeedContext } from "../../controllers/feed/provider";
import FeedView from "../../views/feed";
import { IFeedItemState} from "../../app/features/feed/slice/interface";
import IFeedScreen, { IFeedScreenNavigationController } from "./interface";


export interface IFeedScreenPropsWithoutNavigation {

}

export interface IFeedScreenProps extends IFeedScreenPropsWithoutNavigation{
    navigationController: IFeedScreenNavigationController
}


export class FeedScreen extends React.Component<IFeedScreenProps> implements IFeedScreen{

    navigationController: IFeedScreenNavigationController = this.props.navigationController;
    
    static contextType = FeedContext
    constructor(props: IFeedScreenProps){
        super(props);
        this.handleFriendsTherePress.bind(this)
    }
    context: React.ContextType<typeof FeedContext> = {} as IFeedContext
    componentDidMount(): void {
        this.getFeed();
    }

    getFeed() {
        this.context.controller.getFeed()
    }

    handleBadgeClick = (feedItem: IFeedItemState): void => {
        this.viewBadgeList(feedItem.badges)
    }

    handleFriendsTherePress(feedItem: IFeedItemState): void {
        console.warn("Feed screen handle friends there press " + `${this.props}`)
        this.navigationController.goToAttendantsScreen(feedItem.attendants)
    }

    viewBadgeList(badgeList: IFeedItemState['badges']): void {
        this.navigationController.goToBadgeListScreen(badgeList)
    }
    

    render() {
        return (
            <FeedView
                feedState={this.context.feedState}
                handleBadgeClick={(item) => {this.handleBadgeClick(item)}}
                handleFriendsTherePress={(item) => {this.handleFriendsTherePress(item)}}
            />
        )
    }
}