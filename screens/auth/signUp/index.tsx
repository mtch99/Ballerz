import React from "react";
import ISignupScreen, { ISignupScreenProps, ISignupScreenState } from "./interface";
import { AppContext, IAppContext } from "../../../controllers/provider";
import IAuthController from "../../../controllers/auth/interface";
import { ISignupInput, ISignupResult } from "../../../domain/use-cases/Auth/types";
import { EmailInput, PasswordInput } from "../../../views/auth/signIn";
import { View, StyleSheet, Text, KeyboardAvoidingView, Platform, Keyboard, TouchableWithoutFeedback } from "react-native";
import { globalStyles } from "../../../views/styles";
import SigninButton from "../../../views/auth/signIn/signinButton";


export default class SignupScreen extends React.Component<ISignupScreenProps, ISignupScreenState> implements ISignupScreen{
    


    state: ISignupScreenState = {
        emailInput: "",
        passwordInput: "",
        confirmPasswordInput: ""
    }
    static contextType = AppContext
    context: React.ContextType<typeof AppContext> = {} as IAppContext
    authController: IAuthController = {} as IAuthController
    
    constructor(props: ISignupScreenProps){
        super(props);
        this.onPressSignup = this.onPressSignup.bind(this)
        this.onConfirmPasswordInputChange = this.onConfirmPasswordInputChange.bind(this)
        this.onPasswordInputChange = this.onPasswordInputChange.bind(this)
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


    private handleSignupResponse(response: ISignupResult): void {
        if(response.error){
            const error = response.error
            this.setState((prevState) => ({
                ...prevState,
                error: error.description
            }))
            console.warn(`Signup Error: ${JSON.stringify(response.error)}`)
        } else {
            console.warn(`Signup Success: \n ${JSON.stringify(response.newUserData)} \n ----> Alert Confirmation code entry`)
        }
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
            <TouchableWithoutFeedback
                onPress={() => {Keyboard.dismiss()}}
            >
                <KeyboardAvoidingView
                    style={styles.container}
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                >
                    <EmailInput
                        style={styles.inputsContainer}
                        onChangeText={(text) => {this.onEmailInputChange(text)}}
                        placeholder="Email"
                        placeholderTextColor={styles.placeHolderText.color}
                    />
                    <PasswordInput
                        style={styles.inputsContainer}
                        onChangeText={(text) => {this.onPasswordInputChange(text)}}
                        placeholderTextColor={styles.placeHolderText.color}
                    />
                    <PasswordInput
                        style={styles.inputsContainer}
                        placeholder="Confirmez le mot de passe"
                        onChangeText={(text) => {this.onConfirmPasswordInputChange(text)}}
                        placeholderTextColor={styles.placeHolderText.color}
                    />


                

                <SigninButton
                    onPress={() => {this.onPressSignup()}}
                    />
                    {
                        this.state.error?(
                            <Text
                                style={styles.errorTex}
                            >
                                {this.state.error}
                            </Text>
                        ):(<></>)
                    }
            </KeyboardAvoidingView>
            </TouchableWithoutFeedback>

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
})