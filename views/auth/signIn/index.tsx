import React from "react";
import { SafeAreaView, Text, TextInput, TextInputProps, TouchableOpacity, View, KeyboardAvoidingView, Modal } from "react-native";
import styles from "./styles";
import SigninButton from "./signinButton";
import Yannick_SigninView from "./signinView";

// import { ILastSignupInput } from "../../../../src/App/features/Auth/authSlice";




export interface Props {
    onEmailInputChange: (input: string) => void;
    onPasswordInputChange: (input: string) => void;
    error: string | undefined;
    placeholders: {
        emailInput?: string 
    }
    onPressSignin(): void
}



// export default class SigninScreenView extends React.Component<Props>{
//     constructor(props: Props) {
//         props.placeholders = {
//             ...props.placeholders
//         }
//         super(props)
//     }
    

//     render() {
//         return(
//             <SafeAreaView style={
//                 styles.container
//             }>  
//                 <View style={styles.inputsContainer}>
//                     <EmailInput 
//                         onChangeText={this.props.onEmailInputChange}
//                         placeholder={this.props.placeholders.emailInput}
//                         style={styles.emailInputContainer}
//                         placeholderTextColor={"grey"}
//                     />
//                 </View>
//                 <View style={styles.inputsContainer}>
//                     <PasswordInput 
//                         onChangeText={this.props.onPasswordInputChange}
//                         style={styles.emailInputContainer}
//                         placeholderTextColor={"grey"}
//                     />
//                 </View>
//                 <SigninButton
//                     onPress={this.props.onPressSignin}
//                 />
//                     {
//                         this.props.error?(
//                             <Text
//                                 style={styles.errorTex}
//                             >
//                                 {this.props.error}
//                             </Text>
//                         ):(<></>)
//                     }
//             </SafeAreaView>
//         )
//     }
// }
export default Yannick_SigninView 


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

    
    constructor(props: TextInputProps) {
        super(props)
    }
    
    render(): JSX.Element {
        
        const props: TextInputProps = {
            ...this.props,
            placeholder: this.props.placeholder?(this.props.placeholder):("Mot de passe")
        }
        return(
            // <KeyboardAvoidingView>
                <TextInput 
                    {
                        ...props
                    }
                />
            // </KeyboardAvoidingView>
        )
    }
}