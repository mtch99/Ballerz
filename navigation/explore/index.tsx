import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ExploreStackParamList } from "./types";
import { UserProfileSearchScreenWrapper } from "./wrappers";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";


const Stack = createMaterialTopTabNavigator<ExploreStackParamList>();

export function ExploreStackNavigator(): JSX.Element {
    const initialRouteName: keyof ExploreStackParamList = "UserProfileSearchSreen"

    return(
        <Stack.Navigator
            initialRouteName={initialRouteName}
        >
            <Stack.Screen
                name="UserProfileSearchSreen"
                options={{
                    title: "Personnes",
                }}
				component={UserProfileSearchScreenWrapper}
            />

            <Stack.Screen
                name="PlaceSearchScreen"
                options={{
                    title: "Terrains",
                }}
				component={UserProfileSearchScreenWrapper}
            />
        </Stack.Navigator>
    )
}