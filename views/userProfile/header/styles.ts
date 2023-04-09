import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
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
        marginVertical: 16
    },

    usernameText: {
        fontSize: 17,
        fontWeight: "500",
        color: "#FFFFFF",
    },

    cityText: {
        fontSize: 12,
        // opacity: 0.6,
        marginTop: 1,
        color: 'grey'
    },

    addActionContainer: {
        // marginTop: 25,
        alignSelf: 'flex-end',
        marginRight: 25
    },

    addActionText: {
        color: "#E78B2F",
        fontSize:12
    }
})

export default styles;