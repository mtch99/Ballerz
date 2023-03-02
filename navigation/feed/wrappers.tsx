import { useNavigation } from "@react-navigation/native"
import { IBadgeData } from "../../app/features/feed/slice/interface"
import BadgeListScreen from "../../screens/badgeList"
import { IFeedScreenPropsWithoutNavigation, FeedScreen } from "../../screens/feed"
import CommentScreen from "../../screens/feed/Comments"
import { IFeedScreenNavigationController } from "../../screens/feed/interface"
import AttendantsListScreen from "../../screens/userProfileSearch/attendantsList"
import { IUserProfileData } from "../../use-cases/types"
import { FeedStackScreenProps, FeedStackNavigationProp } from "./types"
import UserProfileSearchScreen from "../../screens/userProfileSearch"


/**
 * Provides a navigation controller to the FeedScreen
 * @param props FeedScreen props without navigation
 * @returns A FeedScreen
 */
export function FeedScreenWrapper(props: IFeedScreenPropsWithoutNavigation): JSX.Element {

    const navigation = useNavigation<FeedStackNavigationProp<'FeedScreen'>>()

    const navigationController: IFeedScreenNavigationController = {
        goToBadgeListScreen: (badgeList: IBadgeData[]) => {
            navigation.navigate('BadgeListScreen', {badgeList})
        },
        goToAttendantsScreen: (userProfileList: IUserProfileData[]) => {
            navigation.navigate('AttendantsListScreen', {userProfileList})
        },
        goToCommentScreen(feedItem) {
            // console.error('attempted to go to comments scrren')
            navigation.navigate('CommentsScreen', {feedItem: feedItem, comments: feedItem.comments})
        },

        goToUserSearchScreen() {
            navigation.navigate('UserProfileSearch', {})
        },
        
    }


    return (
        <FeedScreen
            {...{
                navigationController
            }}
        />
    )

}

/**
 * Provides a navigation controller to the BadgeListScreen
 * @param props BadgeListScreen props without navigation
 * @returns A BadgeListScreen
 */
 export function BadgeListScreenWrapper(props: FeedStackScreenProps<'BadgeListScreen'>): JSX.Element {

    const navigation = useNavigation<FeedStackNavigationProp<'BadgeListScreen'>>()


    return (
        <BadgeListScreen
            badgeList={props.route.params.badgeList}
        />
    )
}


export function AttendantsListScreenWrapper(props: FeedStackScreenProps<'AttendantsListScreen'>){

    return(
        <AttendantsListScreen
            userProfileList={props.route.params.userProfileList}
        />
    )
}


export function CommentsScreenWrapper(props: FeedStackScreenProps<'CommentsScreen'>){

    const feedItem = props.route.params.feedItem
    const comments = props.route.params.comments


    return(
        <CommentScreen
            navigationController={{}}
            feedItem={feedItem}
            comments={comments}
        />
    )
}

export function UserProfileSearchScreenWrapper(){

    return(
        <UserProfileSearchScreen
        />
    )
}