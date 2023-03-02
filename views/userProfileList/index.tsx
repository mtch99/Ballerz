import { FlatList, SafeAreaView, Text, View } from "react-native"
import { IUserProfileListState } from "../../app/features/userProfile/slice/interface"

export interface IUserProfileListViewProps{
    userProfileList: IUserProfileListState
}

export function UserProfileListView(props: IUserProfileListViewProps) {

    return(
        <SafeAreaView
        >
            <FlatList
                data={props.userProfileList.items}
                renderItem={({item, index}) =>{
                    return(
                        <View style={{borderBottomColor:"#657786", borderBottomWidth:3, marginTop: 4}}>
                            <Text
                                style={{color:"white", fontSize:26}}
                            >
                                {item.username}
                            </Text>
                        </View>
                    )
                }}
                extraData={props.userProfileList}
            />
        </SafeAreaView>  
    )  
}