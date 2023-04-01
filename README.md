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
    - [ ] Define and implement Notifications usecase
        - [x] Define Notification type
        - [x] Define useCase interface
        - [x] Define repository interface
        - [x] Define model interface

        - [ ] Implement the previous
            - [ ] Implement Notifications repository
                - [x] Define and Implement Notifications client
                - [ ] Test manually ... do not write tests

           

    - [ ] Define and implement Notifications slice
    - [ ] Implement Notifications model
    - [ ] Define and implement Notifications controller
    - [ ] Define and implement Notifications screen
        - [ ] Define and implement Notifications View
    - [ ] Add notification screen to FeedStack

- [ ] Add friend
    - [ ] UserProfileScreen and MyUserProfileScreen
        - [ ] UserProfileScreen ... manage data loading, no network, ...
            - [ ] UserProfileView 
        - [ ] MyUserProfileScreen
            - [ ] MyUserProfileView

    - [ ] Make sure that everything works properly
        - [ ] implement missing methods


 

<!-- - [ ] Add place -->
- [ ] Invitations
- [ ] Notifications
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






## Post-Testing Adjustments
TODO: Test that comment icon is explicit, now that there is a feed item with a comments section