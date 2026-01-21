import {KeyboardAvoidingView, ScrollView, Text, View} from "react-native";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const client = new QueryClient();

function Notifications() {
    return (
        <QueryClientProvider client={client}>
            <NotificationsScreen />
        </QueryClientProvider>
    )
}
function NotificationsScreen() {
    return (
        <SafeAreaProvider>
            <SafeAreaView className='flex-1 items-center justify-center w-auto bg-white h-80 p-4'>
                <KeyboardAvoidingView
                    behavior="position"
                    enabled
                >
                    <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', padding: 16 }}>

                        <View className='flex gap-4 items-center justify-center w-96 bg-white'>

                            <Text>Notificações</Text>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

export default Notifications