import UserProfileClient, { UserProfileClientMock } from "../../../infrastructure/BallerApiClient/UserProfileClient";
import { IUserProfileData, IUserProfile } from "../../use-cases/types";
import { IDefineUsernameInput, IDefineUsernameResult, IUserProfileRepository } from "../../use-cases/userProfile/interface";
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

    async getAllUserProfileData(): Promise<IUserProfileData[]> {
        const variables: ListUserProfilesQueryVariables = {

        }
        const response: queries.ListUserProfilesQuery | undefined = await this.client.listUserProfiles(variables)
        .catch((err) => {
            console.error(err)
            return undefined
        })

        return IUserProfileDataAdapter.parseListUserProfilesResponse(response)
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


}











/**
 * UserProfileClient Adapter
 */
class IUserProfileDataAdapter {

    static parseListUserProfilesResponse(response: queries.ListUserProfilesQuery | undefined): IUserProfileData[] {
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