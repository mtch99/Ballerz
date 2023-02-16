import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FeedStackParamList } from "./types";
import { AttendantsListScreenWrapper, BadgeListScreenWrapper, CommentsScreenWrapper, FeedScreenWrapper } from "./wrappers";


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
				  headerShown: false
				}}
				component={FeedScreenWrapper}
			/>	
			<Stack.Screen
				name='BadgeListScreen'
				options={{
					headerShown: true,
					headerTitle: 'Badges',
					headerBackButtonMenuEnabled: true,
				}}
				component={BadgeListScreenWrapper}
				initialParams={{badgeList: []}}
			/>

			<Stack.Screen
				name='CommentsScreen'
				options={{
					headerShown: true,
					headerTitle: 'Commentaires',
					headerBackButtonMenuEnabled: true
				}}
				component={CommentsScreenWrapper}
			/>

			<Stack.Screen
				name='AttendantsListScreen'
				options={{
					headerShown: true,
					headerTitle: 'Amis présents',
					headerBackButtonMenuEnabled: true
				}}
				component={AttendantsListScreenWrapper}
			/>

		</Stack.Navigator>
	  )
}