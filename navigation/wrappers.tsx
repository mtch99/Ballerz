import { useNavigation } from "@react-navigation/native";
import { FeedScreen, IFeedScreenPropsWithoutNavigation } from "../screens/feed";
import React from "react";
import { RootTabNavigationProp, RootTabScreenProps } from "./types";
import { IFeedScreenNavigationController } from "../screens/feed/interface";
import { IBadgeData, IUserProfileData } from "../app/features/feed/slice/interface";
import BadgeListScreen from "../screens/badgeList";
import AttendantsListScreen from "../screens/userProfile/attendantsList";
import CommentScreen from "../screens/feed/Comments";
import {FeedStackNavigator} from "./feed"
interface IBadgeListScreenProps extends RootTabScreenProps<'FeedScreen'>{}



/**
 * Provides a navigation controller to the FeedScreen
 * @param props FeedScreen props without navigation
 * @returns A FeedScreen
 */

export function FeedStackWrapper(){
    return(
        <FeedStackNavigator/>
    )
}