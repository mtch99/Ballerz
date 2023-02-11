import { IBadgeListScreenPropsWithoutNavigation } from "./../screens/badgeList/index";
import { IFeedScreenPropsWithoutNavigation } from "./../screens/feed/index";
import { IBadgeData } from "./../app/features/feed/slice/interface";
/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import React from 'react';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import { IUserProfileListScreenPropsWithoutNavigation } from "../screens/userProfile/userProfileList";


 
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
	FeedScreen: IFeedScreenPropsWithoutNavigation;
	BadgeListScreen: IBadgeListScreenPropsWithoutNavigation;
	AttendantsListScreen: IUserProfileListScreenPropsWithoutNavigation;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
	RootStackParamList,
	Screen
>;

export type RootStackNavigationProp<Screen extends keyof RootStackParamList> = NativeStackNavigationProp<RootStackParamList, Screen>