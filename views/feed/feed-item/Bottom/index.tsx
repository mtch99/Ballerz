import styles from "./styles";
import React from "react";
import { View, Text } from "react-native";
import FriendsThereView from "./FriendsThere";
import { ActionsContainer } from "./Actions/actionsContainer";
import { IUserProfileData } from "../../../../app/features/feed/slice/interface";


interface IBottomViewProps{
    friendsThere: IUserProfileData[]
    onPressFriendsThere: () => void
    onPressInvite: () => void
}

export default function BottomView(props: IBottomViewProps) {

    return(
        <View style={styles.container}>
            <ActionsContainer
                onPressInvite={() => {props.onPressInvite()}}
            />
            <FriendsThereView
                friendsHere={props.friendsThere}
                onPress={() => {props.onPressFriendsThere()}}
            />
        </View>
    )
}