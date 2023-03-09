import { IUserProfileSearchScreenProps } from "./../../screens/userProfileSearch/index";
import { NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack";

declare global {
    namespace ReactNavigation {
      interface RootParamList extends ExploreStackParamList {}
    }
}


export type ExploreStackParamList = {
    UserProfileSearchSreen: IUserProfileSearchScreenProps
    PlaceSearchScreen: IUserProfileSearchScreenProps
};


export type ExploreStackScreenProps<Screen extends keyof ExploreStackParamList> = NativeStackScreenProps<
	ExploreStackParamList,
	Screen
>;

export type ExploreStackNavigationProp<Screen extends keyof ExploreStackParamList> = NativeStackNavigationProp<ExploreStackParamList, Screen>