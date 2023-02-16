import { BottomTabNavigationProp, BottomTabScreenProps } from '@react-navigation/bottom-tabs'

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
	FeedStack: {}
};


export type RootTabScreenProps<Screen extends keyof RootTabParamList> = BottomTabScreenProps<
	RootTabParamList,
	Screen
>;

export type RootTabNavigationProp<Screen extends keyof RootTabParamList> = BottomTabNavigationProp<RootTabParamList, Screen>