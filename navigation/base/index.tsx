import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BaseStackParamList } from "./types";
import { FriendsListScreenWrapper, PlaceProfileScreenWrapper, UserProfileScreenWrapper } from "./wrappers";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { globalStyles } from "../../views/styles";
import { Text } from "react-native";
import { HeaderBackButton } from "@react-navigation/elements";
import { useNavigation } from "@react-navigation/native";


const Stack = createNativeStackNavigator<BaseStackParamList>();

export function BaseStackNavigator(): JSX.Element {
    const initialRouteName: keyof BaseStackParamList = "PlaceProfileScreen"
    const navigation = useNavigation();

    return(
        <Stack.Navigator
            initialRouteName={initialRouteName}
        >

            <Stack.Screen
                name="PlaceProfileScreen"
                options={{
                    headerStyle:globalStyles.global.headerStyle,
                    headerLeft:() => {
                        return (
                            <HeaderBackButton
                                tintColor={globalStyles.global.logoColor}
                                onPress={() => {navigation.goBack()}}
                            />
                        )
                    }
                }}
 
				component={PlaceProfileScreenWrapper}
            />
            <Stack.Screen
                name="UserProfileScreen"
                options={{
                    headerStyle:globalStyles.global.headerStyle,
                    headerLeft:() => {
                        return (
                            <HeaderBackButton
                                tintColor={globalStyles.global.logoColor}
                                onPress={() => {navigation.goBack()}}
                            />
                        )
                    }
                }}
                component={UserProfileScreenWrapper}
            />
            <Stack.Screen
                name="FriendsListScreen"
                options={{
                    headerLeft:() => {
                        return (
                            <HeaderBackButton
                                tintColor={globalStyles.global.logoColor}
                                onPress={() => {navigation.goBack()}}
                            />
                        )
                    },
                    title: "Amis"
                }}
                component={FriendsListScreenWrapper}
            />

        </Stack.Navigator>
    )
}