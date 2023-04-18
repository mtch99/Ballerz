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


import { AppTabParamList } from './types';
import { ExploreStackWrapper, FeedStackWrapper, GroupChatStackWrapper, MyProfileStackWrapper, NotificationStackWrapper } from './wrappers';
import { globalStyles } from '../../../views/styles';

// import LinkingConfiguration from './LinkingConfiguration';


// export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
//   return (
// 	<SafeAreaProvider>
//     	<NavigationContainer
//     	  // linking={LinkingConfiguration}
//     	  theme={DarkTheme}>
//     	  <AppStackNavigator />
//     	</NavigationContainer>
// 	</SafeAreaProvider>
//   );
// }


/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const BottomTab = createBottomTabNavigator<AppTabParamList>();

//TODO: Tab bar icon 




export function AppTab(): JSX.Element {

	const _initialRouteName: keyof AppTabParamList = 'FeedStack'

	const tabBarActiveTintColor = globalStyles.global.logoColor
	
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
					headerTitle: 'Explore',
					tabBarActiveTintColor,
				}}
				component={ExploreStackWrapper}
			/>

			<BottomTab.Screen
				name='FeedStack'
				options={{
					headerShown: false,
					tabBarLabel: 'Games',
					tabBarIcon: undefined,
					tabBarActiveTintColor,
				}}
				component={FeedStackWrapper}
			/>

			<BottomTab.Screen
				name='GroupChatStack'
				options={{
					headerShown: false,
					tabBarLabel: 'Groupes',
					tabBarIcon: undefined,
					tabBarActiveTintColor,
				}}
				component={GroupChatStackWrapper}
			/>

			<BottomTab.Screen
				name='MyProfileStack'
				options={{
					headerShown: false,
					tabBarLabel: 'Profile',
					tabBarIcon: undefined,
					tabBarActiveTintColor,
				}}
				component={MyProfileStackWrapper}
			/>

			<BottomTab.Screen
                name='NotificationStack'
                options={{
					headerShown: false,
                    tabBarLabel: 'Notification',
                    tabBarIcon: undefined,
                    tabBarActiveTintColor,
				}}
				component={NotificationStackWrapper}
			/>
		</BottomTab.Navigator>
	  )
}