import styles from "./styles"
import React from "react";
import { View, Text } from "react-native";


export default class FriendsThereView extends React.Component {

    render(): React.ReactNode {
        return(
            <View style={styles.friendsThereContainer}>
                <Text style={styles.friendsThereText}>
                  username1 et 2 autres y vont
                </Text>
            </View>
        )
    }
}