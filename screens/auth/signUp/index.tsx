import React from "react";
import ISignupScreen, { ISignupScreenProps, ISignupScreenState } from "./interface";
import { AppContext, IAppContext } from "../../../controllers/provider";
import IAuthController from "../../../controllers/auth/interface";
import { ISignupInput, ISignupResult } from "../../../domain/use-cases/auth/types";
import { EmailInput, PasswordInput } from "../../../views/auth/signIn";
import { View, StyleSheet, Text, KeyboardAvoidingView, Platform, Keyboard, TouchableWithoutFeedback, Modal } from "react-native";
import { globalStyles } from "../../../views/styles";
import SigninButton from "../../../views/auth/signIn/signinButton";
import ConfirmSignupModal from "./confirmSignupModal";
import SignupView from "../../../views/auth/signup/indext";


export default class SignupScreen extends React.Component<ISignupScreenProps, ISignupScreenState> implements ISignupScreen{
    


    state: ISignupScreenState = {
        emailInput: "",
        passwordInput: "",
        confirmPasswordInput: "",
        confirmSignupModalVisible: false,
        error: undefined
    }
    static contextType = AppContext
    context: React.ContextType<typeof AppContext> = {} as IAppContext
    authController: IAuthController = {} as IAuthController
    
    constructor(props: ISignupScreenProps){
        super(props);
        this.onPressSignup = this.onPressSignup.bind(this)
        this.onConfirmPasswordInputChange = this.onConfirmPasswordInputChange.bind(this)
        this.onPasswordInputChange = this.onPasswordInputChange.bind(this)
        this.onPressConfirmationCodeReceived = this.onPressConfirmationCodeReceived.bind(this)
    }
    componentDidMount(): void {
        this.authController = this.context.authController
    }


    async onPressSignup(): Promise<void> {
        const signupInput: ISignupInput = {
            email: this.state.emailInput,
            password: this.state.passwordInput,
            confirmPassword: this.state.confirmPasswordInput,
            additionalUserData: {}
        }
        await this.context.authController.signup(signupInput).then(response => {
            this.handleSignupResponse(response)
        })
        // throw new Error("Method not implemented.");
    }

    onPressConfirmationCodeReceived(): void {
        this.hideModal()
        this.props.navigationController.goToConfirmSignup(this.state.emailInput)
    }

    onPressSignin(): void {
        this.props.navigationController.goToSignin()
    }

    private handleSignupResponse(response: ISignupResult): void {
        if(response.error){
            const error = response.error
            this.setState((prevState) => ({
                ...prevState,
                error: error.description
            }))
            console.warn(`Signup Error: ${JSON.stringify(response.error)}`)
        } else {
            // this.displayModal()
            this.props.navigationController.goToApp()
            // console.warn(`Signup Success: \n ${JSON.stringify(response.newUserData)} \n ----> Alert Confirmation code entry`)
        }
    }

    private displayModal(): void {
        this.setState((prevState) => ({
            ...prevState,
            confirmSignupModalVisible: true
        }))
    }

    private hideModal(): void {
        this.setState((prevState) =>({
            ...prevState,
            confirmSignupModalVisible: false,
        }))
    }


    onEmailInputChange(emailInput: string): void {
        this.setState((prevState) => ({
            ...prevState,
            emailInput
        }))
    }

    onPasswordInputChange(passwordInput: string){
        this.setState((prevState) => ({
            ...prevState,
            passwordInput
        }))
    }

    onConfirmPasswordInputChange(confirmPasswordInput: string){
        this.setState((prevState) => ({
            ...prevState,
            confirmPasswordInput
        }))
    }


    render(): React.ReactNode {
        return(
        
            <SignupView
                onEmailInputChange={this.onEmailInputChange}
                onPasswordInputChange={this.onPasswordInputChange}
                onConfirmPasswordInputChange={this.onConfirmPasswordInputChange}
                onPressSignup={this.onPressSignup}
                onPressSignIn={this.onPressSignin.bind(this)}
                error={this.state.error}
                placeholders={{}}
            />

        )
    }
}


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: globalStyles.global.screenBackGroundColor,
        alignItems: "center",
        justifyContent: 'center',
    },

    inputsContainer: {
        // flex: 1,
        marginHorizontal: 35,
        marginTop: 20,
        width: '80%',
        height: 40,
        color: 'white'
    },


    emailInputContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        paddingLeft: 15,
        paddingRight: 15,
        borderWidth: 1,
        borderRadius: 30,
        borderColor: "green",
        color: "white",
    },

    errorTex: {
        color: "white",
    },

    placeHolderText: {
        color: "grey",
    },

    modalContainer: {
        alignSelf: "flex-end",
        height: "65%",
    }
})