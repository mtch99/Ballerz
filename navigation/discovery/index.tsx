import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { OnboardingStackParamList } from "./types";
import { DiscoverCityBallerzScreenWrapper, GatherWithYourFriendsScreenWrapper, WelcomeScreenWrapper } from "./wrappers";

const Stack = createNativeStackNavigator<OnboardingStackParamList>();


export function DiscoveryStackNavigator(): JSX.Element {

    const _initialRouteName: keyof OnboardingStackParamList = 'Welcome'

    return(
        <Stack.Navigator
            initialRouteName={_initialRouteName}
        >
            <Stack.Screen
                name='Welcome'
                options={{
                    headerShown: false,
                }}
                component={WelcomeScreenWrapper}
            />

            <Stack.Screen
                name='DiscoverCityBallerz'
                options={{
                    headerShown: false,
                }}
                component={DiscoverCityBallerzScreenWrapper}
            />

            <Stack.Screen
                name='GatherWithYourFriends'
                options={{
                    headerShown: false,
                }}
                //@ts-ignore
                component={GatherWithYourFriendsScreenWrapper}
            />
        </Stack.Navigator>
    )

}