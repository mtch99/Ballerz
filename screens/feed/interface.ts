import { IBadgeData, IFeedItemState, IUserProfileData } from "./../../app/features/feed/slice/interface";
export default interface IFeedScreen {
    navigationController: IFeedScreenNavigationController
    getFeed(): void
    viewBadgeList(badgeList: IFeedItemState['badges']): void
    handleBadgeClick(feedItem: IFeedItemState): void
    handleFriendsTherePress(feedItem: IFeedItemState): void
    handleInvitePress(feedItem: IFeedItemState): void
}


export interface IFeedScreenNavigationController{
    goToBadgeListScreen(badgeList: IFeedItemState["badges"]): void
    goToAttendantsScreen(userProfileList: IUserProfileData[]): void
}




