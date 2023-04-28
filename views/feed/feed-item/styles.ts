
import { Dimensions, StyleSheet } from "react-native";
const screenWidth = Dimensions.get("window").width;
const marginHorizontal = 17

const containerWidth = screenWidth - 2*marginHorizontal

const borderRadius = (10/356)*containerWidth

export const style = StyleSheet.create({
    container: {
		// flex:1,
    	backgroundColor: "#292D39",
    	marginTop: 5,
    	marginHorizontal,
    	borderRadius,
    	marginBottom: 10,
		justifyContent: "center",
    },
});

