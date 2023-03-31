import { IUserProfileListScreenState } from "../interface";
import { UserProfileSearchView } from "../../../views/userProfileList/userProfileSearch";
import { IUserProfileData } from "../../../domain/use-cases/types";
import { AUserProfileListScreen, IUserProfileListScreenProps } from "..";




export default class UserProfileSearchScreen<T extends IUserProfileListScreenProps = IUserProfileListScreenProps> extends AUserProfileListScreen<T, IUserProfileListScreenState>{
    

    state: IUserProfileListScreenState = {
        userProfileList: [],
        filteredUserProfileList: [],
        filterInput: ''
    }
    constructor(props: T) {
        super(props);
    }
    
    onPressUserProfile(item: IUserProfileData) {
        this.props.navigationController.goToUserProfile(item.id)
    }

    
    __initState(): void {
        this.setState((prevState) => ({
            ...prevState,
            userProfileList: this.context.userProfileListState.items,
            filteredUserProfileList: this.context.userProfileListState.items,
            filterInput: ''
        }))
    }


    render(): React.ReactNode {
        return(
            <UserProfileSearchView
                usersList={this.state.filteredUserProfileList}
                onPressUserProfile={this.onPressUserProfile}
                onFilterInputChange={this.onFilterInputChange}
            />
        )
    }
}