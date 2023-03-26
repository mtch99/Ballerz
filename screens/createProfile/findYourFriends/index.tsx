import React from 'react';
import { IFindYourFriendsScreenProps, IFindYourFriendsScreenState} from './interface';
import { AppContext, IAppContext } from '../../../controllers/provider';
import { ISendFriendshipRequestsInput } from '../../../controllers/userProfile/interface';
import { IUserProfileData } from '../../../domain/use-cases/types';
import {SelectableUserProfileListView} from '../../../views/userProfileList/selectable';
import { ISelectableUserProfileData } from '../../interface';
import FindYourFriendsView from '../../../views/auth/findYourFriends';


export default class FindYourFriendsScreen extends React.Component<IFindYourFriendsScreenProps, IFindYourFriendsScreenState> {

    state: IFindYourFriendsScreenState = {
        userList: []
    }

    static contextType = AppContext
    context: React.ContextType<typeof AppContext> = {} as IAppContext

    constructor(props: IFindYourFriendsScreenProps){
        super(props)
        this.onAddButtonPress = this.onAddButtonPress.bind(this)
        this.onPressContinue = this.onPressContinue.bind(this)
    }


    private __initUserList(): ISelectableUserProfileData[]{
        const userList: IFindYourFriendsScreenState['userList'] = []
        const userProfileDataList = this.context.userProfileListState.items
        userProfileDataList.forEach((userProfileData) => {
            userList.push({...userProfileData, selected: false})
        })

        this.setState((prevState) => ({
            ...prevState,
            userList
        }))  


        return userList
    }

    componentDidMount(): void {
        if(this.context.userProfileListState.items.length == 0){
            this.context.userProfileController.getAllUserProfiles().then(() => 
                {
                    this.__initUserList()
                }
            )
        } else {
            this.__initUserList()
        }
    }

    onAddButtonPress(item: IUserProfileData): void {
        const userList: IFindYourFriendsScreenState['userList']  = [] 
        this.state.userList.forEach((selectableUserProfileData) => {
            if(selectableUserProfileData.id == item.id){
                userList.push({
                    ...selectableUserProfileData,
                    selected: !selectableUserProfileData.selected
                })
            } 
            else {
                userList.push({
                    ...selectableUserProfileData,
                })
            }
        })
        this.setState((prevState) => ({
            ...prevState,
            userList
        }))
    }

    
    onPressContinue(): void {
        let myProfileID: string | undefined = undefined

        if(this.context.authState.profile){
            myProfileID = this.context.authState.profile.id
            const receiverProfiles: ISendFriendshipRequestsInput['receiverProfiles'] = []
            this.state.userList.forEach(item => {
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

    render(): React.ReactNode {
        return (
            <FindYourFriendsView
                onAddButtonPress={this.onAddButtonPress}
                usersList={this.state.userList}
                shareableLink='asdfg'
                onPressContinue={this.onPressContinue}
            />
        )
    }
}


