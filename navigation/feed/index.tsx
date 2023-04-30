import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FeedStackNavigationProp, FeedStackParamList, FeedStackScreenProps } from "./types";
import { BadgeListScreenWrapper, CommentsScreenWrapper, FeedScreenWrapper, MakeFriendsScreenWrapper, UserProfileSearchScreenWrapper } from "./wrappers";
import { Button, TouchableOpacity, Text } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';
import React from "react";
import { FeedStackNavigationContext, IFeedStackNavigationContext } from "./context";
import { CreateGameStackNavigator } from "../base/createGameStack";
import { globalStyles } from "../../views/styles";
import { NavigatorScreenParams, useNavigation } from "@react-navigation/native";
import { BaseStackNavigator } from "../base";
import { ExploreStackNavigator } from "../explore";
import { AppContext } from "../../controllers/provider";
import IFeedController from "../../controllers/feed/interface";
import { BaseStackParamList } from "../base/types";



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
								//@ts-ignore
								onPress={() => {navigation.navigate("ExploreStack")}}
							>
								<Icon name="search1" size={18} 
									color={globalStyles.global.logoColor}
								/>
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
                    name="BaseStack"
                    options={{
						headerShown: false,
					}}
					component={BaseStackNavigator}
				/>

				<Stack.Screen
					name="ExploreStack"
					options={{
                        headerShown: false,
                    }}
					component={ExploreStackNavigator}
				/>
			</Stack.Navigator>
		</FeedStackNavigationContext.Provider>
	)
}


export default function LeftHeader(){


    const navigation = useNavigation<FeedStackNavigationProp<'FeedScreen'>>()  
    const context = React.useContext(AppContext)
    const feedController: IFeedController = context.feedController


    const createGame = (): void => { 
        // navigation.navigate('CreateGameStack', {})
        const params: NavigatorScreenParams<BaseStackParamList> = {
			screen:"CreateGameStack",
			params: {
				screen:"SelectPlace",
				params:{}
			}
		}

		navigation.navigate('BaseStack', params)

    }

        return (
            <TouchableOpacity
                onPress={() => {
                    createGame()
                }}
            >
                <Text
                    style={{
                        fontSize: 18,
                        color: globalStyles.global.logoColor
                    }}
                >
                    Jouer
                </Text>
            </TouchableOpacity>
        )
    
}