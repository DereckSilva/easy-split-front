import { Href, Link } from "expo-router";
import React from "react";
import {Image, Text, View} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

interface BackComponentProps {
  link: Href
}

const BackComponent: React.FC<BackComponentProps> = ({link}) => {
  return (

      <Link href={link}>
        <View className="flex-row w-full text-left items-center gap-2">
              <AntDesign name="arrow-left" size={24} color="gray" />
              <Text className="text-gray-500">Voltar ao Início</Text>
        </View>
    </Link>
  )
}

export default BackComponent;