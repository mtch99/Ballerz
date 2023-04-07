import { useNavigation } from "@react-navigation/native"
import { IBadgeData, } from "../../app/features/feed/slice/interface"
import BadgeListScreen from "../../screens/badgeList"
import { FeedScreen } from "../../screens/feed"
import CommentScreen from "../../screens/feed/Comments"
import { IFeedScreenNavigationController } from "../../screens/feed/interface"
import AttendantsListScreen from "../../screens/userProfileList/attendantsList"
import { FeedStackScreenProps, FeedStackNavigationProp } from "./types"
import { IMakeFriendsScreenNavigationController, MakeFriendsScreen } from "../../screens/userProfileList/makeFriends"
import React from "react"
import { FeedStackNavigationContext, IFeedStackNavigationContext } from "./context"

import { IUserProfileData } from "../../domain/use-cases/types"
import { IUserProfileListScreenNavigationController } from "../../screens/userProfileList/interface"
import FindYourFriendsScreen from "../../screens/userProfileList/findYourFriends"
import { IFindYourFriendsScreenNavigationController } from "../../screens/userProfileList/findYourFriends/interface"
import NotificationScreen from "../../screens/Notification"




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
        goToAttendantsScreen: (attendantsList: IUserProfileData[]) => {
            navigation.navigate('AttendantsListScreen', {attendantsList})
        },
        goToCommentScreen(feedItem) {
            navigation.navigate('CommentsScreen', {feedItem: feedItem, comments: feedItem.comments})
        },
        goToMakeFriendsScreen() {
            navigation.navigate('MakeFriends', {})
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

    const attendantsList = props.route.params.attendantsList

    const navigationController: IUserProfileListScreenNavigationController = {
        goToUserProfile: function (id: string): void {
            throw new Error("Function not implemented.")
        }
    }
    return(
        <AttendantsListScreen
            attendantsList={attendantsList} navigationController={navigationController}/>
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
    const navigation = useNavigation<FeedStackNavigationProp<'UserProfileSearch'>>()
    const navigationController: IFindYourFriendsScreenNavigationController = {
        onFriendshipRequestsSent(): void {
            navigation.goBack()
        }
    }
    return(
        <FindYourFriendsScreen
            navigationController={navigationController}
        />
    )
}


export function MakeFriendsScreenWrapper(){

    const {userProfileSearchButtonState} = React.useContext<IFeedStackNavigationContext>(FeedStackNavigationContext)
    const navigation = useNavigation<FeedStackNavigationProp<'UserProfileSearch'>>()
    const navigationController: IMakeFriendsScreenNavigationController = {
        onFriendshipRequestsSent(): void {
            navigation.goBack()
        },
        goBack(): void {
            navigation.goBack()
        }
    }
    return(
        <MakeFriendsScreen
            navigationController={navigationController}
        />
    )
}


export function NotificationScreenWrapper(){

    return(
        <NotificationScreen
            
        />
    )
}