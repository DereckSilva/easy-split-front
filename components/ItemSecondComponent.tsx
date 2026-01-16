import {Text, View} from "react-native";
import DragSideComponent from "@/components/DragSideComponent";
import HeaderIndexComponent from "@/components/HeaderIndexComponent";
import Ionicons from '@expo/vector-icons/Ionicons';
import React from "react";
import {useRouter} from "expo-router";
import AntDesign from '@expo/vector-icons/AntDesign';

export default function ItemSecondComponent() {
    const router = useRouter();


    return (
        <View className="flex-col p-4 gap-4">

            <HeaderIndexComponent />

            <View className="p-4 gap-4 shadow-md rounded-3xl bg-white">
                <View className="w-12 rounded-2xl bg-emerald-500 p-2">
                    <Ionicons name="chatbubbles-outline" size={26} color="white" />
                </View>
                <Text className="text-2xl font-bold">ChatBot </Text>
                <Text className="text-gray-500">Solicite informações simples para o bot e obtenha dados respectivos a todos os dados das suas despesas.</Text>
            </View>
            
            <View>
                <View className="flex-row gap-2 justify-center items-center bg-emerald-500 p-4 rounded-2xl">
                    <Text className="text-xl font-bold text-white text-center" onPress={() => { router.push("/(tabs)/register") }}>Começar Grátis</Text>
                    <AntDesign name="arrow-right" size={24} color="white" />
                </View>
            </View>
            <View>
                <View className="border-2 border-emerald-500 p-4 rounded-2xl">
                    <Text className="text-xl font-bold text-emerald-500 text-center" onPress={() => { router.push("/(tabs)/login") }}>Já tenho conta</Text>
                </View>
            </View>
        </View>
    )
}