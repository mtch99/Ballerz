import React from "react";
import { ExploreStackNavigator } from "../../explore";
import { FeedStackNavigator } from "../../feed";
import { GroupChatStackNavigator } from "../../groupChat";
import { IUserProfileScreenNavigationController } from "../../../screens/userProfile/interface";
import { AppContext } from "../../../controllers/provider";
import { IUserProfileDataState } from "../../../app/features/types";
import { AppTabScreenProps } from "./types";
import { MyProfileStackNavigator } from "./myProfile";
import { NotificationStackNavigator } from "./notifications";



export function FeedStackWrapper(props: AppTabScreenProps<'FeedStack'>) {

    return(
        <FeedStackNavigator/>
    )
}

export function GroupChatStackWrapper(){
    return(
        <GroupChatStackNavigator/>
    )
}

export function MyProfileStackWrapper(props: AppTabScreenProps<'MyProfileStack'>){

    const {authState, userProfileController} = React.useContext(AppContext)
    const {navigation, route} = props


    React.useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            if(authState.user){
                console.log("MyProfileStack focus")
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
            console.log("Function not implemented.");
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
        goToFriendsListScreen: function (userProfileList: IUserProfileDataState[]): void {
            throw new Error("Function not implemented.");
        },
        goBack: function (): void {
            throw new Error("Function not implemented.");
        }
    }

    return(
        <MyProfileStackNavigator/>
    )
}

export function NotificationStackWrapper(props: AppTabScreenProps<'NotificationStack'>){
    return <NotificationStackNavigator/>
}

