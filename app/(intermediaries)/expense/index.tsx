import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {KeyboardAvoidingView, ScrollView, Text, View} from "react-native";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import ButtonComponent from "@/components/ButtonComponent";
import {useRouter} from "expo-router";

const client = new QueryClient();

function Expense() {
    return (
        <QueryClientProvider client={client}>
            <ExpenseTab />
        </QueryClientProvider>
    )
}


function ExpenseTab() {

    const router = useRouter();

    const logout = () => {
        router.push("/intermediary");
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
                            <Text>Despesas Intermediario</Text>
                            <ButtonComponent text="Sair" click={logout} />
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

export default Expense