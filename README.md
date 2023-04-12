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

- [x] Notifications use case
    - [x] Define and implement Notifications usecase
    - [x] Notifications model
    - [x] Notifications controller
    * [x] Check auth flow
            - [x] Unregistered User error message display in signin View 
            - [x] Navigate to Signup View
            * [x] Fix: Did not auto signin at the second launch
            - [x] Signup error messages display
            - [x] Define username after signup
            - [x] Invite friends after username creation
            - [x] Add a user after username creation
    - [x] Notifications subscriptions after userProfile retrieval or creation

* [x] App Icon and splashscreen

- [x] Add friend
    - [x] UserProfileScreen and MyUserProfileScreen
    - [x] Make sure that everything works properly

- [ ] Games feature
    - [x] Ballerz Game client
    - [x] Refactor FeedScreen wrapper to load all games on focus
    - [ ] Display real game Time 

- [ ] I want see a toast message on new notiication
    - [ ] Display a toast message on new received notification 
        - [ ] yarn add @react-native-material/Snackbar
        - [ ] Notification UseCase send events to the Notifications controller
        - [ ] Notification  controller send events to the snackbar  
        

- [ ] Notificastion screen

 

<!-- - [ ] Add place -->
- [ ] Invitations
- [ ] Comments


- [ ] Add Profile Picture




TODO: Fixes
- [ ] remove trailing space from define username input and search inputs 

* [ ] TODO: Save userProfile in the local storage upon creation


TODO: scenario10
- [ ] UserProfileScreen
            - [ ] add stats
* [ ] inject profilepic uri
* [ ] Fix userProfileScreen virtualized list in scrollView Error


TODO: auth
* [ ] Enable email confirmation to allow users to signin 
- [ ] FeedBack in auth flow, after defining username, befor find your friends screen


TODO: Prevent users from sharing a username


TODO: Prevent users from choosing an already used username





## Post-Testing Adjustments
TODO: Test that comment icon is explicit, now that there is a feed item with a comments section