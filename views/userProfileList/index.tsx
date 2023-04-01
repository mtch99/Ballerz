import {StyleSheet} from "react-native";
import React from "react";
import ClickableUserProfileItemView from "./userProfileItem";
import { globalStyles } from "../styles";
import { IUserProfileListViewProps } from "../../screens/interface";
import { IUserProfileData } from "../../domain/use-cases/types";
import { BallerzFlatList } from "../../components/Flatlist";
import SearchBarView from "../../components/SearchBar";
import { SafeAreaView } from "react-navigation";




export class UserProfileListView extends React.Component<IUserProfileListViewProps>{
    
    render(): React.ReactNode {
        return(
            <BallerzFlatList<IUserProfileData>
                    data={this.props.usersList}
                    extraData={this.props.usersList}
                    renderItem={({item}) => {
                        return(
                            <ClickableUserProfileItemView
                                userProfile={item}
                                onPressUserProfileItem={() => {this.props.onPressUserProfile(item)}}
                            />
                        )
                    }}
                />
        )
    }
}

