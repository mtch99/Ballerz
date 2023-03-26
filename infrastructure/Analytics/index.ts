import AsyncStorage from "@react-native-async-storage/async-storage";
import IAuthAnalyticsRepository  from "../../domain/repositories/Analytics/Auth";



export default class AuthAnalyticsRepository implements IAuthAnalyticsRepository {

    async getLastLaunch(): Promise<Date>{
        let result: Date
        const lastLaunchItem = await AsyncStorage.getItem("lastLaunch");
        if(lastLaunchItem){
            result = new Date(lastLaunchItem)
        } else{
            result = await this.setLastLaunchToNow()
        }

        return result;
    }

    async getFirstLaunch(): Promise<Date>{
        const item: string = await AsyncStorage.getItem("firstLaunch") as string;
        return new Date(item)
    }

    async setLastLaunchToNow(): Promise<Date>{
        const now: Date = new Date()
        AsyncStorage.setItem("lastLaunch", now.toISOString())
        const firstLaunch = await AsyncStorage.getItem("firstLaunch")
        if(!firstLaunch){
            this.__setFirstLaunch(now)
        }
        
        return now
    }

    __setFirstLaunch(date: Date): void {
        AsyncStorage.setItem("firstLaunch", date.toISOString())
    }
}