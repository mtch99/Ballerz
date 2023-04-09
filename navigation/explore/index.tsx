import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ExploreStackParamList } from "./types";
import {ExploreTabScreenWrapper, PlaceProfileScreenWrapper, UserProfileScreenWrapper} from "./wrappers";
import { globalStyles } from "../../views/styles";

const Stack = createNativeStackNavigator<ExploreStackParamList>();

export function ExploreStackNavigator(): JSX.Element {
    const initialRouteName: keyof ExploreStackParamList = "SearchStack"

    return(
        <Stack.Navigator
            initialRouteName={initialRouteName}
        >
            <Stack.Screen
                name="SearchStack"
                options={{
                    headerShown: true,
                    headerTitle: "Explore",
                    headerStyle: {backgroundColor:globalStyles.global.screenBackGroundColor}
                }}
				// component={SearchStackNavigator}
                component={ExploreTabScreenWrapper}
            />

            <Stack.Screen
                name='PlaceProfileScreen'
                component={PlaceProfileScreenWrapper}
                options={{
                    // headerShown: false,
                    title: 'Explore'
                }}
            />
            <Stack.Screen
                name="UserProfileScreen"
                component={UserProfileScreenWrapper}
                options={{
                    // headerShown: false,
                    title: 'Explore',
                    headerBackTitleVisible: false,
                }}
            />

        </Stack.Navigator>
    )
}