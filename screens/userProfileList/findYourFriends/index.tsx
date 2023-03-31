import React from 'react';
import { IFindYourFriendsScreenProps, IFindYourFriendsScreenState} from './interface';
import { AppContext, IAppContext } from '../../../controllers/provider';
import { ISendFriendshipRequestsInput } from '../../../controllers/userProfile/interface';
import { IUserProfileData } from '../../../domain/use-cases/types';
import {SelectableUserProfileListView} from '../../../views/userProfileList/selectable';
import { ISelectableUserProfileData } from '../../interface';
import FindYourFriendsView from '../../../views/auth/findYourFriends';
import { IUserProfileDataState } from '../../../app/features/types';
import { Props } from 'react-native-tab-view/lib/typescript/src/TabBarIndicator';
import { ISelectableUserProfileListScreenState } from '../interface';
import { AUserProfileListScreen } from '../userProfileList';


// export  class FindYourFriendsScreen extends React.Component<IFindYourFriendsScreenProps, IFindYourFriendsScreenState> {

//     state: IFindYourFriendsScreenState = {
//         userList: []
//     }

//     static contextType = AppContext
//     context: React.ContextType<typeof AppContext> = {} as IAppContext

//     constructor(props: IFindYourFriendsScreenProps){
//         super(props)
//         this.onAddButtonPress = this.onAddButtonPress.bind(this)
//         this.onPressContinue = this.onPressContinue.bind(this)
//     }


//     private __initUserList(): ISelectableUserProfileData[]{
//         const userList: IFindYourFriendsScreenState['userList'] = []
//         const userProfileDataList = this.context.userProfileListState.items
//         userProfileDataList.forEach((userProfileData) => {
//             userList.push({...userProfileData, selected: false})
//         })

//         this.setState((prevState) => ({
//             ...prevState,
//             userList
//         }))  


//         return userList
//     }

//     componentDidMount(): void {
//         if(this.context.userProfileListState.items.length == 0){
//             this.context.userProfileController.getAllUserProfiles().then(() => 
//                 {
//                     this.__initUserList()
//                 }
//             )
//         } else {
//             this.__initUserList()
//         }
//     }

//     onAddButtonPress(item: IUserProfileData): void {
//         const userList: IFindYourFriendsScreenState['userList']  = [] 
//         this.state.userList.forEach((selectableUserProfileData) => {
//             if(selectableUserProfileData.id == item.id){
//                 userList.push({
//                     ...selectableUserProfileData,
//                     selected: !selectableUserProfileData.selected
//                 })
//             } 
//             else {
//                 userList.push({
//                     ...selectableUserProfileData,
//                 })
//             }
//         })
//         this.setState((prevState) => ({
//             ...prevState,
//             userList
//         }))
//     }

    
//     onPressContinue(): void {
//         let myProfileID: string | undefined = undefined

//         if(this.context.authState.profile){
//             myProfileID = this.context.authState.profile.id
//             const receiverProfiles: ISendFriendshipRequestsInput['receiverProfiles'] = []
//             this.state.userList.forEach(item => {
//                 if(item.selected){
//                     receiverProfiles.push({id: item.id, username: item.username, badges: item.badges})
//                 }
//             })
//             const input: ISendFriendshipRequestsInput = {
//                 myProfileID,
//                 receiverProfiles
//             }
//             this.context.userProfileController.sendFriendShipRequests(input)
//         }

//         if(!myProfileID){
//             console.error("No user Profile found, in findYourFriendsScreen")
//         }

//         this.props.navigationController.goToMyProfileScreen()
//     }

//     render(): React.ReactNode {
//         return (
//             <FindYourFriendsView
//                 onAddButtonPress={this.onAddButtonPress}
//                 usersList={this.state.userList}
//                 shareableLink='asdfg'
//                 onPressContinue={this.onPressContinue}
//                 onFilterInputChange={this.props.onSearchInputChange}
//             />
//         )
//     }
// }



export default class NewFindYourFriendsScreen  extends AUserProfileListScreen<IFindYourFriendsScreenProps, ISelectableUserProfileListScreenState> {


    state: ISelectableUserProfileListScreenState = {
        userProfileList: [],
        filteredUserProfileList: [],
        filterInput: '',
    }

    constructor(props: IFindYourFriendsScreenProps){
        super(props)
        this.onFilterInputChange = this.onFilterInputChange.bind(this)
        this.clearFilterInput = this.clearFilterInput.bind(this)
        this.onPressUserProfile = this.onPressUserProfile.bind(this)
        this.onPressContinue = this.onPressContinue.bind(this)
    }

    onPressUserProfile(pressedItem: ISelectableUserProfileData): void {
        const newUserProfileList = this.__selectItem(pressedItem)
        const mockUpdatedUserProfileState = this.__mockUpdateUserProfileListState(this.state, newUserProfileList)
        const newState = this.__mockUpdateFilteredUserProfileListState(mockUpdatedUserProfileState, this.state.filterInput)
        this.setState((prevState) => ({
            ...prevState,
            userProfileList: newState.userProfileList,
            filteredUserProfileList: newState.filteredUserProfileList,
            filterInput: newState.filterInput
        }))
    }

    private __mockUpdateUserProfileListState(currentState: ISelectableUserProfileListScreenState, newUserProfileList: ISelectableUserProfileData[]): ISelectableUserProfileListScreenState {
        const result: ISelectableUserProfileListScreenState = {
            ...currentState,
            userProfileList: [...newUserProfileList]
        }
        console.log(`Result: ${JSON.stringify(result.userProfileList[0])}`)
        return result

    }

    private __mockUpdateFilteredUserProfileListState(currentState: ISelectableUserProfileListScreenState, filterInput: string | null): ISelectableUserProfileListScreenState {
        const filteredUserProfileList: ISelectableUserProfileData[] = this.__applyFilter(filterInput?filterInput:'', currentState.userProfileList)
        console.log(`New filteredUserProfileList: ${JSON.stringify(filteredUserProfileList[0])}`)
        return {
            ...currentState,
            filterInput,
            filteredUserProfileList
        }
    }

    __selectItem(pressedItem: ISelectableUserProfileData): ISelectableUserProfileData[] {
        const newUserProfileList: ISelectableUserProfileData[]  = [] 
        this.state.userProfileList.forEach((item) => {
            if(item.id == pressedItem.id){
                console.log(`Item to select: ${JSON.stringify(pressedItem)}`)
                const newItem = {...item, selected:!pressedItem.selected}
                newUserProfileList.push(newItem)
            } 
            else {
                newUserProfileList.push({
                    ...item,
                    selected: item.selected
                })
            }
        })
        console.log(`result of selectItem: ${JSON.stringify(newUserProfileList[0])}`)
        return newUserProfileList
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

    onPressContinue(): void {
        let myProfileID: string | undefined = undefined

        if(this.context.authState.profile){
            myProfileID = this.context.authState.profile.id
            const receiverProfiles: ISendFriendshipRequestsInput['receiverProfiles'] = []
            this.state.userProfileList.forEach((item) => {
                if(item.selected){
                    receiverProfiles.push({id: item.id, username: item.username, badges: item.badges})
                }
            })
            const input: ISendFriendshipRequestsInput = {
                myProfileID,
                receiverProfiles
            }
            this.context.userProfileController.sendFriendShipRequests(input)
        }

        if(!myProfileID){
            console.error("No user Profile found, in findYourFriendsScreen")
        }

        this.props.navigationController.goToMyProfileScreen()
    }


    render() {
        return (
            <FindYourFriendsView
                onAddButtonPress={this.onPressUserProfile} 
                shareableLink={""} 
                onPressContinue={this.onPressContinue} 
                onFilterInputChange={this.onFilterInputChange} 
                usersList={this.state.filteredUserProfileList}                
            />
        )
    }

    


}