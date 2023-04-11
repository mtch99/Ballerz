import { IUserProfileScreenPropsWithoutNavigation } from "./../../screens/userProfile/index";
import { IPlaceProfileScreenPropsWithoutNavigation } from "./../../screens/placeProfile/index";
import { NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack";
import { IFriendListScreenPropsWithoutNavigation } from "../../screens/userProfileList/friendsList";

declare global {
    namespace ReactNavigation {
      interface RootParamList extends BaseStackParamList {}
    }
}


export type BaseStackParamList = {
    PlaceProfileScreen: IPlaceProfileScreenPropsWithoutNavigation
    UserProfileScreen: IUserProfileScreenPropsWithoutNavigation
    FriendsListScreen: IFriendListScreenPropsWithoutNavigation
};


export type BaseStackScreenProps<Screen extends keyof BaseStackParamList> = NativeStackScreenProps<
	BaseStackParamList,
	Screen
>;

export type BaseStackNavigationProp<Screen extends keyof BaseStackParamList> = NativeStackNavigationProp<BaseStackParamList, Screen>