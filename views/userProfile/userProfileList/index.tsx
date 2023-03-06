import { FlatList } from "react-native";
import { IUserProfileListState, IUserProfileState } from "../../../app/features/userProfile/slice/interface";
import React from "react";
import { IUserProfileListViewProps } from "../../../screens/userProfileSearch/interface";
import UserProfileItemView from "./userProfileItem";



export class UserProfileListView extends React.Component<IUserProfileListViewProps>{

    constructor(props: IUserProfileListViewProps) {
        super(props)
        // this.onPressGroupChat.bind(this)
    }


    onPressUserProfile(item: IUserProfileState){
        this.props.onPressUserProfile(item.id);
    }

    render(): React.ReactNode {
        return(
            <FlatList
                // style={{backgroundColor: '#181C28'}}
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
        )
    }
}