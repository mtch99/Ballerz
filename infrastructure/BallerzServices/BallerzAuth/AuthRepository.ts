import * as struct from "../../../domain/use-cases/auth/types";
import { IAuthRepository } from "../../../domain/use-cases/auth/interface";
import { Amplify, Auth } from 'aws-amplify';
import {AuthenticationDetails, ChallengeName, ClientMetadata, CognitoRefreshToken, CognitoUser, CognitoUserAttribute, CognitoUserSession, GetSessionOptions, IAuthenticationCallback, ICognitoUserAttributeData, IMfaSettings, MFAOption, NodeCallback, UpdateAttributesNodeCallback, UserData} from 'amazon-cognito-identity-js'
import awsmobile from '../aws-exports';
import SignupAdapter, { SigninAdapter } from './adapter'
import AsyncStorage from '@react-native-async-storage/async-storage';
Amplify.configure(awsmobile);
import {isDevice} from 'expo-device';

export class AuthRepository implements IAuthRepository {
    
    async isFirstLaunch(): Promise<boolean> {
        const isFirstLaunch = await AsyncStorage.getItem('isFirstLaunch');
        if(isFirstLaunch == 'false'){
            return false
        } else {
            await AsyncStorage.setItem('isFirstLaunch', 'false');
            return true
        }
    }

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

        let email: string = creds.email
        let password: string = creds.password

        if(!isDevice){
            console.log(`Auth Repository detected simulator. Auto signing in default user`)
            email = creds.email
            password = creds.password
            const user: CognitoUser = default_user
            this.__setCurrentUser(user)
            result = {...result, user:SignupAdapter.parseCognitoUser(user)}
            return result
        }
        
        await Auth.signIn(email, password)
        .then((result: CognitoUser) => {
            this.__setCurrentUser(result)
        })
        .catch((error) => {
            result.error = SigninAdapter.parseCognitoSigninError(error)
            if(result.error.reason == struct.LoginErrorReason['USER_NOT_CONFIRMED']){
                result = {
                    error: false,
                    user: {
                        email
                    }
                }
                return result
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
            if(!isDevice){
                const result: struct.ILoginInput = {
                    email: "user@dummy.com",
                    password: "dummypassword"
                }
                return result
            }
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

const default_user: CognitoUser = {
    setSignInUserSession: function (signInUserSession: CognitoUserSession): void {
        throw new Error("Function not implemented.");
    },
    getSignInUserSession: function (): CognitoUserSession | null {
        throw new Error("Function not implemented.");
    },
    getUsername: function (): string {
        return "user@dummy.com";
    },
    getAuthenticationFlowType: function (): string {
        throw new Error("Function not implemented.");
    },
    setAuthenticationFlowType: function (authenticationFlowType: string): string {
        throw new Error("Function not implemented.");
    },
    getCachedDeviceKeyAndPassword: function (): void {
        throw new Error("Function not implemented.");
    },
    getSession: function (callback: ((error: Error, session: null) => void) | ((error: null, session: CognitoUserSession) => void), options?: GetSessionOptions | undefined): void {
        throw new Error("Function not implemented.");
    },
    refreshSession: function (refreshToken: CognitoRefreshToken, callback: NodeCallback<any, any>, clientMetadata?: ClientMetadata): void {
        throw new Error("Function not implemented.");
    },
    authenticateUser: function (authenticationDetails: AuthenticationDetails, callbacks: IAuthenticationCallback): void {
        throw new Error("Function not implemented.");
    },
    initiateAuth: function (authenticationDetails: AuthenticationDetails, callbacks: IAuthenticationCallback): void {
        throw new Error("Function not implemented.");
    },
    confirmRegistration: function (code: string, forceAliasCreation: boolean, callback: NodeCallback<any, any>, clientMetadata?: ClientMetadata): void {
        throw new Error("Function not implemented.");
    },
    sendCustomChallengeAnswer: function (answerChallenge: any, callback: IAuthenticationCallback, clientMetaData?: ClientMetadata): void {
        throw new Error("Function not implemented.");
    },
    resendConfirmationCode: function (callback: NodeCallback<Error, any>, clientMetaData?: ClientMetadata): void {
        throw new Error("Function not implemented.");
    },
    changePassword: function (oldPassword: string, newPassword: string, callback: NodeCallback<Error, "SUCCESS">, clientMetadata?: ClientMetadata): void {
        throw new Error("Function not implemented.");
    },
    forgotPassword: function (callbacks: { onSuccess: (data: any) => void; onFailure: (err: Error) => void; inputVerificationCode?: ((data: any) => void) | undefined; }, clientMetaData?: ClientMetadata): void {
        throw new Error("Function not implemented.");
    },
    confirmPassword: function (verificationCode: string, newPassword: string, callbacks: { onSuccess: (success: string) => void; onFailure: (err: Error) => void; }, clientMetaData?: ClientMetadata): void {
        throw new Error("Function not implemented.");
    },
    setDeviceStatusRemembered: function (callbacks: { onSuccess: (success: string) => void; onFailure: (err: any) => void; }): void {
        throw new Error("Function not implemented.");
    },
    setDeviceStatusNotRemembered: function (callbacks: { onSuccess: (success: string) => void; onFailure: (err: any) => void; }): void {
        throw new Error("Function not implemented.");
    },
    getDevice: function (callbacks: { onSuccess: (success: string) => void; onFailure: (err: Error) => void; }) {
        throw new Error("Function not implemented.");
    },
    forgetDevice: function (callbacks: { onSuccess: (success: string) => void; onFailure: (err: Error) => void; }): void {
        throw new Error("Function not implemented.");
    },
    forgetSpecificDevice: function (deviceKey: string, callbacks: { onSuccess: (success: string) => void; onFailure: (err: Error) => void; }): void {
        throw new Error("Function not implemented.");
    },
    sendMFACode: function (confirmationCode: string, callbacks: { onSuccess: (session: CognitoUserSession, userConfirmationNecessary?: boolean | undefined) => void; onFailure: (err: any) => void; }, mfaType?: string | undefined, clientMetadata?: ClientMetadata): void {
        throw new Error("Function not implemented.");
    },
    listDevices: function (limit: number, paginationToken: string | null, callbacks: { onSuccess: (data: any) => void; onFailure: (err: Error) => void; }): void {
        throw new Error("Function not implemented.");
    },
    completeNewPasswordChallenge: function (newPassword: string, requiredAttributeData: any, callbacks: IAuthenticationCallback, clientMetadata?: ClientMetadata): void {
        throw new Error("Function not implemented.");
    },
    signOut: function (callback?: (() => void) | undefined): void {
        throw new Error("Function not implemented.");
    },
    globalSignOut: function (callbacks: { onSuccess: (msg: string) => void; onFailure: (err: Error) => void; }): void {
        throw new Error("Function not implemented.");
    },
    verifyAttribute: function (attributeName: string, confirmationCode: string, callbacks: { onSuccess: (success: string) => void; onFailure: (err: Error) => void; }): void {
        throw new Error("Function not implemented.");
    },
    getUserAttributes: function (callback: NodeCallback<Error, CognitoUserAttribute[]>): void {
        throw new Error("Function not implemented.");
    },
    updateAttributes: function (attributes: (CognitoUserAttribute | ICognitoUserAttributeData)[], callback: UpdateAttributesNodeCallback<Error, string, any>, clientMetadata?: ClientMetadata): void {
        throw new Error("Function not implemented.");
    },
    deleteAttributes: function (attributeList: string[], callback: NodeCallback<Error, string>): void {
        throw new Error("Function not implemented.");
    },
    getAttributeVerificationCode: function (name: string, callback: { onSuccess: (success: string) => void; onFailure: (err: Error) => void; inputVerificationCode?: ((data: string) => void | null) | undefined; }, clientMetadata?: ClientMetadata): void {
        throw new Error("Function not implemented.");
    },
    deleteUser: function (callback: NodeCallback<Error, string>): void {
        throw new Error("Function not implemented.");
    },
    enableMFA: function (callback: NodeCallback<Error, string>): void {
        throw new Error("Function not implemented.");
    },
    disableMFA: function (callback: NodeCallback<Error, string>): void {
        throw new Error("Function not implemented.");
    },
    getMFAOptions: function (callback: NodeCallback<Error, MFAOption[]>): void {
        throw new Error("Function not implemented.");
    },
    getUserData: function (callback: NodeCallback<Error, UserData>, params?: any): void {
        throw new Error("Function not implemented.");
    },
    associateSoftwareToken: function (callbacks: { associateSecretCode: (secretCode: string) => void; onFailure: (err: any) => void; }): void {
        throw new Error("Function not implemented.");
    },
    verifySoftwareToken: function (totpCode: string, friendlyDeviceName: string, callbacks: { onSuccess: (session: CognitoUserSession) => void; onFailure: (err: Error) => void; }): void {
        throw new Error("Function not implemented.");
    },
    setUserMfaPreference: function (smsMfaSettings: IMfaSettings | null, softwareTokenMfaSettings: IMfaSettings | null, callback: NodeCallback<Error, string>): void {
        throw new Error("Function not implemented.");
    },
    sendMFASelectionAnswer: function (answerChallenge: string, callbacks: { onSuccess: (session: CognitoUserSession) => void; onFailure: (err: any) => void; mfaRequired?: ((challengeName: ChallengeName, challengeParameters: any) => void) | undefined; totpRequired?: ((challengeName: ChallengeName, challengeParameters: any) => void) | undefined; }): void {
        throw new Error("Function not implemented.");
    }
}
