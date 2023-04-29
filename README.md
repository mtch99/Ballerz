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
    - [x] Define and implement Notifications usecase
    - [x] Notifications model
    - [x] Notifications controller
    * [x] Check auth flow
    - [x] Notifications subscriptions after userProfile retrieval or creation
    - [ ] Friend Playing notification
    - [ ] HotCourt notification
    - [ ] GameInvitation Notification

* [x] App Icon and splashscreen

- [x] Add friend


* [x] Add profile picture after profile creation
    - [x] ImagePicker
    - [x] Create S3 client

    - [x] Onboarding and authflow
    TODO:
    - [ ] Load asssets before launch 
    - [ ] Add default profile pic to assets
        

- [ ] Games feature
    TODO: Warning: for now, akk the games with 0 attendants are not displayed
        - [ ] Undo the last warning
        - [ ] Undo onNewNotification warning in Notifications repository
    - [x] Test with Dani 
    - [x] Feed Item View
    TODO:     
    - [ ] Refactor Game interface. Change date fields to string type
    TODO:
    - [ ] Disable Play button during checkin request
    - [ ] Popup after checkin

    - [x] Add place icon as header for FeedItem

    - [x] Add games list to Place profile
    - [x] PickTimeSlotScreen callBack on game Created
    - [x] Fix Create Game Mutation error on the client
    - [x] play here button


- [ ] I want see a toast message on new notiication
    - [ ] Display a toast message on new received notification 
        - [ ] yarn add @react-native-material/Snackbar
        - [ ] Notification UseCase send events to the Notifications controller
        - [ ] Notification  controller send events to the snackbar  
        

TODO: scenario10
* [ ] Fix userProfileScreen virtualized list in scrollView Error


TODO: auth


TODO: Prevent users from choosing an already used username





## Post-Testing Adjustments
TODO: Test that comment icon is explicit, now that there is a feed item with a comments section