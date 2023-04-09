import {IUserProfileListScreenProps, IUserProfileListScreenPropsWithoutNavigation } from "..";
import { IUserProfileData } from "../../../domain/use-cases/types";

import UserProfileSearchScreen from '../userProfileSearch';


export interface IFriendListScreenPropsWithoutNavigation extends IUserProfileListScreenPropsWithoutNavigation{
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
}