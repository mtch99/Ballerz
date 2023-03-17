import React from "react";
import { IEditPlaceViewProps } from "../interface";
import { StyleSheet, View, Text } from "react-native";
import ModifyButton from "../modifyButton";


export default class EditPlaceView extends React.Component<IEditPlaceViewProps>{
    

    render(){
        return(
            <View style={styles.subContainer}>
                    <Text style={{...styles.subTitle, marginTop: 17}}>
                      Terrain
                    </Text>


                    <View style={styles.dateContainer}>
                        <Text style={styles.placeNameText}>
                          {this.props.placeName}
                        </Text>

                        <ModifyButton
                          onPress = {this.props.onPressModify}
                        />
                    </View>

                </View>
        )
    }
}




const styles = StyleSheet.create({
    subContainer: {
        height: 80,
        paddingHorizontal: 10,
        marginBottom: 15,
        borderBottomWidth: 0.25
    },

    
    
    subTitle: {
        fontWeight: "300",
        fontSize: 20,
        alignSelf: "flex-start",
        color: "#FFFFFF"
    },
    
    
    dateContainer:{
        flex:1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    
    
    modifyButton: {
        justifySelf: "flex-end",
        marginRight: 5
    },
    
    
    modifyText: {
        color: "blue"
    },

    placeNameText: {
        fontWeight: "bold",
        maxWidth: "75%",
        color: "#969698"
    }
})