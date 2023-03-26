import { FlatList, KeyboardAvoidingView } from "react-native";
import { IUserProfileListState } from "../../app/features/userProfile/userProfileList/slice/interface";
import React from "react";
import { IUserProfileListViewProps } from "../../screens/userProfileSearch/interface";
import UserProfileItemView from "./userProfileItem";



export class UserProfileListView extends React.Component<IUserProfileListViewProps>{

    constructor(props: IUserProfileListViewProps) {
        super(props)
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
                                onPressUserProfileItem={() => {this.props.onPressUserProfile(item.id)}}
                            />
                        )
                    }}
                />
            </KeyboardAvoidingView>
        )
    }
}