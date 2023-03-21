import React from "react"
import { IDefineUsernameViewProps } from "../../../screens/createProfile/DefineUsername/interface"
import { View, TextInput, Text, StyleSheet } from "react-native"
import { globalStyles } from "../../styles"
import { TouchableOpacity } from "react-native-gesture-handler"

export class DefineUsernameView extends React.Component<IDefineUsernameViewProps> {
    

    render(): React.ReactNode {
        return(
            <View
                style={styles.container}
            >
                <View
                    style={styles.titleContainer}
                >
                    <Text
                        style={styles.title}
                    >
                        Définissez votre surnom
                    </Text>
                </View>
                <TextInput
                    placeholder="570016"
                    placeholderTextColor={"#969696"}
                    style={styles.confirmationCodeInputContainer}
                />


                <TouchableOpacity
                    onPress={() => {this.props.onPressConfirm()}}
                    style={styles.confirmButton}
                >
                    <Text style={styles.confirmButtonText}>
                        Confirmer
                    </Text>
                </TouchableOpacity>
                {this.props.error?(<Text>{this.props.error}</Text>):(<></>)}
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: globalStyles.global.screenBackGroundColor
    },

    titleContainer: {
        marginHorizontal: 10,
        width: "90%",
        alignItems: "center",
        justifyContent: "center",
    },

    title: {
        fontSize: 18,
        fontWeight: "bold",
        color: "white",
    },

    confirmationCodeInputContainer: {
        marginTop: 15,
        height: 52,
        borderRadius: 56,
        backgroundColor: globalStyles.global.itemBackgroundColor,
        padding: 10,
        width: "90%"
    },

    confirmButton: {
        backgroundColor: globalStyles.global.logoColor,
        width: "60%"
    },

    confirmButtonText: {
        color: "white"
    },

    errorText: {
        marginTop: 5,
        color: 'red',
        fontSize: 12
    }
})