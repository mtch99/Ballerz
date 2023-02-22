import React from "react";
import { View, Text, SafeAreaView, FlatList } from "react-native";
import { IBadgeData } from "../../app/features/feed/slice/interface";
import { BadgeListView } from "../../views/badgeList";


export interface IBadgeListScreenPropsWithoutNavigation {
    badgeList: IBadgeData[]
}


export interface IBadgeListScreenProps extends IBadgeListScreenPropsWithoutNavigation{
    
}


export default class BadgeListScreen extends React.Component<IBadgeListScreenProps>{

    constructor(props: IBadgeListScreenProps) {
        super(props);
        // console.log(this.props)
    }


    render(): React.ReactNode {
        return(
            <SafeAreaView>
                {this.props.badgeList.length > 0?(
                    <BadgeListView
                        badgeList={this.props.badgeList}
                    />
                ):(
                    <></>
                )}
            </SafeAreaView>
        )
    }
}