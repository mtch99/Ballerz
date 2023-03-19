import { globalStyles } from "./../../styles";
import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: globalStyles.global.screenBackGroundColor
    },


    inputsContainer: {
        marginHorizontal: 35,
        marginTop: 20,
    },


    emailInputContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        color: 'white',
        paddingLeft: 15,
        paddingRight: 15,
        borderWidth: 1,
        borderRadius: 30,
        borderColor: '#dadae8',
    },

})


export default styles