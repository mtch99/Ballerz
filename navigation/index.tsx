/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DarkTheme} from '@react-navigation/native';
import { ColorSchemeName } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';


import { RootTabParamList } from './types';
import { ExploreStackWrapper, FeedStackWrapper, GroupChatStackWrapper } from './wrappers';

// import LinkingConfiguration from './LinkingConfiguration';


export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
	<SafeAreaProvider>
    	<NavigationContainer
    	  // linking={LinkingConfiguration}
    	  theme={DarkTheme}>
    	  <RootStackNavigator />
    	</NavigationContainer>
	</SafeAreaProvider>
  );
}


/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

//TODO: Tab bar icon 

export function RootStackNavigator(): JSX.Element {

	const _initialRouteName: keyof RootTabParamList = 'FeedStack'
	
	  return (
		<BottomTab.Navigator
		  initialRouteName={_initialRouteName}
		>

			<BottomTab.Screen
				name='ExploreStack'
				options={{
					headerShown: false,
					// tabBarLabel: 'Explore',
					tabBarIcon: undefined,
					headerTitle: 'Explore'
				}}
				component={ExploreStackWrapper}
			/>

			<BottomTab.Screen
				name='FeedStack'
				options={{
					headerShown: false,
					tabBarLabel: 'Games',
					tabBarIcon: undefined
				}}
				component={FeedStackWrapper}
			/>

			<BottomTab.Screen
				name='GroupChatStack'
				options={{
					headerShown: false,
					tabBarLabel: 'Groupes',
					tabBarIcon: undefined,
				}}
				component={GroupChatStackWrapper}
			/>
		</BottomTab.Navigator>
	  )
}