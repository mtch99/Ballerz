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


- [ ] release v2.0.0
    * [ ] Last adjustments:
        - [x] Signin View Title
        - [x] Get places and users on Search View focus
        - [x] (Find your friends view)'s "continue" top right corner icon
    - [x] update git ignore
    - [x] setup backend prod env config
    - [x] create build
    - [x] test
        - [x] Fix signin flow... Fetch user profile after signin

* [x] Make sure Qc places are uploaded to the database

- [x] Friend Playing notification
    - [x] FriendPlaying Notification View
    - [x] Fix FriendshipRequestNotification Layout
    - [x] Display
    - [x] Join button conditionally activated
        - [x] My PresenceList in authState
        - [x] isPresent field in IFriendPlayingNotification


* [x] Add profile picture after profile creation
    - [x] Load asssets before launch 
    - [x] Add default profile pic to assets
        

- [x] Games feature
    - [x] Undo onNewNotification warning in Notifications repository    
    - [x] Disable Play button during checkin request
    - [x] Create Game from feedScreen
    - [x] Popup after checkin


- [x] See Game Participants

- [x] Replace invite button with share button

- [x] Test and refine Discovery flow
    - [x] DefineUsernameView 
    - [x] FindYourFriendsView

- [x] ProfilePic
    - [x] Retrieve user profile on MyProfile screen focus
    - [x] Make sure profile pic is uploaded on userProfileCreation
    - [x] Display respective profile pics on all UserList screens

- [x] My Profile
    - [x] See my friends list
    - [x] I Want to see my games list


- [x] Cache notifications and use it for badge diff

- [x] Place Profile
    - [x] Sort games by date
    - [x] Friends there in game

- [x] FeedItemView
    - [x] Fix layout
    - [x] Display "Today" when a game is happemimg the same day


- [x] Test Joining friends from notifications screen on real device
    - [x] Fix FriendPlayingNotification bug
    - [x] Update Notifications query to index the receiverProfile
    - [x] Fix Joining action logic


- [x] Load games on feed screen focus


- [ ] Notifications
    - [ ] Hot court notification 
    - [x] Prevent Notifications and feed states from having elements with the same keys

- [ ] I want see a toast message on new notification
    - [ ] Display a toast message on new received notification 
        - [ ] yarn add @react-native-material/Snackbar
        - [ ] Notification UseCase send events to the Notifications controller
        - [ ] Notification  controller send events to the snackbar 

        

TODO: Display number of games per players



TODO: scenario10
* [ ] Fix userProfileScreen virtualized list in scrollView Error



TODO: Prevent users from choosing an already used username


TODO: Post test Rémi
* [ ] Majuscule activee au onboarding
* [ ] Mot de passe visible
* [ ] Pense pas etre capable d emettre de photo... create profile screen figé


- [ ] Personne ne lis 
- [ ] Premoière photo jeu vidéo
- [ ] Deuxième photo Jeu vidéo

- [ ] Lien d'invitation 
    C'est écrit desssus

- [ ] En attente 

-[ ] Avancer après 

- [ ] Photo du parc

- [ ] Google maps

- [ ] Photo adresse

- [ ] Photo de profil pas nécessaire

- [ ] Vidéos lie, adresse, googlemaps lorsque que tu clique sur carré vert, 

- [ ] favoris dans les terrains, notifications



## Post-Testing Adjustments
TODO: Test that comment icon is explicit, now that there is a feed item with a comments section