import { useNavigation } from "@react-navigation/native";
import { FeedScreen } from "../screens/feed";
import React from "react";
import { RootStackNavigationProp, RootStackParamList, RootStackScreenProps } from "./types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { IFeedScreenNavigationController } from "../screens/feed/interface";
import { IBadgeData } from "../app/features/feed/slice/interface";
import { ComingSoon_400Regular } from "@expo-google-fonts/dev";

interface IFeedScreenProps extends RootStackScreenProps<'FeedScreen'>{}



/**
 * Provides a navigation controller to the FeedScreen
 * @param props FeedScreen props without navigation
 * @returns A FeedScreen
 */
export function FeedScreenWrapper(props: IFeedScreenProps): JSX.Element {

    const navigation = useNavigation<RootStackNavigationProp<'FeedScreen'>>()

    const navigationController: IFeedScreenNavigationController = {
        goToBadgeListScreen: (badgeList: IBadgeData[]) => {
            console.warn("Attempted to go to the badge list screen")
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