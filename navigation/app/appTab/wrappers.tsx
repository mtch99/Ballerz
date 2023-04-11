import React from "react";
import { ExploreStackNavigator } from "../../explore";
import { FeedStackNavigator } from "../../feed";
import { GroupChatStackNavigator } from "../../groupChat";
import { MyProfileScreen, UserProfileScreen } from "../../../screens/userProfile";
import { IUserProfileScreenNavigationController } from "../../../screens/userProfile/interface";
import { AppContext } from "../../../controllers/provider";
import { IUserProfileDataState } from "../../../app/features/types";
import { AppTabScreenProps } from "./types";



export function FeedStackWrapper(){
    return(
        <FeedStackNavigator/>
    )
}

export function GroupChatStackWrapper(){
    return(
        <GroupChatStackNavigator/>
    )
}

export function MyProfileScreenWrapper(props: AppTabScreenProps<'MyProfileScreen'>){

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
        }
    }

    return(
        <MyProfileScreen
            // navigationController={navigationController}
        />
    )
}


export function ExploreStackWrapper(){
    return(<ExploreStackNavigator/>)
}

