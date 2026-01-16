import {Text, View} from "react-native";
import DragSideComponent from "@/components/DragSideComponent";
import Entypo from '@expo/vector-icons/Entypo';
import Feather from '@expo/vector-icons/Feather';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Ionicons } from '@expo/vector-icons';



import ExpenseComponent from "@/components/ExpenseComponent";

export default function ItemIndexComponent() {
    return (
        <View className="h-screen p-4 gap-8">
            <View className="flex-row border-2 border-gray-300 rounded-3xl p-2 mt-32 w-72 bg-gray-200">
                <Entypo name="dot-single" size={24} color="green" />
                <Text className="text-gray-600">Controle total das suas finanças</Text>
            </View>
            <View>
                <Text className="text-black font-extrabold text-5xl leading-tight -mb-4">Organize suas
                    <Text className="text-emerald-500 leading-tight -mb-2"> despesas com inteligência</Text>
                </Text>
            </View>
            <View>
                <Text className="text-gray-600 text-justify">
                    Acompanhe seus gastos, defina suas metas de economia e tome decisões
                    financeiras mais inteligentes. Tudo em um único lugar, simples e seguro.
                </Text>
            </View>

            <View className="flex-row gap-4">
                <View className="flex-row gap-2 justify-center items-center">
                    <Feather name="shield" size={14} color="#50c878" />
                    <Text className="text-gray-600">100% Seguro</Text>
                </View>

                <View className="flex-row gap-2 justify-center items-center">
                    <MaterialCommunityIcons name="piggy-bank-outline" size={14} color="#50c878" />
                    <Text>Grátis para sempre</Text>
                </View>
            </View>

            <View className="flex-row justify-center items-center">
                <ExpenseComponent />
            </View>

            <View className="top-20">
                <DragSideComponent />
            </View>
        </View>
    )
}