import style from "./styles";
import React from "react";
import { View, Text } from "react-native";



export default class BodyRightView extends React.Component {

    render(): React.ReactNode {
        return(
            <View style={style.dateTimeContatiner}>
                <Text style={style.mardi}>Mardi</Text>
                <View style={style.timeContainer}>
                    <View style={style.startingHourTextContainer}>
                      <Text style={style.startingHourText}>17:00</Text>
                    </View>

                    <View style={style.traitSeparatorContainer}>  
                        <Text style={style.traitSeperator}>-</Text>
                    </View> 

                    <View style={style.endingHourTextContainer}>
                      <Text style={style.endingHourText1}>21:00</Text>
                    </View>
                </View>
            </View>
        )
    }
}