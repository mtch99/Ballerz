
import { SafeAreaView } from "react-native";
import { SearchStackParamList } from "./types";
import {PlaceSearchScreenWrapper, UserProfileSearchScreenWrapper } from "./wrappers";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { SafeAreaProvider } from "react-native-safe-area-context";



const TopTab = createMaterialTopTabNavigator<SearchStackParamList>();

export function SearchStackNavigator(): JSX.Element {
    const initialRouteName: keyof SearchStackParamList = "UserProfileSearchSreen"

    return(
        <SafeAreaProvider>
            <TopTab.Navigator
                initialRouteName={initialRouteName}
            >
                <TopTab.Screen
                    name="UserProfileSearchSreen"
                    options={{
                        title: "Personnes",
                    }}
                    component={UserProfileSearchScreenWrapper}
                />

                <TopTab.Screen
                    name="PlaceSearchScreen"
                    options={{
                        title: "Terrains",
                    }}
                    component={PlaceSearchScreenWrapper}
                />
            </TopTab.Navigator>
        </SafeAreaProvider>
    )
}