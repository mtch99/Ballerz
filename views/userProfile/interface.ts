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