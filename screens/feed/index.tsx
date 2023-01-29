import React from "react";
import { FeedController } from "../../controllers/feed";
import { FeedItem } from "../../views/feed/feed-item";



export class FeedScreen extends React.Component{
    
    feedController = new FeedController()

    render() {
        return (<FeedItem
            {...this.feedController.feedItems[0]}
        />)
    }
}