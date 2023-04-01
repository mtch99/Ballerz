import * as struct from "../../domain/use-cases/auth/types";
import {CognitoUser} from 'amazon-cognito-identity-js'


export default class SignupAdapter {

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

}



export class SigninAdapter {

    static parseCognitoSigninError(error: ICognitoSignupError): struct.ILoginRejection{
        let result: struct.ILoginRejection;
        switch(error.name){
            case CognitoSignupErrorName['UserNotFoundException']:
                result = {
                    reason: struct.LoginErrorReason.UNREGISTERED_EMAIL,
                    description: "Cet email n'appartient à aucun untilisateur"
                }
                break;

            case CognitoSignupErrorName['WRONG_EMAIL_OR_PASSWORD']:
                result = {
                    reason: struct.LoginErrorReason.WRONG_PASSWORD,
                    description: "Mot de passe incorrect"
                }
                break;
            
            case CognitoSignupErrorName['UsernameExistsException']:
                result = {
                    reason: struct.LoginErrorReason.WRONG_PASSWORD,
                    description: "Cet a email appartient déjà à un utilisateur",
                }
                break;

            case CognitoSignupErrorName['UserNotConfirmedException']:
                result = {
                    reason: struct.LoginErrorReason.USER_NOT_CONFIRMED,
                    description: "Vous n'avez pas encore confirmé votre email"
                }
                break;



            
            default: 
                result = {
                    reason: struct.LoginErrorReason.UNREGISTERED_EMAIL,
                    description: "Cet email n'appartient à aucun untilisateur"
                }
                break;
        }

        return result
    }
}


export interface ICognitoSignupError {
    name: string
}


export enum CognitoSignupErrorName {
    UserNotFoundException="UserNotFoundException",
    WRONG_EMAIL_OR_PASSWORD="WRONG_EMAIL_OR_PASSWORD",
    UsernameExistsException="UsernameExistsException",
    UserNotConfirmedException="UserNotConfirmedException"
}