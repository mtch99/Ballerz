import { IPlaceProfileScreenPropsWithoutNavigation } from "./../../screens/placeProfile/index";
import { NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack";

declare global {
    namespace ReactNavigation {
      interface RootParamList extends BaseStackParamList {}
    }
}


export type BaseStackParamList = {
    PlaceProfileScreen: IPlaceProfileScreenPropsWithoutNavigation
};


export type BaseStackScreenProps<Screen extends keyof BaseStackParamList> = NativeStackScreenProps<
	BaseStackParamList,
	Screen
>;

export type BaseStackNavigationProp<Screen extends keyof BaseStackParamList> = NativeStackNavigationProp<BaseStackParamList, Screen>