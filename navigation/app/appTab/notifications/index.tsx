/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
 import React from 'react';
 import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

 

 import {NotificationScreenWrapper, BaseStackWrapper} from './wrappers';
import { NotificationStackParamList } from './types';
import { globalStyles } from '../../../../views/styles';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
 

 /**
  * A root stack navigator is often used for displaying modals on top of all other content.
  * https://reactnavigation.org/docs/modal
  */
 const BottomTab = createNativeStackNavigator<NotificationStackParamList>();
 
 
 export function NotificationStackNavigator(): JSX.Element {
 
     const _initialRouteName: keyof NotificationStackParamList = 'NotificationScreen'
 
     const tabBarActiveTintColor = globalStyles.global.logoColor
     
       return (
         <BottomTab.Navigator
           initialRouteName={_initialRouteName}
         >
            <BottomTab.Screen
                 name='NotificationScreen'
                 options={{
                    headerShown: false,
                 }}
                 component={NotificationScreenWrapper}
             />
 
            <BottomTab.Screen
                name='BaseStack'
                options={{
                    headerShown: false,
                }}
                component={BaseStackWrapper}
            />

         </BottomTab.Navigator>
       )
 }