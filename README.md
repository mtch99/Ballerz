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
    - [x] Define and implement group chat use case
    - [x] Create group chats initial data
- [x] Implement Group chats in model
    - [x] Add group chats to the store
    - [x] Implement IGroupChatModel
- [x] Define and implement IGroupChatController
- [x] Change Root Stack navigator to a tab navigator
    - [x] Create Feed stack
    - [x] Make it the first tab
- [x] Produce group chat list screen
    - [x] Define IGroupChatListScreen interface
    - [x] Implement
- [x] Produce GroupChatStackNavigator
    - [x] cf FeedStackNavigator
    - [x] Add GroupChatListScreen

- [x] Navigation to group chat Conversation screen
    - [x] Define IGroupChatConversationScreen
    - [x] Implement
    - [x] Add GroupChatListScreen to GroupChatStack

- [x] GroupChatListView v0.1
    - [x] Define interface for GroupChatListView
    TODO: 
    - [x] Restyle GroupChatListScreen
    - [x] Define interface for GroupChatItemView

- [x] GroupChatConversationScreen
    - [x] Define interface for GroupChatConversationScreen


* [x] Refactor GroupChatConversationModel
    - [x] Two giellds for the GroupChatModelState
        - [x] One that contains a list of GroupChatListData, exempt of the conversations
        - [x] Another one that contains a dictionary of id:GroupChatState 
    - [x] Test that the groupChat stack behaves as expected


- [ ] Complete sendMessage feature 
    - [x] Implement handleSendMessagePress in GroupChatConversationScreen
        - [x] Implement sendGroupChatMessage in the groupChat useCase and Controller
        - [x] Refactor view interfaces 
        - [x] refactor view implementations

    - [ ] Send a message in a convo and see it added in the convo screen
        * [ ] Refactor rootState to add groupChatStateMap slice
        * [ ] Add a newChatReducer to the groupChatStateMap and the groupChatListState
        * [ ] ReImplement the groupChatModel to interact with the two states





## Post-Testing Adjustments
- [x] Fix header on badgelist Screen
- [x] Display all badges on the feed item
TODO: Test that comment icon is explicit, now that there is a feed item with a comments section



