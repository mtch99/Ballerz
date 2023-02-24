import React from "react";
import { IUserProfileController } from "./interface";


export interface IUserProfileContext {
    controller: IUserProfileController
}

export const UserProfileContext = React.createContext<IUserProfileContext>({
    controller: {} as IUserProfileController
})



