import React from "react";
import { View, TextInput, StyleSheet, KeyboardAvoidingView } from "react-native";



export class ConfirmSignupInput extends React.Component {
    
    render(): React.ReactNode {
        return(
            <KeyboardAvoidingView
                style={styles.container}
            >
                <View
                    style={styles.digitInputContainer}
                >
                    <TextInput
                        keyboardType="numeric"
                        maxLength={1}
                        value={"2"}
                        style={{flexGrow: 1, fontSize: 46, alignItems: "center", fontWeight: "300"}}
                    />
                </View>
                <View
                    style={styles.digitInputContainer}
                >
                    <TextInput
                        keyboardType="numeric"
                        maxLength={1}
                    />
                </View>
                <View
                    style={styles.digitInputContainer}
                >
                    <TextInput
                        keyboardType="numeric"
                        maxLength={1}
                    />
                </View>
                <View
                    style={styles.digitInputContainer}
                >
                    <TextInput
                        keyboardType="numeric"
                        maxLength={1}
                    />
                </View>
            </KeyboardAvoidingView>
        )
    }
}

export const styles = StyleSheet.create({
    container: {
        width: 263,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: "15%"
    },

    digitInputContainer: {
        width: 56,
        height: 56,
        backgroundColor: 'white',
        alignItems:'center',
    }
})