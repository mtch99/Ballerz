import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FeedStackParamList } from "./types";
import { AttendantsListScreenWrapper, BadgeListScreenWrapper, CommentsScreenWrapper, FeedScreenWrapper, UserProfileSearchScreenWrapper } from "./wrappers";
import { Button, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';
import React from "react";
import { FeedStackNavigationContext, IFeedStackNavigationContext } from "./context";



const Stack = createNativeStackNavigator<FeedStackParamList>();


export function FeedStackNavigator(): JSX.Element {

	const _initialRouteName: keyof FeedStackParamList = 'FeedScreen'
	const [userProfileSearchButtonState, setUserProfileSearchButtonState] = React.useState(false)

	
	const _contextValue: IFeedStackNavigationContext = {
		userProfileSearchButtonState
	}


	const onPressUserProfileSearchButton = () => {
		if(userProfileSearchButtonState){
			setUserProfileSearchButtonState(false)
		}else{
			setUserProfileSearchButtonState(true)
		}
	}

	
	return (
		<FeedStackNavigationContext.Provider
			value={_contextValue}
		>
			<Stack.Navigator
			initialRouteName={_initialRouteName}
			>
	
				<Stack.Screen
					name='FeedScreen'
					options={{
					headerShown: true,
					headerTitle: 'Ballerz'
					}}
					component={FeedScreenWrapper}
				/>	
				<Stack.Screen
					name='BadgeListScreen'
					options={{
						headerShown: true,
						headerTitle: 'Badges',
						headerBackTitleVisible: false,
					}}
					component={BadgeListScreenWrapper}
					initialParams={{badgeList: []}}
				/>

				<Stack.Screen
					name='CommentsScreen'
					options={{
						headerShown: true,
						headerTitle: 'Commentaires',
						headerBackTitleVisible: false,
					}}
					component={CommentsScreenWrapper}
				/>

				<Stack.Screen
					name='AttendantsListScreen'
					options={{
						headerShown: true,
						headerTitle: 'Amis présents',
						headerBackTitleVisible: false,
					}}
					component={AttendantsListScreenWrapper}
				/>


				<Stack.Screen
					name="UserProfileSearch"
					options={{
						headerShown: true,
						headerTitle: 'Joueurs',
						headerBackTitleVisible: true,
						headerBackTitle: 'annuler',
						headerRight: () => (
							<TouchableOpacity
								onPress={() => {onPressUserProfileSearchButton()}}
							>
								<Icon name="search1" size={17.17} color="#55A99D"/>
							</TouchableOpacity>
						)
					}}
					component={UserProfileSearchScreenWrapper}
				/>

			</Stack.Navigator>
		</FeedStackNavigationContext.Provider>
	)
}