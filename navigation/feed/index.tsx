import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FeedStackParamList } from "./types";
import { AttendantsListScreenWrapper, BadgeListScreenWrapper, CommentsScreenWrapper, FeedScreenWrapper, UserProfileSearchScreenWrapper } from "./wrappers";


const Stack = createNativeStackNavigator<FeedStackParamList>();


export function FeedStackNavigator(): JSX.Element {

	const _initialRouteName: keyof FeedStackParamList = 'FeedScreen'
	
	  return (
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
				}}
				component={UserProfileSearchScreenWrapper}
			/>

		</Stack.Navigator>
	  )
}