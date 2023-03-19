import {useNavigation} from "@react-navigation/native"
import {AuthStackScreenProps} from "./types"
import React from "react"
import { ISigninScreenNavigationController } from "../../screens/auth/signIn/interface"
import { ILoginInput } from "../../domain/use-cases/Auth/types"
import SigninScreen from "../../screens/auth/signIn"
import { RootTabParamList } from "../app/types"
import { RootStackNavigationProp } from "../types"
import { ISignupScreenNavigationController } from "../../screens/auth/signUp/interface"
import SignupScreen from "../../screens/auth/signUp"

export function SignInScreenWrapper(props: AuthStackScreenProps<'SigninSreen'>){

    const navigation = useNavigation<RootStackNavigationProp<'AuthStack'>>()
    const navigationController: ISigninScreenNavigationController = {
        onSigninSuccess: function (signinInput: ILoginInput): void {
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


export function SignupScreenWrapper(props: AuthStackScreenProps<'SignupScreen'>){

    const navigation = useNavigation<RootStackNavigationProp<'AuthStack'>>()

    // const screenParams: NavigatorScreenParams<RootTabParamList> = {
    //     screen: "FeedStack",

    // }
    
    // const navigationController: ISignupScreenNavigationController = {
    //     onSignupSucess: function (): Promise<void> {
    //         throw new Error("Function not implemented.")
    //     }
    // }


    return(
        <SignupScreen
            // {...{navigationController}}
        />
    )
}