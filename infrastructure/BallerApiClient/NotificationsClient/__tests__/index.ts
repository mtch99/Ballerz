import NotificationsClient, { NotificationsClientMock } from ".."
import { FilterNotificationsByUserQueryVariables, ListNotificationsQuery } from "../queries"



describe('Notifications client tests', () => {
    const client = new NotificationsClientMock()
    describe('filterNotificationsByReceiver function tests', () => {

        describe('given valid arguments', () => {
            const given: FilterNotificationsByUserQueryVariables = {
                filter: {
                    receiverProfileID: {
                        eq: '123'
                    }
                }
            }

            test('should return an array of notifications', async () => {
                const result = await client.filterNotificationsByReceiver(given)
                const notifications = result && result.listNotifications
                expect(result).toHaveProperty('listNotifications')
                expect(notifications).toHaveProperty('items')
            })
        })
    })


    describe('subscribeToNotifications function tests', () => {
        jest.setTimeout(60*5*1000)
        test('should return an array of notifications', async () => {
            await client.subscribeToNotifications({receiverProfileID: '123'}).then(result => {console.log("ajajaj")})
            setTimeout(() => {
                
            }, (60*5*1000))

        })
    })
})


