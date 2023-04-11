import { INotificationScreenPropsWithoutNavigation } from "./../../screens/Notification/index";
import { IAttendantsListScreenPropsWithoutNavigation } from "./../../screens/userProfileList/attendantsList/index";
import { IFindYourFriendsScreenPropsWithoutNavigation } from "./../../screens/userProfileList/findYourFriends/interface";
import { IDisplayUserProfileListScreenPropsWithoutNavigation, IUserProfileSearchScreenProps, IUserProfileSearchScreenPropsWithoutNavigation } from "../../screens/userProfileList/index";

/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import React from 'react';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
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
	AttendantsListScreen: IAttendantsListScreenPropsWithoutNavigation;
	CommentsScreen: ICommentScreenPropsWithoutNavigation;
	UserProfileSearch: IUserProfileSearchScreenPropsWithoutNavigation
	MakeFriends: IFindYourFriendsScreenPropsWithoutNavigation
	CreateGameStack: {}
	NotificationScreen: INotificationScreenPropsWithoutNavigation
};


export type FeedStackScreenProps<Screen extends keyof FeedStackParamList> = NativeStackScreenProps<
	FeedStackParamList,
	Screen
>;

export type FeedStackNavigationProp<Screen extends keyof FeedStackParamList> = NativeStackNavigationProp<FeedStackParamList, Screen>