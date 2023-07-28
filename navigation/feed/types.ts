import { BaseStackParamList } from "./../base/types";


/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import React from 'react';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import { IBadgeListScreenPropsWithoutNavigation } from '../../screens/badgeList';
import { IFeedScreenPropsWithoutNavigation } from '../../screens/game/feed';
import { ICommentScreenPropsWithoutNavigation } from '../../screens/game/feed/Comments';
import { IUserProfileSearchScreenPropsWithoutNavigation } from "../../screens/user/userProfileList";
import { IFindYourFriendsScreenPropsWithoutNavigation } from "../../screens/user/userProfileList/findYourFriends/interface";
import { ExploreStackParamList } from "../explore/types";


 
declare global {
  namespace ReactNavigation {
    interface RootParamList extends FeedStackParamList {}
  }
}

export type FeedStackParamList = {
	FeedScreen: IFeedScreenPropsWithoutNavigation;
	BadgeListScreen: IBadgeListScreenPropsWithoutNavigation;
	CommentsScreen: ICommentScreenPropsWithoutNavigation;
	UserProfileSearch: IUserProfileSearchScreenPropsWithoutNavigation
	MakeFriends: IFindYourFriendsScreenPropsWithoutNavigation
	BaseStack: NavigatorScreenParams<BaseStackParamList>
	ExploreStack: NavigatorScreenParams<ExploreStackParamList>
};


export type FeedStackScreenProps<Screen extends keyof FeedStackParamList> = NativeStackScreenProps<
	FeedStackParamList,
	Screen
>;

export type FeedStackNavigationProp<Screen extends keyof FeedStackParamList> = NativeStackNavigationProp<FeedStackParamList, Screen>