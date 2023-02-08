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
    - [x] Feed Model, used for data transfer from UseCase and React native view. The model is the state of the app. Model update is triggered by FeedUseCaseEvent
    - [x] Feed Controller, only calls the use case to execute requests for view data. View data is a state managed by the feed model, which listen to the use case for updates. Controller create the use case intercator with its different event listeners
    - [x] init Feed View
    - [x] FeedScreen, inherits controller from the provider
    - [x] FeedScreen requests the feed on mount 





