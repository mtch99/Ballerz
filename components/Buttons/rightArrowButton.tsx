import { TouchableOpacity } from "react-native"
import AntDesign from "react-native-vector-icons/AntDesign"
import { globalStyles } from "../../views/styles"

export interface IRightArrowButtonProps{
    onPress: () => void
    size?: number
  }
  
export function RightArrowButton(props: IRightArrowButtonProps){
  const size = props.size || 24
  return(
    <TouchableOpacity
    >
      <AntDesign name="arrowright" size={size} color={globalStyles.global.logoColor} />
    </TouchableOpacity>
  )
}