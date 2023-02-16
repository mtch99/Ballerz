import { useNavigation } from "@react-navigation/native"
import { IBadgeData } from "../../app/features/feed/slice/interface"
import BadgeListScreen from "../../screens/badgeList"
import { IFeedScreenPropsWithoutNavigation, FeedScreen } from "../../screens/feed"
import CommentScreen from "../../screens/feed/Comments"
import { IFeedScreenNavigationController } from "../../screens/feed/interface"
import AttendantsListScreen from "../../screens/userProfile/attendantsList"
import { IUserProfileData } from "../../use-cases/feed/types"
import { RootTabScreenProps, RootTabNavigationProp } from "../types"

interface IBadgeListScreenProps extends RootTabScreenProps<'FeedScreen'>{}



/**
 * Provides a navigation controller to the FeedScreen
 * @param props FeedScreen props without navigation
 * @returns A FeedScreen
 */
export function FeedScreenWrapper(props: IFeedScreenPropsWithoutNavigation): JSX.Element {

    const navigation = useNavigation<RootTabNavigationProp<'FeedScreen'>>()

    const navigationController: IFeedScreenNavigationController = {
        goToBadgeListScreen: (badgeList: IBadgeData[]) => {
            navigation.navigate('BadgeListScreen', {badgeList})
        },
        goToAttendantsScreen: (userProfileList: IUserProfileData[]) => {
            navigation.navigate('AttendantsListScreen', {userProfileList})
        },
        goToCommentScreen(feedItem) {
            console.error('attempted to go to comments scrren')
            navigation.navigate('CommentsScreen', {feedItem: feedItem, comments: feedItem.comments})
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
 export function BadgeListScreenWrapper(props: RootTabScreenProps<'BadgeListScreen'>): JSX.Element {

    const navigation = useNavigation<RootTabNavigationProp<'BadgeListScreen'>>()


    return (
        <BadgeListScreen
            badgeList={props.route.params.badgeList}
        />
    )
}


export function AttendantsListScreenWrapper(props: RootTabScreenProps<'AttendantsListScreen'>){

    return(
        <AttendantsListScreen
            userProfileList={props.route.params.userProfileList}
        />
    )
}


export function CommentsScreenWrapper(props: RootTabScreenProps<'CommentsScreen'>){

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