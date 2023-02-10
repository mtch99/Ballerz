import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        width: 68,
        height: 60,
        backgroundColor: "#E6E6E6"
    },
    playerNumContainer: {
        width: 68,
        height: 30,
        backgroundColor: "#E6E6E6",
        alignSelf: "center",
        alignItems: "center",
        flexDirection: "row",
    },
    playersNum: {
        fontFamily: "Cochin",
        color: "#121212",
        fontSize: 16,
        // marginTop: 5,
        // marginLeft: 6,
    },
    playersText: {
        fontFamily: "Cochin",
        color: "#121212",
        flexGrow:1,
        fontSize: 11,
        // marginTop: 3,
        marginLeft: 2,
    },
    badgeNumContainer: {
        width: 68,
        height: 30,
        backgroundColor: "#E6E6E6",
        flexDirection: "row",
    },
    badgeNum: {
        fontFamily: "Cochin",
        color: "#121212",
        fontSize: 17,
        marginTop: 5,
        marginLeft: 6
    },
    badgesTextContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    badgesText: {
        fontFamily: "Cochin",
        color: "#121212",
        fontSize: 11,
        // flexGrow: 1,
        // marginLeft: 26
    },
})


export default styles