import React from "react";
import { Modal, View, Text, StyleSheet, SafeAreaView } from "react-native";
import { IConfirmSignupModalViewProps } from "../interface";
import { ConfirmSignupInput } from "./input";
import { TouchableOpacity } from "react-native-gesture-handler";
import { globalStyles } from "../../../../views/styles";
import AwesomeAlert from 'react-native-awesome-alerts';


export default class ConfirmSignupModal extends React.Component<IConfirmSignupModalViewProps> {
    

    render(): React.ReactNode {
        return(
            <Modal
                visible={this.props.visible}
                transparent={true}
                animationType="slide"
            >
                <SafeAreaView
                    style={styles.modalView}
                >
                    <View
                        style={styles.titleContainer}
                    >
                        <Text
                            style={styles.title}
                        >
                            Confirmez votre inscription
                        </Text>
                    </View>
                    <View
                        style={styles.bodyContainer}
                    >
                        <Text
                            style={styles.bodyText}
                        >
                            Un code de confirmation a été envoyé à l'adresse suivante: 
                            {this.props.email}. 
                            Verifiez aussi votre boîte de courriers indésirables.
                        </Text>
                    </View>
                    <View
                        style={styles.codeFoundButtonContainer}
                    >
                        <TouchableOpacity
                            onPress={() => {this.props.onPressCofirmationCodeReceived()}}
                            style={styles.codeFoundButton}
                        >
                            <Text
                                style={styles.codeFoundButtonText}
                            >
                                J'ai reçu le code
                            </Text>
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            </Modal>
        )
    }

    // render() {
    //     return(
    //         <AwesomeAlert
    //         />
    //     )
    // }
}




const styles = StyleSheet.create({
    container: {
        alignSelf: "flex-end",
        // justifyContent: "space-around"
        // height: "65%",
    },
    
    modalView: {
        backgroundColor:"lightgrey",
        // margin: 20,
        // backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        marginTop: "100%",
        flexGrow: 1,
        // justifyContent: "space-around"
    },

    
    titleContainer: {
        marginTop: 20
    },

    title: {
        fontSize: 30,
        fontWeight: "500",
    },



    codeFoundButtonContainer: {
        flexGrow: 1,
        // alignItems: "center",
        justifyContent: "flex-end",
        paddingBottom: 40,
    },

    codeFoundButton: {
        // width: "60%",
        backgroundColor: globalStyles.global.logoColor,
        borderRadius: 10,
        padding: 20
    },

    codeFoundButtonText: {
        color: 'white',
        fontWeight: '700'
    },

    bodyContainer: {
        marginTop: 5,
        marginHorizontal: 10
    },
    
    bodyText: {
        // flexWrap:"wrap",
        color: "black",
        fontSize: 18
    }
})