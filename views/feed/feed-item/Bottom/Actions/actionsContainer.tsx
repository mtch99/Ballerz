import { View, Text, TouchableOpacity } from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import {styles} from "./styles"
import React from "react"

export interface IActionContainerProps{
	onPressInvite: () => void
	onPressPlay: () => void
}


export function ActionsContainer(props:IActionContainerProps) {
    

    return(
      <View style={styles.container}>
		<TouchableOpacity
			onPress={() => {props.onPressPlay()}}
		>
			<Text style={styles.playText}>jouer</Text>
		</TouchableOpacity>
        <Icon name="commenting-o" style={styles.commentIcon}></Icon>
		<TouchableOpacity
			onPress={() => {props.onPressInvite()}}
		>
        	<Text style={styles.inviteText}>inviter</Text>
		</TouchableOpacity>
      </View>
    )
}