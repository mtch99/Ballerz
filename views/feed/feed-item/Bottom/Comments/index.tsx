import { View, Text, TouchableOpacity } from "react-native"
import {styles} from "./styles"
import { IFeedItemState } from "../../../../../app/features/feed/slice/interface"

export interface ICommentsContainerProps{
    onPressCommentsNumber: () => void
    comments: IFeedItemState['comments']
}


export default function CommentsView(props: ICommentsContainerProps){



    return(
        <View style={styles.container}>
            <View style={styles.topCommentsContainer}>
                <View style={styles.commentContainer}>
                    <Text style={styles.usernameText}>
                        frank
                    </Text>
                    <Text style={styles.commentText}>
                        5v5, pizza pour l'équipe gagnante
                    </Text>
                </View>
            </View>
            <View style={styles.commentsNumberContainer}>
                <TouchableOpacity
                    onPress={() => {props.onPressCommentsNumber()}}
                >
                    <Text style={styles.commentsNumberText}>
                        voir {props.comments.length} commentaires
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )

}