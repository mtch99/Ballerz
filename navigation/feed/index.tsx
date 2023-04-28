import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FeedStackNavigationProp, FeedStackParamList } from "./types";
import { AttendantsListScreenWrapper, BadgeListScreenWrapper, CommentsScreenWrapper, FeedScreenWrapper, MakeFriendsScreenWrapper, NotificationScreenWrapper, UserProfileSearchScreenWrapper } from "./wrappers";
import { Button, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';
import React from "react";
import { FeedStackNavigationContext, IFeedStackNavigationContext } from "./context";
import LeftHeader from "./components/LeftHeader";
import { CreateGameStackNavigator } from "../base/createGameStack";
import { globalStyles } from "../../views/styles";
import { useNavigation } from "@react-navigation/native";



const Stack = createNativeStackNavigator<FeedStackParamList>();


export function FeedStackNavigator(): JSX.Element {

	const _initialRouteName: keyof FeedStackParamList = 'FeedScreen'
	const [userProfileSearchButtonState, setUserProfileSearchButtonState] = React.useState(false)

	const navigation = useNavigation<FeedStackNavigationProp<any>>()

	
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
						headerTitle: 'Ballerz',
						headerStyle: { backgroundColor: globalStyles.global.screenBackGroundColor},
						headerLeft: () => (<LeftHeader/>),
						headerRight: () => (
							<TouchableOpacity
                                onPress={() => {navigation.push("CreateGameStack", {})}}
							>

							</TouchableOpacity>
						)
					}}
					component={FeedScreenWrapper}
				/>	
				<Stack.Screen
					name='BadgeListScreen'
					options={{
						headerShown: true,
						headerTitle: 'Badges',
						headerBackTitleVisible: false,
						headerStyle: { backgroundColor: globalStyles.global.screenBackGroundColor},

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
						headerStyle: { backgroundColor: globalStyles.global.screenBackGroundColor},

					}}
					component={CommentsScreenWrapper}
				/>

				<Stack.Screen
					name='AttendantsListScreen'
					options={{
						headerShown: true,
						headerTitle: 'Amis présents',
						headerBackTitleVisible: false,
						headerStyle: { backgroundColor: globalStyles.global.screenBackGroundColor},
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

				<Stack.Screen
					name="MakeFriends"
					options={{
						headerShown: false,
						gestureEnabled: false,
					}}
					component={MakeFriendsScreenWrapper}
				/>

		

				<Stack.Screen
					name="CreateGameStack"
					options={{
						headerShown: false
					}}
					component={CreateGameStackNavigator}
				/>

				<Stack.Screen

                    name="NotificationScreen"
                    options={{
                        headerShown: true,
						headerTitle: 'News'
                    }}
					component={NotificationScreenWrapper}
				/>

			</Stack.Navigator>
		</FeedStackNavigationContext.Provider>
	)
}