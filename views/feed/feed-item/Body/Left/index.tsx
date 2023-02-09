import { View, Text } from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import {styles} from "./styles"
import React from "react"

export interface IActionContainerProps{}


export default class LeftBody extends React.Component<IActionContainerProps> {
    
  render() {
    return(

        <View style={styles.container}>
              <View style={styles.playerNumContainer}>
                <Text style={styles.playersNumText1}>20</Text>
                <Text style={styles.playersText1}>joueurs</Text>
              </View>
              <View style={styles.badgeNumContainer}>
                <Text style={styles.playersNumText3}>20</Text>
                <View style={styles.playersNumText3Filler}>
                  <Text style={styles.playersText3}>joueurs</Text>
                </View>
              </View>
        </View>

    )
  }
}