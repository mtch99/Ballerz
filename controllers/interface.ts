import { IUserProfileController } from "./userProfile/interface";
import { IGroupChat } from "./../use-cases/groupchat/types";
import IFeedController from "./feed/interface";
import IGroupChatController from "./groupChat/interface";


export interface IAppController {
    feedController: IFeedController,
    groupChatController: IGroupChatController
    userProfileController: IUserProfileController
}
