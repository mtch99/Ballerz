import React from "react";
import { View, Text, SafeAreaView, FlatList } from "react-native";
import { UserProfileListView } from "../../../views/userProfileList";
import { IUserProfileData } from "../../../domain/use-cases/types";
import { IUserProfileListScreenNavigationController } from "../../userProfile/interface";
import { globalStyles } from "../../../views/styles";
import { IUserProfileListState } from "../../../app/features/userProfile/userProfileList/slice/interface";
import { AppContext, IAppContext } from "../../../controllers/provider";
import { IUserProfileDataState } from "../../../app/features/types";
import FindYourFriendsView from "../../../views/auth/findYourFriends";




export interface IUserProfileListScreenPropsWithoutNavigation {
    userProfileList: IUserProfileData[]
}


export interface IUserProfileListScreenProps extends IUserProfileListScreenPropsWithoutNavigation{
    navigationController: IUserProfileListScreenNavigationController
}


export default class UserProfileListScreen extends React.Component<IUserProfileListScreenProps>{

    constructor(props: IUserProfileListScreenProps) {
        super(props);
    }

    onPressUserProfile(id: string){
        this.props.navigationController.goToUserProfile(id)
    }


    render(): React.ReactNode {
        return(
            <SafeAreaView
                style={{backgroundColor: globalStyles.global.screenBackGroundColor , flexGrow: 1}}
            >
                {this.props.userProfileList.length > 0?(
                    <UserProfileListView
                        userProfileList={{items: this.props.userProfileList}}
                        onPressUserProfile={this.onPressUserProfile}
                    />

                ):(
                    <></>
                )}
            </SafeAreaView>
        )
    }
}


export interface IUserProfileListScreenState {
    userProfileList: IUserProfileListState['items']
    filteredUserProfileList: IUserProfileListState['items']
    filterInput: string | null
}

export abstract class AUserProfileListScreen<P, S extends IUserProfileListScreenState> extends React.Component<P, S>{

    static contextType = AppContext
    context: React.ContextType<typeof AppContext> = {} as IAppContext



    constructor(props: P) {
        super(props);
    }

    componentDidMount(): void {
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

    __initState(): void {
        const allUserProfiles = this.context.userProfileListState
        const newState: S = {
            ...this.state,
            userProfileList: allUserProfiles,
            filteredUserProfileList: allUserProfiles
        }
        this.setState(newState)
    }
}


interface Props {}

export interface ISelectableUserProfileData extends IUserProfileData {
    selected: boolean
}

interface ISelectableUserProfileListScreenState extends IUserProfileListScreenState {
    userProfileList: ISelectableUserProfileData[]
    filteredUserProfileList: ISelectableUserProfileData[]
}

class MakeFriendsScreen extends AUserProfileListScreen<Props, ISelectableUserProfileListScreenState> {

    state: ISelectableUserProfileListScreenState = {
        userProfileList: [],
        filteredUserProfileList: [],
        filterInput: null,
    }

    onPressUserProfile(selectedItem: IUserProfileDataState): void {
        const userProfileList: ISelectableUserProfileData[]  = [] 
        this.state.userProfileList.forEach((item) => {
            if(item.id == selectedItem.id){
                userProfileList.push({
                    ...item,
                    selected: !item.selected
                })
            } 
            else {
                userProfileList.push({
                    ...item,
                })
            }
        })
        const newState: ISelectableUserProfileListScreenState = {
            ...this.state,
            userProfileList
        }
        this.setState(newState)
    }

    componentDidMount(): void {
        super.componentDidMount()
    }
    
    __initState(): void {
        const initialProfiles: ISelectableUserProfileData[] = []

        this.context.userProfileListState.items.forEach((item) => {
            initialProfiles.push({...item, selected: false})
        })

        const newState: ISelectableUserProfileListScreenState = {
            ...this.state,
            userProfileList: initialProfiles,
            filteredUserProfileList: initialProfiles
        }
        this.setState(newState)
    }

    render() {
        return (
            <FindYourFriendsView
                onAddButtonPress={this.onPressUserProfile} 
                shareableLink={""} 
                onPressContinue={function (): void {
                    throw new Error("Function not implemented.");
                } } 
                onFilterInputChange={function (input: string): void {
                    throw new Error("Function not implemented.");
                } } 
                usersList={[]}                
            />
        )
    }

    


}

