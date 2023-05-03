import { AppStackParamList } from "./types";
// import { PlaceProfileScreenWrapper } from "./wrappers";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AppContext } from "../../controllers/provider";
import React, { useEffect } from "react";
import { CreateProfileStackWrapper, AppTabWrapper } from "./wrappers";




const Stack = createNativeStackNavigator<AppStackParamList>();

export function AppStack(): JSX.Element {
    const {authState} = React.useContext(AppContext)
    
    return(
        authState.profile?(
            <Stack.Navigator
            >
                <Stack.Screen
                    name="CreateProfile"
                    options={{
                        headerShown: false
                    }}
                    component={CreateProfileStackWrapper}
                />
                <Stack.Screen
                    name="AppTab"
                    options={{
                        headerShown: false,
                    }}
                    component={AppTabWrapper}
                />
            </Stack.Navigator>
        ):
        (<Stack.Navigator>
            <Stack.Screen
                name="CreateProfile"
                options={{
                    headerShown: false
                }}
                component={CreateProfileStackWrapper}
            />
            <Stack.Screen
                name="AppTab"
                options={{
                    headerShown: false,
                }}
                component={AppTabWrapper}
            />
        </Stack.Navigator>)
    )
}