import React from "react"
import { ISelectableUserProfileItemViewProps, IUserProfileItemViewProps } from "../interface"
import { FlatList, TouchableOpacity, View, Text, StyleSheet, Image } from "react-native"
import { CheckBox } from "react-native-btr"
import { ISelectableUserProfileViewProps } from "../../../screens/interface"




export default class SelectableUserProfileListView extends React.Component<ISelectableUserProfileViewProps> {


    render(): React.ReactNode {
        return(
            <FlatList
                data={this.props.usersList}
                renderItem={({item}) =>  {
                    return(
                        <UserProfileItemView
                            userProfile={item}
                            selected={item.selected}
                            onPressCheckBox={(id) => {this.props.onSelectItem(item)}}
                            onPressUserProfileItem={() => {}}
                        />
                    )
                }}
            />
        )
    }
}






class UserProfileItemView extends React.Component<ISelectableUserProfileItemViewProps>{

    username = this.props.userProfile.username
    // onPressUserProfile(){
    //     this.props.onPressUserProfileItem(this.)
    // }


    render(){

        if(this.props.userProfile.badges.length > 0){
            return(
                <View
                    style={styles.container}
                >
                    <View style={styles.groupPhotoContainer}>
                        <Image style = {styles.groupPhoto} source = {require("../../../assets/profilePic.jpg")}/>
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

                    <View
                        style={{alignSelf: "flex-end"}}
                    >
                        <CheckBox
                            checked={this.props.selected}
                            color="orange"
                            onPress={() => {this.props.onPressCheckBox(this.props.userProfile.id)}}
                        />
                    </View>

                </View>
            )
        }
        
        
        return(
            <TouchableOpacity
                style={styles.container}
                onPress={() => {this.props.onPressUserProfileItem(this.props.userProfile.id)}}
            >
                <View style={styles.groupPhotoContainer}>
                    <Image style = {styles.groupPhoto} source = {require("../../../assets/profilePic.jpg")}/>
                </View> 
                <View>
                    <Text
                        style={{color:"#F5F8FA", fontSize:16, fontWeight: "500"}}
                        >
                        {this.username}
                    </Text>
                    <Text style={styles.gameNumText}>4 parties</Text>
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
        backgroundColor: 'transparent',
        marginHorizontal: 10,
        width: "81%"
    },
    
    groupPhotoContainer: {
        paddingRight: 10
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