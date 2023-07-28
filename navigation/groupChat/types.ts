import { NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack";
import { IGroupChatListScreenPropsWithoutNavigation } from "./../../screens/groupChat/index";
import { IGroupChatConversationScreenPropsWithoutNavigation } from "../../screens/groupChat/groupChatConversation";


export type GroupChatStackParamList = {
	GroupChatListScreen: IGroupChatListScreenPropsWithoutNavigation
	GroupChatConversationScreen: IGroupChatConversationScreenPropsWithoutNavigation
};


export type GroupChatStackScreenProps<Screen extends keyof GroupChatStackParamList> = NativeStackScreenProps<
	GroupChatStackParamList,
	Screen
>;

export type GroupChatStackNavigationProp<Screen extends keyof GroupChatStackParamList> = NativeStackNavigationProp<GroupChatStackParamList, Screen>