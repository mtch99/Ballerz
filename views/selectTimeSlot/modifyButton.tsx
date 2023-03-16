import React from 'react';
import {Text, StyleSheet,
    TouchableOpacity,
    View} from "react-native"


export default function ModifyButton(props: {onPress: () => void}) {

	return(
        <TouchableOpacity 
          style={styles.modifyButton}
          onPress={() => {props.onPress()}}
        >
          <Text style={styles.modifyText}>
            modifier
          </Text>
        </TouchableOpacity>
    )

    

}

const styles = StyleSheet.create({
    modifyButton: {
        justifySelf: "flex-end",
        marginRight: 5
      },
    
      modifyText: {
        color: "#E78B2F"
      },
})

export {ModifyButton}