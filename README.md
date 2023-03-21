# Ballerz
The app for basketball pickup games


## Branch Purpose
    Auth
## Next 
Test these scenarios:
    `TODO: define next scenarios` 
    - Places and users search
    - I want to add my favorite playground
        
There must be three different games on three different courts, two at the moment, and one other on saturday


## How? (technical)
- [x] Add AuthUseCase and Auth Model
    * [x] ConfirmSignup
        - [x] IAuthUCI
        - [x] IAuthRepo
- [x] Define and implement AuthController
- [ ] Define and Implement Signup and Signin Screen
    - [x] Signin Screen
        - [x] Signin View init
        - [x] Implement RootStack
        - [x] Test by Signing in with foobar
            - [x] Navigate to the AppStack on sucess
        
    - [ ] Signup Screen
        - [x] ISignupScreen interface
        - [x] implement SignupScreen
        - [x] SignupScreen View with Email and password inputs
            - [x] ConfirmSignupModal
            - [x] ConfirmSignupScreen
        - [ ] Navigate to AppStack on signup success

    * [x] UserProfile and auth usecases update to support cache auth creds storage and defineUsername

    - [ ] Create Profile
        - [x] CreateProfileStack
            - [x] init Define Username screen
        - [ ] UserProfileRepo





TODO: scenario10
- [ ] UserProfileScreen
            - [ ] add stats
* [ ] inject profilepic uri
* [ ] Fix userProfileScreen virtualized list in scrollView Error





## Post-Testing Adjustments
TODO: Test that comment icon is explicit, now that there is a feed item with a comments section