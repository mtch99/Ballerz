import { ReactNode } from "react";
import UserProfileListScreen from "../userProfileList";
import { SafeAreaView as View } from "react-native-safe-area-context";
import { Text } from "react-native";


export default class AttendantsList extends UserProfileListScreen {

    render(): ReactNode {
        if(this.props.userProfileList.length>0){
            return super.render()
        }
        return(
            <View
                style={{
                    borderBottomColor:""
                }}
            >
                <Text style={{color:"#F5F8FA", marginTop: "10"}}>
                    Vous n'avez pas d'amis ici. Ajouter des gens
                </Text>
            </View>
        )
    }
}