

import styles from "./styles";
import React from "react";
import { View, Text } from "react-native";


export interface IProps {
    text: string;
}
export default class Header extends React.Component<IProps> {

    render(): React.ReactNode {
        return(
            <View style={styles.container}>
                <View style={styles.placeNameContainer}>
                  <Text style={styles.placeName}>{this.props.text}</Text>
                </View>
            </View>
        )
    }
}