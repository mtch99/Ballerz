# Ballerz
The app for finding basketball pickup games

## Branch Purpose
Test these scenarios: 
1) I want to search troughout the feed screen to find basketball pickup
2) I want to inspect look at the top game and see the badges
3) I want to know badges meanings
4) I want to see the attendants list
5) I want to be acknowledged that I have to make friends in order to view their attendances



There must be three different games on three different courts, two at the moment, and one other on saturday


## How? (technical)

[x] Init use cases
    - [x] Feed use case with initial feed items
    - [x] Feed store, to listen to the Feed use case events

[x] Init Feed Page
    - [x] Feed Model, used for data transfer from UseCase and React native view. The model is the state of the app. Model update is triggered by FeedUseCaseEvent
    - [x] Feed Controller, only calls the use case to execute requests for view data. View data is a state managed by the feed model, which listen to the use case for updates. Controller create the use case intercator with its different event listeners
    - [x] init Feed View
    - [x] FeedScreen, inherits controller from the provider
    - [x] FeedScreen requests the feed on mount

[ ] FeedView display 
    - [ ] FeedItemView
        - [x] FeedItemViewProps
        - [x] Refactor 
        - [ ] DateDisplay
    - [ ] Flatlist
        - [ ] Props
        - [ ] Implement in FeedView

    - [ ] FeedView props
        - [ ]

[ ] Define initial games

[ ] Define Times












