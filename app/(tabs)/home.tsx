import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ScrollView, Text, View} from "react-native";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import ButtonComponent from "@/components/ButtonComponent";
import {userLogout} from "@/hooks/auth/authUser";
import {useRouter} from "expo-router";

const client = new QueryClient();


function Home() {
    return (
        <QueryClientProvider client={client}>
            <HomeScreen />
        </QueryClientProvider>
    )
}


function HomeScreen() {
    const router = useRouter()
    const logout = () => {
        userLogout()
        router.push('/(tabs)/login')
    }

    return (
        <SafeAreaProvider >
            <SafeAreaView className='flex-1 items-center justify-center w-auto bg-white' edges={['top']}>

                <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
                    <View className='flex gap-4 items-center justify-center w-96 bg-white'>
                        <Text>Home</Text>

                        <ButtonComponent text="Sair" click={logout} />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

export default Home