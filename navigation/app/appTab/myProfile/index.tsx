/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
 import React from 'react';
 import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

 

 import {MyProfileScreenWrapper, BaseStackWrapper} from './wrappers';
import { MyProfileStackParamList } from './types';
import { globalStyles } from '../../../../views/styles';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
 

 /**
  * A root stack navigator is often used for displaying modals on top of all other content.
  * https://reactnavigation.org/docs/modal
  */
 const BottomTab = createNativeStackNavigator<MyProfileStackParamList>();
 
 
 export function MyProfileStackNavigator(): JSX.Element {
 
     const _initialRouteName: keyof MyProfileStackParamList = 'MyProfileScreen'
 
     const tabBarActiveTintColor = globalStyles.global.logoColor
     
       return (
         <BottomTab.Navigator
           initialRouteName={_initialRouteName}
         >
            <BottomTab.Screen
                 name='MyProfileScreen'
                 options={{
                    headerShown: false,
                 }}
                 component={MyProfileScreenWrapper}
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