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
                <Text style={styles.playersNum}>20</Text>
                <Text style={styles.playersText}>joueurs</Text>
              </View>
              <View style={styles.badgeNumContainer}>
                <Text style={styles.badgeNum}>20</Text>
                <View style={styles.badgesTextContainer}>
                  <Text style={styles.badgesText}>badges</Text>
                </View>
              </View>
        </View>

    )
  }
}