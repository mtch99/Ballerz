import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CreateGameStackNavigationProp, CreateGameStackParamList } from "./types";
import {SelectPlaceScreenWrapper, SelectTimeSlotScreenWrapper } from "./wrappers";
import { HeaderBackButton } from '@react-navigation/elements';
;
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { FeedStackNavigationProp } from "../../feed/types";
import { globalStyles } from "../../../views/styles";
import BallerzHeaderBackButton from "../../../components/header/buttons/headerBackButton";



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
                                tintColor={globalStyles.global.logoColor}
								onPress={() => {navigation.goBack()}}
							/>
						)
					},
					headerStyle: {
						backgroundColor: globalStyles.global.screenBackGroundColor
					}
				}}
				component={SelectPlaceScreenWrapper}
			/>	

			<Stack.Screen
				name="SelectTimeSlot"
				options={{
					headerTitle: "Choisissez un horaire",
					headerStyle: {
						backgroundColor: globalStyles.global.screenBackGroundColor
					},
					headerLeft: () => (<BallerzHeaderBackButton/>)
				}}
				component={SelectTimeSlotScreenWrapper}
			/>
		</Stack.Navigator>
	)
}