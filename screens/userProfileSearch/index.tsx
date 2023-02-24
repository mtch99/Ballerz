import React from "react";
import { IUserProfileListState } from "../../app/features/userProfile/slice/interface";
import { IUserProfileSearchScreen } from "./interface";
import { AppContext, IAppContext } from "../../controllers/provider";
import { FlatList, SafeAreaView, View, Text } from "react-native";


export interface IUserProfileSearchScreenProps{}

export default class UserProfileSearchScreen extends React.Component implements IUserProfileSearchScreen {

    userProfileList: IUserProfileListState = {items: []};

    constructor(props: IUserProfileSearchScreenProps){
        super(props);
    }

    static contextType = AppContext
    context: React.ContextType<typeof AppContext> = {} as IAppContext

    componentDidMount(): void {
        this.context.userProfileController.getAllUserProfiles()
        console.warn(`UserProfileSearchScreen mounted: \n ${JSON.stringify(this.context.userProfileListState)}`)
    }

    componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any): void {
    }

    render(): React.ReactNode {
        return(
            <UserProfileListView
                userProfileList={this.context.userProfileListState}
            />
        )
    }
}


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
                    console.error("YUesss")
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