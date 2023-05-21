import NotificationsClient, { NotificationsClientMock } from ".."
import { NotificationsByReceiverQueryVariables, listNotificationsByReceiverQuery } from "../queries"



describe('Notifications client tests', () => {
    const client = new NotificationsClientMock()
    describe('filterNotificationsByReceiver function tests', () => {

        describe('given valid arguments', () => {
            const given: NotificationsByReceiverQueryVariables = {
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
})


