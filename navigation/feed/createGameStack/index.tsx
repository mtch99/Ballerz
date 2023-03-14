import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CreateGameStackNavigationProp, CreateGameStackParamList } from "./types";
import {SelectPlaceScreenWrapper } from "./wrappers";
import { HeaderBackButton } from '@react-navigation/elements';
;
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { FeedStackNavigationProp } from "../types";



const Stack = createNativeStackNavigator<CreateGameStackParamList>();


export function CreateGameStackNavigator(): JSX.Element {

	const _initialRouteName: keyof CreateGameStackParamList = 'SelectPlace'
	const [userProfileSearchButtonState, setUserProfileSearchButtonState] = React.useState(false)

	

	return (
		<Stack.Navigator
		initialRouteName={_initialRouteName}
		>

			<Stack.Screen
				name='SelectPlace'
				options={{
					headerShown: true,
					headerTitle: 'Choisissez un terrain',
					headerLeft: () => {
						const navigation = useNavigation() as CreateGameStackNavigationProp<'SelectPlace'>
						return (
							<HeaderBackButton
								onPress={() => {navigation.goBack()}}
							/>
						)
					}
				}}
				component={SelectPlaceScreenWrapper}
			/>	
		</Stack.Navigator>
	)
}