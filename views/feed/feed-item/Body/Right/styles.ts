import { StyleSheet} from "react-native";


const style = StyleSheet.create({
    dateTimeContatiner: {
        width: 137,
        height: 48,
        backgroundColor: "#E6E6E6",
        marginTop: 6,
        flexDirection: "column",

    },
    mardi: {
        fontFamily: "Cochin",
        color: "#121212",
        alignSelf: "center",
    },
    timeContainer: {
        width: 132,
        height: 29,
        backgroundColor: "#E6E6E6",
        flexDirection: "row",
        alignItems: "center",
    },
    startingHourText: {
      fontFamily: "Cochin",
      color: "#121212",
      fontSize: 17,
      flex: 1,
    //   marginTop: 2,
    },
    traitSeparatorContainer:{
        flex: 1,
        alignItems: "center",
    },
    traitSeperator: {
      fontFamily: "Cochin",
      color: "#121212",
    //   fontSize: 22,
      flexGrow: 1,

    //   marginTop: -2,
    //   marginLeft: 51,
    },
    startingHourTextColumn: {
    //   width: 51,
    //   marginTop: 3,
    //   marginLeft: 15,
      flex: 1,
      flexDirection: "row"
    },
    endingHourText1: {
      fontFamily: "Cochin",
      color: "#121212",
      fontSize: 16,
    //   marginLeft: 80,
      flex: 1
    },
    startingHourTextColumnFiller: {
      flex: 1,
      justifyContent: "center",
    },
})

export default style;