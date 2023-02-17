import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GroupChatStackParamList } from "./types";
import { GroupChatListScreenWrapper } from "./wrappers";

const Stack = createNativeStackNavigator<GroupChatStackParamList>();


export function GroupChatStackNavigator(): JSX.Element {

    const _initialRouteName: keyof GroupChatStackParamList = 'GroupChatListScreen'

    return(
        <Stack.Navigator
            initialRouteName={_initialRouteName}
        >
            <Stack.Screen
                name='GroupChatListScreen'
                options={{
                    headerShown: true,
                    headerTitle: 'Mes Groupes',
                    headerBackVisible: false,
                }}
                component={GroupChatListScreenWrapper}
            />
        </Stack.Navigator>
    )

}