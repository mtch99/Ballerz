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
        - [x] Define Notification type
        - [x] Define useCase interface
        - [x] Define repository interface
        - [x] Define model interface
        - [x] Implement Notifications repository
            - [x] Define and Implement Notifications client

    - [x] Notifications model
        - [x] Define and implement Notifications slice
        - [x] Implement Notifications model

    - [x] Notifications controller
        - [x] Define and implement Notifications controller
        - [x] Define and implement Notification screen
            - [x] Define and implement Notifications View
        - [x] Add notification screen to FeedStack

    * [ ] Check auth flow
        - [x] Signin View
            - [x] Show signin screen if the user has already signed in in the past
            - [x] Error display at the view level and error message creation at screen level
        - [x] Signup View
            - [x] Layout
            - [x] Error display at the view level and error message creation at screen level

        - [ ] Test the flow on a mobile device
            - [ ] Unregistered User error message display in signin View 
            - [ ] Navigate to Signup View
            - [ ] Signup error messages display
            - [ ] Define username after signup
            - [ ] Invite friends after username creation
            - [ ] Add a user after username creation
                - [ ] Test that the notification subscription in the console is fired 
        

    - [ ] Notifications subscriptions after userProfile retrieval or creation
        - [ ] Refactor controllers and use cases to be singletons. Take the reent notification controller as example. Why? They can now communicate with each other easily and are not directly affected by components lifecycle
        - [ ] Test 
            - [ ] accept friendship request in console and check that the user is notified


    

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