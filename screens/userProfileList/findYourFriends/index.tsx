import React from 'react';
import { IFindYourFriendsScreenProps} from './interface';
import { ISendFriendshipRequestsInput } from '../../../controllers/userProfile/interface';
import { ISelectableUserProfileData } from '../../interface';
import FindYourFriendsView from '../../../views/auth/findYourFriends';
import { ISelectableUserProfileListScreenState } from '../interface';
import { AUserProfileListScreen } from '..';



export default class FindYourFriendsScreen  extends AUserProfileListScreen<IFindYourFriendsScreenProps, ISelectableUserProfileListScreenState> {


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

        this.props.navigationController.onFriendshipRequestsSent()
    }


    render() {
        return (
            <FindYourFriendsView
                onPressUserProfile={this.onPressUserProfile} 
                shareableLink={""} 
                usersList={this.state.filteredUserProfileList} 
                onPressContinue={this.onPressContinue}
                onFilterInputChange={this.onFilterInputChange}               
            />
        )
    }

    


}