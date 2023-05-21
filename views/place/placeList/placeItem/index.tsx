import React from "react";
import { Text, TouchableOpacity, View, Image, StyleSheet, FlatList } from "react-native";
import { IPlaceItemViewProps } from "../interface";
import { IPlaceListItemState } from "../../../../app/features/place/types";
import { globalStyles } from "../../../styles";
import { RightArrow } from "../../../../components/icons/RightArrow";
import MateralIcons from "@expo/vector-icons/MaterialIcons"



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
                    <View
                        // style={{backgroundColor: globalStyles.global.itemBackgroundColor}}
                    >
                        <View
                            style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}
                        >
                            <MateralIcons
                                name="place"
                                size={16}
                                color={"grey"}
                                style={{marginRight: 3}}
                            />
                            <Text
                                style={{color:"#F5F8FA", fontSize:16, fontWeight: "500"}}
                            >
                                {this.name}
                            </Text>
                        </View>
                        <Text style={styles.gameNumText}>4 parties </Text>
                    </View>

                    <View
                        style={{
                            alignItems: "flex-end",
                            flexGrow: 1,
                        }}
                    >
                        <RightArrow/>
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
        backgroundColor: globalStyles.global.itemBackgroundColor,
        padding: 10,
        marginHorizontal: 17,
        borderRadius: 10,
        marginBottom: 10
    },

    gameNumText: {
        color:'#777777',
        marginTop: 5,
    },
})