/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from "react-native-vector-icons/Entypo"
import FeatherIcon from "react-native-vector-icons/Feather"
import { NavigationContainer, DarkTheme} from '@react-navigation/native';
import { ColorSchemeName } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';


import { AppTabParamList } from './types';
import { ExploreStackWrapper, FeedStackWrapper, GroupChatStackWrapper, MyProfileStackWrapper, NotificationStackWrapper } from './wrappers';
import { globalStyles } from '../../../views/styles';
import { AppContext } from '../../../controllers/provider';
import { useAppSelector } from '../../../app/hooks';
import { selectNotificationList } from '../../../app/features/notifications/slice';

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

	const {badge} = useAppSelector(selectNotificationList)

	const _initialRouteName: keyof AppTabParamList = 'FeedStack'

	const tabBarActiveTintColor = globalStyles.global.logoColor
	
	  return (
		<BottomTab.Navigator
		  initialRouteName={_initialRouteName}
		>

			<BottomTab.Screen
                name='NotificationStack'
                options={{
					headerShown: false,
					tabBarLabel: 'notifications',
					tabBarIcon: ({focused}) => 
						<Icon
                            name='bell'
							size={24}
							color={focused?(globalStyles.global.logoColor):('grey')}
						/>,
					tabBarBadge: badge,
					headerTitle: 'Notifications',
					tabBarActiveTintColor,
				}}
				component={NotificationStackWrapper}
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
				name='MyProfileStack'
				options={{
					headerShown: false,
					tabBarLabel: 'Profile',
					tabBarIcon: undefined,
					tabBarActiveTintColor,
				}}
				component={MyProfileStackWrapper}
			/>


		</BottomTab.Navigator>
	  )
}