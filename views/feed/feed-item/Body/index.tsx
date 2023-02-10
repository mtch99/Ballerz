import { View, Text } from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import {styles} from "./styles"
import React from "react"
import LeftBody from "./Left"
import BodyRightView from "./Right"

export interface IActionContainerProps{}


export class Body extends React.Component<IActionContainerProps> {
    
  render() {
    return(
        <View style={styles.container}>
            <LeftBody/>
            <BodyRightView/>
        </View>
    )
  }
}