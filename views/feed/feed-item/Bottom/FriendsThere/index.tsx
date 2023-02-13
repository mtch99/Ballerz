import styles from "./styles"
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { IUserProfileData } from "../../../../../app/features/feed/slice/interface";


interface IFriendsThereViewProps {
    onPress: () => void;
    friendsHere: IUserProfileData[]
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
            {
                props.friendsHere.length==0?(
                    <><Text style={styles.friendsThereText}>
                        0 amis
                    </Text></>
                ):(
                    <Text style={styles.friendsThereText}>
                        {props.friendsHere[0].username} et {props.friendsHere.length-1} autres amis
                    </Text>
                )
            }
            <Text style={styles.hereText}>
                y vont
            </Text>
        </TouchableOpacity>
    )
}