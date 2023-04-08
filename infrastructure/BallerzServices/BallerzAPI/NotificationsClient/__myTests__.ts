import { NotificationClient_gamefeat, NotificationsClientMock } from ".";

const client = new NotificationClient_gamefeat()
const variables = {
    filter: {
        receiverProfileID: {
            eq: "123"
        }
    }
}
client.subscribeToNotifications(variables).then(result => {console.log("ajajaj")})
setTimeout(() => {}, 5*60*1000)

