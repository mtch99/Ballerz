import { FlatList, KeyboardAvoidingView } from "react-native";
import { IUserProfileListState, IUserProfileDataState } from "../../../app/features/userProfile/userProfileList/slice/interface";
import React from "react";
import { IUserProfileListViewProps } from "../../../screens/userProfileSearch/interface";
import UserProfileItemView from "./userProfileItem";



export class UserProfileListView extends React.Component<IUserProfileListViewProps>{

    constructor(props: IUserProfileListViewProps) {
        super(props)
        // this.onPressGroupChat.bind(this)
    }


    onPressUserProfile(item: IUserProfileDataState){
        this.props.onPressUserProfile(item.id);
    }

    render(): React.ReactNode {
        return(
            <KeyboardAvoidingView
                style={{flexGrow:1}}
            >
                <FlatList
                    data={this.props.userProfileList.items}
                    extraData={this.props.userProfileList}
                    renderItem={({item}) => {
                        return(
                            <UserProfileItemView
                                userProfile={item}
                                onPressUserProfileItem={() => {this.onPressUserProfile(item)}}
                            />
                        )
                    }}
                />
            </KeyboardAvoidingView>
        )
    }
}