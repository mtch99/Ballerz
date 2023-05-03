import { AppStackScreenProps } from "./types"
import { CreateProfileStack } from "../createProfile"
import { AppTab } from "./appTab"


export function CreateProfileStackWrapper(props: AppStackScreenProps<'CreateProfile'>){
    return(
        <CreateProfileStack/>
    )
}




export function AppTabWrapper(){
    return <AppTab/>
}