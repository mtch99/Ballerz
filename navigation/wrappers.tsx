import React from "react";
import { AuthStackNavigator } from "./app/auth";
import { AppStack } from "./app";


export function AuthStackWrapper(){
    return(
        <AuthStackNavigator/>
    )
}

export function AppStackWrapper(){
    return(
        <AppStack/>
    )
}



