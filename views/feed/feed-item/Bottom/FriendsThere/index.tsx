import styles from "./styles"
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";


interface IFriendsThereViewProps {
    onPress: () => void;
}

export default function FriendsThereView(props: IFriendsThereViewProps) {
    
    const handlePress = props.onPress
    
    const onPress = () => {
        handlePress()
    }
    return(
        <TouchableOpacity 
            style={styles.friendsThereContainer}
            onPress={() => {onPress()}}
        >
            <Text style={styles.friendsThereText}>
              0 amis présents
            </Text>
        </TouchableOpacity>
    )
}