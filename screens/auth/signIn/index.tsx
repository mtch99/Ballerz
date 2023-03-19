import React from "react";
import { ILoginInput, ILoginResult } from "../../../domain/use-cases/Auth/types";
import { ISigninScreen, ISigninScreenProps, ISigninScreenState } from "./interface";
import { AppContext, IAppContext } from "../../../controllers/provider";
import IAuthController from "../../../controllers/auth/interface";
import SigninScreenView from "../../../views/auth/signIn";




export default class SigninScreen extends React.Component<ISigninScreenProps, ISigninScreenState> implements ISigninScreen {
    
    authController: IAuthController = {} as IAuthController;
    static contextType = AppContext
    context: React.ContextType<typeof AppContext> = {} as IAppContext
    



    componentDidMount(): void {
        this.authController = this.context.authController
    }
    
    async signIn(): Promise<void> {
        const loginInput: ILoginInput = {
            email: this.state.emailInput,
            password: this.state.passworInput
        }
        this.authController.login(loginInput).then((response) => {
            this.handleSigninResponse
        })
        throw new Error("Method not implemented.");
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

    private handleSigninResponse(response: ILoginResult): void {
        if(response.error){
            console.error(`Signin error: ${JSON.stringify(response.error)}`)
        }
        else{
            const signinInput = {
                email: this.state.emailInput,
                password: this.state.passworInput
            }
            this.props.navigationController.onSigninSuccess(signinInput)
        }
    }


    render(): React.ReactNode {
        return(
            <SigninScreenView 
                onEmailInputChange={this.onEmailInputChange}
                onPasswordInputChange={this.onPasswordInputChange}
                error={this.state.error} 
                placeholders={{
                    emailInput: "stephcurry30@ballerz.com"
                }}
            />
        )
    }

}