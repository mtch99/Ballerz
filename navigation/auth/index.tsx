import { AuthStackParamList } from "./types";
// import { PlaceProfileScreenWrapper } from "./wrappers";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { ConfirmSignupScreenWrapper, SignInScreenWrapper, SignupScreenWrapper } from "./wrappers";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AppContext, IAppContext } from "../../controllers/provider";
import React from "react";
import { globalStyles } from "../../views/styles";
import { KeyboardAvoidingView, Platform, StyleSheet } from "react-native";


const Stack = createNativeStackNavigator<AuthStackParamList>();

export function AuthStackNavigator(): JSX.Element {
    let initialRouteName: keyof AuthStackParamList = "SigninScreen"
    const appContext = React.useContext<IAppContext>(AppContext);
    
    if(appContext.authState.lastSigninInput.email.length==0){
        initialRouteName="SignupScreen"
    }


    return(
        <KeyboardAvoidingView
				style={styles.container}
				behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
		>
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
                        title: "Inscris toi",
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
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
		flexGrow: 1,
		backgroundColor: globalStyles.global.screenBackGroundColor,
	},
})