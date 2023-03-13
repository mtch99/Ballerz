import { IUserProfileState } from "./../../app/features/userProfile/types";
import { IBadgeData } from "../../app/features/feed/slice/interface";


export interface IHeaderViewProps {
    username: string;
    profilePicUri: string;
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