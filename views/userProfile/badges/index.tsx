import React from "react";
import { IBadgeListViewProps } from "../interface";
import styles from "./styles";
import { View, Text, FlatList } from "react-native";


export class BadgeListView extends React.Component<IBadgeListViewProps>{
    
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.badgeText}>Badges</Text>
                <View style={styles.badgeListContainer}>
                    <FlatList
                        data={this.props.badgeList}
                        renderItem={
                            ({item}) => {
                                return(<Text style={styles.badgeItem}>{item.symbol}</Text>)
                            }
                        }
                        horizontal={true}
                    />
                </View>
            </View>
        )
    }
}