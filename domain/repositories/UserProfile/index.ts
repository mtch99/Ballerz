import { IAttendance, ICity, IGame } from "./../../use-cases/types";
import { Game, PresenceWithGame, PresenceWithoutGame, UserProfile } from "./../../../infrastructure/BallerzServices/BallerzAPI/types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FriendshipRequestStatus } from "../../../infrastructure/BallerzServices/BallerzAPI/API";
import UserProfileClient from "../../../infrastructure/BallerzServices/BallerzAPI/UserProfileClient";
import { IUserProfileData, IUserProfile } from "../../use-cases/types";
import { IAcceptFriendshipRequestInput, IAcceptFriendshipRequestResult, IDefineUsernameInput, IDefineUsernameResult, IMyUserProfileData, IRequestFriendShipInput, IRequestFriendShipResult, IUploadProfilePicInput, IUploadProfilePicResult, IUserProfileRepository } from "../../use-cases/userProfile/interface";
import * as queries from "../../../infrastructure/BallerzServices/BallerzAPI/UserProfileClient/queries"
import * as mutations from "../../../infrastructure/BallerzServices/BallerzAPI/UserProfileClient/mutations"
import { GetUserProfileQueryVariables, ListUserProfileDataQueryVariables } from "../../../infrastructure/BallerzServices/BallerzAPI/UserProfileClient/queries";
import { ImageSourcePropType } from "react-native";
import { uploadImage } from "../../../screens/utils/ImagePicker";
import { parseGameList, parsePresenceList } from "../adapter";



export default class UserProfileRepository implements IUserProfileRepository {

    client: UserProfileClient
    userProfilePicUri: ImageSourcePropType = {uri:""}
    constructor(){
        this.client = new UserProfileClient()
    }

    async uploadProfilePic(input: IUploadProfilePicInput): Promise<IUploadProfilePicResult> {
        let result: IUploadProfilePicResult = {error: false}; 
        const response = await uploadImage(input.userProfileID, input.image, (progress: number) => {})
        if(response.error){
            result.error = "La photo de profile n'a pas été modifiée. Veuillez réessayer plus tard."
        }
        return result
    }



    async getMyUserProfileData(): Promise<IMyUserProfileData | null> {
        const result = await this.__getCachedUserProfileData()
        if(result){
            return result as IMyUserProfileData
        }
        return null
    }
    

    async getMyUserProfile(email: string): Promise<IUserProfile | null> {
        const cachedMyUserProfile: IUserProfile | null = await this.__getCachedMyUserProfile()

        const variables: ListUserProfileDataQueryVariables = {
            filter: {
                email: {
                    eq: email
                }
            },
            frendshipFilter: {
                friendProfileID: {
                    eq: cachedMyUserProfile?.id || " jkbbb "
                }
            }
        }
        
        const response = await this.client.listUserProfilesByEmail(variables).then((data) => {
            return data
        })
        .catch(async(err) => {
            console.error(err)
            return undefined
        })
        
        if(!response){
            return cachedMyUserProfile
        }
        
        
        let userProfile = IUserProfileDataAdapter.parseListUserProfileByEmailResponse(response)
        if(!userProfile){
            console.log("Could not find a user profile with the email: " + email)
            return cachedMyUserProfile
        }else{
            this.__cacheMyUserProfileData(userProfile)
            this.__cacheMyUserProfile(userProfile)
            return userProfile
        }
    }
    

    async getAllUserProfileData(): Promise<IUserProfileData[]> {
        const myUserProfileID = await this.__getCachedMyUserProfile().then(res => (res?.id)) || "123"
        const variables: ListUserProfileDataQueryVariables = {
            frendshipFilter: {
                friendProfileID: {
                    eq: "123"
                }
            }
        }
        const response: IUserProfileData[] | undefined = await this.client.listUserProfileData(variables)
        .then(response => {
            if(response){
                let res = IUserProfileDataAdapter.parseListUserProfileDataResponse(response, myUserProfileID)
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
            const cache: IUserProfileData[] = await this.__getCachedUserProfileDataList().then(data => {return data || []})
            return cache
        }
        return response
    }


    async getUserProfile(id: string): Promise<IUserProfile | null> {
        const myUserProfileID = await this.__getCachedMyUserProfile().then(res => (res?.id)) || "123"
        const variables: GetUserProfileQueryVariables = {
            id,
            frendshipFilter: {
                friendProfileID: {
                    eq: myUserProfileID
                }
            }
        }

        const response: queries.GetUserProfileQuery | undefined = await this.client.getUserProfile(variables)
        .catch((err) => {
            console.error(err)
            return undefined
        })

        return IUserProfileDataAdapter.parseGetUserProfileResponse(response, myUserProfileID)
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
        // console.log(`AuthRepository: Request FriendShip input: \n ${JSON.stringify(input)}`)
        const variables: mutations.CreateFriendshipRequestMutationVariables = {
            input: {
                senderProfileID: input.senderProfileID,
                receiverProfileID: input.receiverProfileID,
                status: FriendshipRequestStatus.pending
            }
        }

        const response: mutations.CreateFriendshipRequestMutation | undefined = await this.client.requestFriendship(variables)
        .then((response) => {
            // console.log(`AuthRepository: CreateFriendshipRequestMutatio response: \n ${JSON.stringify(response)}`)
            return response
        })
        .catch(err => {
            console.error(err)
            result.error = err
            return undefined
        })

        return result

    }

    async acceptFriendshipRequest(input: IAcceptFriendshipRequestInput): Promise<IAcceptFriendshipRequestResult> {
        let result: IAcceptFriendshipRequestResult = {error: false, friendshipRequestID: input.friendshipRequestID}
        const repsonse = await this.client.acceptFriendship(input.friendshipRequestID)
        .then((response) => {
            // console.log(`AuthRepository: CreateFriendshipRequestMutatio response: \n ${JSON.stringify(response)}`)
            return response
        })
        .catch(err => {
            console.error(err)
            result.error = err
            return undefined
        })
        return result
    }



    private __cacheMyUserProfileData(myUserProfileData: IMyUserProfileData): void {
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

}





/**
 * UserProfileClient Adapter
 */
class IUserProfileDataAdapter {


    static parseListUserProfileByEmailResponse(response: queries.ListUserProfileByEmailQuery): IUserProfile | null {
        if(response.listUserProfiles.items){
            if(response.listUserProfiles.items.length > 0){
                const userProfileDoc = response.listUserProfiles.items[0]
                if(userProfileDoc){
                    return this.parseMyUserProfile(userProfileDoc)
                }else{
                    return null
                }
            } else {
                return null
            }
        } else {
            return null
        }
    }

    static parseListUserProfileDataResponse(response: queries.ListUserProfileDataQuery | undefined, myProfileID: string): IUserProfileData[] {
        const result: IUserProfileData[] =[] 
        if(response){
            if(response.listUserProfiles){
                response.listUserProfiles.items.forEach((userProfileData) => {
                    if(userProfileData?.city){
                        if(userProfileData.id != myProfileID){
                            let isFriend = false
                            if(userProfileData.friends){
                                const friendList = userProfileData.friends.items
                                if(friendList.length > 0){
                                    isFriend = true
                                }
                            }
                            const newItem: IUserProfileData = {
                                ...userProfileData,
                                isFriend,
                                badges: [],
                                city: userProfileData.city,
                            }
                            result.push(newItem)
                        }
                    }
                    else{
                       console.log(`Could not parse user profile data: ${JSON.stringify(userProfileData, null, 2)}`) 
                    }
                })
                return result
            }
        }
        return result
    }


    static parseMyUserProfile(userProfileDoc: UserProfile): IUserProfile {
        const friends: IUserProfileData[] = []
        userProfileDoc.friends.items.forEach((item) => {
            if(item){
                const friendProfile = item.friendProfile
                if(friendProfile.city){
                    friends.push({
                        ...friendProfile,
                        badges: [],
                        isFriend: undefined,
                        city: friendProfile.city,
                    })
                }
            }
        })
        let city: ICity = {
            id: userProfileDoc.cityID,
            name: "unknown city"
        }

        if(userProfileDoc.city){
            city = userProfileDoc.city
        }
   
        return {
            ...userProfileDoc,
            badges: [],
            friends,
            games: this.parseGameListFromPresenceList(userProfileDoc.presenceList.items),
            isFriend: undefined,
            city
        }
    }


    static parseGetUserProfileResponse(response: queries.GetUserProfileQuery | undefined, myUserProfileID: string): IUserProfile | null {
        let result: IUserProfile | null = null
        console.log(`MyUserProfileID in parseGetUserProfileResponse function: ${myUserProfileID}`)
        
        if(response?.getUserProfile){
            let city: ICity = {
                id: response.getUserProfile.cityID,
                name: "unknown city"
            }
            if(response?.getUserProfile.city){
                city = response.getUserProfile.city
            }
            let isFriend: IUserProfileData['isFriend'] = false
            const friends: IUserProfileData[] = []
            response.getUserProfile.friends.items.forEach((item) => {
                if(item){
                    const friendProfile = item.friendProfile
                    let city: ICity = {
                        id: friendProfile.cityID,
                        name: "unknown city"
                    }
                    if(friendProfile.city){
                        city = friendProfile.city
                    } 
                    friends.push({
                        id: friendProfile.id,
                        username: friendProfile.username,
                        badges: [],
                        isFriend: undefined,
                        city,
                    })
                    if(friendProfile.id == myUserProfileID){
                        isFriend = true
                    }
                }
            })
            result = {
                id: response.getUserProfile.id,
                username: response.getUserProfile.username,
                isFriend,
                friends,
                badges: [],
                games: this.parseGameListFromPresenceList(response.getUserProfile.presenceList.items),
                email: "",
                city,
            }
        }

        return result
    }

    static parseGameListFromPresenceList(presenceList: Array<PresenceWithGame|null>): IGame[] {
        const result: IGame[] = []
        presenceList.forEach((presence) => {
            if(presence && presence.game && presence.place){
                const game: IGame = {
                    friendsThere: this.parseFriendsThere(presence.game),
                    comments: [],
                    badges: [],
                    attendants: parsePresenceList(presence.game.presenceList.items),
                    place: presence.place,
                    id: presence.game.id,
                    placeID: presence.placeID,
                    startingTime: presence.game.startingDateTime,
                    endingTime: presence.game.endingDateTime,
                    city: presence.place.city,
                }
                result.push(game)
            }
        })
        return result
    }


    static parseFriendsThere(game: Game): IUserProfileData[]{
        const friendsThere: IUserProfileData[] = [] 
        game.presenceList.items.forEach((item) => {
            if(item && item.userProfile){
                if(item.userProfile.friends){
                    // Friends list is filtered in the query
                    // Here the filter is supposed to be the current user email
                    const filteredFriendList = item.userProfile.friends
                    const isFriend =  filteredFriendList.items.length > 0
                    let city: ICity = {
                        id: item.userProfile.cityID,
                        name: "unknown city"
                    }
                    if(item.userProfile.city){
                        city = item.userProfile.city
                    }
                    if(isFriend){
                        const userProfileData: IUserProfileData = {
                            id: item.userProfile.id,
                            username: item.userProfile.username,
                            badges: [],
                            isFriend: true,
                            city
                        }
                        friendsThere.push(userProfileData)
                    }
                } else {
                    console.error("Friends list is empty, could not find the game's friends there")
                }
            }
        })

        return friendsThere
    }

    static parseCreateUserProfileResponse(response: mutations.CreateUserProfileMutation | undefined): IDefineUsernameResult {
        let result: IDefineUsernameResult = {
            error: true
        }
        
        if(response){
            if(response.createUserProfile){
                result.error = false
                let city: ICity = {
                    id: response.createUserProfile.cityID,
                    name: "unknown city"
                }
                const userProfile: IUserProfile = {
                    ...response.createUserProfile,
                    games: [],
                    friends: [],
                    badges: [],
                    email: response.createUserProfile.email,
                    isFriend: undefined
                }
                result.userProfile = userProfile
            }
        } 

        return result
    }
}