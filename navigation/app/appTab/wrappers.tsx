import React from "react";
import { ExploreStackNavigator } from "../../explore";
import { FeedStackNavigator } from "../../feed";
import { GroupChatStackNavigator } from "../../groupChat";
import { MyProfileScreen, UserProfileScreen } from "../../../screens/userProfile";
import { IUserProfileScreenNavigationController } from "../../../screens/userProfile/interface";
import { AppContext } from "../../../controllers/provider";



export function FeedStackWrapper(){
    return(
        <FeedStackNavigator/>
    )
}

export function GroupChatStackWrapper(){
    return(
        <GroupChatStackNavigator/>
    )
}

export function UserProfileScreenWrapper(){

    const [userProfileId, setUserProfileId] = React.useState("")
    const {authState} = React.useContext(AppContext)


    React.useEffect(() => {
        if(authState.profile){
            console.warn("User profile is " + JSON.stringify(authState.profile))
            setUserProfileId(authState.profile.id)
        }
    }, [authState])

    const navigationController: IUserProfileScreenNavigationController = {
        goToUserProfile: function (id: string): void {
            console.log("Function not implemented.");
        },
        goToPlaceProfile: function (id: string): void {
            console.log("Function not implemented.");
        },
        goToCommentsScreen: function (gameId: string): void {
            console.log("Function not implemented.");
        },
        goToAttendantsListScreen: function (gameId: string): void {
            console.log("Function not implemented.");
        }
    }

    return(
        <MyProfileScreen
            // navigationController={navigationController}
        />
    )
}


export function ExploreStackWrapper(){
    return(<ExploreStackNavigator/>)
}

