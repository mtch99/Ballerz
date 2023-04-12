import style from "./styles";
import React from "react";
import { View, Text } from "react-native";

export interface IBodyRightViewProps {
    startingDateTime: string
    endingDateTime: string 
}

export default class BodyRightView extends React.Component<IBodyRightViewProps> {

    startingDate = new Date (this.props.startingDateTime)
    startingHour = `${this.startingDate.getHours()<10?(`0${this.startingDate.getHours()}`):(this.startingDate.getHours())}`
    endingDate = new Date (this.props.endingDateTime)
    endingHour = `${this.endingDate.getHours()<10?(`0${this.endingDate.getHours()}`):(this.endingDate.getHours())}`

    startingDate_str = new Intl.DateTimeFormat("fr-CA", {
        hour: "2-digit",
        hourCycle: "h24",
        dayPeriod: "long",
        timeZone: "UTC",
          weekday: "long",
          month: "long",
          year: "numeric",
          minute:"2-digit",
          day:"2-digit"
    }).format(this.startingDate)
    endingDate_str = new Intl.DateTimeFormat("fr-CA", {
        hour: "2-digit",
        hourCycle: "h24",
        dayPeriod: "long",
        timeZone: "UTC",
          weekday: "long",
          month: "long",
          year: "numeric",
          minute:"2-digit",
          day:"2-digit"
    }).format(this.endingDate)

    




    captalizeFirstLetter(str: string): string{
        const wordsList = str.split(" ");
        if(wordsList.length>0){
            const firstWord = wordsList[0];
            const capitalizedFirstLetter = wordsList[0].charAt(0).toUpperCase()
            return capitalizedFirstLetter + firstWord.substring(1)
        } else {
            return str
        }
    }

    render(): React.ReactNode {
        const startingWeekDay = this.captalizeFirstLetter(this.startingDate_str)
        return(
            <View style={style.dateTimeContatiner}>
                <Text style={style.mardi}>{startingWeekDay}</Text>
                <View style={style.timeContainer}>
                    <View style={style.startingHourTextContainer}>
                      <Text style={style.startingHourText}>{this.startingHour}:00</Text>
                    </View>

                    <View style={style.traitSeparatorContainer}>  
                        <Text style={style.traitSeperator}>-</Text>
                    </View> 

                    <View style={style.endingHourTextContainer}>
                      <Text style={style.endingHourText1}>{this.endingHour}:00</Text>
                    </View>
                </View>
            </View>
        )
    }
}