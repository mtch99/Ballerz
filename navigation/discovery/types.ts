import { NavigatorScreenParams } from '@react-navigation/native';
import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */


 
declare global {
  namespace ReactNavigation {
    interface OnboardingParamList extends OnboardingStackParamList {}
  }
}

export type OnboardingStackParamList = {
	  Welcome: {}
    DiscoverCityBallerz: {}
    GatherWithYourFriends: {}
};


export type OnboardingStackScreenProps<Screen extends keyof OnboardingStackParamList> = StackScreenProps<
	OnboardingStackParamList,
	Screen
>;

export type OnboardingStackNavigationProp<Screen extends keyof OnboardingStackParamList> = NativeStackNavigationProp<OnboardingStackParamList, Screen>