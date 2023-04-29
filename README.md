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

- [ ] Notifications use case
    - [ ] Friend Playing notification
    - [ ] HotCourt notification
    - [ ] GameInvitation Notification

* [x] App Icon and splashscreen

- [x] Add friend


* [ ] Add profile picture after profile creation
    TODO:
    - [ ] Load asssets before launch 
    - [ ] Add default profile pic to assets
        

- [ ] Games feature
    TODO: Warning: for now, akk the games with 0 attendants are not displayed
        - [ ] Undo the last warning
        - [ ] Undo onNewNotification warning in Notifications repository
    TODO:     
    - [ ] Refactor Game interface. Change date fields to string type
    TODO:
    - [ ] Disable Play button during checkin request
    - [ ] Popup after checkin


- [ ] I want see a toast message on new notiication
    - [ ] Display a toast message on new received notification 
        - [ ] yarn add @react-native-material/Snackbar
        - [ ] Notification UseCase send events to the Notifications controller
        - [ ] Notification  controller send events to the snackbar 

- [ ] ProfilePic
    - [ ] Make sure profile pic is uploaded on userProfileCreation
    - [ ] Display respective profile pics on all UserList screens
        

TODO: scenario10
* [ ] Fix userProfileScreen virtualized list in scrollView Error


TODO: auth


TODO: Prevent users from choosing an already used username





## Post-Testing Adjustments
TODO: Test that comment icon is explicit, now that there is a feed item with a comments section