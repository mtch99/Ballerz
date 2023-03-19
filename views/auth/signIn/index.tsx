import React from "react";
import { SafeAreaView, Text, TextInput, TextInputProps, TouchableOpacity, View } from "react-native";
import styles from "./styles";
// import { ILastSignupInput } from "../../../../src/App/features/Auth/authSlice";




export interface Props {
    onEmailInputChange: (input: string) => void;
    onPasswordInputChange: (input: string) => void;
    error: string | undefined;
    placeholders: {
        emailInput?: string 
    }
}



export default class SigninScreenView extends React.Component<Props>{
    constructor(props: Props) {
        props.placeholders = {
            ...props.placeholders
        }
        super(props)
    }
    

    render() {
        return(
            <SafeAreaView style={
                styles.container
            }>  
                <EmailInput 
                    onChangeText={this.props.onEmailInputChange}
                    placeholder={this.props.placeholders.emailInput}
                    style={styles.emailInputContainer}
                />
                <PasswordInput onChangeText={this.props.onPasswordInputChange}/>
                {
                    this.props.error?(
                        <Text>
                            {JSON.stringify(this.props.error)}
                        </Text>
                    ):(<></>)
                }
            </SafeAreaView>
        )
    }
}


export class EmailInput extends React.Component<TextInputProps> {


    
    constructor(props: TextInputProps) {
        super(props)
    }
    
    render(): JSX.Element {
        
        const props: TextInputProps = {
            ...this.props,
        }
        return(
            <TextInput 
                {
                    ...props

                }
            />
        )
    }
}


export class PasswordInput extends React.Component<TextInputProps> {

    placeholder = "mot de passe"
    
    constructor(props: TextInputProps) {
        super(props)
    }
    
    render(): JSX.Element {
        
        const props: TextInputProps = {
            ...this.props,
            placeholder: this.placeholder
        }
        return(
            <TextInput 
                {
                    ...props
                }
            />
        )
    }
}