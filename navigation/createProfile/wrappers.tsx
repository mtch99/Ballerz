import React from "react";
import { ExploreStackNavigator } from "../explore";
import { FeedStackNavigator } from "../feed";
import { GroupChatStackNavigator } from "../groupChat";
import { DefineUsernameView } from "../../views/auth/defineUsername";
import DefineUsernameScreen from "../../screens/createProfile/DefineUsername";
import { IDefineUsernameScreenNavigationController } from "../../screens/createProfile/DefineUsername/interface";
import { CreateProfileStackNavigationProp } from "./types";
import { useNavigation } from "@react-navigation/native";
import { RootStackNavigationProp } from "../types";
import { AuthStackNavigationProp } from "../app/auth/types";
import { AppStackNavigationProp } from "../app/types";
import FindYourFriendsScreen from "../../screens/userProfileList/findYourFriends";
import { IFindYourFriendsScreenNavigationController } from "../../screens/userProfileList/findYourFriends/interface";



export function DefineUsernameScreenWrapper(){

    const navigation = useNavigation<CreateProfileStackNavigationProp<'DefineUsername'>>()
    const navigationController: IDefineUsernameScreenNavigationController = {
        goToFindYourFriendsScreen: function (): void {
            //@ts-ignore
            navigation.navigate('FindYourFriends', {})
            
        }
    }

    return <DefineUsernameScreen
        {...{navigationController}}
    />
}



export function FindYourFriendsScreenWrapper(){
    const navigation = useNavigation<AppStackNavigationProp<'CreateProfile'>>()
    const navigationController: IFindYourFriendsScreenNavigationController = {
        goToMyProfileScreen: function (): void {
            console.warn(`navigation to MyProfileScreen not implemented. 
                Navigating to feed stack instead`);
            navigation.navigate('AppTab', {screen: 'FeedStack', params: {screen: 'FeedScreen', params: {}}})
            
        }
    }

    return <FindYourFriendsScreen
        {...{navigationController}}
    />

}
