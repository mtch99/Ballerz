# Ballerz
The app for finding basketball pickup games


## Branch Purpose
    I want to see a place profile
## Next 
Test these scenarios:
    `TODO: define next scenarios` 
    - I want to add my favorite playground
        
There must be three different games on three different courts, two at the moment, and one other on saturday


## How? (technical)
- [x] Place UseCase
- [x] Place Model
    - [x] Add PlaceList and PlaceMap to rootState

- [x] Explore bottom tab

- [x] PlaceListScreen

- [x] Explore Stack... contains placeProfileScreen
- [x] PlaceProfileScreen
    * [x] Fix Non serializable values in place profile state

- [x] PlaceProfileView
    - [x] Place Profile Picture View
        - [x] Container
        - [x] Image Background

- [x] UserProfile UseCase
- [x] UserProfileModel
    - [x] Add UserProfileMap to rootState


- [x] Add UserProfileScreen to Explore Stack
- [x] UserProfileScreen
    - [x] Fix require cycle error
    - [x] Put back image view in UserProfileListItemView
    - [ ] UserProfileView
        - [x] init
        - [-] Header View
            - [x] init
            - [ ] add stats
        - [x] Badges View
        - [x] PicturesView
        - [x] GamesView

* [x] fix screens headers
* [ ] inject profilepic uri
* [ ] Fix userProfileScreen virtualized list in scrollView Error
    * [ ] Refactor Searchcreen using react native tab view





## Post-Testing Adjustments
TODO: Test that comment icon is explicit, now that there is a feed item with a comments section