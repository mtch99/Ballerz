import React from "react";
import { View, Text, SafeAreaView, FlatList } from "react-native";
import {IUserProfileData } from "../../../app/features/feed/slice/interface";


export interface IUserProfileListScreenPropsWithoutNavigation {
    userProfileList: IUserProfileData[]
}


export interface IUserProfileListScreenProps extends IUserProfileListScreenPropsWithoutNavigation{
    
}


export default class UserProfileListScreen extends React.Component<IUserProfileListScreenProps>{

    constructor(props: IUserProfileListScreenProps) {
        super(props);
    }


    render(): React.ReactNode {
        return(
            <SafeAreaView>
                {this.props.userProfileList.length > 0?(
                    <FlatList
                        data={this.props.userProfileList}
                        renderItem={({item, index}) =>{
                            return(
                                <View style={{borderBottomColor:"#657786", borderBottomWidth:3, marginTop: 4}}>
                                    <Text
                                        style={{color:"#F5F8FA", fontSize:26}}
                                    >
                                        {item.username}
                                    </Text>
                                </View>
                            )
                        }}
                    />

                ):(
                    <></>
                )}
            </SafeAreaView>
        )
    }
}