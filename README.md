# Ballerz
The app for finding basketball pickup games


## Branch Purpose
    I want to create a game
## Next 
Test these scenarios:
    `TODO: define next scenarios` 
    - Places and users search
    - I want to add my favorite playground
        
There must be three different games on three different courts, two at the moment, and one other on saturday


## How? (technical)

- [x] FeedUseCase
    - [x] createGame method on usecase and controller
    - [x] newGameEventAction on Feed slice
    - [x] Test
        - [x] Left Header button in feedScreen
            - [x] The createGameMethod is imported from the feed controller of the app context
            - [x] SetDate to now by default
            - [x] Validate feature by viewing the feed update with a new element
            - [x] The new element must come on top of the list



- [ ] CreateGameStack
    - [x] SelectGameScreen
        * [x] Change Place List Screen to a generic abstract class
            - [x] Abstract onPressPlaceItemMethod
        * [x] Implement concrete children SearchPlaceScreen and SelectPlaceScreen
    - [ ] SelectTimeSlotScreen
        - [x] Define and implement interface ISelectTimeSlotScreen
        - [x] define ISelectTimeSlotViewProps
        - [ ] Implement SelectTimeSlotView
            - [x] Display props
            - [ ] Copy styles from last beta realease
     


TODO: scenario10
- [ ] UserProfileScreen
            - [ ] add stats
* [ ] inject profilepic uri
* [ ] Fix userProfileScreen virtualized list in scrollView Error
    * [ ] Refactor Searchcreen using react native tab view





## Post-Testing Adjustments
TODO: Test that comment icon is explicit, now that there is a feed item with a comments section