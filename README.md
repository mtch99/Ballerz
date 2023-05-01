# Ballerz
The app for basketball pickup games


## Branch Purpose
    I want to be able to make friends and accept friendship requests
## Next 
Test these scenarios:
    `TODO: define next scenarios` 
    - I want to add my favorite playground
        
There must be three different games on three different courts, two at the moment, and one other on saturday


## How? (technical)


- [ ] Friend Playing notification
    - [x] FriendPlaying Notification View
    - [x] Fix FriendshipRequestNotification Layout
    - [x] Display
    - [ ] Join friend
    - [ ] Join button conditionally activated


* [x] Add profile picture after profile creation
    - [x] Load asssets before launch 
    - [x] Add default profile pic to assets
        

- [x] Games feature
    - [x] Undo onNewNotification warning in Notifications repository    
    - [x] Disable Play button during checkin request
    - [x] Create Game from feedScreen
    - [x] Popup after checkin


- [ ] I want see a toast message on new notification
    - [ ] Display a toast message on new received notification 
        - [ ] yarn add @react-native-material/Snackbar
        - [ ] Notification UseCase send events to the Notifications controller
        - [ ] Notification  controller send events to the snackbar 


- [ ] ProfilePic
    - [ ] Make sure profile pic is uploaded on userProfileCreation
    - [ ] Display respective profile pics on all UserList screens
        

TODO: scenario10
* [ ] Fix userProfileScreen virtualized list in scrollView Error



TODO: Prevent users from choosing an already used username





## Post-Testing Adjustments
TODO: Test that comment icon is explicit, now that there is a feed item with a comments section