import React from "react";
import { View, Text, SafeAreaView, FlatList } from "react-native";
import { IBadgeData } from "../../app/features/feed/slice/interface";


export interface IBadgeListScreenPropsWithoutNavigation {
    badgeList: IBadgeData[]
}


export interface IBadgeListScreenProps extends IBadgeListScreenPropsWithoutNavigation{
    
}


export default class BadgeListScreen extends React.Component<IBadgeListScreenProps>{

    constructor(props: IBadgeListScreenProps) {
        super(props);
        console.log(this.props)
    }


    render(): React.ReactNode {
        return(
            <SafeAreaView>
                {this.props.badgeList.length > 0?(
                    <FlatList
                        data={this.props.badgeList}
                        renderItem={({item, index}) =>{
                            return(
                                <View>
                                    <Text>
                                        {item.name}
                                    </Text>
                                    <Text>
                                        {item.description}
                                    </Text>
                                </View>
                            )
                        }}
                    />

                ):(
                    <></>
                )}
            </SafeAreaView>
        )
    }
}