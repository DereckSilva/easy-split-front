import {QueryClient, QueryClientProvider, useQuery} from "@tanstack/react-query";
import {KeyboardAvoidingView, ScrollView, Text, View} from "react-native";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import ButtonComponent from "@/components/ButtonComponent";
import {userLogout, userToken} from "@/hooks/auth/authUser";
import {useRouter} from "expo-router";
import {findExpense} from "@/hooks/expense/expenseHook";
import LoadingComponent from "@/components/LoadingComponent";

const client = new QueryClient();


function Home() {
    return (
        <QueryClientProvider client={client}>
            <HomeTab />
        </QueryClientProvider>
    )
}


function HomeTab() {
    const router = useRouter()
    const token = userToken()

    const { isLoading, data, error } = useQuery({
        queryKey: ['expenses', token],
        queryFn: () => findExpense(token)
    })

    if (isLoading) {
        return <LoadingComponent text="Buscando despesas, aguarde um momento" />
    }

    if (error) {
        return error.message
    }


    const logout = () => {
        userLogout()
        router.push('/login')
    }

    return (
        <SafeAreaProvider >
            <SafeAreaView className='flex-1 items-center justify-center w-auto bg-white' edges={['top']}>
                <KeyboardAvoidingView
                    behavior="position"
                    enabled
                >
                    <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', padding: 16 }}>
                        <View className='flex gap-4 items-center justify-center w-96 bg-white'>
                            <Text>Home</Text>

                            {data?.map((item) => (
                                <Text> {item.name }</Text>
                            ))}

                            <ButtonComponent text="Sair" click={logout} />
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

export default Home