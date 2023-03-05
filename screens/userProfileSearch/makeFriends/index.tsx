import { ReactNode } from "react";
import UserProfileSearchScreen from "..";
import { MakeFriendsView } from "../../../views/userProfile/makeFriendsScreen";


export default class MakeFriendsScreen extends UserProfileSearchScreen {


    render(){
        return(
            <MakeFriendsView
                userProfileList={this.context.userProfileListState}
                onPressUserProfile={this.onPressUserProfile}
            />
        )
    }
}