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



export function DefineUsernameScreenWrapper(){

    const navigation = useNavigation<AppStackNavigationProp<'CreateProfile'>>()
    const navigationController: IDefineUsernameScreenNavigationController = {
        goToMyProfileScreen: function (): void {
            console.warn(`navigation to MyProfileScreen not implemented. 
                Navigating to feed stack instead`);
            navigation.navigate('AppTab', {screen: 'FeedStack', params: {screen: 'FeedScreen', params: {}}})
            
        }
    }

    return <DefineUsernameScreen
        {...{navigationController}}
    />
}

