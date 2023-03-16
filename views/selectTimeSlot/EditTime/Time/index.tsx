import {View, Text, StyleSheet} from 'react-native'
import { IEditTimeViewProps } from '../../interface'
import { ITime } from '../../../../screens/createGame/selectTimeSlot'


const TimeView = (props: {time: ITime}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.hour}>
                {props.time.hour>=10?(props.time.hour):(`0${props.time.hour}`)}
            </Text>
            <Text style={styles.twoPoint}>:</Text>
            <Text style={styles.minute}>
                {props.time.minute>=10?(props.time.minute):(`0${props.time.minute}`)}
            </Text>
        </View>
    )
}


const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    hour: {
        fontSize: 15,
        // padding: 2,
        fontWeight: 'bold',
        color: "#969696"
    },

    twoPoint: {
        fontSize: 12,
        // padding: 2,
        fontWeight: 'bold',
        color: "#969696"

    },

    minute:{
        fontSize: 15,
        // padding: 2,
        fontWeight: "bold",
        color: "#969696"

    }

})

export default TimeView