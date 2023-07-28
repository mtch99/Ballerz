import { IUserProfileListViewProps } from "../../../interface";

export interface IUserProfileSearchViewProps extends IUserProfileListViewProps {
    onFilterInputChange(value: string): void
}