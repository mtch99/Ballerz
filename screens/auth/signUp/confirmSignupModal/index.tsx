import React from "react";
import { Modal, View, Text, StyleSheet, SafeAreaView } from "react-native";
import { IConfirmSignupModalViewProps } from "../interface";
import { ConfirmSignupInput } from "./input";



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
                            Code de confirmation
                        </Text>
                    </View>
                    <View
                        style={styles.bodyContainer}
                    >
                        <Text
                            style={styles.bodyText}
                        >
                            thftdthdfjyfyf jyvjycjychcjghvc
                            hgcyjfyjfjyfgjygfukfgkufgukgukgukgugkhgvbhjvjg
                            jgvjhgvjkghjgvbjkhgbkhgkj,hkugjjuhgkuguikgfiuykfgvyujgv
                        </Text>
                    </View>
                    <ConfirmSignupInput/>
                </SafeAreaView>
            </Modal>
        )
    }
}




const styles = StyleSheet.create({
    container: {
        alignSelf: "flex-end",
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
        flexGrow: 1
    },

    
    titleContainer: {
        marginTop: 20
    },

    title: {
        fontSize: 30,
        fontWeight: "500",
        marginTop: 20
    },

    bodyContainer: {
        marginHorizontal: 50,
        marginTop: 5
    },
    
    bodyText: {
        flexWrap:"wrap",
        color: "black"
    }
})