import { AuthStackParamList } from "./types";
// import { PlaceProfileScreenWrapper } from "./wrappers";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { ConfirmSignupScreenWrapper, SignInScreenWrapper, SignupScreenWrapper } from "./wrappers";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


const Stack = createNativeStackNavigator<AuthStackParamList>();

export function AuthStackNavigator(): JSX.Element {
    const initialRouteName: keyof AuthStackParamList = "SignupScreen"

    return(
        <Stack.Navigator
            initialRouteName={initialRouteName}
        >
            <Stack.Screen
                name="SignupScreen"
                options={{
                    title: "Inscription"
                }}
                component={SignupScreenWrapper}
            />

            <Stack.Screen
                name="SigninSreen"
                options={{
                    title: "Connexion",
                }}
				component={SignInScreenWrapper}
            />

            <Stack.Screen
                name="ConfirmSignupScreen"
                options={{
                    title: "Inscription",
                    headerBackTitleVisible: false
                }}
				component={ConfirmSignupScreenWrapper}
            />

        </Stack.Navigator>
    )
}