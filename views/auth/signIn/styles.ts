import { globalStyles } from "./../../styles";
import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: globalStyles.global.screenBackgroundColor
    },

    inputsContainer: {
        // flex: 1,
        marginHorizontal: 35,
        marginTop: 20,
        width: '80%',
        height: 40
    },


    emailInputContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        paddingLeft: 15,
        paddingRight: 15,
        borderWidth: 1,
        borderRadius: 30,
        borderColor: "green",
        color: "white",
    },

    errorTex: {
        color: "white",
    },

})


export default styles