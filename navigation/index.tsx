/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import React from 'react';
import { NavigationContainer, DarkTheme} from '@react-navigation/native';
import { ColorSchemeName } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';


import { RootStackParamList } from './types';
import { AppStackWrapper, AuthStackWrapper} from './wrappers';
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

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
const RootStack = createNativeStackNavigator<RootStackParamList>();

//TODO: Stack bar icon 

export function RootStackNavigator(): JSX.Element {

	const _initialRouteName: keyof RootStackParamList = 'AuthStack'
	
	  return (
		<RootStack.Navigator
		  initialRouteName={_initialRouteName}
		>

			<RootStack.Screen
				name='AuthStack'
				options={{
					headerShown: false,
				}}
				component={AuthStackWrapper}
			/>
			<RootStack.Screen
				name='AppStack'
				options={{
					headerShown: false,
				}}
				component={AppStackWrapper}
			/>
		</RootStack.Navigator>
	  )
}