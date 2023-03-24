import { FriendshipRequestStatus } from "./../../../infrastructure/BallerApiClient/API";
import UserProfileClient, { UserProfileClientMock } from "../../../infrastructure/BallerApiClient/UserProfileClient";
import { IUserProfileData, IUserProfile } from "../../use-cases/types";
import { IDefineUsernameInput, IDefineUsernameResult, IRequestFriendShipInput, IRequestFriendShipResult, IUserProfileRepository } from "../../use-cases/userProfile/interface";
import * as queries from "../../../infrastructure/BallerApiClient/UserProfileClient/queries"
import * as mutations from "../../../infrastructure/BallerApiClient/UserProfileClient/mutations"
import { GetUserProfileQueryVariables, ListUserProfilesQueryVariables } from "../../../infrastructure/BallerApiClient/API";



export default class UserProfileRepository implements IUserProfileRepository {

    client: UserProfileClient
    constructor(){
        // new UserProfileClient()
        console.log("UserProfileRepository using a userProfileClient mock")
        this.client = new UserProfileClientMock()
    }
    

    async getUserProfileByEmail(email: string): Promise<IUserProfile | null> {
        const variables: ListUserProfilesQueryVariables = {
            filter: {
                email: {
                    eq: email
                }
            }
        }

        const response = await this.client.listUserProfiles(variables)
        .catch((err) => {
            console.error(err)
            return undefined
        })
        
        const parsedResponse = IUserProfileDataAdapter.parseListUserProfileResponse(response)
        if(parsedResponse.length == 0){
            console.warn("Could not find a user profile with the email: " + email)
        }else if(parsedResponse.length == 1){
            return parsedResponse[0]
        }
        else if(parsedResponse.length > 1){
            console.warn("Found multiple userprofiles with same email in the database. Returned the first one")
            return parsedResponse[0]
        }

        return null
    }
    

    async getAllUserProfileData(): Promise<IUserProfileData[]> {
        const variables: ListUserProfilesQueryVariables = {

        }
        const response: queries.ListUserProfileDataQuery | undefined = await this.client.listUserProfileData(variables)
        .catch((err) => {
            console.error(err)
            return undefined
        })

        return IUserProfileDataAdapter.parseListUserProfileDataResponse(response)
    }

    async getUserProfile(id: string): Promise<IUserProfile | null> {
        const variables: GetUserProfileQueryVariables = {
            id
        }

        const response: queries.GetUserProfileQuery | undefined = await this.client.getUserProfile(variables)
        .catch((err) => {
            console.error(err)
            return undefined
        })

        return IUserProfileDataAdapter.parseGetUserProfileResponse(response)
    }


    /**
     * Creates a profile with a username
     * @param input 
     */
    async defineUsername(input: IDefineUsernameInput): Promise<IDefineUsernameResult> {
        const variables: mutations.CreateUserProfileMutationVariables = {
            input
        }

        const response: mutations.CreateUserProfileMutation | undefined = await this.client.createUserProfile(variables)
        .catch((err) => {
            console.error(err)
            return undefined
        })

        return IUserProfileDataAdapter.parseCreateUserProfileResponse(response)
    }
    

    async requestFriendship(input: IRequestFriendShipInput): Promise<IRequestFriendShipResult> {
        const result: IRequestFriendShipResult = {error: false}
        const variables: mutations.CreateFriendshipRequestMutationVariables = {
            input: {
                senderProfileID: input.senderProfileID,
                receiverProfileID: input.receiverProfileID,
                status: FriendshipRequestStatus.pending
            }
        }

        const response: mutations.CreateFriendshipRequestMutation | undefined = await this.client.requestFriendship(variables)
        .catch(err => {
            console.error(err)
            result.error = err
            return undefined
        })

        return result

    }


}











/**
 * UserProfileClient Adapter
 */
class IUserProfileDataAdapter {

    static parseListUserProfileResponse(response: queries.ListUserProfileQuery | undefined): IUserProfile[]{
        const result: IUserProfile[] =[] 
        if(response){
            if(response.listUserProfiles){
                response.listUserProfiles.items.forEach((value) => {
                    if(value){
                        const userProfile: IUserProfile = {
                            ...value,
                            badges: [],
                            games: [],
                            friends: []
                        }
                        result.push(userProfile)
                    }
                })
            }
        }
        return result
    }

    static parseListUserProfileDataResponse(response: queries.ListUserProfileDataQuery | undefined): IUserProfileData[] {
        const result: IUserProfileData[] =[] 
        if(response){
            if(response.listUserProfiles){
                response.listUserProfiles.items.forEach((value) => {
                    if(value){
                        const userProfileData: IUserProfileData = {
                            ...value,
                            badges: []
                        }
                        result.push(userProfileData)
                    }
                })
                return result
            }
        }
        return result
    }


    static parseGetUserProfileResponse(response: queries.GetUserProfileQuery | undefined): IUserProfile | null {
        let result: IUserProfile | null = null
        
        if(response){
            if(response.getUserProfile){
                const friends: IUserProfileData[] = []
                response.getUserProfile.friends.items.forEach((item) => {
                    if(item){
                        friends.push({
                            id: item.friendProfile.id,
                            username: item.friendProfile.username,
                            badges: []
                        })
                    }
                })
                result = {
                    id: response.getUserProfile.id,
                    username: response.getUserProfile.username,
                    friends,
                    badges: [],
                    games: []
                }
            }
        }

        return result
    }

    static parseCreateUserProfileResponse(response: mutations.CreateUserProfileMutation | undefined): IDefineUsernameResult {
        let result: IDefineUsernameResult = {
            error: true
        }
        
        if(response){
            if(response.createUserProfile){
                result.error = false
                const userProfile: IUserProfile = {
                    games: [],
                    friends: [],
                    id: response.createUserProfile.id,
                    username: response.createUserProfile.username,
                    badges: []
                }
                result.userProfile = userProfile
            }
        } 

        return result
    }
}