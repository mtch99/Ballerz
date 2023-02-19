import React from "react";
import { Keyboard, KeyboardAvoidingView, Platform, TextInput, TouchableWithoutFeedback, View } from "react-native";
import styles from "./styles";
import { IMessageInputViewProps } from "../interface";


interface IMessageInputViewState {
    textInput: string;
}


export default class MessageInputView extends React.Component<IMessageInputViewProps, IMessageInputViewState> {
    
    state = {
        textInput: ""
    }

    onChangeText(text: string): void {
        this.setState(prevState => {
            return {
                ...prevState, 
                textInput: text
            }
        })
    }

    render() {
        return(
            <TouchableWithoutFeedback
                onPress={() => {Keyboard.dismiss()}}
            >
                <View style={styles.textInputContainer}>
                    <TextInput
                        placeholder="votre message"
                        placeholderTextColor={'grey'}
                        onChangeText={(text) => {this.onChangeText(text)}}
                        style={{color: 'white'}}
                        onSubmitEditing={() => {this.props.onPressSend(this.state.textInput)}}
                    />
                </View>

            </TouchableWithoutFeedback>
        )
    }
}