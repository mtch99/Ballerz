import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


const styles = StyleSheet.create({
    container: {
        backgroundColor:"#292D39",
        padding: 10,
        margin: 10,
        borderRadius: 10,
        flexGrow: 1
    },
    cant_find_ur_friends_text: {
        color:"#E5E6E8",
        fontSize: 15,
        justifyContent: "center"
    },
})

export default styles


// <View style={styles.inviteContactsContainer}>
//                     <Text style={styles.inviteContactsText}>Invite tes amis sur ballerz grace à ce lien d'invitation: </Text>
//                     <TouchableOpacity
//                         onPress={() => {this.onPressInvitationLink()}}
//                     >
//                         <Text 
//                             style={styles.inviteLinkText}
//                         > 
//                             MKMKNMOKINIONHJIOJ
//                         </Text>
//                     </TouchableOpacity>
// </View>

