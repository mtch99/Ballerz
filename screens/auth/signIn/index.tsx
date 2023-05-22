import React from "react";
import { ILoginInput, ILoginRejection, ILoginResult } from "../../../domain/use-cases/auth/types";
import { ISigninScreen, ISigninScreenProps, ISigninScreenState } from "./interface";
import { AppContext, IAppContext } from "../../../controllers/provider";
import IAuthController from "../../../controllers/auth/interface";
import SigninView from "../../../views/auth/signIn";




export default class SigninScreen extends React.Component<ISigninScreenProps, ISigninScreenState> implements ISigninScreen {
    
    // authController: IAuthController = {} as IAuthController;
    static contextType = AppContext
    context: React.ContextType<typeof AppContext> = {} as IAppContext

    constructor(props: ISigninScreenProps) {
        super(props)
        this.onEmailInputChange = this.onEmailInputChange.bind(this)
        this.onPasswordInputChange = this.onPasswordInputChange.bind(this)
        this.signIn = this.signIn.bind(this)
        this.handleSigninResponse = this.handleSigninResponse.bind(this)
    }
    

    state: ISigninScreenState = {
        emailInput: "stephcurry30@gmail.com",
        passwordInput: "stephcurrY30@mailcom",
        error: undefined
    }


    componentDidMount(): void {
        // this.authController = this.context.authController
    }
    
    async signIn(): Promise<void> {
        const loginInput: ILoginInput = {
            email: this.state.emailInput,
            password: this.state.passwordInput
        }
        this.context.authController.login(loginInput).then((response) => {
            this.handleSigninResponse(response)
        })
    }

    onEmailInputChange(emailInput: string){
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

    onPressCreateAccount(){
        this.props.navigationController.goToSignup()
    }

    private async handleSigninResponse(response: ILoginResult): Promise<void> {
        if(response.error != false){
            const error: ILoginRejection = response.error
            this.setState((prevState) => ({
                ...prevState,
                error: error.description
            }))
        }
        else{
            const signinInput = {
                email: this.state.emailInput,
                password: this.state.passwordInput
            }
            await this.context.userProfileController.getMyProfile(signinInput.email)
            this.props.navigationController.onSigninSuccess(signinInput)
        }
    }
    
    
    render(): React.ReactNode {
        return(
            <SigninView 
                onEmailInputChange={this.onEmailInputChange}
                onPasswordInputChange={this.onPasswordInputChange}
                error={this.state.error} 
                placeholders={{
                    emailInput: "stephcurry30@ballerz.com"
                }}
                onPressSignin={this.signIn}
                onPressGoToSignup={this.onPressCreateAccount.bind(this)}
            />
        )
    }
    
}