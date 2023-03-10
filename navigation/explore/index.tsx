import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ExploreStackParamList } from "./types";
import {PlaceProfileScreenWrapper} from "./wrappers";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { BaseStackNavigator } from "../base";
import { SearchStackNavigator } from "./search";


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
                    headerShown: false,
                    title: "Personnes",
                }}
				component={SearchStackNavigator}
            />

            <Stack.Screen
                name='PlaceProfileScreen'
                component={PlaceProfileScreenWrapper}
                options={{
                    title: 'Explore'
                }}
            />
        </Stack.Navigator>
    )
}