import { TouchableOpacity, View, Text, StyleSheet } from "react-native"
import { IConfirmButtonProps } from "../interface"
import { globalStyles } from "../../styles"


export const ConfirmButton = (props: IConfirmButtonProps) => {

    return(
        <View style={styles.confirmButtonContainer}>
            <TouchableOpacity
                onPress={() => {props.onPress()}}
            >
                <View style={styles.confirmButton}>
                  <Text style={styles.confirmButtonText}>
                      Confirmer
                  </Text>
                </View>
            </TouchableOpacity>
        </View>
    )

}


const styles = StyleSheet.create({
    confirmButtonContainer:{
        // flexGrow: 0.66,
        marginTop: 25,
        justifyContent: "center",
        alignItems: "center",
    },
    confirmButton: {
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 45,
        width: 250,
        backgroundColor: globalStyles.global.logoColor
    },
    
    confirmButtonText: {
        fontSize: 25,
        padding: 13,
        color: "white"
    },
    
})