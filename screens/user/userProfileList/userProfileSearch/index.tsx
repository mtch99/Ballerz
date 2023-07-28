import { IUserProfileListScreenState } from "../interface";
import { UserProfileSearchView } from "../../../../views/userProfile/userProfileList/userProfileSearch";
import { IUserProfileData } from "../../../../domain/use-cases/types";
import { AUserProfileListScreen, IUserProfileListScreenProps } from "..";
import { AppContext, IAppContext } from "../../../../controllers/provider";




export default class UserProfileSearchScreen<T extends IUserProfileListScreenProps = IUserProfileListScreenProps> extends AUserProfileListScreen<T, IUserProfileListScreenState>{
    

    static contextType = AppContext
    context: React.ContextType<typeof AppContext> = {} as IAppContext
    
    constructor(props: T) {
        super(props);
    }
    
    onPressUserProfile(item: IUserProfileData) {
        this.props.navigationController.goToUserProfile(item)
    }



    
    __initState(): void {
        this.setState((prevState) => ({
            ...prevState,
            userProfileList: this.context.userProfileListState.items,
            filteredUserProfileList: this.context.userProfileListState.items,
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