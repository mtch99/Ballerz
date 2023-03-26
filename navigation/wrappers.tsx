import React from "react";
import {FeedStackNavigator} from "./feed"
import { ExploreStackNavigator } from "./explore";
import { AppTab } from "./app/appTab";
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



