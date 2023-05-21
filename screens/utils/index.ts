import { Alert, Share } from "react-native";
import { IFeedItemState } from "../../app/features/feed/slice/interface";

export async function handleSharePress(feedItem: IFeedItemState): Promise<void>{
    try {
        const result = await Share.share({
            message:'Hey, Rejoins moi sur Ballerz pour être informé lorsque je vais jouer au basketball. \n\nBall is life 🔥',
            title: "https://testflight.apple.com/join/6GBFVtwg",
            url: "https://testflight.apple.com/join/6GBFVtwg"
        });
        if (result.action === Share.sharedAction) {
          if (result.activityType) {
            // shared with activity type of result.activityType
          } else {
            // shared
          }
        } else if (result.action === Share.dismissedAction) {
          // dismissed
        }
    } catch (error: any) {
        Alert.alert(error.message);
    }
    // Sharing.shareAsync(betaAppUrl, {dialogTitle:"aioiwiodshiowdhi"})
}