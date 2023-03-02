import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GroupChatStackParamList } from "./types";
import { GroupChatConversationScreenWrapper, GroupChatListScreenWrapper } from "./wrappers";

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
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    }
                }}
                component={GroupChatListScreenWrapper}
            />

            <Stack.Screen
                name='GroupChatConversationScreen'
                options={{
                    headerShown: true,
                    headerTitle: '',
                    headerBackVisible: true,
                }}
                component={GroupChatConversationScreenWrapper}
                initialParams={{groupChatId: ''}}
            />
        </Stack.Navigator>
    )

}