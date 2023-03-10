import { IUserProfileScreenPropsWithoutNavigation } from "./../../screens/userProfile/index";
import { NavigatorScreenParams } from "@react-navigation/native";
import { IPlaceProfileScreenPropsWithoutNavigation } from "./../../screens/placeProfile/index";
import { IUserProfileSearchScreenProps, IUserProfileSearchScreenPropsWithoutNavigation } from "./../../screens/userProfileSearch/index";
import { NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack";
import { BaseStackParamList } from "../base/types";
import { SearchStackParamList } from "./search/types";

declare global {
    namespace ReactNavigation {
      interface RootParamList extends ExploreStackParamList {}
    }
}


export type ExploreStackParamList = {
    SearchStack: NavigatorScreenParams<SearchStackParamList>
    PlaceProfileScreen: IPlaceProfileScreenPropsWithoutNavigation
    UserProfileScreen: IUserProfileScreenPropsWithoutNavigation
};


export type ExploreStackScreenProps<Screen extends keyof ExploreStackParamList> = NativeStackScreenProps<
	ExploreStackParamList,
	Screen
>;

export type ExploreStackNavigationProp<Screen extends keyof ExploreStackParamList> = NativeStackNavigationProp<ExploreStackParamList, Screen>