import { useNavigation } from "@react-navigation/native"
import { IBadgeData, } from "../../app/features/feed/slice/interface"
import BadgeListScreen from "../../screens/badgeList"
import { IFeedScreenPropsWithoutNavigation, FeedScreen } from "../../screens/feed"
import CommentScreen from "../../screens/feed/Comments"
import { IFeedScreenNavigationController } from "../../screens/feed/interface"
import AttendantsListScreen from "../../screens/userProfileList/attendantsList"
import { FeedStackScreenProps, FeedStackNavigationProp } from "./types"
import { FeedStackMakeFriendsScreen } from "../../screens/userProfileList/makeFriends"
import React from "react"
import { FeedStackNavigationContext, IFeedStackNavigationContext } from "./context"
import { IUserProfileSearchScreenProps } from "../../screens/userProfileList"
import { IUserProfileData } from "../../domain/use-cases/types"
import { IUserProfileListScreenNavigationController } from "../../screens/userProfileList/interface"
import NewFindYourFriendsScreen from "../../screens/userProfileList/findYourFriends"
import FindYourFriendsView from "../../views/auth/findYourFriends"



/**
 * Provides a navigation controller to the FeedScreen
 * @param props FeedScreen props without navigation
 * @returns A FeedScreen
 */
export function FeedScreenWrapper(): JSX.Element {

    const navigation = useNavigation<FeedStackNavigationProp<'FeedScreen'>>()

    const navigationController: IFeedScreenNavigationController = {
        goToBadgeListScreen: (badgeList: IBadgeData[]) => {
            navigation.navigate('BadgeListScreen', {badgeList})
        },
        goToAttendantsScreen: (userProfileList: IUserProfileData[]) => {
            navigation.navigate('AttendantsListScreen', {userProfileList})
        },
        goToCommentScreen(feedItem) {
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
        // <NewFindYourFriendsScreen/>

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

    const navigation = useNavigation<FeedStackNavigationProp<'AttendantsListScreen'>>

    //TODO: Implement
    const navigationController: IUserProfileListScreenNavigationController = {
        goToUserProfile: function (id: string): void {
            throw new Error("Function not implemented.")
        }
    }
    return(
        <AttendantsListScreen
            userProfileList={props.route.params.userProfileList} navigationController={navigationController}        />
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

    const {userProfileSearchButtonState} = React.useContext<IFeedStackNavigationContext>(FeedStackNavigationContext)

    return(
        <FeedStackMakeFriendsScreen
            searchButtonState={userProfileSearchButtonState}
        />
    )
}