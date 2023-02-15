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


import { RootStackNavigationProp, RootStackParamList } from './types';
import { FeedScreen } from '../screens/feed';
import { AttendantsListScreenWrapper, BadgeListScreenWrapper, CommentsScreenWrapper, FeedScreenWrapper } from './wrappers';
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
const Stack = createNativeStackNavigator<RootStackParamList>();

 
export function RootStackNavigator(): JSX.Element {

	const _initialRouteName: keyof RootStackParamList = 'FeedScreen'
	
	  return (
		<Stack.Navigator
		  initialRouteName={_initialRouteName}
		>
  
			<Stack.Screen
				name='FeedScreen'
				options={{
				  headerShown: false
				}}
				component={FeedScreenWrapper}
			/>	
			<Stack.Screen
				name='BadgeListScreen'
				options={{
					headerShown: true,
					headerTitle: 'Amis présents',
					headerBackButtonMenuEnabled: true,
				}}
				component={BadgeListScreenWrapper}
				initialParams={{badgeList: []}}
			/>

			<Stack.Screen
				name='CommentsScreen'
				options={{
					headerShown: true,
					headerTitle: 'Commentaires',
					headerBackButtonMenuEnabled: true
				}}
				component={CommentsScreenWrapper}
			/>

  
		</Stack.Navigator>
	  )
}
  

