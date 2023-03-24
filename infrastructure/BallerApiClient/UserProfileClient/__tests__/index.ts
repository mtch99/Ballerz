import { awsmobileAPIMock } from "../../aws-exports";
import { GetUserProfileQueryVariables, ListUserProfilesQueryVariables } from "../../API";
import UserProfileClient from ".."
import { Amplify } from "aws-amplify";
import { CreateUserProfileMutationVariables } from "../mutations";


describe("UserProfileClient test suite", () => {

    const client = new UserProfileClient()
    Amplify.configure(awsmobileAPIMock)
    describe("getUserProfile function tests", () => {

        describe("given unexisting userProfileID", () => {
            const input: GetUserProfileQueryVariables = {
                id: "123"
            }
            describe("when getUserProfile is called", () => {
                test("It should not return undefined", async() => {
                    const result = await client.getUserProfile(input)
                    expect(result).not.toBeUndefined()
                    // if(result){
                    //     expect(result.getUserProfile).not.toBeNull()
                    // }
                })
            })
        })
    })

    describe("listUserProfile function tests", () => {
        describe("empty input", () => {
            const input: ListUserProfilesQueryVariables = {
            }
            describe("when listUserProfiles is called", () => {
                test("It should not return undefined", async() => {
                    const result = await client.listUserProfileData(input)
                    expect(result).not.toBeUndefined()
                    if(result){
                        expect(result.listUserProfiles).not.toBeNull()
                    }
                })
            })
        })
    })

    describe('createUserProfile function tests', () => {
        describe("given unexisting userProfileID", () => {
            const input: CreateUserProfileMutationVariables = {
                input: {
                    email: 'foo@example',
                    username: "barrista"
                }
            }
            describe("when getUserProfile is called", () => {
                test("It should return an item withnthe given field values", async() => {
                    const result = await client.createUserProfile(input)
                    expect(result).not.toBeUndefined()
                    if(result){
                        expect(result.createUserProfile).not.toBeNull()
                        if(result.createUserProfile){
                            expect(result.createUserProfile.email).toBe(input.input.email)
                            expect(result.createUserProfile.username).toBe(input.input.username)
                        }
                    }
                })
            })
        })
    })
})