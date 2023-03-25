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
import { AppContext } from '../controllers/provider';

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

	const {authState, prepareData} = React.useContext(AppContext)
	const _initialRouteName: keyof RootStackParamList = 'AuthStack'
	// const [isSignedIn, setIsSignedIn] = React.useState(false)
	let isSignedIn = false
	const [initialRouteName, setInitialRouteName] = React.useState<keyof RootStackParamList>('AuthStack')

	React.useEffect(() => {
		prepareData()
		// if(authState.user){
		// 	console.log(JSON.stringify(authState.user))
		// 	setInitialRouteName('AppStack')
		// 	setIsSignedIn(true)
		// }
	}, [])

	if(authState.isDataPrepared && authState.user){
		isSignedIn = true
	}
	
	

	return (
		!authState.isDataPrepared?(
			<></>
		):(
			<RootStack.Navigator
				initialRouteName={isSignedIn?'AppStack': 'AuthStack'}
			>
						<RootStack.Screen
							name='AppStack'
							options={{
								headerShown: false,
							}}
							component={AppStackWrapper}
						/>
						<RootStack.Screen
							name='AuthStack'
							options={{
								headerShown: false,
							}}
							component={AuthStackWrapper}
						/>
			</RootStack.Navigator>
		)
	)
	

		// 	<RootStack.Navigator
		// 		initialRouteName={initialRouteName}
		// 	>
		// 		{isSignedIn?(
		// 			<>
		// 				<RootStack.Screen
		// 					name='AppStack'
		// 					options={{
		// 						headerShown: false,
		// 					}}
		// 					component={AppStackWrapper}
		// 				/>
		// 				<RootStack.Screen
		// 					name='AuthStack'
		// 					options={{
		// 						headerShown: false,
		// 					}}
		// 					component={AuthStackWrapper}
		// 				/>
		// 			</>
		// 		):(
		// 			<>
		// 				<RootStack.Screen
		// 				name='AuthStack'
		// 				options={{
		// 					headerShown: false,
		// 				}}
		// 				component={AuthStackWrapper}
		// 				/>
		// 				<RootStack.Screen
		// 					name='AppStack'
		// 					options={{
		// 						headerShown: false,
		// 					}}
		// 					component={AppStackWrapper}
		// 				/>
						
		// 			</>
		// 		)}
		// 	</RootStack.Navigator>
		// )
}