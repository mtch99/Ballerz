import React from "react";
import { View, Text, SafeAreaView, FlatList } from "react-native";
import {IUserProfileData } from "../../app/features/feed/slice/interface";


export interface IUserProfileListScreenPropsWithoutNavigation {
    userProfileList: IUserProfileData[]
}


export interface IUserProfileListScreenProps extends IUserProfileListScreenPropsWithoutNavigation{
    
}


export default class UserProfileListScreen extends React.Component<IUserProfileListScreenProps>{

    constructor(props: IUserProfileListScreenProps) {
        super(props);
        console.log(this.props)
    }


    render(): React.ReactNode {
        return(
            <SafeAreaView>
                {this.props.userProfileList.length > 0?(
                    <FlatList
                        data={this.props.userProfileList}
                        renderItem={({item, index}) =>{
                            return(
                                <View>
                                    <Text>
                                        {item.username}
                                    </Text>
                                    <Text>
                                        {item.id}
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