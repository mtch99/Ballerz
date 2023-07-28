import React from "react";
import { IUserProfileDataState } from "../../../../app/features/types";
import { MyProfileScreen } from "../../../../screens/user/userProfile";
import { IUserProfileScreenNavigationController } from "../../../../screens/user/userProfile/interface";
import { BaseStackNavigator } from "../../../base";
import { MyProfileStackScreenProps } from "./types";
import { AppContext } from "../../../../controllers/provider";
import { NavigatorScreenParams } from "@react-navigation/native";
import { BaseStackParamList } from "../../../base/types";



export function BaseStackWrapper(props: MyProfileStackScreenProps<'BaseStack'>){

    return (
        <BaseStackNavigator/>
    );
}


export function MyProfileScreenWrapper(props: MyProfileStackScreenProps<'MyProfileScreen'>){
    const {authState, userProfileController} = React.useContext(AppContext)
    const {navigation, route} = props


    React.useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            if(authState.user){
                console.log("User is logged in")
                userProfileController.getMyProfile(authState.user.email)
            }
            else{
                throw new Error('No profile found')
            }
        });
        return unsubscribe;
    }, [navigation])

    const navigationController: IUserProfileScreenNavigationController = {
        goToUserProfile: function (userProfileData: IUserProfileDataState): void {
            const params: NavigatorScreenParams<BaseStackParamList> = {
                screen: 'UserProfileScreen',
                params: {
                    userProfileData: userProfileData
                }
            };
            navigation.navigate('BaseStack', params);
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
            };
            navigation.navigate('BaseStack', params);
        },
        goBack: function (): void {
            navigation.goBack()
        }
    }

    return(
        <MyProfileScreen
            navigationController={navigationController}
        />
    )
}

