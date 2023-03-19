import { NavigatorScreenParams } from '@react-navigation/native';
import { AuthStackParamList } from "./auth/types";
import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";
import { RootTabParamList } from './app/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

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
  	AppStack:  NavigatorScreenParams<RootTabParamList>
};


export type RootStackScreenProps<Screen extends keyof RootStackParamList> = StackScreenProps<
	RootStackParamList,
	Screen
>;

export type RootStackNavigationProp<Screen extends keyof RootStackParamList> = NativeStackNavigationProp<RootStackParamList, Screen>