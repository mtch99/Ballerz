import React from "react";

export const FeedStackNavigationContext = React.createContext<IFeedStackNavigationContext>({userProfileSearchButtonState: false});

export interface IFeedStackNavigationContext {
	userProfileSearchButtonState: boolean
}