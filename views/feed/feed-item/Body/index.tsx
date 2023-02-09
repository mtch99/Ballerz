import { View, Text } from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import {styles} from "./styles"
import React from "react"
import LeftBody from "./Left"

export interface IActionContainerProps{}


export class Body extends React.Component<IActionContainerProps> {
    
  render() {
    return(
        <View style={styles.container}>
            <LeftBody/>
            {/* <View style={styles.dateTimeContatiner}>
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
            </View> */}
        </View>
    )
  }
}