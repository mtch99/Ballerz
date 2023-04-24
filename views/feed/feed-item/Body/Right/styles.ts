import { StyleSheet} from "react-native";


const style = StyleSheet.create({
    dateTimeContatiner: {
        height: 48,
        backgroundColor: "#F12F12F12",
        flexDirection: "column",
        marginLeft: 20,
        alignItems: "center",
        justifyContent: "center",
        flexGrow: 1
    },
    weekDay: {
        color: "#F5F8FA",
        alignSelf: "center",
        fontWeight: "bold"
    },
    timeContainer: {
        width: 132,
        backgroundColor: "#F12F12F12",
        flexDirection: "row",
    },
    traitSeparatorContainer:{
        flex: 1,
        alignItems: "center",
    },
    traitSeperator: {
      fontFamily: "Cochin",
      color: "#F7F7F7",
      flexGrow: 1,
    },
    startingHourTextContainer: {
      flexDirection: "row",
      alignSelf: "center",
      marginLeft: 15
    },
    startingHourText: {
      color: "#F5F8FA",
      fontSize: 17,
      alignSelf: "center",
    },
    endingHourText1: {
      color: "#F5F8FA",
      fontSize: 17,
    },
    endingHourTextContainer: {
      marginRight: 15,
      justifyContent: "center",
    },
})

export default style;