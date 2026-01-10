import LogoComponent from "@/components/LogoComponent";
import { Link } from "expo-router";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function IndexScreen() {
  return (
     <SafeAreaProvider >
      <SafeAreaView className='flex-1 items-center justify-center bg-white' edges={['top']}>
        <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
          <View>
            <LogoComponent />
            <Text className="text-pink-500 text-4xl font-bold">Index</Text>
            <Link href={'/(tabs)/login'}>Login</Link>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}