import { AppStackParamList } from "./types";
// import { PlaceProfileScreenWrapper } from "./wrappers";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AppContext } from "../../controllers/provider";
import React from "react";
import { CreateProfileScreenWrapper, AppTabWrapper } from "./wrappers";



const Stack = createNativeStackNavigator<AppStackParamList>();

export function AppStack(): JSX.Element {
    const {authState} = React.useContext(AppContext)
    let initialRouteName: keyof AppStackParamList = 'AppTab'

    if(!authState.user?.profile){
        initialRouteName = 'CreateProfile'
    }

    else {

    }

    return(
        <Stack.Navigator
            initialRouteName={initialRouteName}
        >
            <Stack.Screen
                name="CreateProfile"
                options={{
                    headerShown: false
                }}
                component={CreateProfileScreenWrapper}
            />

            <Stack.Screen
                name="AppTab"
                options={{
                    headerShown: false,
                }}
				component={AppTabWrapper}
            />

        </Stack.Navigator>
    )
}