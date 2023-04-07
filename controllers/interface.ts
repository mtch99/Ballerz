import { INotificationController } from "./notification/interface";
import { IUserProfileController } from "./userProfile/interface";
import { IGroupChat } from "../domain/use-cases/groupchat/types";
import IFeedController from "./feed/interface";
import IGroupChatController from "./groupChat/interface";
import IPlaceController from "./place/interface";
import IAuthController from "./auth/interface";


export interface IAppController {
    authController: IAuthController,
    feedController: IFeedController,
    groupChatController: IGroupChatController
    userProfileController: IUserProfileController,
    placeController: IPlaceController,
    prepareData: () => void
    appControllerEventListener: IAppControllerEventListener
    notificationController: INotificationController
}


export interface IAppControllerEventListener {
    onDataPreparedEvent: () => void
}
