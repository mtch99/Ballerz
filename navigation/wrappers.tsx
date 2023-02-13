import { useNavigation } from "@react-navigation/native";
import { FeedScreen, IFeedScreenProps, IFeedScreenPropsWithoutNavigation } from "../screens/feed";
import React, { useEffect } from "react";
import { RootStackNavigationProp, RootStackParamList, RootStackScreenProps } from "./types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { IFeedScreenNavigationController } from "../screens/feed/interface";
import { IBadgeData, IUserProfileData } from "../app/features/feed/slice/interface";
import { ComingSoon_400Regular } from "@expo-google-fonts/dev";
import BadgeListScreen from "../screens/badgeList";
import UserProfileListScreen from "../screens/userProfile/userProfileList";
import AttendantsList from "../screens/userProfile/attendantsList";

interface IBadgeListScreenProps extends RootStackScreenProps<'FeedScreen'>{}



/**
 * Provides a navigation controller to the FeedScreen
 * @param props FeedScreen props without navigation
 * @returns A FeedScreen
 */
export function FeedScreenWrapper(props: IFeedScreenPropsWithoutNavigation): JSX.Element {

    const navigation = useNavigation<RootStackNavigationProp<'FeedScreen'>>()

    const navigationController: IFeedScreenNavigationController = {
        goToBadgeListScreen: (badgeList: IBadgeData[]) => {
            navigation.navigate('BadgeListScreen', {badgeList})
        },
        goToAttendantsScreen: (userProfileList: IUserProfileData[]) => {
            navigation.navigate('AttendantsListScreen', {userProfileList})
        }
    }


    return (
        <FeedScreen
            {...{
                navigationController
            }}
        />
    )

}

/**
 * Provides a navigation controller to the BadgeListScreen
 * @param props BadgeListScreen props without navigation
 * @returns A BadgeListScreen
 */
 export function BadgeListScreenWrapper(props: RootStackScreenProps<'BadgeListScreen'>): JSX.Element {

    const navigation = useNavigation<RootStackNavigationProp<'BadgeListScreen'>>()


    return (
        <BadgeListScreen
            badgeList={props.route.params.badgeList}
        />
    )
}


export function AttendantsListScreenWrapper(props: RootStackScreenProps<'AttendantsListScreen'>){

    return(
        <AttendantsList
            userProfileList={props.route.params.userProfileList}
        />
    )
}