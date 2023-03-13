import React from "react";
import {FeedStackNavigator} from "./feed"
import { GroupChatStackNavigator } from "./groupChat";
import { ExploreStackNavigator } from "./explore";


export function FeedStackWrapper(){
    return(
        <FeedStackNavigator/>
    )
}

export function GroupChatStackWrapper(){
    return(
        <GroupChatStackNavigator/>
    )
}


export function ExploreStackWrapper(){
    return(<ExploreStackNavigator/>)
}

