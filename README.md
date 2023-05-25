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


- [ ] release v2.0.0-2
    - [x] FeedItemView
        - [x] Display "Today" when a game is happemimg the same day
    - [ ] update notifications when device connects back to network
        - [x] Listen to network status events in Controller
        - [x] Fetch unreceived notifications 
            - [x] Filter notifications by createdAt

        * [x] isFriend property is false even although the friendship is true
        - [x] Repo, use case and model logic
            [x] ...
            - [ ] Update cache notifications on newNotification received
                * [ ] Check that the notification is not already present
        - [ ] implement network event listener logic
            - [ ] UpdateNotifications Function in Notifications Controller
            - [ ] Call it in network event listener



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