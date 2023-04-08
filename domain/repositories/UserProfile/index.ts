import { UserProfile } from "./../../../infrastructure/BallerzServices/BallerzAPI/types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FriendshipRequestStatus } from "../../../infrastructure/BallerzServices/BallerzAPI/API";
import UserProfileClient, { UserProfileClientMock } from "../../../infrastructure/BallerzServices/BallerzAPI/UserProfileClient";
import { IUserProfileData, IUserProfile } from "../../use-cases/types";
import { IDefineUsernameInput, IDefineUsernameResult, IMyUserProfileData, IRequestFriendShipInput, IRequestFriendShipResult, IUserProfileRepository } from "../../use-cases/userProfile/interface";
import * as queries from "../../../infrastructure/BallerzServices/BallerzAPI/UserProfileClient/queries"
import * as mutations from "../../../infrastructure/BallerzServices/BallerzAPI/UserProfileClient/mutations"
import { GetUserProfileQueryVariables, ListUserProfilesQueryVariables } from "../../../infrastructure/BallerzServices/BallerzAPI/API";
import { throwServerError } from "@apollo/client";



export default class UserProfileRepository implements IUserProfileRepository {

    client: UserProfileClient
    constructor(){
        this.client = new UserProfileClient()
    }


    async getMyUserProfileData(): Promise<IMyUserProfileData | null> {
        const result = await this.__getCachedUserProfileData()
        if(result){
            return result as IMyUserProfileData
        }
        return null
    }
    
    __cacheMyUserProfileData(myUserProfileData: IMyUserProfileData): void {
        AsyncStorage.setItem("myUserProfileData", JSON.stringify(myUserProfileData))
    }
    private async __getCachedUserProfileData(): Promise<IMyUserProfileData | null> {
        let result =  await AsyncStorage.getItem("myUserProfileData");
        if(result){
            return JSON.parse(result) as IMyUserProfileData;
        } else {
            return null;
        }
    }


    private __cacheMyUserProfile(myUserProfile: IUserProfile): void {
        AsyncStorage.setItem("myUserProfile", JSON.stringify(myUserProfile))
    }
    private async __getCachedMyUserProfile(): Promise<IUserProfile | null> {
        let result =  await AsyncStorage.getItem("myUserProfile");
        if(result){
            return JSON.parse(result) as IUserProfile;
        } else {
            return null;
        }
    }


    private __cacheUserProfileDataList(userProfileDataList: IUserProfileData[]): void {
        AsyncStorage.setItem("userProfileDataList", JSON.stringify(userProfileDataList))
    }
    private async __getCachedUserProfileDataList(): Promise<IUserProfileData[] | null> {
        let result =  await AsyncStorage.getItem("userProfileDataList");
        if(result){
            return JSON.parse(result) as IUserProfileData[];
        } else {
            return null;
        }
    }
    

    async getMyUserProfile(email: string): Promise<IUserProfile | null> {
        const cache: IUserProfile | null = await this.__getCachedMyUserProfile()
        const variables: ListUserProfilesQueryVariables = {
            filter: {
                email: {
                    eq: email
                }
            }
        }

        const response = await this.client.listUserProfiles(variables)
        .catch(async(err) => {
            console.error(err)
            return undefined
        })

        if(!response){
            return cache
        }
        
        let parsedResponse = IUserProfileDataAdapter.parseListUserProfileResponse(response)
        if(parsedResponse.length == 0){
            console.log("Could not find a user profile with the email: " + email)
        }else if(parsedResponse.length == 1){
            const userProfile = parsedResponse[0]
            this.__cacheMyUserProfileData(userProfile)
            this.__cacheMyUserProfile(userProfile)
            return parsedResponse[0]
        }
        else if(parsedResponse.length > 1){
            console.log("Found multiple userprofiles with same email in the database. Returned the first one")
            const userProfile = parsedResponse[0]
            this.__cacheMyUserProfile(userProfile)
            this.__cacheMyUserProfileData(userProfile)

            return userProfile
        }

        return cache
    }
    

    async getAllUserProfileData(): Promise<IUserProfileData[]> {
        let cache: IUserProfileData[] = await this.__getCachedUserProfileDataList().then(data => {return data || []})
        const variables: ListUserProfilesQueryVariables = {

        }
        const response: IUserProfileData[] | undefined = await this.client.listUserProfileData(variables)
        .then(response => {
            if(response){
                let res = IUserProfileDataAdapter.parseListUserProfileDataResponse(response)
                this.__cacheUserProfileDataList(res)
                return res
            }
            return response
        })
        .catch((err) => {
            console.error(err)
            return undefined
        })

        if(!response){
            return cache
        }
        return response
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
     * User profile stored in the cache upon creation
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

        const result = IUserProfileDataAdapter.parseCreateUserProfileResponse(response)
        if(!result.error && result.userProfile){
            this.__cacheMyUserProfile(result.userProfile)
        }

        return result
    }
    

    async requestFriendship(input: IRequestFriendShipInput): Promise<IRequestFriendShipResult> {
        let result: IRequestFriendShipResult = {error: false}
        console.log(`AuthRepository: Request FriendShip input: \n ${JSON.stringify(input)}`)
        const variables: mutations.CreateFriendshipRequestMutationVariables = {
            input: {
                senderProfileID: input.senderProfileID,
                receiverProfileID: input.receiverProfileID,
                status: FriendshipRequestStatus.pending
            }
        }

        const response: mutations.CreateFriendshipRequestMutation | undefined = await this.client.requestFriendship(variables)
        .then((response) => {
            console.log(`AuthRepository: CreateFriendshipRequestMutatio response: \n ${JSON.stringify(response)}`)
            return response
        })
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
                    games: [],
                    email: ""
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
                    badges: [],
                    email: response.createUserProfile.email
                }
                result.userProfile = userProfile
            }
        } 

        return result
    }
}