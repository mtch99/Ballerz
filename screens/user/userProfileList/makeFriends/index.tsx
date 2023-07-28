import React from "react";
import { MakeFriendsView } from "../../../../views/makeFriends";
import { AppContext, IAppContext } from "../../../../controllers/provider";
import FindYourFriendsScreen from "../findYourFriends";
import { IFindYourFriendsScreenNavigationController, IFindYourFriendsScreenProps } from "../findYourFriends/interface";

export interface IMakeFriendsScreenProps extends IFindYourFriendsScreenProps {
    navigationController: IMakeFriendsScreenNavigationController
}

export interface IMakeFriendsScreenNavigationController extends IFindYourFriendsScreenNavigationController {
    goBack: () => void
}

export class MakeFriendsScreen extends FindYourFriendsScreen<IMakeFriendsScreenProps> {
    static contextType = AppContext
    context: React.ContextType<typeof AppContext> = {} as IAppContext

    constructor(props: IMakeFriendsScreenProps) {
        super(props);
    }


    cancel(): void {
        this.props.navigationController.goBack();
    }


    render(): JSX.Element {
        return(
            <MakeFriendsView
                usersList={this.state.filteredUserProfileList}
                onFilterInputChange={this.onFilterInputChange}
                onPressContinue={this.onPressContinue}
                shareableLink=""
                onPressUserProfile={this.onPressUserProfile}
                cancel={this.cancel.bind(this)}
            />
        )
    }
}