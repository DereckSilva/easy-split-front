import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import {KeyboardAvoidingView, ScrollView, Text} from "react-native";

const queryClient = new QueryClient();

    function Notifications(){
    return (
        <QueryClientProvider client={queryClient}>
                <NotificationsScreen />
        </QueryClientProvider>
    )
}

    function NotificationsScreen() {
    return (
        <SafeAreaProvider>
            <SafeAreaView className='flex-1 items-center justify-center w-auto bg-white' edges={['top']}>
                <KeyboardAvoidingView
                    behavior={"position"}
                    enabled
                    >
                    <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', padding: 16 }}>
                        <Text>teste</Text>
                    </ScrollView>
                </KeyboardAvoidingView>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

    export default Notifications;