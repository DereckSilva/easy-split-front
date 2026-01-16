import React from "react";
import { Text, View } from "react-native";

interface ButtonComponentProps {
  text: string,
  click: () => void
}


const ButtonComponent:React.FC<ButtonComponentProps> = ({text, click}) => {
  return (
    <View className="bg-emerald-500 w-full p-4 rounded-2xl">
      <Text className="text-xl font-bold text-white text-center" onPress={click}>{text}</Text>
    </View>
  )
}

export default ButtonComponent