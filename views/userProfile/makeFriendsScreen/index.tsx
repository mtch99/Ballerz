import React from "react";
import { Alert, Share, Text, TouchableOpacity, View } from "react-native";
import { UserProfileListView } from "../userProfileList";
import styles from "./styles";
import { IMakeFriendsViewProps } from "../../../screens/userProfileSearch/makeFriends";
import { IUserProfileListState } from "../../../app/features/userProfile/userProfileList/slice/interface";
import SearchBarView from "./SearchBar";



interface IMakeFriendsViewState {
    allUserProfiles: IUserProfileListState
    filteredUserProfileList: IUserProfileListState
    filterExpression: string | null
}


export class MakeFriendsView extends React.Component<IMakeFriendsViewProps>{


    constructor(props: IMakeFriendsViewProps){
        super(props);
        this.filterList = this.filterList.bind(this)
        this.onSearchInputChange = this.onSearchInputChange.bind(this)
    }

    state: IMakeFriendsViewState = {
        allUserProfiles: this.props.userProfileList,
        filteredUserProfileList: this.props.userProfileList,
        filterExpression: null,
    }

    componentDidMount(): void {
        this.setState((prevState) => ({
            ...prevState,
            allUserProfiles: this.props.userProfileList
        }))
    }



    async onPressInvitationLink(): Promise<void> {
        try {
            const result = await Share.share({
              message:
                'React Native | A framework for building native apps using React',
            });
            if (result.action === Share.sharedAction) {
              if (result.activityType) {
                // shared with activity type of result.activityType
              } else {
                // shared
              }
            } else if (result.action === Share.dismissedAction) {
              // dismissed
            }
          } catch (error: any) {
            Alert.alert(error.message);
          }
    }



    onSearchInputChange(filterExpression: string){
        const filteredList = this.filterList(filterExpression)
        this.setState((prevState) => ({
            ...prevState,
            filteredUserProfileList: filteredList
        }))
    }


    private filterList(filterExpression: string): IUserProfileListState {
        const result = this.state.allUserProfiles.items.filter(
            (userProfile) => userProfile.username.toLocaleLowerCase().includes(filterExpression.toLocaleLowerCase())
        )
        return {items: result}
    }

    
    render(): React.ReactNode {
        return(
            <View>
                {this.props.searchButtonState?(
                    <SearchBarView
                        onSearchInputChange={this.onSearchInputChange}
                    />
                ): null}
                <View style={styles.inviteContactsContainer}>
                    <Text style={styles.inviteContactsText}>Invite tes amis sur ballerz grace à ce lien d'invitation: </Text>
                    <TouchableOpacity
                        onPress={() => {this.onPressInvitationLink()}}
                    >
                        <Text 
                            style={styles.inviteLinkText}
                        > 
                            MKMKNMOKINIONHJIOJ
                        </Text>
                    </TouchableOpacity>
                </View>
                <UserProfileListView
                    {...this.props}
                    userProfileList={this.state.filteredUserProfileList}
                />
            </View>
        )
    }
}