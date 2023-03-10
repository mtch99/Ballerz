import { BaseStackParamList } from "./types";
import { PlaceProfileScreenWrapper } from "./wrappers";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";


const Stack = createMaterialTopTabNavigator<BaseStackParamList>();

export function BaseStackNavigator(): JSX.Element {
    const initialRouteName: keyof BaseStackParamList = "PlaceProfileScreen"

    return(
        <Stack.Navigator
            initialRouteName={initialRouteName}
        >

            <Stack.Screen
                name="PlaceProfileScreen"
                options={{
                    // title: "Terrains",
                }}
				component={PlaceProfileScreenWrapper}
            />

        </Stack.Navigator>
    )
}