import React from "react";
import { ISigninButtonProps } from "../interface";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { globalStyles } from "../../../styles";



export default class SigninButton extends React.Component<ISigninButtonProps> {
    

    render(): React.ReactNode {
        return(
                <TouchableOpacity
                    onPress={() => {this.props.onPress()}}
                    style={styles.container}
                >
                    <Text
                        style={styles.loginText}
                    > 
                        Se connecter
                    </Text>
                </TouchableOpacity>
        )
    }
}



const styles = StyleSheet.create({
    container: {
        backgroundColor: globalStyles.global.logoColor,
        height: 40,
        width: '80%',
    },

    loginText: {
        fontSize: 16,
        color: "white"
    }
})