import React from "react";
import { IUserProfileItemViewProps } from "../interface";
import { Text, TouchableOpacity, View } from "react-native";



export default class UserProfileItemView extends React.Component<IUserProfileItemViewProps>{

    username = this.props.userProfile.username
    onPressUserProfile(){
        this.props.onPressUserProfileItem()
    }


    render(){

        return(
            <TouchableOpacity>
                <View style={{borderBottomColor:"#657786", borderBottomWidth:3, marginTop: 4}}>
                    <Text
                        style={{color:"#F5F8FA", fontSize:26}}
                    >
                        {this.username}
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }
    
}