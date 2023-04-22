import styles from "./styles";
import React from "react";
import { View, Text } from "react-native";
import FriendsThereView from "./FriendsThere";
import { ActionsContainer } from "./Actions/actionsContainer";
import { IUserProfileDataState } from "../../../../app/features/types";


interface IBottomViewProps{
    friendsThere: IUserProfileDataState[]
    onPressFriendsThere: () => void
    onPressInvite: () => void
    onPressPlay: () => void
    onPressCommentButton: () => void
}

export default function BottomView(props: IBottomViewProps) {

    return(
        <View style={styles.container}>
            <ActionsContainer
                onPressCommentButton={() => {props.onPressCommentButton()}}
                onPressInvite={() => {props.onPressInvite()}}
                onPressPlay={() => {props.onPressPlay()}}
            />
            {/* <FriendsThereView
                friendsHere={props.friendsThere}
                onPress={() => {props.onPressFriendsThere()}}
            /> */}
        </View>
    )
}