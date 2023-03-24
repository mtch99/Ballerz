import React from 'react';
import { IFindYourFriendsScreenProps, IFindYourFriendsScreenState} from './interface';
import { AppContext, IAppContext } from '../../../controllers/provider';
import { ISendFriendshipRequestsInput } from '../../../controllers/userProfile/interface';
import { IUserProfileData } from '../../../domain/use-cases/types';
import SelectableUserProfileListView from '../../../views/userProfileList/selectable';


export default class FindYourFriendsScreen extends React.Component<IFindYourFriendsScreenProps, IFindYourFriendsScreenState> {

    state: IFindYourFriendsScreenState = {
        userList: []
    }

    static contextType = AppContext
    context: React.ContextType<typeof AppContext> = {} as IAppContext

    constructor(props: IFindYourFriendsScreenProps){
        super(props)
    }


    private __initUserList(){
        const userList: IFindYourFriendsScreenState['userList'] = []
        this.props.userProfileDataList.forEach((userProfileData) => {
            userList.push({...userProfileData, selected: false})
        })

        this.setState((prevState) => ({
            ...prevState,
            userList
        }))  
    }

    onSelectItem(item: IUserProfileData): void {
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
        if(this.context.authState.user){
            if(this.context.authState.user.profile){
                myProfileID = this.context.authState.user.profile.id
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
        }

        if(!myProfileID){
            console.error("No user Profile found, in findYourFriendsScreen")
        }
    }






    render(): React.ReactNode {
        return (
            <SelectableUserProfileListView
                onSelectItem={this.onSelectItem}
                usersList={this.state.userList}
            />
        )
    }
}


