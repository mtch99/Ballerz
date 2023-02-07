# Ballerz
The app for finding basketball pickup games

## Branch Purpose
Test this scenario: 
1) I want to search troughout the feed screen to find basketball pickup


There must be three different games on three different courts, two at the moment, and one other on saturday


## How? (technical)

[x] Init use cases
    - [x] Feed use case with initial feed items
    - [x] Feed store, to listen to the Feed use case events
        
[ ] Init Feed Page
    - [ ] Feed Model, used for data transfer from UseCase and React native view. The model is the state of the app. Model update is triggered by FeedUseCaseEvent
        - [x] define IFeedUseCaseEvent
            - [x] newFeedEvent: Happens when the getFeed function is called
        - [ ] define the FeedModel as a IFeedEventObserver only implementing the newFeedEventListener. It will contain other specialised obsewrvers how are Partial <'IFeedEventObserver>'. For now, there will be one for navigation and one for the state.
            - [x] The feed model provider will provide feed model context
                - [x] The feed model context will contain a feedModel and a feedState

    - [ ] Feed Controller, only calls the use case to execute requests for view data. View data is a state managed by the store, which listen to the use case for updates. Controller renders the view
    - [ ] Feed View

    - [ ] Feed Screen, contains the controller(s)


