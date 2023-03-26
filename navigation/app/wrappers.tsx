import { AppStackScreenProps } from "./types"
import { CreateProfileStack } from "../createProfile"
import { AppTab } from "./appTab"


export function CreateProfileScreenWrapper(props: AppStackScreenProps<'CreateProfile'>){
    return(
        <CreateProfileStack/>
    )
}




export function AppTabWrapper(){
    return <AppTab/>
}