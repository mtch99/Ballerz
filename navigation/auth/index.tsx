import { AuthStackParamList } from "./types";
// import { PlaceProfileScreenWrapper } from "./wrappers";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { SignInScreenWrapper } from "./wrappers";


const Stack = createMaterialTopTabNavigator<AuthStackParamList>();

export function AuthStackNavigator(): JSX.Element {
    const initialRouteName: keyof AuthStackParamList = "SigninSreen"

    return(
        <Stack.Navigator
            initialRouteName={initialRouteName}
        >

            <Stack.Screen
                name="SigninSreen"
                options={{
                    title: "Connexion",
                }}
				component={SignInScreenWrapper}
            />

        </Stack.Navigator>
    )
}