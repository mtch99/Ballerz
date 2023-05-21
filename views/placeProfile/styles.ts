import {StyleSheet} from 'react-native'
import { globalStyles } from '../styles'

export const styles = StyleSheet.create({
    scrollViewContainer: {
        backgroundColor: globalStyles.global.screenBackGroundColor,
        flexGrow: 1
    },
    container: {
        backgroundColor:"#292D39",
        flexDirection: 'row',
        margin: 10,
        borderRadius: 10,
        height: 100,
        alignItems: 'center',
    },

    profilePicContainer: {
        height: 70,
        width: 70,
        margin: 10,
    },

    profilePic: {
        borderRadius: 70,
        flexGrow: 1,
        height: 70,
        width: 70,
    },

    profileDataContainer: {
        marginHorizontal: 20,
        marginVertical: 5,
        justifyContent: 'center',
        flexGrow: 1,
        height: 70,
    },
    
    usernameContainer: {
        alignSelf: "flex-start",
        marginBottom: 5,
        alignItems: "center",
        // borderColor: 'red',
        // borderWidth: 2,
        width: "100%"
    },
    
    usernameText: {
        fontSize: 18,
        fontWeight: "500",
        color: "#FFFFFF",
        marginLeft: 5
    },

    cityText: {
        fontSize: 12,
        // opacity: 0.6,
        marginTop: 1,
        color: 'grey'
    },

    addActionContainer: {
        alignSelf: 'flex-end',
    },

    addActionText: {
        color: "#E78B2F",
        fontSize:12
    }
})

