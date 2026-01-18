import {KeyboardAvoidingView, ScrollView, Text, View} from "react-native";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import BackComponent from "@/components/BackComponent";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const client = new QueryClient();

function RecoverPassword() {
    return (
        <QueryClientProvider client={client}>
            <RecoverPasswordScreen />
        </QueryClientProvider>
    )
}
function RecoverPasswordScreen() {
    return (
        <SafeAreaProvider>
            <SafeAreaView className='flex-1 items-center justify-center w-auto bg-white h-80 p-4'>
                <KeyboardAvoidingView
                    behavior="position"
                    enabled
                >
                    <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', padding: 16 }}>

                        <View className='flex gap-4 items-center justify-center w-96 bg-white'>

                            <BackComponent link={'/login'}/>


                            <Text>Recuperar senha</Text>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

export default RecoverPassword