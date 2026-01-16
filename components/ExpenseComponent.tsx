import {Text, View} from "react-native";
import Entypo from '@expo/vector-icons/Entypo';

export default function ExpenseComponent() {
    return (
        <View className="w-72 shadow-md rounded-3xl bg-white p-4">
            <View className="flex-row justify-between items-center">
                <Text className="text-gray-500">Saldo do mês</Text>
                <Entypo name="line-graph" size={14} color="#50c878" />
            </View>

            <View>
                <Text className="font-extrabold text-2xl mt-4">R$ 4.250,00</Text>
            </View>

            <View className="flex-row mt-2">
                <Text className="w-full bg-gray-300 rounded-full"></Text>
                <Text className="-left-full w-44 rounded-full bg-emerald-500"></Text>
            </View>

            <View className="flex-row justify-between mt-4">
                <View className="flex-col p-4 rounded-2xl bg-gray-200">
                    <Text className="text-gray-500">Receitas</Text>
                    <Text className="text-emerald-500 font-bold">+ R$ 6.500</Text>
                </View>

                <View className="flex-col p-4 rounded-2xl bg-gray-200">
                    <Text className="text-gray-500">Despesas</Text>
                    <Text className="text-red-700 font-bold">- R$ 2.250</Text>
                </View>
            </View>
        </View>
    )
}