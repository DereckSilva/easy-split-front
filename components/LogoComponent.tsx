import { Image, View } from "react-native";

export default function LogoComponent() {
  return (
    <View>
      <Image 
        className='w-44 h-44'
        source={require("../assets/images/logo-easy.png")}/>
    </View>
  )
}