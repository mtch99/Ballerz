import styles from "./styles";
import React from "react";
import { View, Text } from "react-native";
import FriendsThereView from "./FriendsThere";
import { ActionsContainer } from "./Actions/actionsContainer";


export default class Bottom extends React.Component {

    render(): React.ReactNode {
        return(
            <View style={styles.container}>
                <ActionsContainer/>
                <FriendsThereView/>
            </View>
        )
    }
}