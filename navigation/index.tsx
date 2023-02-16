/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp, createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { ColorSchemeName, Pressable, View } from 'react-native';


import { RootTabNavigationProp, RootTabParamList } from './types';
import { FeedScreen } from '../screens/feed';
import { AttendantsListScreenWrapper, BadgeListScreenWrapper, CommentsScreenWrapper, FeedScreenWrapper, FeedStackWrapper } from './wrappers';
import BadgeListScreen from '../screens/badgeList';
// import LinkingConfiguration from './LinkingConfiguration';


export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      // linking={LinkingConfiguration}
      theme={DarkTheme}>
      <RootStackNavigator />
    </NavigationContainer>
  );
}


/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createBottomTabNavigator<RootTabParamList>();

//TODO: Tab bar icon 

export function RootStackNavigator(): JSX.Element {

	const _initialRouteName: keyof RootTabParamList = 'FeedStack'
	
	  return (
		<Stack.Navigator
		  initialRouteName={_initialRouteName}
		>
			<Stack.Screen
				name='FeedStack'
				options={{
					headerShown: true,
					headerTitle: 'Ballerz',
					tabBarLabel: 'Games',
					tabBarIcon: undefined
				}}
				component={FeedStackWrapper}
			/>
		</Stack.Navigator>
	  )
}
  

