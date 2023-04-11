import React from "react";
import { IUserProfileListState} from "../../app/features/userProfile/userProfileList/slice/interface";
import { AppContext, IAppContext } from "../../controllers/provider";
import { IUserProfileListScreenNavigationController } from "../userProfile/interface";
import { IUserProfileDataState } from "../../app/features/types";
import { IUserProfileListScreenState } from "./interface";
import {Screen} from '../interface'


export interface IUserProfileSearchScreenPropsWithoutNavigation{}

export interface IUserProfileSearchScreenProps extends IUserProfileSearchScreenPropsWithoutNavigation{
    navigationController: IUserProfileListScreenNavigationController
}

export interface IUserProfileListScreenPropsWithoutNavigation {}
export interface IUserProfileListScreenProps extends IUserProfileListScreenPropsWithoutNavigation{
    navigationController: IUserProfileListScreenNavigationController
}

export abstract class AUserProfileListScreen<P, S extends IUserProfileListScreenState> extends Screen<P, S>{

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