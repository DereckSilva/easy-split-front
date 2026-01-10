import { Href, Link } from "expo-router";
import React from "react";
import { Image, View } from "react-native";

interface BackComponentProps {
  link: Href
}

const BackComponent: React.FC<BackComponentProps> = ({link}) => {
  return (
    <View className="-left-48 mt-4">
      <Link href={link}>
        <Image
          className="rotate-180 h-4 w-4"
          source={require('../assets/images/seta-direita.png')}
        />
      </Link>
    </View>
  ) 
}

export default BackComponent;