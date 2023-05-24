import style from "./styles";
import React from "react";
import { View, Text } from "react-native";
import moment from "moment";


export interface IBodyRightViewProps {
    startingDateTime: string
    endingDateTime: string 
}

const dateTimeFormatOptions: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    hourCycle: "h24",
    dayPeriod: "long",
    timeZone: "UTC",
    weekday: "long",
    month: "long",
    year: "numeric",
    minute:"2-digit",
    day:"2-digit"
}

export default class BodyRightView extends React.Component<IBodyRightViewProps> {

    startingDate = new Date (this.props.startingDateTime)
    startingHour = `${this.startingDate.getHours()<10?(`0${this.startingDate.getHours()}`):(this.startingDate.getHours())}`
    endingDate = new Date (this.props.endingDateTime)
    endingHour = `${this.endingDate.getHours()<10?(`0${this.endingDate.getHours()}`):(this.endingDate.getHours())}`

    startingDate_str = new Intl.DateTimeFormat("fr-CA", dateTimeFormatOptions).format(this.startingDate)
    endingDate_str = new Intl.DateTimeFormat("fr-CA", dateTimeFormatOptions).format(this.endingDate)

    

    getWeekDay(date_str: string): string{
        const wordsList = date_str.split(" ");
        if(wordsList.length>0){
            const firstWord = wordsList[0];
            const weekDay = firstWord.charAt(0).toUpperCase() + firstWord.substring(1);
            return weekDay
        } else {
            return date_str
        }
    }

    getMonth(date_str: string): string{
        const wordsList = date_str.split(" ");
        if(wordsList.length>0){
            const month = wordsList[2];
            return month.charAt(0).toUpperCase() + month.substring(1);
        } else {
            return date_str
        }
    }

    render(): React.ReactNode {
        const startingWeekDay = this.getWeekDay(this.startingDate_str)
        const todayAtMidnight = this.toMidnight(new Date())
        const sevenDayTimeSpanMS = 7*24*3600*1000
        const oneDayMS = 24*3600*1000
        let DateView = () => (<Text style={style.weekDay}>{startingWeekDay} prochain</Text>)
        const day = this.startingDate_str.split(" ")[1]
        const month = this.getMonth(this.startingDate_str)
        const dateDifferenceInDays = Math.abs((moment(this.startingDate).diff(moment(todayAtMidnight))/(24*3600*1000)))
        if(
            dateDifferenceInDays >= 7
        ){
            if(this.startingDate.getTime() < todayAtMidnight.getTime()){
                DateView = () => (<Text style={style.weekDay}>il y a {Math.floor(dateDifferenceInDays)} jours</Text>)
            } else {
                DateView = () => (<Text style={style.weekDay}>{startingWeekDay} {day} {month}</Text>)
            }
        }
        else if(this.startingDate.getTime() < todayAtMidnight.getTime()){
            if(dateDifferenceInDays <= 1){
                DateView = () => (<Text style={style.weekDay}>hier</Text>)
            }
            else {
                DateView = () => (<Text style={style.weekDay}>{startingWeekDay} dernier</Text>)
            }
        }
        else if(this.startingDate.getTime() > todayAtMidnight.getTime()){
            if(dateDifferenceInDays < 1){
                DateView = () => (<Text style={style.weekDay}>Aujourd'hui</Text>)
            }
            else if(dateDifferenceInDays < 2){
                DateView = () => (<Text style={style.weekDay}>Demain</Text>)
            }
            else {
                DateView = () => (<Text style={style.weekDay}>{startingWeekDay} prochain</Text>)
            }        
        }
        return(
            <View style={style.dateTimeContatiner}>
                <DateView/>
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


    private toMidnight(date: Date): Date {
        const newDate = new Date(date)
        newDate.setHours(0)
        return newDate
    }
}