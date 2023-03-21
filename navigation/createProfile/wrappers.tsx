import React from "react";
import { ExploreStackNavigator } from "../explore";
import { FeedStackNavigator } from "../feed";
import { GroupChatStackNavigator } from "../groupChat";
import { DefineUsernameView } from "../../views/auth/defineUsername";
import DefineUsernameScreen from "../../screens/createProfile/DefineUsername";
import { IDefineUsernameScreenNavigationController } from "../../screens/createProfile/DefineUsername/interface";



export function DefineUsernameScreenWrapper(){
    const navigationController: IDefineUsernameScreenNavigationController = {
        goToUserProfileScreen: function (): void {
            throw new Error("Function not implemented.");
        }
    }

    return <DefineUsernameScreen
        {...{navigationController}}
    />
}

