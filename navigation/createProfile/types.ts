import { IDefineUsernameScreenProps } from "../../screens/createProfile/DefineUsername/interface";


/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

 import { BottomTabScreenProps, BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
 import { NavigatorScreenParams } from "@react-navigation/native";
 import { ExploreStackParamList } from "../explore/types";
 import { FeedStackParamList } from "../feed/types";
 import { GroupChatStackParamList } from "../groupChat/types";
import { IFindYourFriendsScreenProps } from "../../screens/userProfileList/findYourFriends/interface";
 
 
  
 declare global {
   namespace ReactNavigation {
     interface RootParamList extends CreateProfileStackParamList {}
   }
 }
 
 export type CreateProfileStackParamList = {
    DefineUsername: IDefineUsernameScreenProps
    FindYourFriends: IFindYourFriendsScreenProps
    ChooseYourCity: {}
 };
 
 
 export type CreateProfileStackScreenProps<Screen extends keyof CreateProfileStackParamList> = BottomTabScreenProps<
     CreateProfileStackParamList,
     Screen
 >;
 
 export type CreateProfileStackNavigationProp<Screen extends keyof CreateProfileStackParamList> = BottomTabNavigationProp<CreateProfileStackParamList, Screen>
 
 
 