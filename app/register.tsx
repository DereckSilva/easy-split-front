import BackComponent from '@/components/BackComponent';
import ButtonComponent from '@/components/ButtonComponent';
import {fieldsErrorRegister, registerUserHook} from '@/hooks/user/userHook';
import { userCreateSchema } from '@/types/schemaForm';
import { style } from '@/types/style';
import { UserCreateRequest } from '@/types/userTypes';
import { yupResolver } from '@hookform/resolvers/yup';
import DateTimePicker from '@react-native-community/datetimepicker';
import { QueryClient, QueryClientProvider, useMutation } from '@tanstack/react-query';
import { Link } from 'expo-router';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import {KeyboardAvoidingView, ScrollView, Text, TextInput, TouchableOpacity, View} from 'react-native';
import CountryPicker, {
  Country,
  CountryCode
} from "react-native-country-picker-modal";
import MaskInput, { Masks } from "react-native-mask-input";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Feather from '@expo/vector-icons/Feather';
import LoadingComponent from "@/components/LoadingComponent";

const client = new QueryClient();

function Register() {
  return (
    <QueryClientProvider client={client}>
      <RegisterScreen />
    </QueryClientProvider>
  )
}

function RegisterScreen() {
  const { control, handleSubmit, formState:{ errors }} = useForm({resolver: yupResolver(userCreateSchema)})
  const [focusInput, setFocusInput] = useState('');
  const [countryCode, setCountryCode] = useState<CountryCode>("BR");
  const [callingCode, setCallingCode] = useState("55");
  const [showPicker, setShowPicker] = useState(false);
  const [messageError, setMessageError] = useState<string|null>('')
    const errorRegisterMessage = fieldsErrorRegister()

  const { mutate, isPending } = useMutation({
    mutationFn: (data: UserCreateRequest) => registerUserHook(data),
    onSuccess: (data) => {
      if (!data) {
          setMessageError(errorRegisterMessage)
      }
    }
  })

  if (isPending) {
      return <LoadingComponent text="Realizando a criação do usuáro, aguarde um instante" />
  }

  const onSelect = (country: Country) => {
    setCountryCode(country.cca2);
    setCallingCode(country.callingCode[0]);
  };

  const handleRegister = (data: UserCreateRequest): void => {
    mutate(data)
  }

  const firstError = errors.name?.message || errors.email?.message || errors.password?.message || errors.password_confirmation?.message || errors.birthdate?.message || errors.phone_number?.message 

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


                    <View className="justify-center items-center gap-2">
                        <View className="w-18 rounded-2xl bg-emerald-500 p-4">
                            <MaterialCommunityIcons name="wallet-bifold-outline" size={32} color="white" />
                        </View>
                        <Text className="text-3xl">Crie sua conta</Text>
                        <Text className="text-gray-500">Comece a controlar suas finanças hoje</Text>

                    </View>

                    <View className="flex mt-4 gap-4">

                        <View className="flex-row gap-2 justify-items-start items-center">
                            <Feather name="check-circle" size={24} color="#50c878" />
                            <Text className="text-gray-500">Relatórios e gráficos detalhados</Text>
                        </View>

                        <View className="flex-row gap-2 justify-items-start items-center">
                            <Feather name="check-circle" size={24} color="#50c878" />
                            <Text className="text-gray-500">Controle total das suas finanças</Text>
                        </View>

                        <View className="flex-row gap-2 justify-items-start items-center">
                            <Feather name="check-circle" size={24} color="#50c878" />
                            <Text className="text-gray-500">100% gratuito, sem taxas escondidas</Text>
                        </View>

                    </View>


                    <View className="flex-row text-left w-full pl-4">
                        <Text className="text-gray-500">Nome</Text>
                    </View>
                  <Controller
                    control={control}
                    name='name'
                    render={({field: { onChange, value }}) => (
                      <TextInput
                        className={focusInput == 'name' ? style.input.replace('border-gray-600', 'border-emerald-500') : style.input}
                        placeholder='Digite o seu nome completo'
                        onChangeText={onChange}
                        value={value}
                        underlineColorAndroid="transparent"
                        testID='name'
                        keyboardType='default'
                        onFocus={() => {
                            setFocusInput('name')
                            setMessageError(null)
                        }}
                        onBlur={() => {
                            setFocusInput('')
                            setMessageError(null)
                        }}
                      />
                    )}
                  />

                    <View className="flex-row text-left w-full pl-4">
                        <Text className="text-gray-500">E-mail</Text>
                    </View>
                  <Controller
                    control={control}
                    name='email'
                    render={({field: { onChange, value }}) => (
                      <TextInput
                        className={focusInput == 'email' ? style.input.replace('border-gray-600', 'border-emerald-500') : style.input}
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

                    <View className="flex-row text-left w-full pl-4">
                        <Text className="text-gray-500">Senha</Text>
                    </View>
                  <Controller
                    control={control}
                    name='password'
                    render={({field: { onChange, value }}) => (
                      <TextInput
                        className={focusInput == 'password' ? style.input.replace('border-gray-600', 'border-emerald-500') : style.input}
                        placeholder='Digite a sua senha'
                        onChangeText={onChange}
                        value={value}
                        underlineColorAndroid="transparent"
                        secureTextEntry
                        testID='password'
                        keyboardType='default'
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

                    <View className="flex-row text-left w-full pl-4">
                        <Text className="text-gray-500">Confirmação de Senha</Text>
                    </View>
                  <Controller
                    control={control}
                    name='password_confirmation'
                    render={({field: { onChange, value }}) => (
                      <TextInput
                        className={focusInput == 'password_confirmation' ? style.input.replace('border-gray-600', 'border-emerald-500') : style.input}
                        placeholder='Confirme sua senha'
                        onChangeText={onChange}
                        value={value}
                        underlineColorAndroid="transparent"
                        testID='password_confirmation'
                        secureTextEntry
                        keyboardType='default'
                        onFocus={() => {
                            setFocusInput('password_confirmation')
                            setMessageError(null)
                        }}
                        onBlur={() => {
                            setFocusInput('')
                            setMessageError(null)
                        }}
                      />
                    )}
                  />

                    <View className="flex-row text-left w-full pl-4">
                        <Text className="text-gray-500">Data de Nascimento</Text>
                    </View>
                  <Controller
                    control={control}
                    name="birthdate"
                    render={({ field: { onChange, value } }) => (
                      <>
                        <TouchableOpacity className="w-full" onPress={() => setShowPicker(true)}>
                          <Text className={focusInput == 'birthdate' ? style.input.replace('border-gray-600', 'border-emerald-500 text-center') : style.input + ' text-center text-gray-500'}>
                            {value
                              ? value.toLocaleDateString()
                              : 'Selecione a data'}
                          </Text>
                        </TouchableOpacity>

                        {showPicker && (
                          <DateTimePicker
                            value={value ?? new Date()}
                            mode="date"
                            display="default"
                            onChange={(event, selectedDate) => {
                              setShowPicker(false)
                                setMessageError(null)
                              if (selectedDate) {
                                onChange(selectedDate)
                              }
                            }}
                          />
                        )}
                      </>
                    )}
                  />

                    <View className="flex-row text-left w-full pl-4">
                        <Text className="text-gray-500">Telefone</Text>
                    </View>
                  <Controller
                      control={control}
                      name="phone_number"
                      defaultValue=""
                      render={({ field: { onChange, value } }) => (
                        <View className={focusInput == 'phone_number' ? style.input.replace('border-gray-600', 'border-emerald-500 flex-row items-center border rounded-lg px-2.5 mb-3') : style.input + ' flex-row items-center border rounded-lg px-2.5 mb-3'}>
                          <View className='flex-row items-center mr-2'>
                            <CountryPicker
                              countryCode={countryCode}
                              withFlag
                              withCallingCode
                              withFilter
                              onSelect={onSelect}
                            />
                            <Text className='ml-1 text-base'>+{callingCode}</Text>
                          </View>

                          <MaskInput
                            value={value}
                            onChangeText={(masked, unmasked) => {
                              onChange(unmasked);
                            }}
                            mask={Masks.BRL_PHONE}
                            keyboardType="numeric"
                            placeholder="(DDD) XXXXX-XXXX"
                            className='flex text-base py-4'
                            onFocus={() => {
                                setFocusInput('phone_number')
                                setMessageError(null)
                            }}
                            onBlur={() => {
                                setFocusInput('')
                                setMessageError(null)
                            }}
                          />
                        </View>
                      )}
                    />




                  { firstError && (
                    <Text className='text-red-600 text-xl text-center'>{firstError}</Text>
                  ) }

                    { messageError && (
                        <Text className='text-red-600 text-xl text-center'>{messageError}</Text>
                    ) }
                  <ButtonComponent click={handleSubmit(handleRegister)} text='Cadastrar' />

                  <View className='flex flex-row gap-2'>
                    <Text className="text-gray-500">Já possui conta?</Text>
                    <Link href={"/login"}>
                      <Text className='text-emerald-500'>Entrar</Text>
                    </Link>
                  </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default Register
