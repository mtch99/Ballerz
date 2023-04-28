import { ISelectTimeSlotScreenPropsWithoutNavigation } from "../../../screens/createGame/selectTimeSlot/index";
import { IPlaceListScreenPropsWithoutNavigation } from "../../../screens/placeList/index";

/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import React from 'react';
import { CompositeNavigationProp, CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import { FeedStackNavigationProp } from "../../feed/types";



 
declare global {
  namespace ReactNavigation {
    interface RootParamList extends CreateGameStackParamList {}
  }
}

export type CreateGameStackParamList = {
	SelectPlace: IPlaceListScreenPropsWithoutNavigation
	SelectTimeSlot: ISelectTimeSlotScreenPropsWithoutNavigation
};


export type CreateGameStackScreenProps<Screen extends keyof CreateGameStackParamList> = NativeStackScreenProps<
	CreateGameStackParamList,
	Screen
>;

export type CreateGameStackNavigationProp<Screen extends keyof CreateGameStackParamList> = NativeStackNavigationProp<CreateGameStackParamList, Screen>

export type SelectTimeSlotScreenNavigationProps = CompositeNavigationProp<
	CreateGameStackNavigationProp<'SelectTimeSlot'>,
	FeedStackNavigationProp<'CreateGameStack'>
>


