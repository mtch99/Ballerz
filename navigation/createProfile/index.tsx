/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import React from 'react';
import { CreateProfileStackParamList } from './types';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ChooseYourCityScreenWrapper, DefineUsernameScreenWrapper, FindYourFriendsScreenWrapper } from './wrappers';
import { Keyboard, TouchableNativeFeedback } from 'react-native';
import BallerzHeaderBackButton from '../../components/header/buttons/headerBackButton';
 
// import LinkingConfiguration from './LinkingConfiguration';


// export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
//   return (
// 	<SafeAreaProvider>
//     	<NavigationContainer
//     	  // linking={LinkingConfiguration}
//     	  theme={DarkTheme}>
//     	  <CreateProfileStackNavigator />
//     	</NavigationContainer>
// 	</SafeAreaProvider>
//   );
// }


/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<CreateProfileStackParamList>();
 


export function CreateProfileStack(): JSX.Element {
	
	const _initialRouteName: keyof CreateProfileStackParamList = 'DefineUsername';
	return (
		<TouchableNativeFeedback
		onPress={Keyboard.dismiss}
		>
			<Stack.Navigator
				initialRouteName={_initialRouteName}
				>

				{/*TODO: Uncomment this on Choose Your City screen completion*/}
				{/* <Stack.Screen
					name='DefineUsername'
					options={{
						headerShown: false,
					}}
					component={DefineUsernameScreenWrapper}
				/> */}

				<Stack.Screen
					name='ChooseYourCity'
					options={{
						headerShown: false
						// headerLeft: BallerzHeaderBackButton,		
					}}
					component={ChooseYourCityScreenWrapper}
				/>
				<Stack.Screen
					name='FindYourFriends'
					options={{
						headerShown: false,
					}}
					component={FindYourFriendsScreenWrapper}
				/>
				
			</Stack.Navigator>
		</TouchableNativeFeedback>
	)
}	  