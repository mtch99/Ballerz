import { HeaderBackButton } from "@react-navigation/elements";
import {IUserProfileListScreenProps } from "..";
import BallerzHeaderView from "../../../components/header";
import { IUserProfileData } from "../../../domain/use-cases/types";

import UserProfileSearchScreen from '../userProfileSearch';
import { useNavigation } from "@react-navigation/native";
import { globalStyles } from "../../../views/styles";
import { UserProfileSearchView } from "../../../views/userProfileList/userProfileSearch";
import BallerzSafeAreaView from "../../../views/safeArea";


export interface IFriendListScreenPropsWithoutNavigation {
    friendsList: IUserProfileData[]
}
export interface IFriendsListScreenProps extends IUserProfileListScreenProps,  IFriendListScreenPropsWithoutNavigation{}

export default class FriendsListScreen 
    extends UserProfileSearchScreen<IFriendsListScreenProps>{

        componentDidMount(): void { 
            this.__initState()
        }

        __initState() {
            this.setState((prevState) => ({
                ...prevState,
                userProfileList: this.props.friendsList,
                filteredUserProfileList: this.props.friendsList,
                filterInput: ''
            }))
        }

        render(){
            return (
                <BallerzSafeAreaView>
                <>
                    <BallerzHeaderView
                        title="Amis"
                        leftButton={<HeaderLeft/>}
                        rightButton={<></>}
                    />
                    <UserProfileSearchView
                    usersList={this.state.filteredUserProfileList}
                    onPressUserProfile={this.onPressUserProfile}
                    onFilterInputChange={this.onFilterInputChange}
                    />
                </>
                </BallerzSafeAreaView>
            )
        }
}


function HeaderLeft(){
    const navigation = useNavigation();
    return (
        <HeaderBackButton
            tintColor={globalStyles.global.logoColor}
            onPress={() => navigation.goBack()}
        />
    )
}
