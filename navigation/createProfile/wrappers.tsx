import React from "react";
import DefineUsernameScreen from "../../screens/user/createProfile/DefineUsername";
import { IDefineUsernameScreenNavigationController } from "../../screens/user/createProfile/DefineUsername/interface";
import { CreateProfileStackNavigationProp } from "./types";
import { useNavigation } from "@react-navigation/native";
import { AppStackNavigationProp } from "../app/types";
import FindYourFriendsScreen from "../../screens/user/userProfileList/findYourFriends";
import { IFindYourFriendsScreenNavigationController } from "../../screens/user/userProfileList/findYourFriends/interface";
import ChooseYourCityScreen from "../../screens/auth/chooseYourCity";



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
        onFriendshipRequestsSent: function (): void {
            console.warn(`navigation to MyProfileScreen not implemented. 
                Navigating to feed stack instead`);
            navigation.navigate('AppTab', {screen: 'FeedStack', params: {screen: 'FeedScreen', params: {}}})
            
        }
    }

    return <FindYourFriendsScreen
        {...{navigationController}}
    />

}



export function ChooseYourCityScreenWrapper(){
    const navigation = useNavigation<CreateProfileStackNavigationProp<'ChooseYourCity'>>()

    return <ChooseYourCityScreen/>
}
