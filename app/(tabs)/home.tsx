import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ScrollView, Text, View} from "react-native";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";

const client = new QueryClient();


function Home() {
    return (
        <QueryClientProvider client={client}>
            <HomeScreen />
        </QueryClientProvider>
    )
}


function HomeScreen() {
    return (
        <SafeAreaProvider >
            <SafeAreaView className='flex-1 items-center justify-center w-auto bg-white' edges={['top']}>

                <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
                    <View className='flex gap-4 items-center justify-center w-96 bg-white'>
                        <Text>Home</Text>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

export default Home