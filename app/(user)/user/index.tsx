import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {KeyboardAvoidingView, ScrollView, Text, View} from "react-native";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";

const client = new QueryClient();


function User() {
    return (
        <QueryClientProvider client={client}>
            <UserTab />
        </QueryClientProvider>
    )
}


function UserTab() {

    return (
        <SafeAreaProvider >
            <SafeAreaView className='flex-1 items-center justify-center w-auto bg-white' edges={['top']}>
                <KeyboardAvoidingView
                    behavior="position"
                    enabled
                >
                    <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', padding: 16 }}>
                        <View className='flex gap-4 items-center justify-center w-96 bg-white'>
                            <Text>User</Text>

                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

export default User