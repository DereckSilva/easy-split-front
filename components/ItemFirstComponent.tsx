import {Text, View} from "react-native";
import DragSideComponent from "@/components/DragSideComponent";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import HeaderIndexComponent from "@/components/HeaderIndexComponent";
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function ItemFirstComponent() {
    return (
        <View className="flex-col p-4 gap-4">

            <HeaderIndexComponent />

            <View className="p-4 gap-4 shadow-md rounded-3xl bg-white">
                <View className="w-12 rounded-2xl bg-emerald-500 p-2">
                    <MaterialCommunityIcons name="wallet-bifold-outline" size={26} color="white" />
                </View>
                <Text className="text-2xl font-bold">Controle de Gastos </Text>
                <Text className="text-gray-500">Registre e categorize todas as suas despesas de forma rápida e intuitiva.</Text>
            </View>

            <View className="p-4 gap-4 shadow-md rounded-3xl bg-white">
                <View className="w-12 rounded-2xl bg-emerald-500 p-2">
                    <Ionicons name="notifications-outline" size={26} color="white" />
                </View>
                <Text className="text-2xl font-bold">Notificações </Text>
                <Text className="text-gray-500">Receba as notificações pertinemtes a pagamentos e criações de despesas dos intermediários.</Text>
            </View>

            <View className="p-4 gap-4 shadow-md rounded-3xl bg-white">
                <View className="w-12 rounded-2xl bg-emerald-500 p-2">
                    <AntDesign name="cloud-upload" size={26} color="white" />
                </View>
                <Text className="text-2xl font-bold">Upload </Text>
                <Text className="text-gray-500">Realize o upload das despesas pagas para comprovar os pagamentos realizados.</Text>
            </View>

            <View className="top-14">
                <DragSideComponent />
            </View>
        </View>
    );
}