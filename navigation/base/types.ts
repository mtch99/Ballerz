import { IUserProfileScreenPropsWithoutNavigation } from "./../../screens/userProfile/index";
import { IPlaceProfileScreenPropsWithoutNavigation } from "./../../screens/placeProfile/index";
import { NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack";
import { IFriendListScreenPropsWithoutNavigation } from "../../screens/userProfileList/friendsList";
import { CreateGameStackParamList } from "./createGameStack/types";
import { NavigatorScreenParams } from "@react-navigation/native";

declare global {
    namespace ReactNavigation {
      interface RootParamList extends BaseStackParamList {}
    }
}


export type BaseStackParamList = {
    PlaceProfileScreen: IPlaceProfileScreenPropsWithoutNavigation
    UserProfileScreen: IUserProfileScreenPropsWithoutNavigation
    FriendsListScreen: IFriendListScreenPropsWithoutNavigation
    CreateGameStack: NavigatorScreenParams<CreateGameStackParamList>
};


export type BaseStackScreenProps<Screen extends keyof BaseStackParamList> = NativeStackScreenProps<
	BaseStackParamList,
	Screen
>;

export type BaseStackNavigationProp<Screen extends keyof BaseStackParamList> = NativeStackNavigationProp<BaseStackParamList, Screen>