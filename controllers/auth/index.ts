import AuthUCI from "../../domain/use-cases/auth";
import { ISignupInput, ISignupResult, IConfirmSignupInput, IConfirmSignupResult, ILoginInput, ILoginResult } from "../../domain/use-cases/auth/types";
import IAuthController from "./interface";
import IAuthUCI, { IAuthUCIEventListener, IDefineUsernameInput, IDefineUsernameResult } from "../../domain/use-cases/auth/interface";



export class AuthController implements IAuthController {

    private authUseCase: IAuthUCI = fakeUseCase

    createUseCase(model: IAuthUCIEventListener){
        this.authUseCase = new AuthUCI(model)
        console.log(`\n Auth usecase initialized \n`)
    }
    
    async signinLastUser(): Promise<false | ILoginResult> {
        const result = await this.authUseCase.signinLastUser();
        return result
    }

    async login(input: ILoginInput): Promise<ILoginResult> {
        return this.authUseCase.login(input)
    }
    signup(input: ISignupInput): Promise<ISignupResult> {
        return this.authUseCase.signup(input)
    }
    
    confirmSignup(input: IConfirmSignupInput): Promise<IConfirmSignupResult> {
        return this.authUseCase.confirmSignup(input)
    }
    
}


const authController = new AuthController();
export default authController;


const fakeUseCase: IAuthUCI = {
    signup: function (input: ISignupInput): Promise<ISignupResult> {
        throw new Error("Function not implemented.");
    },
    confirmSignup: function (input: IConfirmSignupInput): Promise<IConfirmSignupResult> {
        throw new Error("Function not implemented.");
    },
    login: function (signInInput: ILoginInput): Promise<ILoginResult> {
        throw new Error("Function not implemented.");
    },
    getLastLoginCreds: function (): Promise<ILoginInput | null> {
        throw new Error("Function not implemented.");
    },
    signinLastUser: function (): Promise<false | ILoginResult> {
        throw new Error("Function not implemented.");
    }
}