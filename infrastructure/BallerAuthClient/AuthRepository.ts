import * as struct from "../../domain/use-cases/Auth/types";
import { Amplify, Auth } from 'aws-amplify';
import {CognitoUser} from 'amazon-cognito-identity-js'
import awsmobile from './aws-exports';
import Adapter from './adapter'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { IAuthRepository } from "../../domain/use-cases/Auth/interface";
Amplify.configure(awsmobile);

export class AuthRepository implements IAuthRepository {

    private _currentUser: CognitoUser | null = null;
    private _currentUserData: struct.UserData | null = null;
    

    
    async signup(creds: struct.ISignupInput): Promise<struct.ISignupResult> {
        const result:struct.ISignupResult = {
            error: false,
        };

        const {email, password} = creds;
        const user:CognitoUser | null = await Auth.signUp({
            username: email,
            password: password
        }).then((result) => {
            return result.user
        })
        .catch(message => {
            const error:struct.ISignupRejection = Adapter.parseCognitoSignupError(message);
            result.error = error;
            return null;
        });

        if(user){
            this.__setCurrentUser(user);
        }

        if(this._currentUser){
            result.newUserData = Adapter.parseCognitoUser(this._currentUser)
            this.__storeLoginCreds(creds);
        }

        return result;
    }


    /**
     * Stores the login credentials in the local device storage
     * Before attem^ting to Login
     * @param creds 
     * @returns 
     * TODO: Test that given Creds, When lginn resolved, getLastLoginCreds returns the creds argument
     */
    
    async login(creds: struct.ILoginInput): Promise<struct.ILoginResult> {
        this.__storeLoginCreds(creds)

        const result: struct.ILoginResult = {
            error: false,
        }

        await Auth.signIn(creds.email, creds.password)
        .then((result: CognitoUser) => {
            this.__setCurrentUser(result)
        })
        .catch(description => {
            result.error = {
                reason: struct.LoginErrorReason.wrongEmailOrPassword,
                description,
            }
        })

        if(this._currentUser){
            result.user = Adapter.parseCognitoUser(this._currentUser)
        }


        return result;          
    }


    async getCurrentUser(): Promise<struct.UserData | null>{
        return this._currentUserData;
    }


    private __setCurrentUser(user: CognitoUser){
        this._currentUser = user;
        this._currentUserData = Adapter.parseCognitoUser(this._currentUser)
    }


    async getLastLoginCreds(): Promise<struct.ILoginInput | null> {

        const creds = await AsyncStorage.getItem("lastLoginCreds");
        if(creds){
            return JSON.parse(creds) as struct.ILoginInput
        }
        else{
            return null
        }

    }


    __storeLoginCreds(creds: struct.ILoginInput): void {
        AsyncStorage.setItem("lastLoginCreds", JSON.stringify(creds))
    }



    // async confirmSignup(confirmSignupParams: ConfirmSignupInputInterface): Promise<ConfirmSignupResponseInterface> {
    //     const result:ConfirmSignupResponseInterface ={
    //         error: null,
    //         success: false,
    //     }

    //     const confirmationCode = confirmSignupParams.confirmationCode
    //     const username = confirmSignupParams.email

    //     const confirmSignup = await Auth.confirmSignUp(username, confirmationCode).catch(err => {
    //         result.error = this.parseCognitoConfirmSignupError(err);
    //         return null
    //     })

    //     if(confirmSignup){result.success = true}

    //     return result;
    // }
    
    

    // async login(loginCreds: LoginInputInterface): Promise<LoginResponseInterface> {
    //     const result: LoginResponseInterface = {
    //         error: null,
    //     }

    //     const email = loginCreds.email
    //     const password = loginCreds.password

    //     await Auth.signIn(email, password).catch(err => {
    //         result.error = this.parseCognitoSignInError(err)
    //     })

    //     return result
    // }


    // async forgotPassword(email: string): Promise<ForgotPasswordResponseInterface> {

    //     const result:ForgotPasswordResponseInterface = {
    //         error: null,
    //         message: "Un lien de revérification vous a été envoyé"
    //     }

    //     await Auth.forgotPassword(email).catch(err => {
    //         result.error = this.parseCognitoForgotPasswordErrro(err)
    //         result.message = result.error.message
    //     })

    //     return result
    // }
    
}
