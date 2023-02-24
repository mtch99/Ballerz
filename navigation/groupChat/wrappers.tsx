import { useNavigation } from "@react-navigation/native";
import GroupChatListScreen, { IGroupChatListScreenPropsWithoutNavigation } from "../../screens/groupChat";
import { GroupChatStackNavigationProp, GroupChatStackScreenProps } from "./types";
import { IGroupChatNavigationController } from "../../screens/groupChat/interface";
import GroupChatConversationScreen, { IGroupChatConversationScreenPropsWithoutNavigation } from "../../screens/groupChatConversation";
import { IGroupChatConversationNavigationController } from "../../screens/groupChatConversation/interface";
import { IGroupChatState } from "../../app/features/groupChat/groupChatList/slice/interface";




export function GroupChatListScreenWrapper(props: IGroupChatListScreenPropsWithoutNavigation){

    const navigation = useNavigation<GroupChatStackNavigationProp<'GroupChatListScreen'>>()

    const navigationController: IGroupChatNavigationController = {
        goToGroupChatConversationScreen(groupChat: IGroupChatState) {
            const groupChatId = groupChat.id
            navigation.navigate('GroupChatConversationScreen', {groupChatId});
        },
    }

    return (
        <GroupChatListScreen {...{navigationController}}/>
    )
}

export function GroupChatConversationScreenWrapper(props: GroupChatStackScreenProps<'GroupChatConversationScreen'>): JSX.Element{

    const navigation = useNavigation<GroupChatStackNavigationProp<'GroupChatConversationScreen'>>()
    const groupChatId = props.route.params.groupChatId

    const navigationController: IGroupChatConversationNavigationController = {

    }

    return (
        <GroupChatConversationScreen {...{groupChatId, navigationController}}/>
    )
}