import React from "react";
import { IUserProfileDataState } from "../../../../app/features/types";
import { IUserProfileScreenNavigationController } from "../../../../screens/userProfile/interface";
import { BaseStackNavigator } from "../../../base";
import { NotificationStackScreenProps } from "./types";
import { AppContext } from "../../../../controllers/provider";
import { NavigatorScreenParams } from "@react-navigation/native";
import { BaseStackParamList } from "../../../base/types";
import NotificationScreen, { INotificationScreenNavigationController } from "../../../../screens/Notification";



export function BaseStackWrapper(props: NotificationStackScreenProps<'BaseStack'>){

    return (
        <BaseStackNavigator/>
    );
}


export function NotificationScreenWrapper(props: NotificationStackScreenProps<'NotificationScreen'>){
    const {authState, notificationController} = React.useContext(AppContext)
    const {navigation, route} = props


    React.useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            if(authState.user){
                notificationController.getMyNotifications(authState.profile?.id || 'invalidID')
            }
            else{
                throw new Error('No profile found')
            }
        });
        return unsubscribe;
    }, [navigation])

    const navigationController: INotificationScreenNavigationController = {
        goToUserProfile: function (userProfileData: IUserProfileDataState): void {
            const params: NavigatorScreenParams<BaseStackParamList> = {
                screen: 'UserProfileScreen',
                params: {
                    userProfileData: userProfileData
                }
            }
            navigation.navigate('BaseStack', params)
        },
        goToPlaceProfile: function (id: string): void {
            console.log("Function not implemented.");
        },
        goToCommentsScreen: function (gameId: string): void {
            console.log("Function not implemented.");
        },
        goToAttendantsListScreen: function (gameId: string): void {
            console.log("Function not implemented.");
        },
        goToFriendsListScreen: function (friendsList: IUserProfileDataState[]): void {
            const params: NavigatorScreenParams<BaseStackParamList> = {
                screen: 'FriendsListScreen',
                params: {
                    friendsList: friendsList
                }
            }
            navigation.navigate('BaseStack', params)
        }
    }

    return(
        <NotificationScreen
            navigationController={navigationController}
        />
    )
}

