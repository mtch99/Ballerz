import { Image } from "expo-image";
import { StyleSheet } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { globalStyles } from "../../../views/styles";



export default function BellIcon(){
    return(
        <FontAwesome name="bell-o" size={17.17} color={globalStyles.global.logoColor} />
    )
}
