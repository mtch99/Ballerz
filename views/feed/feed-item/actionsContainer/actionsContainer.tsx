import { View, Text } from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import {styles} from "./styles"

export interface IActionContainerProps{}


export const ActionsContainer:React.FC<IActionContainerProps> = (props) => {
    return(
          <View style={styles.container}>
            <Text style={styles.jouer4}>jouer</Text>
            <Icon name="commenting-o" style={styles.commentIcon}></Icon>
            <Text style={styles.inviter}>inviter</Text>
          </View>
    )
}