import { IBadgeData } from "../../app/features/feed/slice/interface";
import { IUserProfileState } from "../../app/features/types";


export interface IHeaderViewProps {
    username: string;
    profilePicUri: string;
    isFriend: IUserProfileState['isFriend']
    friendsList: IUserProfileState['friends']
    onPressFriendsNumber: () => void;
}

export interface IBadgeListViewProps {
    badgeList: IBadgeData[]
}

export interface IPicturesViewProps {
    pictureUriList: string[];
}

export interface IGamesViewProps{
    gameList: IUserProfileState['games']
}