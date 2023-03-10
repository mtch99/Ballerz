import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SearchStackParamList } from "./types";
import {PlaceSearchScreenWrapper, UserProfileSearchScreenWrapper } from "./wrappers";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";


const Stack = createMaterialTopTabNavigator<SearchStackParamList>();

export function SearchStackNavigator(): JSX.Element {
    const initialRouteName: keyof SearchStackParamList = "UserProfileSearchSreen"

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
				component={PlaceSearchScreenWrapper}
            />
        </Stack.Navigator>
    )
}