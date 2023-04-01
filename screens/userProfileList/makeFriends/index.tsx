import React from "react";
import { MakeFriendsView } from "../../../views/makeFriends";
import { AppContext, IAppContext } from "../../../controllers/provider";
import FindYourFriendsScreen from "../findYourFriends";



export class FeedStackMakeFriendsScreen extends FindYourFriendsScreen {
    static contextType = AppContext
    context: React.ContextType<typeof AppContext> = {} as IAppContext

    render(): JSX.Element {
        return(
            <MakeFriendsView
                usersList={this.state.filteredUserProfileList}
                onFilterInputChange={this.onFilterInputChange}
                onPressContinue={this.onPressContinue}
                shareableLink=""
                onPressUserProfile={this.onPressUserProfile}
            />
        )
    }
}