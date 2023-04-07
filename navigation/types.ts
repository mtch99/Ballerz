import { NavigatorScreenParams } from '@react-navigation/native';
import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";
import { AppTabParamList } from './app/appTab/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthStackParamList } from './app/auth/types';
import { AppStackParamList } from './app/types';

/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */


 
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
	AuthStack: NavigatorScreenParams<AuthStackParamList>
  	AppStack:  NavigatorScreenParams<AppStackParamList> | undefined
};


export type RootStackScreenProps<Screen extends keyof RootStackParamList> = StackScreenProps<
	RootStackParamList,
	Screen
>;

export type RootStackNavigationProp<Screen extends keyof RootStackParamList> = NativeStackNavigationProp<RootStackParamList, Screen>