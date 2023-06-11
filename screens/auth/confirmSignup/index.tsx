import React from "react";
import IConfirmSignupScreen, { IConfirmSignupScreenState } from "./interface";
import IAuthController from "../../../controllers/auth/interface";
import { AppContext, IAppContext } from "../../../controllers/provider";
import { ISigninScreenNavigationController } from "../signIn/interface";
import {View, StyleSheet, Text} from 'react-native'
import { globalStyles } from "../../../views/styles";
import { TextInput } from "react-native-gesture-handler";


export interface IConfirmSignupScreenNavigationController{
    goToAppStack(): void
}
export interface IConfirmSignupScreenPropsWithoutNavigation{
    email: string
}
export interface IConfirmSignupScreenProps extends IConfirmSignupScreenPropsWithoutNavigation{
    navigationController: IConfirmSignupScreenNavigationController
}


export default class ConfirmSignupScreen extends React.Component<IConfirmSignupScreenProps, IConfirmSignupScreenState> implements IConfirmSignupScreen {

    state: IConfirmSignupScreenState = {
        confirmSignupInput: "",
        error: undefined
    }

    static contextType = AppContext
    context: React.ContextType<typeof AppContext> = {} as IAppContext
    authController: IAuthController = {} as IAuthController

    constructor(props: IConfirmSignupScreenProps){
        super(props)
        this.onPressConfirmSignup = this.onPressConfirmSignup.bind(this)
    }


    componentDidMount(): void {
        this.authController = this.context.authController
    }



    onPressConfirmSignup(): void {
        this.authController.confirmSignup({email: this.props.email, code: this.state.confirmSignupInput}).then((response) => {
            if(!response.error){
                this.props.navigationController.goToAppStack()
            } else {
                const error = response.error
                this.setState((prevState) => ({
                    ...prevState,
                    error: "Le code de confirmation est incorrect"
                }))
            }
        })
    }

    render(): React.ReactNode {
        return(
            <View
                style={styles.container}
            >
                <View
                    style={styles.titleContainer}
                >
                    <Text
                        style={styles.title}
                    >
                        Entrez votre code de confirmation
                    </Text>
                </View>
                <TextInput
                    placeholder="570016"
                    placeholderTextColor={"#969696"}
                    style={styles.confirmationCodeInputContainer}
                />
                {this.state.error?(<Text>{this.state.error}</Text>):(<></>)}
            </View>
        )
    }
}



const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: globalStyles.global.screenBackgroundColor
    },

    titleContainer: {
        marginHorizontal: 10,
        width: "90%",
        alignItems: "center",
        justifyContent: "center",
    },

    title: {
        fontSize: 18,
        fontWeight: "bold",
        color: "white",
    },

    confirmationCodeInputContainer: {
        marginTop: 15,
        height: 52,
        borderRadius: 56,
        backgroundColor: globalStyles.global.itemBackgroundColor,
        padding: 10,
        width: "90%"
    },

    errorText: {
        marginTop: 5,
        color: 'red',
        fontSize: 12
    }
})