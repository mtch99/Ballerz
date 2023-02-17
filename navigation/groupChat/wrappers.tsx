import { useNavigation } from "@react-navigation/native";
import GroupChatListScreen, { IGroupChatListScreenPropsWithoutNavigation } from "../../screens/groupChat";
import { GroupChatStackNavigationProp } from "./types";
import { IGroupChatNavigationController } from "../../screens/groupChat/interface";




export function GroupChatListScreenWrapper(props: IGroupChatListScreenPropsWithoutNavigation){

    const navigation = useNavigation<GroupChatStackNavigationProp<'GroupChatListScreen'>>()

    const navigationController: IGroupChatNavigationController = {
        goToGroupChatScreen(GroupChat) {
            navigation.navigate('GroupChatListScreen', GroupChat);
        },
    }

    return (
        <GroupChatListScreen {...{navigationController}}/>
    )
}