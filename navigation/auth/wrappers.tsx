import {NavigatorScreenParams, useNavigation} from "@react-navigation/native"
import {AuthStackScreenProps} from "./types"
import React from "react"
import { ISigninScreenNavigationController } from "../../screens/auth/signIn/interface"
import { ILoginInput } from "../../domain/use-cases/Auth/types"
import SigninScreen from "../../screens/auth/signIn"
import { RootTabParamList } from "../app/types"
import { RootStackNavigationProp } from "../types"
import { ISignupScreenNavigationController } from "../../screens/auth/signUp/interface"
import SignupScreen from "../../screens/auth/signUp"
import ConfirmSignupScreen, { IConfirmSignupScreenNavigationController } from "../../screens/auth/confirmSignup"

export function SignInScreenWrapper(props: AuthStackScreenProps<'SigninSreen'>){

    const navigation = useNavigation<RootStackNavigationProp<'AuthStack'>>()
    const navigationController: ISigninScreenNavigationController = {
        onSigninSuccess: function (signinInput: ILoginInput): void {
            //@ts-ignore
            const params: NavigatorScreenParams<RootTabParamList> = {
                screen: 'FeedStack',
            }
            navigation.navigate("AppStack", params)
        }
    }



    return(
        <SigninScreen
            {...{navigationController}}
        />
    )
}


export function SignupScreenWrapper(props: AuthStackScreenProps<'SignupScreen'>){

    const navigation = useNavigation<RootStackNavigationProp<'AuthStack'>>()

    const navigationController: ISignupScreenNavigationController = {
        goToConfirmSignup: function (email: string): void {
            props.navigation.navigate("ConfirmSignupScreen", {email})
        }
    }

    return(
        <SignupScreen
            {...{navigationController}}
        />
    )
}


export function ConfirmSignupScreenWrapper(props: AuthStackScreenProps<'ConfirmSignupScreen'>){

    const navigation = useNavigation<RootStackNavigationProp<'AuthStack'>>()

    const navigationController: IConfirmSignupScreenNavigationController = {
        goToAppStack: function (): void {
            throw new Error("Function not implemented.")
        }
    }

    return(
        <ConfirmSignupScreen
            email={props.route.params.email}
            {...{navigationController}}
        />
    )
}