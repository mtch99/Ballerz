import React from "react"
import { IUserProfileListViewProps } from "../../../screens/interface"
import { SafeAreaView, StyleSheet} from "react-native"
import { UserProfileListView } from ".."
import SearchBarView from "../../makeFriends/SearchBar"
import { globalStyles } from "../../styles"
import { IUserProfileSearchViewProps } from "../../../screens/userProfileList/userProfileSearch/interface"



export class UserProfileSearchView extends React.Component<IUserProfileSearchViewProps>{

    constructor(props: IUserProfileSearchViewProps) {
        super(props)
    }

    render(): React.ReactNode {
        return(  
            <SafeAreaView style={styles.container}>
                <SearchBarView
                    onSearchInputChange={this.props.onFilterInputChange}
                />
                <UserProfileListView
                    usersList={this.props.usersList}
                    onPressUserProfile={this.props.onPressUserProfile}
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