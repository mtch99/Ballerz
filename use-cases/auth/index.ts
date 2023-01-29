import { IAuthEventListener } from "./inteface";
import { ILoginCredentials } from "./types";

export class AuthUseCase{

    listener: IAuthEventListener
    constructor(listener: IAuthEventListener){
        this.listener = listener;
    }

    login(creds: ILoginCredentials) {
        this.listener.onNewLoggedInUser(creds)
    }
}