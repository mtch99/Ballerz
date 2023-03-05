import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        flexGrow:1,
        borderBottomWidth: 0.2,
        borderBottomColor: 'grey',
        borderTopColor:'#657786"',
        borderTopWidth: 0.2
    },

    commentsNumberContainer:{
        alignItems: 'center',
    },

    commentsNumberText:{
        fontSize: 12,
        color: 'grey',
        fontWeight: 'bold',
    },


    commentContainer: {
        flexDirection: 'row',
        marginLeft: 8,
        alignItems: 'flex-end',
    },

    usernameText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 12,
    },

    commentText: {
        color: 'white',
        marginLeft: 2,
        fontSize: 10
    }
})