
import { CompositeNavigationProp } from "@react-navigation/native";
import { NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack";
import { IConfirmSignupScreenPropsWithoutNavigation } from "../../../screens/auth/confirmSignup";
import { ISigninScreenPropsWithoutNavigation } from "../../../screens/auth/signIn/interface";
import { ISignupScreenPropsWithoutNavigation } from "../../../screens/auth/signUp/interface";
import { RootStackNavigationProp } from "../../types";


declare global {
    namespace ReactNavigation {
      interface RootParamList extends AuthStackParamList {}
    }
}


export type AuthStackParamList = {
    SigninScreen: ISigninScreenPropsWithoutNavigation
    SignupScreen: ISignupScreenPropsWithoutNavigation
    ConfirmSignupScreen: IConfirmSignupScreenPropsWithoutNavigation
};


export type AuthStackScreenProps<Screen extends keyof AuthStackParamList> = NativeStackScreenProps<
	AuthStackParamList,
	Screen
>;


export type AuthStackNavigationProp<Screen extends keyof AuthStackParamList> = NativeStackNavigationProp<AuthStackParamList, Screen>

export type SigninScreenNavigationProp = CompositeNavigationProp<
	RootStackNavigationProp<'AuthStack'>,
	AuthStackNavigationProp<'SigninScreen'>
>