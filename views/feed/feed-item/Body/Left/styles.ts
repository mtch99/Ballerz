import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    playerNumContainer: {
        alignItems: "center",
        // flexDirection: "row",
    },
    playersNumText: {
        color: "#F5F8FA",
        fontSize: 30,
        fontWeight: "500",
        marginLeft: 6,
    },
    playersText: {
        color: "#F7F7F7",
        flexGrow:1,
        marginLeft: 2,
        fontSize: 15,
    },
    badgeNumContainer: {
        width: 68,
        height: 30,
        flexDirection: "row",
        justifyContent: "center",
    },
    badgeNum: {
        fontFamily: "Cochin",
        color: "#F7F7F7",
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
        color: "#F7F7F7",
        fontSize: 11,
    },
})


export default styles