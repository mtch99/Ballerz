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

}



export class SignupAdapter {

    static parseCognitoSignupError(error: ICognitoSignupError): struct.ILoginRejection{
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
            

            default: 
                result = {
                    reason: struct.LoginErrorReason.UNREGISTERED_EMAIL,
                    description: "Cet email n'appartient à aucun untilisateur"
                }
        }

        return result
    }
}


export interface ICognitoSignupError {
    name: string


}


export enum CognitoSignupErrorName {
    UserNotFoundException="UserNotFoundException",
    WRONG_EMAIL_OR_PASSWORD="WRONG_EMAIL_OR_PASSWORD"
}