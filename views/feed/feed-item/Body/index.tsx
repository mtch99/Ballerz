import { View, Text } from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import {styles} from "./styles"
import React from "react"

export interface IActionContainerProps{}


export class ActionsContainer extends React.Component<IActionContainerProps> {
    
  render() {
    return(
        <View style={styles.container}>
            <View style={styles.bodyLeftContainer}>
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
            <View style={styles.dateTimeContatiner}>
              <Text style={styles.mardi}>Mardi</Text>
              <View style={styles.timeContainer}>
                <View style={styles.startingHourTextColumn}>
                  <Text style={styles.startingHourText}>15:00</Text>
                  <Text style={styles.trait_separator}>-</Text>
                </View>
                <View style={styles.startingHourTextColumnFiller}>
                  <Text style={styles.endingHourText1}>15:00</Text>
                </View>
              </View>
            </View>
      </View>
    )
  }
}