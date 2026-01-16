import {View} from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function DragSideComponent() {
    return (
        <View className="flex-row items-center justify-center">
            <MaterialCommunityIcons name="gesture-swipe-horizontal" size={30} color="#50c878" />
        </View>
    )
}