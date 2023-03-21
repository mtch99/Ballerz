

/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps, BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { NavigatorScreenParams } from "@react-navigation/native";
import { ExploreStackParamList } from "../../explore/types";
import { FeedStackParamList } from "../../feed/types";
import { GroupChatStackParamList } from "../../groupChat/types";


 
declare global {
  namespace ReactNavigation {
    interface RootParamList extends AppTabParamList {}
  }
}

export type AppTabParamList = {
	ExploreStack: NavigatorScreenParams<ExploreStackParamList>
	FeedStack: NavigatorScreenParams<FeedStackParamList>
	GroupChatStack: NavigatorScreenParams<GroupChatStackParamList>
};


export type AppTabScreenProps<Screen extends keyof AppTabParamList> = BottomTabScreenProps<
	AppTabParamList,
	Screen
>;

export type AppTabNavigationProp<Screen extends keyof AppTabParamList> = BottomTabNavigationProp<AppTabParamList, Screen>


