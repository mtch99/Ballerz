import { AuthStackParamList } from "./types";
// import { PlaceProfileScreenWrapper } from "./wrappers";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { ConfirmSignupScreenWrapper, SignInScreenWrapper, SignupScreenWrapper } from "./wrappers";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AppContext, IAppContext } from "../../../controllers/provider";
import React from "react";
import { globalStyles } from "../../../views/styles";


const Stack = createNativeStackNavigator<AuthStackParamList>();

export function AuthStackNavigator(): JSX.Element {
    let initialRouteName: keyof AuthStackParamList = "SigninScreen"
    const appContext = React.useContext<IAppContext>(AppContext);
    if(appContext.authState.lastSigninInput.email.length==0){
        initialRouteName="SignupScreen"
    }


    return(
        
        <Stack.Navigator
            {...{initialRouteName}}
        >
            <Stack.Screen
                name="SigninScreen"
                options={{
                    headerShown: false,
                    title: "Connexion",
                }}
                component={SignInScreenWrapper}
            />
            <Stack.Screen
                name="SignupScreen"
                options={{
                    headerStyle: {backgroundColor: globalStyles.global.screenBackGroundColor},
                    title: "Inscription",
                    headerShown: false,
                }}
                component={SignupScreenWrapper}
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