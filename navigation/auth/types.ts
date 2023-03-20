import { RootStackNavigationProp } from "./../types";
import { CompositeNavigationProp, CompositeScreenProps } from "@react-navigation/native";
import { ISigninScreenPropsWithoutNavigation } from "./../../screens/auth/signIn/interface";
import { NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack";
import { ISignupScreenPropsWithoutNavigation } from "../../screens/auth/signUp/interface";
import { IConfirmSignupScreenPropsWithoutNavigation } from "../../screens/auth/confirmSignup";

declare global {
    namespace ReactNavigation {
      interface RootParamList extends AuthStackParamList {}
    }
}


export type AuthStackParamList = {
    SigninSreen: ISigninScreenPropsWithoutNavigation
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
	AuthStackNavigationProp<'SigninSreen'>
>