import React from "react";
import { IUserProfileItemViewProps } from "../interface";
import { Text, TouchableOpacity, View, Image, StyleSheet, FlatList } from "react-native";



export default class ClickableUserProfileItemView extends React.Component<IUserProfileItemViewProps>{

    username = this.props.userProfile.username
    render(){
        return(
                <TouchableOpacity
                    style={styles.container}
                    onPress={() => {this.props.onPressUserProfileItem(this.props.userProfile.id)}}
                >
                    <View style={styles.groupPhotoContainer}>
                        <Image style = {styles.groupPhoto} source = {require("../../../assets/blank-pp.jpg")}/>
                    </View> 
                    <View>
                        <Text
                            style={{color:"#F5F8FA", fontSize:16, fontWeight: "500"}}
                            >
                            {this.username}
                        </Text>
                        <FlatList
			    			data={this.props.userProfile.badges}
			    			renderItem={({item, index}) => {
                                return(
                                    <Text>
			    						{item.symbol}
			    					</Text>
			    				)
                                }}
                                style={{flexDirection: "row"}}
                                />
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
        marginTop: 15,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'transparent',
        marginHorizontal: "8%",
        width: "83%",
    },
    
    groupPhotoContainer: {
        paddingRight: 10
    },

    
    groupPhoto: {
        width: 50,
		height: 50,
		borderRadius: 1000,
		backgroundColor: "rgba(0,0,0,0)",
        marginBottom: 10
	},
    
    gameNumText: {
        color:'#777777',
        marginTop: 5,
    },
})