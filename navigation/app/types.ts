import { NavigatorScreenParams } from '@react-navigation/native';
import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { CreateProfileStackParamList } from '../createProfile/types';
import { AppTabParamList } from './appTab/types';

/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */


 
declare global {
  namespace ReactNavigation {
    interface AppParamList extends AppStackParamList {}
  }
}

export type AppStackParamList = {
	CreateProfile: NavigatorScreenParams<CreateProfileStackParamList>
  	AppTab:  NavigatorScreenParams<AppTabParamList> | undefined
};


export type AppStackScreenProps<Screen extends keyof AppStackParamList> = StackScreenProps<
	AppStackParamList,
	Screen
>;

export type AppStackNavigationProp<Screen extends keyof AppStackParamList> = NativeStackNavigationProp<AppStackParamList, Screen>