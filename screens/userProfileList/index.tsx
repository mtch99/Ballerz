import React from "react";
import { IUserProfileListState} from "../../app/features/userProfile/userProfileList/slice/interface";
import { AppContext, IAppContext } from "../../controllers/provider";
import { IUserProfileDataState } from "../../app/features/types";
import { IUserProfileListScreenNavigationController, IUserProfileListScreenState } from "./interface";
import {IUserProfileListViewProps, Screen} from '../interface'
import { UserProfileListView } from "../../views/userProfileList";
import { IUserProfileData } from "../../domain/use-cases/types";



export interface IUserProfileSearchScreenPropsWithoutNavigation{}

export interface IUserProfileSearchScreenProps extends IUserProfileSearchScreenPropsWithoutNavigation{
    navigationController: IUserProfileListScreenNavigationController
}

export interface IUserProfileListScreenProps{
    navigationController: IUserProfileListScreenNavigationController
}

export abstract class AUserProfileListScreen<P, S extends IUserProfileListScreenState = IUserProfileListScreenState> extends Screen<P, S>{

    static contextType = AppContext
    context: React.ContextType<typeof AppContext> = {} as IAppContext

    constructor(props: P) {
        super(props);
        this.onPressUserProfile = this.onPressUserProfile.bind(this)
        this.onFilterInputChange = this.onFilterInputChange.bind(this)
    }

    componentDidMount(): void {
        // this.makeRequest<undefined, void>(undefined, this.context.userProfileController.getAllUserProfiles.bind(this.context.userProfileController)).then(() => {this.__initState()})
        this.context.userProfileController.getAllUserProfiles().then(() => {this.__initState()})
    }

    
    onFilterInputChange(filterInput: string): void {
        let filtereduserProfileList: IUserProfileListState['items'] = this.state.userProfileList
        if(filterInput != '') {
            filtereduserProfileList = this.__applyFilter(filterInput)
        }
        const newState: S = {
            ...this.state,
            filteredUserProfileList: filtereduserProfileList,
            filterInput,
        }
        this.setState(newState)
    }


    clearFilterInput(): void {
        const newState: S = {
            ...this.state,
            filteredUserProfileList: this.state.userProfileList,
            filterInput: null
        }
    }

    __applyFilter(filterInput: string, userProfileList?: S['userProfileList']): S['userProfileList'] {
        
        if(filterInput == ''){
            return userProfileList || this.state.userProfileList
        }

        let listTofilter: S['userProfileList'] = userProfileList || this.state.userProfileList
        const result = listTofilter.filter(
            (userProfile) => userProfile.username.toLocaleLowerCase().includes(filterInput.toLocaleLowerCase())
        )


        return result
    }



    abstract onPressUserProfile(userProfileData: IUserProfileDataState): void

    /**
     * Called after the userProfileController retrieved all the userProfiles
     */
    abstract __initState(): void 

}


export abstract class AUserProfileListScreenWithProps<P extends IUserProfileListScreenProps = IUserProfileListScreenProps, 
    S extends IUserProfileListScreenState = IUserProfileListScreenState> extends AUserProfileListScreen<P, S> {

    componentDidMount(): void {
        
    }
}


// export interface IDisplayUserProfileListScreenPropsWithoutNavigation {
//     userProfileList: IUserProfileListState['items']
// }

// export interface IDisplayUserProfileListScreenProps extends IDisplayUserProfileListScreenPropsWithoutNavigation{
//     navigationController: IUserProfileListScreenNavigationController
// }

// export default class DisplayUserProfileListScreen extends AUserProfileListScreen<IDisplayUserProfileListScreenProps> {
    
    
//     __initState(): void {}
//     // Shadow parent class effect because there is no request to be done given the userList firld in props
//     componentDidMount(): void {}

//     onPressUserProfile(userProfileData: IUserProfileDataState): void {
//         this.props.navigationController.goToUserProfile(userProfileData)
//     }

    
//     render(): React.ReactNode {
//         const props: IUserProfileListViewProps = {
//             usersList: this.props.userProfileList,
//             onPressUserProfile: this.onPressUserProfile.bind(this)
//         }

//         return (
//             <UserProfileListView
//                 {...props}
//             />
//         )
//     }
// }