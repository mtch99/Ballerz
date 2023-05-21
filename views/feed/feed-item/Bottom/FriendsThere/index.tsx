import styles from "./styles"
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { IUserProfileDataState } from "../../../../../app/features/types";


interface IFriendsThereViewProps {
    onPress: () => void;
    friendsHere: IUserProfileDataState[]
}

export default function FriendsThereView(props: IFriendsThereViewProps) {
    
    const handlePress = props.onPress
    
    const onPress = () => {
        handlePress()
    }
    return(
        <View 
            style={styles.friendsThereContainer}
        >
            {
                props.friendsHere.length==0?(
                    <><Text 
                        ellipsizeMode="tail"
                        style={styles.friendsThereText}
                    >
                        0 amis ici
                    </Text></>
                ):(
                    <Text 
                        ellipsizeMode="tail"
                        numberOfLines={1}
                        style={styles.friendsThereText}
                    >
                        {props.friendsHere[0].username} et {props.friendsHere.length-1} autres amis ici
                    </Text>
                )
            }
        </View>
    )
}