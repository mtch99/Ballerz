import initialGroupChatList from "../../../../../use-cases/groupchat/data/groupChatList"
import { INewMessageChatListActionPayload } from "../actions"
import { IGroupChatListState } from "../interface"
import groupChatReducers from "../reducers"

const newMessageReducer = groupChatReducers.NEW_MESSAGE

describe("NEW_MESSAGE reducer tests", () => {

    describe("Given previous GroupChatListState and newMessageActionPayload", () => {

        const givenPreviousState: IGroupChatListState = {
            items: [
                {
                    id: 'groupChatId',
                    conversation: [
                        {
                            id: 'messageId',
                            content: "ahahaha",
                            author: {
                                id: 'authorId',
                                username: "author",
                            }
                        }
                    ],
                    name: 'awesomeGroup',
                    members: [{
                        id: 'authorId',
                        username: "author",
                    }]
                }
            ]
        }

        const givenPayload: INewMessageChatListActionPayload = {
            groupChatId: "groupChatId",
            message: {
                id: 'newMessageId',
                content: "newMessage",
                author: {
                    id: 'authorId',
                    username: "author",
                }
            }
        }


        describe('When the NEW_MESSAGE reducer function is called', () => {
            const expected: IGroupChatListState = {
                items: [
                    {
                        name: 'awesomeGroup',
                        members: [{
                            id: 'authorId',
                            username: "author",
                        }],
                        id: 'groupChatId',
                        conversation: [
                            {
                                id: 'newMessageId',
                                content: "newMessage",
                                author: {
                                    id: 'authorId',
                                    username: "author",
                                }
                            },
                            {
                                id: 'messageId',
                                content: "ahahaha",
                                author: {
                                    id: 'authorId',
                                    username: "author",
                                }
                            }
                        ],
                    }
                ]
            }


            test('Then it shoud return the expeected result', () => {
                const actual = newMessageReducer(givenPreviousState, {
                    type: "NEW_MESSAGE",
                    payload: givenPayload
                })
                expect(actual).toEqual(expected)
            })
        })
    })

})