import * as struct from "../../domain/use-cases/Auth/types";
import {CognitoUser} from 'amazon-cognito-identity-js'


export default class Adapter {

    // Parse a cignito signup error into a Signup Error
    static parseCognitoSignupError(description: {
        code: string,
        name: string
    }): struct.ISignupRejection {
        let errorReason: struct.RepoSignupErrorReason
        if(description.code == 'UsernameExistsException'){
            errorReason = struct.RepoSignupErrorReason.EMAIL_ALREADY_EXISTS
        }else{
            errorReason = struct.RepoSignupErrorReason.SERVER_ERROR
        }
        const error:struct.ISignupRejection = {
            description: description.name,
            reason: errorReason
        }

        return error;
    }

    static parseCognitoUser(user: CognitoUser): struct.UserBasicData{
        return {
            email: user.getUsername()
        }
    }


    // static parseCognitoConfirmSignupError(message: string): ConfirmSignupErrorInterface{
    //     return {
    //         message,
    //         reason: ConfirmSignupErrorReason.wrongCode
    //     }
    // }

    // static parseCognitoSignInError(message: string): struct.LoginError{
        
    //     return {
    //         message,
    //         reason: LoginErrorReason.wrongPassword
    //     }
    // }

    // static parseCognitoForgotPasswordErrro(message: string): struct.ForgotPasswordError{
        
    //     return {
    //         message,
    //         reason: ForgotPasswordRejectionReason.unregisteredEmail
    //     }
    // }
}