import { NavigatorScreenParams } from "@react-navigation/native";
import { NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack";
import { IUserProfileSearchScreenPropsWithoutNavigation } from "../../../screens/userProfileSearch";

declare global {
    namespace ReactNavigation {
      interface RootParamList extends SearchStackParamList {}
    }
}


export type SearchStackParamList = {
    UserProfileSearchSreen: IUserProfileSearchScreenPropsWithoutNavigation
    PlaceSearchScreen: IUserProfileSearchScreenPropsWithoutNavigation
};


export type SearchStackScreenProps<Screen extends keyof SearchStackParamList> = NativeStackScreenProps<
	SearchStackParamList,
	Screen
>;

export type SearchStackNavigationProp<Screen extends keyof SearchStackParamList> = NativeStackNavigationProp<SearchStackParamList, Screen>