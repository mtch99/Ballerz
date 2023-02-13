import React from "react";
import { FeedContext, IFeedContext } from "../../controllers/feed/provider";
import FeedView from "../../views/feed";
import { IBadgeData, IFeedState } from "../../app/features/feed/slice/interface";
import { FlatList, View, Text } from "react-native";
import { BadgeItemView } from "./badgeItem";


export interface IBadgeListViewPropsWithoutNavigation {
    badgeList: IBadgeData[]
}

export interface BadgeListViewProps extends IBadgeListViewPropsWithoutNavigation{

}


export function BadgeListView(props: IBadgeListViewPropsWithoutNavigation){

    return(
        <FlatList
            data={props.badgeList}
            renderItem={({item, index}) =>{
                return(
                    <BadgeItemView
                        badge={item}
                    />
                )
            }}
        />
    )
}