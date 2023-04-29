import { useNavigation } from "@react-navigation/native";
import { globalStyles } from "../../../views/styles";
import { HeaderBackButton } from "@react-navigation/elements";

export default function BallerzHeaderBackButton(){
    const navigation = useNavigation();
    return (
        <HeaderBackButton
            tintColor={globalStyles.global.logoColor}
            onPress={() => navigation.goBack()}
        />
    )
}