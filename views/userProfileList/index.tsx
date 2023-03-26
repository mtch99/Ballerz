import { FlatList, KeyboardAvoidingView, Dimensions, NativeSyntheticEvent, NativeScrollEvent  } from "react-native";
import { IUserProfileListState } from "../../app/features/userProfile/userProfileList/slice/interface";
import React from "react";
import { IUserProfileListViewProps } from "../../screens/userProfileSearch/interface";
import ClickableUserProfileItemView from "./userProfileItem";
import { globalStyles } from "../styles";

const { height: viewportHeight } = Dimensions.get('window');

export class UserProfileListView extends React.Component<IUserProfileListViewProps>{

    constructor(props: IUserProfileListViewProps) {
        super(props)
    }

    _onScroll (event: NativeSyntheticEvent<NativeScrollEvent>) {
        const scrollPosition = event && event.nativeEvent && event.nativeEvent.contentOffset && event.nativeEvent.contentOffset.y;
        let newBouncesValue;

        if (scrollPosition < viewportHeight / 3) {
            newBouncesValue = false;
        } else {
            newBouncesValue = true;
        }

        // if (newBouncesValue === this.state.bounces) {
        //     return;
        // }

        // this.setState({ bounces: newBouncesValue });
    }




    render(): React.ReactNode {
        return(
            <KeyboardAvoidingView
                style={{flexGrow:1}}
            >
                <FlatList
                    data={this.props.userProfileList.items}
                    extraData={this.props.userProfileList}
                    style={{flexGrow:1, backgroundColor: globalStyles.global.screenBackGroundColor}}
                    onScroll={(e) => {this._onScroll(e)}}
                    renderItem={({item}) => {
                        return(
                            <ClickableUserProfileItemView
                                userProfile={item}
                                onPressUserProfileItem={() => {this.props.onPressUserProfile(item.id)}}
                            />
                        )
                    }}
                    bounces={false}
                    scrollEventThrottle={16}
                />
            </KeyboardAvoidingView>
        )
    }
}