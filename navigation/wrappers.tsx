import React from "react";
import {FeedStackNavigator} from "./feed"
import { GroupChatStackNavigator } from "./groupChat";
import GroupChatProvider from "../controllers/groupChat/provider";


export function FeedStackWrapper(){
    return(
        <FeedStackNavigator/>
    )
}

export function GroupChatStackWrapper(){
    return(
        <GroupChatProvider
            navigation={{}}
        >
            <GroupChatStackNavigator/>
        </GroupChatProvider>
    )
}