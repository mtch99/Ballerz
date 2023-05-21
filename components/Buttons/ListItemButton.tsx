import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { globalStyles } from "../../views/styles";



export interface IAddUserButtonProps {
    selected: boolean;
    onPress(): void
    title?: string;
}
export default class ListItemButton extends React.Component<IAddUserButtonProps, boolean>{



    render(): React.ReactNode {
        let opacity = 1
        if(this.props.selected){
            opacity = 0.5
        }
        
        return(
            <View
                style={{...styles.container, opacity}}
            >
                <TouchableOpacity 
                    onPress={() => {this.props.onPress()}}
                    style={{flexGrow: 1, justifyContent:"center"}}
                >
                    <Text
                        style={styles.addText}
                    > {this.props.title?this.props.title:"ajouter"} </Text>
                </TouchableOpacity>
            </View>
        )
    } 
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: globalStyles.global.logoColor,
        height: 34,
        width: 74,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 27,
    },

    addText: {
        color: "white",
        fontSize: 15,
        fontWeight: "500",
    }
})