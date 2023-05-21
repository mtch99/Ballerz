import { BaseStackParamList } from "./../../../base/types";


/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps, BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { NavigatorScreenParams } from "@react-navigation/native";
import { INotificationScreenPropsWithoutNavigation } from "../../../../screens/Notification";



 
declare global {
  namespace ReactNavigation {
    interface RootParamList extends NotificationStackParamList {}
  }
}

export type NotificationStackParamList = {
	BaseStack: NavigatorScreenParams<BaseStackParamList>
	NotificationScreen: INotificationScreenPropsWithoutNavigation
};


export type NotificationStackScreenProps<Screen extends keyof NotificationStackParamList> = BottomTabScreenProps<
	NotificationStackParamList,
	Screen
>;

export type NotificationStackNavigationProp<Screen extends keyof NotificationStackParamList> = BottomTabNavigationProp<
	NotificationStackParamList, Screen>


