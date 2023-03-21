import {NavigatorScreenParams, useNavigation} from "@react-navigation/native"
import {AuthStackScreenProps} from "./types"
import React from "react"
import { ILoginInput } from "../../../domain/use-cases/Auth/types"
import ConfirmSignupScreen, { IConfirmSignupScreenNavigationController } from "../../../screens/auth/confirmSignup"
import SigninScreen from "../../../screens/auth/signIn"
import { ISigninScreenNavigationController } from "../../../screens/auth/signIn/interface"
import SignupScreen from "../../../screens/auth/signUp"
import { ISignupScreenNavigationController } from "../../../screens/auth/signUp/interface"
import { RootStackNavigationProp } from "../../types"

export function SignInScreenWrapper(props: AuthStackScreenProps<'SigninSreen'>){

    const navigation = useNavigation<RootStackNavigationProp<'AuthStack'>>()
    const navigationController: ISigninScreenNavigationController = {
        onSigninSuccess: function (signinInput: ILoginInput): void {
            //@ts-ignore
            const params: NavigatorScreenParams<AppTabParamList> = {
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
            props.navigation.navigate("ConfirmSignupScreen", { email })
        },
        goToApp: function (): void {
            //@ts-ignore
            navigation.navigate("AppStack")
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