import styles from "./styles";
import React from "react";
import { View, Text } from "react-native";
import FriendsThereView from "./FriendsThere";
import { ActionsContainer } from "./Actions/actionsContainer";


interface IBottomViewProps{
    onPressFriendsThere: () => void
}

export default function BottomView(props: IBottomViewProps) {

    return(
        <View style={styles.container}>
            <ActionsContainer/>
            <FriendsThereView
                onPress={() => {props.onPressFriendsThere()}}
            />
        </View>
    )
}