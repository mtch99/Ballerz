import { NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack";
import { IGroupChatListScreenPropsWithoutNavigation } from "./../../screens/groupChat/index";


export type GroupChatStackParamList = {
	GroupChatListScreen: IGroupChatListScreenPropsWithoutNavigation
};


export type GroupChatStackScreenProps<Screen extends keyof GroupChatStackParamList> = NativeStackScreenProps<
	GroupChatStackParamList,
	Screen
>;

export type GroupChatStackNavigationProp<Screen extends keyof GroupChatStackParamList> = NativeStackNavigationProp<GroupChatStackParamList, Screen>