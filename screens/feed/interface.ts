import { IUserProfileData } from "../../domain/use-cases/types";
import { IBadgeData, IFeedItemState} from "./../../app/features/feed/slice/interface";
export default interface IFeedScreen {
    navigationController: IFeedScreenNavigationController
    getFeed(): void
    viewBadgeList(badgeList: IFeedItemState['badges']): void
    handleBadgeClick(feedItem: IFeedItemState): void
    handleFriendsTherePress(feedItem: IFeedItemState): void
    handleInvitePress(feedItem: IFeedItemState): void
    handlePlayButtonPress(feedItem: IFeedItemState): void
    postComment(input: IPostCommentInput): void
    handleCommentButtonPress(input: IFeedItemState): void
    handlePressMakeFriends(): void
}


export interface IFeedScreenNavigationController{
    goToBadgeListScreen(badgeList: IFeedItemState["badges"]): void
    goToAttendantsScreen(userProfileList: IUserProfileData[]): void
    goToCommentScreen(feedItem: IFeedItemState): void
    goToUserSearchScreen(): void
}


export interface IPostCommentInput{
    feedItem: IFeedItemState,
    commentText: string
}


