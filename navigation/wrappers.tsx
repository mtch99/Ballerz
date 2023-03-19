import React from "react";
import {FeedStackNavigator} from "./feed"
import { ExploreStackNavigator } from "./explore";
import { AuthStackNavigator } from "./auth";
import { AppStackNavigator } from "./app";


export function AuthStackWrapper(){
    return(
        <AuthStackNavigator/>
    )
}

export function AppStackWrapper(){
    return(
        <AppStackNavigator/>
    )
}



