import { View, Text } from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import {styles} from "./styles"
import React from "react"

export interface IActionContainerProps{}


export class ActionsContainer extends React.Component<IActionContainerProps> {
    
  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.playText}>jouer</Text>
        <Icon name="commenting-o" style={styles.commentIcon}></Icon>
        <Text style={styles.inviteText}>inviter</Text>
      </View>
    )
  }
}