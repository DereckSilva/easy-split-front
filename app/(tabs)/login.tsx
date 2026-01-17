
import BackComponent from '@/components/BackComponent';
import ButtonComponent from '@/components/ButtonComponent';
import {authUserHook, userErrorAuth} from '@/hooks/auth/authUser';
import { loginSchema } from '@/types/schemaForm';
import { style } from '@/types/style';
import { UserAuthRequest } from '@/types/userTypes';
import { yupResolver } from "@hookform/resolvers/yup";
import {
  QueryClient,
  QueryClientProvider,
  useMutation,
} from '@tanstack/react-query';
import {Link, useRouter} from 'expo-router';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { ScrollView, Text, TextInput, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import LoadingComponent from "@/components/LoadingComponent";

const queryClient = new QueryClient();

function Index() {
  return (
    <QueryClientProvider client={queryClient}>
      <IndexScreen />
    </QueryClientProvider>
  )
}

function IndexScreen() {
  const { control, handleSubmit, formState:{ errors } } = useForm({resolver: yupResolver(loginSchema)})
  const [focusInput, setFocusInput] = useState('')
  const [messageError, setMessageError] = useState<string|null>('')
  const router = useRouter();
  const errorAuth = userErrorAuth();

  const { mutate, isPending } = useMutation({
    mutationFn: (data: UserAuthRequest) => authUserHook(data),
    onSuccess: (data) => {
      if (!data) {
        setMessageError(errorAuth)
        return false
      }

      router.push('/(tabs)/home')
    }
  })

  if (isPending) {
    return <LoadingComponent text="Realizando validações, aguarde um instante"/>
  }

  const handleLogin = (data: UserAuthRequest): void => {
    setMessageError(null)
    mutate(data)
  }

  return (
    <SafeAreaProvider >
      <SafeAreaView className='flex-1 items-center justify-center w-auto bg-white' edges={['top']}>

        <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
          <View className='flex gap-4 items-center justify-center w-96 bg-white'>
            <BackComponent link={'/'}/>

            <View className="justify-center items-center gap-2">
              <View className="w-20 rounded-2xl bg-emerald-500 p-4">
                <MaterialCommunityIcons name="wallet-bifold-outline" size={32} color="white" />
              </View>
              <Text className="text-3xl">Bem-vindo de volta</Text>
              <Text className="text-gray-500">Entre na sua conta para continuar</Text>
            </View>

            <View className="flex-row w-full pl-4">
              <Text className="text-gray-500">Email</Text>
            </View>
            <Controller
              control={control}
              name='email'
              render={({field: { onChange, value }}) => (
                <TextInput
                  className={focusInput == 'email' ? style.input.replace('border-white', 'border-emerald-500') : style.input}
                  placeholder='Digite o seu e-mail'
                  onChangeText={onChange}
                  value={value}
                  underlineColorAndroid="transparent"
                  testID='email'
                  keyboardType='email-address'
                  onFocus={() => {
                    setFocusInput('email')
                    setMessageError(null)
                  }}
                  onBlur={() => {
                    setFocusInput('')
                    setMessageError(null)
                  }}
                />
              )}
            />
            {errors.email && (
              <Text className='text-red-600 text-xl'>{errors.email.message}</Text>
            )}

            <View className="flex-row w-full pl-4 justify-between">
              <Text className="text-gray-500">Senha</Text>
              <Link href={"/(tabs)/recoverPassword"}>
                <Text className="text-emerald-500">Esqueceu Senha?</Text>
              </Link>
            </View>
            <Controller
              control={control}
              name='password'
              render={({field: { onChange, value }}) => (
                <TextInput
                  className={focusInput == 'password' ? style.input.replace('border-white', 'border-emerald-500') : style.input}
                  placeholder='Digite sua senha'
                  value={value}
                  onChangeText={onChange}
                  testID='password'
                  keyboardType='default'
                  secureTextEntry
                  onFocus={() => {
                    setFocusInput('password')
                    setMessageError(null)
                  }}
                  onBlur={() => {
                    setFocusInput('')
                    setMessageError(null)
                  }}
                />
              )}
            />
            {errors.password && (
              <Text className='text-red-600 text-xl'>{errors.password.message}</Text>
            )}

            {messageError && (
                <Text className='text-red-600 text-xl'>{messageError}</Text>
            )}

            <ButtonComponent click={handleSubmit(handleLogin)} text='Entrar'/>


            <View className='flex flex-row gap-2'>
              <Text className="text-gray-500">Não possui conta?</Text>
              <Link href={"/(tabs)/register"}>
                <Text className='text-emerald-500'>Cadastre-se</Text>
              </Link>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default Index

