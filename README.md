# Ballerz
The app for finding basketball pickup games

## Branch Purpose
Test this scenario: 
    3) I want to know badges meanings // I am curious about the badges
    

## Next 
Test these scenarios:
    4) I want to see the attendants list
    5) I want to be acknowledged that I have to make friends in order to view   their attendances



There must be three different games on three different courts, two at the moment, and one other on saturday


## How? (technical)

- [x] Badge Click event on FeedItem
    - [x] handle BadgeClick in FeedScreen
    - [x] emit badgeClick event in FeedView
        -  [x] Wrap badgeNumView with a touchable opacity
        -  [x] Emit BadgeClick event in BadgeNumView

- [x] init BadgeListScreen Page
    - [x] Init Navigation
    - [x] The FeedScreen must be injected a mavigation controller
        - [x] Create feedScreenWrapper to wrap the FeedScreen in the navigator
            - [x] added a proptype without controller to the feed screen to bind the navigator screen props to the feed screen natural props 











