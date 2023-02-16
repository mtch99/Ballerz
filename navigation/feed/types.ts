
/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import React from 'react';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import { IUserProfileListScreenPropsWithoutNavigation } from "../../screens/userProfile/userProfileList";
import { IBadgeListScreenPropsWithoutNavigation } from '../../screens/badgeList';
import { IFeedScreenPropsWithoutNavigation } from '../../screens/feed';
import { ICommentScreenPropsWithoutNavigation } from '../../screens/feed/Comments';


 
declare global {
  namespace ReactNavigation {
    interface RootParamList extends FeedStackParamList {}
  }
}

export type FeedStackParamList = {
	FeedScreen: IFeedScreenPropsWithoutNavigation;
	BadgeListScreen: IBadgeListScreenPropsWithoutNavigation;
	AttendantsListScreen: IUserProfileListScreenPropsWithoutNavigation;
	CommentsScreen: ICommentScreenPropsWithoutNavigation;
};


export type RootStackScreenProps<Screen extends keyof FeedStackParamList> = NativeStackScreenProps<
	FeedStackParamList,
	Screen
>;

export type RootStackNavigationProp<Screen extends keyof FeedStackParamList> = NativeStackNavigationProp<FeedStackParamList, Screen>