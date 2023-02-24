# Ballerz
The app for finding basketball pickup games


## Branch Purpose
    I Want to see the group chats I am part of

## Next 
Test these scenarios:
    `TODO: define next scenarios` 
    - I want to look at a group chat conversation and see an invite
        
There must be three different games on three different courts, two at the moment, and one other on saturday


## How? (technical)
TODO: 
- [x] Define the group chats use case

- [x] Implement Group chats in model

- [x] Define and implement IGroupChatController

- [x] Change Root Stack navigator to a tab navigator

- [x] Produce group chat list screen
t
- [x] Produce GroupChatStackNavigator


- [x] Navigation to group chat Conversation screen


- [x] GroupChatListView v0.1

- [x] GroupChatConversationScreen


* [x] Refactor GroupChatConversationModel


- [ ] Complete sendMessage feature 
    - [x] Implement handleSendMessagePress in GroupChatConversationScreen
        - [x] Implement sendGroupChatMessage in the groupChat useCase and Controller
        - [x] Refactor view interfaces 
        - [x] refactor view implementations

    - [ ] Send a message in a convo and see it added in the convo screen
        * [x] Refactor rootState to add groupChatStateMap slice
        * [x] Add a newChatReducer to the groupChatMapState and the groupChatListState
            - [x] groupChatMapState
            - [x] groupChatListState
        * [ ] ReImplement the groupChatModel to interact with the two states
            - [x] Add groupChatMap action on new message event
            - [ ] Add groupChatMap action on new groupChatList event




- [ ] UserProfile feature

    - [x] UserProfile UseCase

    - [ ] UserProfile Model
        - [ ] Refactor RootState to support a userProfileList state
            - [x] Define userProfileList slice actions, for now just the newUserProfileList
            - [x] Implement its reducer

        - [ ] Define and implement userProfileModel

    - [ ] UserProfile Controller

    - [ ] UserProfile View 





## Post-Testing Adjustments
- [x] Fix header on badgelist Screen
- [x] Display all badges on the feed item
TODO: Test that comment icon is explicit, now that there is a feed item with a comments section



