import { IBadgeData, IFeedItemState } from "./../../app/features/feed/slice/interface";
export default interface IFeedScreen {
    navigationController: IFeedScreenNavigationController
    getFeed(): void
    viewBadgeList(badgeList: IFeedItemState['badges']): void
    handleBadgeClick(feedItem: IFeedItemState): void
}


export interface IFeedScreenNavigationController{
    goToBadgeListScreen(badgeList: IFeedItemState["badges"]): void
}




