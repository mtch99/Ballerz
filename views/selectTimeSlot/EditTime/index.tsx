import React from "react";
import { IEditDateViewProps, IEditPlaceViewProps, IEditTimeViewProps } from "../interface";
import { StyleSheet, View, Text } from "react-native";
import ModifyButton from "../modifyButton";
import TimeView from "./Time";


export default abstract class EditTimeView extends React.Component<IEditTimeViewProps>{

    abstract header: string


    componentDidUpdate(prevProps: Readonly<IEditTimeViewProps>, prevState: Readonly<{}>, snapshot?: any): void {
        console.log(`EditTimeView did update: \n \n prevProps: ${JSON.stringify(prevProps)}
            \n \n newProps: ${JSON.stringify(this.props)}`)
    }
    
    render(){
        return(
            <View style={styles.subContainer}>
                <Text style={styles.subTitle}>
                    {this.header}
                </Text>
                <View style={styles.dateContainer}>

                    <TimeView
                        time={this.props.time}
                    />

                    <ModifyButton
                      onPress = {this.props.onPressModify}
                    />
                </View>
            </View>
        )
    }
}


export enum WeekDayEnumFR {
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
    "Dimanche"
} 
export type WeekDayFR = keyof typeof WeekDayEnumFR

export enum MonthEnumFr {
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai", 
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Decembre"
}
export type MonthFR = keyof typeof MonthEnumFr
interface IDate {
    weekDay: string
    monthDay: string
    month: string 
    year: string
}
export class EditDateView extends React.Component<IEditDateViewProps> {

    private parseDate(date: Date): IDate {
        const month = MonthEnumFr[date.getMonth()];
        const weekDay = WeekDayEnumFR[date.getDay()-1]
        const year = `${date.getFullYear()}`
        const monthDay = `${date.getDate()}`

        const result: IDate = {
            weekDay,
            monthDay,
            month,
            year
        }

        return result
    }


    render(){
        const date: IDate = this.parseDate(this.props.date)
        return(
            <View style={styles.subContainer}>
                <Text style={styles.subTitle}>
                    Jour
                </Text>
                <View style={styles.dateContainer}>

                    <Text
                        style={styles.dateText}
                    >
                        {date.weekDay} {date.monthDay} {date.month} {date.year}
                    </Text>

                    <ModifyButton
                      onPress = {this.props.onPressModify}
                    />
                </View>
            </View>
        )
    }
}


export class EditStartingTimeView extends EditTimeView {

    header: string
    constructor(props: IEditTimeViewProps){
        super(props)
        this.header = "Heure d'arrivée"
    }
}

export class EditEndingTimeView extends EditTimeView {

    header: string
    constructor(props: IEditTimeViewProps){
        super(props)
        this.header = "Heure de départ"
    }
}



const styles = StyleSheet.create({
    subContainer: {
        height: 80,
        paddingHorizontal: 10,
        marginBottom: 15,
        borderBottomWidth: 0.25
    },

    
    
    subTitle: {
        fontWeight: "300",
        // fontStyle: "italic",
        fontSize: 20,
        alignSelf: "flex-start",
        color: '#FFFFFF'
    },
    
    
    dateContainer:{
        flex:1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    
    
    modifyButton: {
        justifySelf: "flex-end",
        marginRight: 5
    },
    
    
    modifyText: {
        color: "blue"
    },

    placeNameText: {
        fontWeight: "bold",
        maxWidth: "75%"
    },

    dateText: {
        fontWeight: "bold",
        color: "#969696"
    }
})