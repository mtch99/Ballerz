import { View, Text } from "react-native";
import { IBadgeData } from "../../../app/features/feed/slice/interface";
import { styles } from "./styles";


export interface IBadgeItemViewProps{
    badge: IBadgeData
}

export function BadgeItemView(props: IBadgeItemViewProps){

    const badge = props.badge;
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.badgeSymbolText}>
                    {badge.symbol}
                </Text>
                <Text style={styles.badgeNameText}>
                    {badge.name}
                </Text>
            </View>
            <Text style={styles.descriptionText}>
                {badge.description}
            </Text>
        </View>
    )
}