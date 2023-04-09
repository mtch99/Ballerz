import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ExploreStackParamList } from "./types";
import {BaseStackWrapper, ExploreTabScreenWrapper, PlaceProfileScreenWrapper, UserProfileScreenWrapper} from "./wrappers";
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
                    headerStyle: globalStyles.global.headerStyle
                }}
                component={ExploreTabScreenWrapper}
            />

            <Stack.Screen
                name="UserProfileScreen"
                component={UserProfileScreenWrapper}
                options={{
                    // headerShown: false,
                    title: 'Explore',
                    headerBackTitleVisible: false,
                    headerStyle: globalStyles.global.headerStyle
                }}
            />

            <Stack.Screen
                name="BaseStack"
                options={{
                    headerShown: false,
                    // headerBackVisible: true
                }}
                component={BaseStackWrapper}
            />

        </Stack.Navigator>
    )
}