import { View, Text, TouchableOpacity, KeyboardAvoidingView, TextInput } from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import {styles} from "./styles"
import React from "react"

export interface IActionContainerProps{
	onPressInvite: () => void
	onPressPlay: () => void
	onPressCommentButton: () => void
}


export function ActionsContainer(props:IActionContainerProps) {


    return(
      	<View style={styles.actionsContainer}>

			<TouchableOpacity
				onPress={() => {props.onPressPlay()}}
			>
				<Text style={styles.playText}>jouer</Text>
			</TouchableOpacity>


			{/* <TouchableOpacity
				onPress={() => {props.onPressCommentButton()}}
			>
        		<Icon name="commenting-o" style={styles.commentIcon}></Icon>
			</TouchableOpacity> */}

			<TouchableOpacity
				onPress={() => {props.onPressInvite()}}
			>
        		<Text style={styles.inviteText}>inviter</Text>
			</TouchableOpacity>

		</View>
    )
}