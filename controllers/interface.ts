import { IUserProfileController } from "./userProfile/interface";
import { IGroupChat } from "./../use-cases/groupchat/types";
import IFeedController from "./feed/interface";
import IGroupChatController from "./groupChat/interface";
import IPlaceController from "./place/interface";


export interface IAppController {
    feedController: IFeedController,
    groupChatController: IGroupChatController
    userProfileController: IUserProfileController,
    placeController: IPlaceController
}
