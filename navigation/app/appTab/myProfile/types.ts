import { BaseStackParamList } from "./../../../base/types";


/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps, BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { NavigatorScreenParams } from "@react-navigation/native";
import { IUserProfileScreenPropsWithoutNavigation } from "../../../../screens/userProfile";



 
declare global {
  namespace ReactNavigation {
    interface RootParamList extends MyProfileStackParamList {}
  }
}

export type MyProfileStackParamList = {
	BaseStack: NavigatorScreenParams<BaseStackParamList>
	MyProfileScreen: IUserProfileScreenPropsWithoutNavigation
};


export type MyProfileStackScreenProps<Screen extends keyof MyProfileStackParamList> = BottomTabScreenProps<
	MyProfileStackParamList,
	Screen
>;

export type MyProfileStackNavigationProp<Screen extends keyof MyProfileStackParamList> = BottomTabNavigationProp<
	MyProfileStackParamList, Screen>


