import {ActivityIndicator, Text, View} from "react-native";
import React from "react";

interface LoadingComponentProps {
    text:string
}

const LoadingComponent: React.FC<LoadingComponentProps> = ({text}) =>  {
    return (
        <View className="flex-1 justify-center items-center">
            <ActivityIndicator size={60} color="#50c878" />
            <Text className="text-gray-500">{text}</Text>
        </View>
    )
}

export default LoadingComponent;