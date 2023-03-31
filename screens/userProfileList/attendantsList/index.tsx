import {IUserProfileListScreenProps, IUserProfileListScreenPropsWithoutNavigation } from "..";
import { IUserProfileData } from "../../../domain/use-cases/types";

import UserProfileSearchScreen from '../userProfileSearch';


export interface IAttendantsListScreenPropsWithoutNavigation extends IUserProfileListScreenPropsWithoutNavigation{
    attendantsList: IUserProfileData[]
}
export interface IAttendantsListScreenProps extends IUserProfileListScreenProps,  IAttendantsListScreenPropsWithoutNavigation{}

export default class AttendantsListScreen 
    extends UserProfileSearchScreen<IAttendantsListScreenProps>{

        componentDidMount(): void { 
            this.__initState()
        }

        __initState() {
            this.setState((prevState) => ({
                ...prevState,
                userProfileList: this.props.attendantsList,
                filteredUserProfileList: this.props.attendantsList,
                filterInput: ''
            }))
        }
}