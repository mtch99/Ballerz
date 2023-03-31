import React from "react";
import { Alert, Share, Text, TouchableOpacity, View } from "react-native";
import { UserProfileSearchView } from "../userProfileList";
import styles from "./styles";
import { IMakeFriendsViewProps } from "../../screens/userProfileList/makeFriends";
import { IUserProfileListState } from "../../app/features/userProfile/userProfileList/slice/interface";
import SearchBarView from "./SearchBar";
import InviteYourFriendsFeedBackView from "../teachingFeedBack/inviteYourFriends";
import BallerzSafeAreaView from "../safeArea";



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
        console.warn(`Component did mount: \n ${JSON.stringify(this.props.userProfileList)}`)
        this.setState((prevState) => ({
            ...prevState,
            allUserProfiles: this.props.userProfileList
        }))
    }

    componentDidUpdate(prevProps: Readonly<IMakeFriendsViewProps>, prevState: Readonly<{}>, snapshot?: any): void {
        console.warn(JSON.stringify(this.props.userProfileList))
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
            <BallerzSafeAreaView>
                <>
                {this.props.searchButtonState?(
                    <SearchBarView
                        onSearchInputChange={this.onSearchInputChange}
                    />
                ): null}
                <InviteYourFriendsFeedBackView
                    onPressInvitationLink={this.onPressInvitationLink}
                />
                <UserProfileSearchView
                    {...this.props}
                    userProfileList={this.state.filteredUserProfileList}
                />
                </>
            </BallerzSafeAreaView>
        )
    }
}