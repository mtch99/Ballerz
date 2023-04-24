import { View, Text, TouchableOpacity, KeyboardAvoidingView, TextInput } from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import {styles} from "./styles"
import React from "react"

export interface IActionContainerProps{
	onPressInvite: () => void
	onPressPlay: () => void
	onPressCommentButton: () => void
	isAttending: boolean
}


export function ActionsContainer(props:IActionContainerProps) {

	const playButtonLabel = props.isAttending?("annuler"):("jouer")

    return(
      	<View style={styles.actionsContainer}>

			<TouchableOpacity
				onPress={() => {props.onPressPlay()}}
			>
				<Text style={styles.playText}>{playButtonLabel}</Text>
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