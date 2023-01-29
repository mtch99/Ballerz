import { ILoginCredentials } from "./types";

export interface IAuthEventListener {
    onNewLoggedInUser: (creds: ILoginCredentials): void;
}


