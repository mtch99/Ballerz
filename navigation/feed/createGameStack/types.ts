import { IPlaceListScreenProps, IPlaceListScreenPropsWithoutNavigation } from "./../../../screens/placeList/index";

/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import React from 'react';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';



 
declare global {
  namespace ReactNavigation {
    interface RootParamList extends CreateGameStackParamList {}
  }
}

export type CreateGameStackParamList = {
	SelectPlace: IPlaceListScreenPropsWithoutNavigation
};


export type CreateGameStackScreenProps<Screen extends keyof CreateGameStackParamList> = NativeStackScreenProps<
	CreateGameStackParamList,
	Screen
>;

export type CreateGameStackNavigationProp<Screen extends keyof CreateGameStackParamList> = NativeStackNavigationProp<CreateGameStackParamList, Screen>