import { NavigatorScreenParams, useNavigation } from "@react-navigation/native"
import { IBadgeData, } from "../../app/features/feed/slice/interface"
import BadgeListScreen from "../../screens/badgeList"
import { FeedScreen } from "../../screens/game/feed"
import CommentScreen, { ICommentScreenPropsWithoutNavigation } from "../../screens/game/feed/Comments"
import { IFeedScreenNavigationController } from "../../screens/game/feed/interface"
import AttendantsListScreen from "../../screens/user/userProfileList/attendantsList"
import { FeedStackScreenProps, FeedStackNavigationProp, FeedStackParamList } from "./types"
import { IMakeFriendsScreenNavigationController, MakeFriendsScreen } from "../../screens/user/userProfileList/makeFriends"
import React from "react"
import { FeedStackNavigationContext, IFeedStackNavigationContext } from "./context"

import { IUserProfileData } from "../../domain/use-cases/types"
import { IUserProfileListScreenNavigationController } from "../../screens/user/userProfileList/interface"
import FindYourFriendsScreen from "../../screens/user/userProfileList/findYourFriends"
import { IFindYourFriendsScreenNavigationController } from "../../screens/user/userProfileList/findYourFriends/interface"
import NotificationScreen from "../../screens/notification"
import { AppContext } from "../../controllers/provider"
import { BaseStackParamList } from "../base/types"




/**
 * Provides a navigation controller to the FeedScreen
 * @param props FeedScreen props without navigation
 * @returns A FeedScreen
 */
export function FeedScreenWrapper(props: FeedStackScreenProps<'FeedScreen'>): JSX.Element {

    const {navigation, route} = props

    const {feedController, authState} = React.useContext(AppContext)
    React.useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            // console.log(`My UserProfile ID: ${authState.profile?.id}`)
            feedController.getFeed(authState.profile?.id)
        });
        return unsubscribe;
    }, [navigation])

    const navigationController: IFeedScreenNavigationController = {
        goToBadgeListScreen: (badgeList: IBadgeData[]) => {
            const params: FeedStackParamList['FeedScreen'] = {
                screen: "BadgeListScreen",
                params: {
                    badgeList,
                },
            }
            navigation.navigate('FeedScreen', params)
        },
        goToAttendantsScreen: (attendantsList: IUserProfileData[]) => {
            const screen: keyof BaseStackParamList = 'AttendantsListScreen'
            const params: NavigatorScreenParams<BaseStackParamList> = {
                screen,
                params: {
                    friendsList: attendantsList
                },
            }
            navigation.navigate('BaseStack', params)
        },
        goToCommentScreen(feedItem) {
            const params: FeedStackParamList['FeedScreen'] = {
                
                screen: "CommentsScreen",
                params: {
                    feedItem,
                    comments: feedItem.comments
                }
            }
            navigation.navigate('FeedScreen', params)        
        },
        goToMakeFriendsScreen() {
            const params: FeedStackParamList['FeedScreen'] = {
                screen: "MakeFriends",
                params: {}
            }
            navigation.navigate('FeedScreen', params) 
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


