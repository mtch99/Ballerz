import { Image } from "expo-image";
import { StyleSheet } from "react-native";



export default function MailIcon(){
    return(
        <Image 
            source={require('../../assets/MailIcon.svg')}
            contentFit="cover"
        />
    )
}

const styles = StyleSheet.create({
    image: {
        height: 124,
        width: 124
    }
})