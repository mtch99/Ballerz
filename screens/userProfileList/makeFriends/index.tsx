import React, { ReactNode } from "react";
import UserProfileSearchScreen from "..";
import { MakeFriendsView } from "../../../views/makeFriends";
import { AppContext, IAppContext } from "../../../controllers/provider";
import { IUserProfileListViewProps } from "../interface";
import { FeedStackNavigationContext } from "../../../navigation/feed/context";


export interface IMakeFriendsViewProps extends IUserProfileListViewProps{
    searchButtonState: boolean
}

export interface IMakeFriendsScreenProps {
    searchButtonState: boolean
}



export class FeedStackMakeFriendsScreen extends React.Component<IMakeFriendsScreenProps> {


    static contextType = AppContext
    context: React.ContextType<typeof AppContext> = {} as IAppContext


    onPressUserProfile(id: string): void {
        throw new Error("Method not implemented.");
    }


    componentDidMount(): void {
        this.context.userProfileController.getAllUserProfiles()
    }


    render(): JSX.Element {
        return(
            <MakeFriendsView
                userProfileList={this.context.userProfileListState}
                onPressUserProfile={this.onPressUserProfile}
                searchButtonState={this.props.searchButtonState}
            />
        )
    }
}