import React from "react"
import { ISelectableUserProfileItemViewProps, IUserProfileItemViewProps } from "../interface"
import {Dimensions, FlatList, TouchableOpacity, View, Text, StyleSheet, Image, NativeSyntheticEvent, NativeScrollEvent } from "react-native"
import { CheckBox } from "react-native-btr"
import { ISelectableUserProfileData, IUserProfileListViewProps } from "../../../screens/interface"
import AddUserButton from "../../../components/Flatlist/Buttons/addUser"
import { AppContext, IAppContext } from "../../../controllers/provider"
import { BallerzFlatList } from "../../../components/Flatlist"
import { IUserProfileData } from "../../../domain/use-cases/types"



export class SelectableUserProfileListView extends React.Component<IUserProfileListViewProps> {


    componentDidUpdate(prevProps: Readonly<IUserProfileListViewProps>, prevState: Readonly<{}>, snapshot?: any): void {
        console.warn(`SelectableUserProfileListView did update: ${JSON.stringify(this.props.usersList)}`)
    }


    render(): React.ReactNode {
        return(
            <BallerzFlatList<ISelectableUserProfileData>
                data={this.props.usersList}
                extraData={this.props.usersList}
                renderItem={({item}) =>  {
                    return(
                        <UserProfileItemView
                            userProfile={item}
                            selected={item.selected}
                            onPressCheckBox={() => {this.props.onAddButtonPress(item)}}
                            onPressUserProfileItem={() => {}}
                        />
                    )
                }}
            />
        )
    }
}


export class UserProfileItemView extends React.Component<ISelectableUserProfileItemViewProps>{

    username = this.props.userProfile.username
    // onPressUserProfile(){
    //     this.props.onPressUserProfileItem(this.)
    // }


    render(){

        // if(this.props.userProfile.badges.length > 0){
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
                        style={{alignItems: "flex-end", flexGrow: 1}}
                    > 
                        <AddUserButton
                            selected={this.props.selected}
                            onPress={() => {this.props.onPressCheckBox(this.props.userProfile.id)}}
                        />
                    </View> 

                </View>
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