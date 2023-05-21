

import styles from "./styles";
import React from "react";
import { View, Text } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons"


export interface IProps {
    text: string;
}
export default class Header extends React.Component<IProps> {

    render(): React.ReactNode {
        return(
            <View style={styles.container}>
                <MaterialIcons
                    name="place"
                    size={20}
                    style={{color: styles.placeNameText.color, alignSelf: 'flex-end'}}
                />
                <View style={styles.placeNameContainer}>
                  <Text style={styles.placeNameText}>{this.props.text}</Text>
                </View>
            </View>
        )
    }
}