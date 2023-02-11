# Ballerz
The app for finding basketball pickup games

## Branch Purpose
    5) I want to be acknowledged that I have to make friends in order to view their attendances
       I want to be acknowledged that I can only invite my friends 

## Next 
Test these scenarios:
    `6) I want to see games comments'`
        

There must be three different games on three different courts, two at the moment, and one other on saturday


## How? (technical)
- [x] Write 0 friends here instead in the friends there component
- [x] On click friends there, display a modal which acknowledges the user that he has to make friends to be able to see where they are playing
    - [x] Add FriendsThere field in the feedItem
        - [x] Add in usecase Data model
        - [x] Add in FeedModel data model
    - [x] Write rendering logic in the feedScreen
    - [x] Display an Alert with the text
    - [x] Add Actions
        - [x] No, Thanks
        - [x] Make friends

- [x] On click invite button, display a modal which aknowledges the user that he can only invite friends
    - [x] Invite Button in actionn container
        - [x] Define the prop here
        - [x] Drill it up to the feedItem view 
    - [x] handle InvitePress in feed screen controller