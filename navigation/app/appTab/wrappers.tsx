import React from "react";
import { ExploreStackNavigator } from "../../explore";
import { FeedStackNavigator } from "../../feed";
import { GroupChatStackNavigator } from "../../groupChat";



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

