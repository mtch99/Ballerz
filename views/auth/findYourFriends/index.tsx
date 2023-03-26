import React from "react";
import { IFindYourFriendsViewProps } from "../../../screens/createProfile/findYourFriends/interface";
import { SafeAreaView } from "react-native-safe-area-context";
import {SelectableUserProfileListView} from "../../userProfileList/selectable";
import HeaderView from "../../header";
import CheckButton from "../../header/buttons/checkButton"
import { globalStyles } from "../../styles";
import { StyleSheet } from "react-native";


export default class FindYourFriendsView extends React.Component<IFindYourFriendsViewProps>{
    

    render(): React.ReactNode {
        return(
            <SafeAreaView
             style={styles.container}
            >
                <HeaderView
                    title="Trouve tes amis"
                    rightButton={CheckButton}
                    leftButtonProps={{onPress: () => {}}}
                    rightButtonProps={{onPress: this.props.onPressContinue}}
                />
                <SelectableUserProfileListView
                    onAddButtonPress={this.props.onAddButtonPress}
                    usersList={this.props.usersList}
                />
            </SafeAreaView>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: globalStyles.global.screenBackGroundColor,
        flexGrow: 1
    }
})