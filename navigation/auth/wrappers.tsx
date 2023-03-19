import { NavigatorScreenParams, useNavigation } from "@react-navigation/native"
import { AuthStackNavigationProp, AuthStackScreenProps, SigninScreenNavigationProp } from "./types"
import { TabRouter } from "react-navigation"
import React from "react"
import { ISigninScreenNavigationController } from "../../screens/auth/signIn/interface"
import { ILoginInput } from "../../domain/use-cases/Auth/types"
import SigninScreen from "../../screens/auth/signIn"
import { RootTabParamList } from "../app/types"
import { RootStackNavigationProp } from "../types"

export function SignInScreenWrapper(props: AuthStackScreenProps<'SigninSreen'>){

    const navigation = useNavigation<RootStackNavigationProp<'AuthStack'>>()

    // const screenParams: NavigatorScreenParams<RootTabParamList> = {
    //     screen: "FeedStack",

    // }
    const navigationController: ISigninScreenNavigationController = {
        onSigninSuccess: function (signinInput: ILoginInput): void {
            // props.navigation.navigate("", {})
            // @ts-ignore
            props.navigation.navigate("AppStack", {})
            throw new Error("Function not implemented. Parametrs: \n   " + JSON.stringify(signinInput))
        }
    }



    return(
        <SigninScreen
            {...{navigationController}}
        />
    )
}