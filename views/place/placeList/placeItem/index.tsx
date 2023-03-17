import React from "react";
import { Text, TouchableOpacity, View, Image, StyleSheet, FlatList } from "react-native";
import { IPlaceItemViewProps } from "../interface";
import { IPlaceListItemState } from "../../../../app/features/place/types";



export default class PlaceItemView extends React.Component<IPlaceItemViewProps>{

    placeData = this.props.placeData
    name = this.placeData.name
    onPressPlace(item: IPlaceListItemState){
        this.props.onPressPlaceItem(item)
    }


    render(){

            return(
                <TouchableOpacity
                    style={styles.container}
                    onPress={() => {this.props.onPressPlaceItem(this.placeData)}}
                >
                    <View>
                        <Text
                            style={{color:"#F5F8FA", fontSize:16, fontWeight: "500"}}
                        >
                            {this.name}
                        </Text>
                        <Text style={styles.gameNumText}>4 parties </Text>
                    </View>
                </TouchableOpacity>
            )
    }
    
}


const styles = StyleSheet.create({

    container: {
        borderBottomColor:"#657786",
        borderBottomWidth:0.2,
        marginTop: 4,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'transparent'
    },

    groupPhotoContainer: {
        padding: 10
    },

    groupPhoto: {
		width: 50,
		height: 50,
		borderRadius: 1000,
		backgroundColor: "rgba(0,0,0,0)",
	},

    gameNumText: {
        color:'#777777',
        marginTop: 5,
    },
})