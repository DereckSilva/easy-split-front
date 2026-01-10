
import BackComponent from '@/components/BackComponent';
import ButtonComponent from '@/components/ButtonComponent';
import LogoComponent from '@/components/LogoComponent';
import { authUserHook } from '@/hooks/auth/authUser';
import { loginSchema } from '@/types/schemaForm';
import { style } from '@/types/style';
import { UserAuthRequest } from '@/types/userTypes';
import { yupResolver } from "@hookform/resolvers/yup";
import {
  QueryClient,
  QueryClientProvider,
  useMutation,
} from '@tanstack/react-query';
import { Link } from 'expo-router';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { ScrollView, Text, TextInput, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

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

  const { mutate, isPending } = useMutation({
    mutationFn: (data: UserAuthRequest) => authUserHook(data),
    onSuccess: (data) => {
      console.log(data)
    }
  })

  if (isPending) {
    // componente de loading
  }

  const handleLogin = (data: UserAuthRequest): void => {
    mutate(data)
  }

  return (
    <SafeAreaProvider >
      <SafeAreaView className='flex-1 items-center justify-center w-auto' edges={['top']}>
      <BackComponent link={'/'}/>
        <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
          <View className='flex gap-4 items-center justify-center bg-transparent'>

            <LogoComponent />

            <Controller
              control={control}
              name='email'
              render={({field: { onChange, value }}) => (
                <TextInput
                  className={focusInput == 'email' ? style.input.replace('border-white', 'border-slate-500') : style.input}
                  placeholder='Digite o seu e-mail'
                  onChangeText={onChange}
                  value={value}
                  underlineColorAndroid="transparent"
                  testID='email'
                  keyboardType='email-address'
                  onFocus={() => setFocusInput('email')}
                  onBlur={() => setFocusInput('')}
                />
              )}
            />
            {errors.email && (
              <Text className='text-red-600 text-xl'>{errors.email.message}</Text>
            )}

            <Controller
              control={control}
              name='password'
              render={({field: { onChange, value }}) => (
                <TextInput
                  className={focusInput == 'password' ? style.input.replace('border-white', 'border-slate-500') : style.input}
                  placeholder='Digite sua senha'
                  value={value}
                  onChangeText={onChange}
                  testID='password'
                  keyboardType='default'
                  secureTextEntry
                  onFocus={() => setFocusInput('password')}
                  onBlur={() => setFocusInput('')}
                />
              )}
            />
            {errors.password && (
              <Text className='text-red-600 text-xl'>{errors.password.message}</Text>
            )}

            <ButtonComponent click={handleSubmit(handleLogin)} text='Entrar'/>


            <View className='flex flex-row gap-2'>
              <Text>Não possui conta?</Text>
              <Link href={"/(tabs)/register"}>
                <Text className='text-pink-500'>Cadastre-se</Text>
              </Link>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default Index

