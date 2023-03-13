import { FeedStackParamList } from "./feed/types";
import { BottomTabNavigationProp, BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import { NavigatorScreenParams } from '@react-navigation/native';
import { GroupChatStackParamList } from "./groupChat/types";
import { ExploreStackParamList } from "./explore/types";

/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */


 
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootTabParamList {}
  }
}

export type RootTabParamList = {
	ExploreStack: NavigatorScreenParams<ExploreStackParamList>
	FeedStack: NavigatorScreenParams<FeedStackParamList>
	GroupChatStack: NavigatorScreenParams<GroupChatStackParamList>
};


export type RootTabScreenProps<Screen extends keyof RootTabParamList> = BottomTabScreenProps<
	RootTabParamList,
	Screen
>;

export type RootTabNavigationProp<Screen extends keyof RootTabParamList> = BottomTabNavigationProp<RootTabParamList, Screen>
