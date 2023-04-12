import { NavigatorScreenParams, useNavigation } from "@react-navigation/native"
import { IBadgeData, } from "../../app/features/feed/slice/interface"
import BadgeListScreen from "../../screens/badgeList"
import { FeedScreen } from "../../screens/feed"
import CommentScreen, { ICommentScreenPropsWithoutNavigation } from "../../screens/feed/Comments"
import { IFeedScreenNavigationController } from "../../screens/feed/interface"
import AttendantsListScreen from "../../screens/userProfileList/attendantsList"
import { FeedStackScreenProps, FeedStackNavigationProp, FeedStackParamList } from "./types"
import { IMakeFriendsScreenNavigationController, MakeFriendsScreen } from "../../screens/userProfileList/makeFriends"
import React from "react"
import { FeedStackNavigationContext, IFeedStackNavigationContext } from "./context"

import { IUserProfileData } from "../../domain/use-cases/types"
import { IUserProfileListScreenNavigationController } from "../../screens/userProfileList/interface"
import FindYourFriendsScreen from "../../screens/userProfileList/findYourFriends"
import { IFindYourFriendsScreenNavigationController } from "../../screens/userProfileList/findYourFriends/interface"
import NotificationScreen from "../../screens/Notification"
import { AppTabParamList, AppTabScreenProps } from "../app/appTab/types"
import { AppContext } from "../../controllers/provider"




/**
 * Provides a navigation controller to the FeedScreen
 * @param props FeedScreen props without navigation
 * @returns A FeedScreen
 */
export function FeedScreenWrapper(props: AppTabScreenProps<'FeedStack'>): JSX.Element {

    const {navigation, route} = props

    const {feedController, authState} = React.useContext(AppContext)
    React.useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            feedController.getFeed(authState.user?.email)
        });
        return unsubscribe;
    }, [navigation])

    const navigationController: IFeedScreenNavigationController = {
        goToBadgeListScreen: (badgeList: IBadgeData[]) => {
            const params: AppTabParamList['FeedStack'] = {
                screen: "BadgeListScreen",
                params: {
                    badgeList,
                },
            }
            navigation.navigate('FeedStack', params)
        },
        goToAttendantsScreen: (attendantsList: IUserProfileData[]) => {
            const params: AppTabParamList['FeedStack'] = {
                screen: "AttendantsListScreen",
                params: {
                    attendantsList,
                },
            }
            navigation.navigate('FeedStack', params)
        },
        goToCommentScreen(feedItem) {
            const params: AppTabParamList['FeedStack'] = {
                
                screen: "CommentsScreen",
                params: {
                    feedItem,
                    comments: feedItem.comments
                }
            }
            navigation.navigate('FeedStack', params)        
        },
        goToMakeFriendsScreen() {
            const params: AppTabParamList['FeedStack'] = {
                screen: "MakeFriends",
                params: {}
            }
            navigation.navigate('FeedStack', params) 
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

    const {navigation, route} = props

    const attendantsList = props.route.params.attendantsList

    const navigationController: IUserProfileListScreenNavigationController = {
        goToUserProfile: function (userProfileData: IUserProfileData): void {
            throw new Error("Function not implemented.")
        }
    }
    return(
        <AttendantsListScreen
             navigationController={navigationController}
             friendsList={attendantsList}
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