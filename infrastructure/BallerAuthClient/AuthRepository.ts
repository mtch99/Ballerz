import * as struct from "../../domain/use-cases/Auth/types";
import { Amplify, Auth } from 'aws-amplify';
import {CognitoUser} from 'amazon-cognito-identity-js'
import awsmobile from './aws-exports';
import SignupAdapter, { SigninAdapter } from './adapter'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { IAuthRepository } from "../../domain/use-cases/Auth/interface";
Amplify.configure(awsmobile);
import {isDevice} from 'expo-device';

export class AuthRepository implements IAuthRepository {

    async confirmSignup(input: struct.IConfirmSignupInput): Promise<struct.IConfirmSignupResult> {
        const error: struct.IConfirmSignupResult['error'] = await Auth.confirmSignUp(input.email, input.code, {forceAliasCreation:true})
        .then(() => {
            return false as false
        })
        .catch(
            (err) => {
                const result: struct.IConfirmSignupResult['error'] = {
                        reason: struct.ConfirmSignupErrorReason.WRONG_CODE,
                        code: 404
                }
                return result
            }
        )

        return {
            error
        }

    }

    private _currentUser: CognitoUser | null = null;
    private _currentUserData: struct.UserBasicData | null = null;
    

    
    async signup(creds: struct.ISignupInput): Promise<struct.ISignupResult> {
        this.__storeSignupCreds(creds)
        const result:struct.ISignupResult = {
            error: false,
        };

        const {email, password} = creds;
        const user:CognitoUser | null = await Auth.signUp(
            {
                username: email,
                password: password,
                autoSignIn: {
                    enabled: true
                }
            },
        ).then((result) => {
            return result.user
        })
        .catch(message => {
            const error:struct.ISignupRejection = SignupAdapter.parseCognitoSignupError(message);
            result.error = error;
            return null;
        });

        if(user){
            this.__setCurrentUser(user);
            this.__storeLoginCreds(creds);
        }

        if(this._currentUser){
            result.newUserData = SignupAdapter.parseCognitoUser(this._currentUser)
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

        let result: struct.ILoginResult = {
            error: false,
        }

        let email: string
        let password: string

        if(!isDevice){
            // email = "foo@bar.com"
            // password="validpassword1"
            email = creds.email
            password = creds.password
            // password="UknowitsaDummyPassword123"
        }
        else{
            email = creds.email
            password = creds.password
        }
        
        await Auth.signIn(email, password)
        .then((result: CognitoUser) => {
            this.__setCurrentUser(result)
        })
        .catch((error) => {
            // console.error(JSON.stringify(error));
            result.error = SigninAdapter.parseCognitoSigninError(error)
            if(result.error.reason == struct.LoginErrorReason['USER_NOT_CONFIRMED']){
                result = {
                    error: false,
                    user: {
                        email
                    }
                }
            }
        })

        if(this._currentUser){
            result.user = SignupAdapter.parseCognitoUser(this._currentUser)
        }


        return result;          
    }


    async getCurrentUser(): Promise<struct.UserBasicData | null>{
        return this._currentUserData;
    }


    private __setCurrentUser(user: CognitoUser){
        this._currentUser = user;
        this._currentUserData = SignupAdapter.parseCognitoUser(this._currentUser)
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

    async getLastSignupCreds(): Promise<struct.ISignupInput | null> {
        const creds = await AsyncStorage.getItem("lastSignupCreds");
        if(creds){
            return JSON.parse(creds) as struct.ISignupInput
        }
        else{
            return null
        }
    }


    __storeLoginCreds(creds: struct.ILoginInput): void {
        AsyncStorage.setItem("lastLoginCreds", JSON.stringify(creds))
    }

    __storeSignupCreds(creds: struct.ISignupInput): void {
        AsyncStorage.setItem("lastSignupCreds", JSON.stringify(creds))
    }


    
}
